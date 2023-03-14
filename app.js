//INITIALIZING OUR SERVERs
const express = require('express')
const app = express()
const FS = require('fs')
const PATH = require('path')
const bodyparser = require('body-parser') // FOR CAPTURING OF INPUT FROM FRONT END
const CORS = require('cors')
const BCRYPT = require('bcrypt') // FOR DECRYPTING OF PASSWORD
const JOI = require('joi') // FOR VALIDATION OF LOGIN || FORMS
const MD5 = require('md5')
const session = require('express-session')
const UUID = require('uuid')
const MULTER = require('multer')
const PORT = process.env.PORT || 2000 // FOR HOSTING OF SERVER
const authenticated = require('speakeasy')
const MAILER = require('nodemailer')
const TWILIO = require('twilio')
const dotenv = require('dotenv')
dotenv.config()


/*********************** SERVING STATIC FILES ******************/
app.use(express.static(PATH.join(__dirname, './Public')))
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())
            
/****************   MIDDLE-WARES ************************/

const expDate = 1000 * 60 * 60 * 24 * 7 //It will Last for Days
app.use(session({
    name: "Lx-Purchase-Session",
    secret: UUID.v4(),
    resave: false,
    saveUninitialized: process.env.NODE_ENV === "production",
    cookie: {
        httpOnly: process.env.NODE_ENV === "production" ? false : true,
        maxAge: expDate, 
        secure: false,
        sameSite: true //'strict'
    }
}))

// ################ IMPORTED MODULES #################
// ################ IMPORTED MODULES #################
const MYSQL = require('./MODULES/Conn')

const paystackApi = require('./MODULES/Paystack')
const { initiatePayment, verifyPayment } = require('./MODULES/Paystack')

// **************** CONSTUME MIDDLE-WARES ****************//
// **************** CONSTUME MIDDLE-WARES ****************//
let ToCheckOut = ''
const CHECKOUT = (req, res, next) => {
    const { CUSTOMERIN, PAIDFEE } = req.session
    console.log(CUSTOMERIN,PAIDFEE)
    if(!CUSTOMERIN){
        res.redirect('/Login-Register')
        ToCheckOut = '/Check-Out'
    }else{

        next()
    }
}

const LOGIN = (req, res, next) => {
    if(req.session.CUSTOMERIN){
        res.redirect('/')
    }else{
        next()
    }
}

app.get('/logout', (req, res) =>{
    // destroy session && Clear cookies
    req.session.destroy((err) => {
        if(err){
            return res.redirect('/dasboard')
        }else{
            console.log('User Logged Out Successfully')
            res.clearCookie("Lx-Purchase-Session")
            return res.redirect('/')
        }
    })
})

/**************** HANDLING OF CATEGORY PAGE VIEW AND BUTTONS **********************/
const router = ['Laptops','Cameras','Smart-Tv','Smart-Phones','Home-Appliance']
const products = ['Laptops','cameras','television','phones','homeapps']
for (let i = 0; i < router.length; i++) {
    app.get(`/${router[i]}`, (req,res) =>{
       res.sendFile(PATH.join(__dirname,'./Public/category.html'))
    })

    app.post(`/${router[i]}`, (req,res) =>{
        const query = `SELECT * FROM ${products[i]}`
        MYSQL.query(query, (err, CurrentPro) =>{
            res.json({PRD:CurrentPro,ROUTE:router[i]})
        })
    })
}

app.get('/Account-Dashboard', (req,res) => {
    res.sendFile(PATH.join(__dirname,'./Public/index.html'))
})

app.get('/About-Lxpurchase', (req,res) => {
    res.sendFile(PATH.join(__dirname,'./Public/about-us.html'))
})

app.get('/Contact-Us', (req,res) => {
    res.sendFile(PATH.join(__dirname,'./Public/contact.html'))
})

app.get('/Whitelist', (req,res) => {
    res.sendFile(PATH.join(__dirname,'./Public/wishlist.html'))
})

/**************   Shopping Cart Functionality     ****************/
app.get('/Shopping-Cart', (req,res) => { //SHOPPING CART GET
    res.sendFile(PATH.join(__dirname,'./Public/shopping-cart.html'))
})

/**************   CHECK OUT FUNCTIONALITY     ****************/
/**************   CHECK OUT FUNCTIONALITY     ****************/
// const https = require('https')
app.get('/verifyingPayment', async (req, res) => {
    const { CUSTOMERIN } = req.session
    const reference = req.query.reference;

    try {
        const response = await paystackApi.verifyPayment(reference);
        if (response.data.status === 'success') {
            const Purchased = response.data.metadata
            req.session.paymentMade = 'paymentMade => True'
            
            let GnI = Math.floor(new Date().getTime()/365)
            for (let m = 0; m < Purchased.length; m++) {
                for (let i = 0; i < products.length; i++) {
                    const query = `SELECT * FROM ${products[i]}`
                    MYSQL.query(query, (err, StockUp) =>{
                        for (let n = 0; n < StockUp.length; n++) {
                            
                            if(StockUp[n].Id == Purchased[m].Id){
                                GnI++
                                const query1 = `UPDATE ${products[i]} SET Qty=?, QtySold=? WHERE Id=?`
                                MYSQL.query(query1, [StockUp[n].Qty-Number(Purchased[m].Qty), StockUp[n].QtySold+Number(Purchased[m].Qty), Purchased[m].Id], (err, result) =>{})
                                const query = `INSERT INTO orders (orderid, customerid, item, qty, date) VALUES(?,?,?,?,?)`
                                MYSQL.query(query, [`ORD${GnI}`, CUSTOMERIN, Purchased[m].Dscp, Number(Purchased[m].Qty), new Date().getTime()],(err, Laps) =>{})
                            }

                        }
                    })
                }
            }
            res.redirect('/Check-out')

        } else {
            console.log('Payment failed')
        }
    } catch (error) {
        console.log(error.message);
    }
    req.session.PAIDFEE = 'True' 

})

app.get('/Check-Out', CHECKOUT, (req,res) => { //CHECK OUT GET
    res.sendFile(PATH.join(__dirname,'./Public/checkout.html'))
})

app.post('/Check-Out', async (req,res) => { //CHECK OUT POST
    const {userEmail, paymentMade } = req.session
    const {Purchased} = req.body

    let totalPrc = 0

    if(Purchased){
        Purchased.forEach(eachPrc => {  totalPrc += Number(eachPrc.Prc * eachPrc.Qty) })

        try { //Initializing of payment gate way for customer

            const response = await paystackApi.initiatePayment(totalPrc, userEmail, 'http://localhost:2000/verifyingPayment', Purchased)
            res.json({payLink:response.data.authorization_url}) //Unique URL for payment
            
        } catch (error) { console.log(error) }

    }else{
        res.json({paymentMade:paymentMade})
    }
})



/**************   HOME PAGE OR LANDING PAGE     ****************/
/**************   HOME PAGE OR LANDING PAGE     ****************/
app.get('/', (req,res) => {
    res.sendFile(PATH.join(__dirname,'./Public/index.html'))
})
app.post('/', (req,res) => {
    
    const query = "SELECT * FROM `laptops`"
    MYSQL.query(query, (err, Laps) =>{
        const query = "SELECT * FROM `television`"
        MYSQL.query(query, (err, Tele) =>{
            const query = "SELECT * FROM `phones`"
            MYSQL.query(query, (err, Phone) =>{ 
                const query = "SELECT * FROM `cameras`"
                MYSQL.query(query, (err, Camera) =>{
                    const query = "SELECT * FROM `homeapps`"
                    MYSQL.query(query, (err, HomeApply) =>{
                        res.json({Laps:Laps,Tele:Tele,Phones:Phone,Cam:Camera,HomeApps:HomeApply})
                    })
                })
            })
        })
    })
})



/**************   ADMINISTRATOR STOCK CREATION PAGE     ****************/
/**************   ADMINISTRATOR STOCK CREATION PAGE    ****************/
app.get('/Admin-Select-Stock-Category', (req,res) => {
    res.sendFile(PATH.join(__dirname,'./Public/stockcategory.html'))
})
app.post('/Admin-Select-Stock-Category', (req,res) => {
    const Category = req.body.selectcategory
    if(Category){
        console.log(Category)
        req.session.StockCreate = Category
        const {StockCreate} = req.session
        res.redirect(`/Admin-Create-Stock-In-${StockCreate}`)

        app.get(`/Admin-Create-Stock-In-${StockCreate}`, (req,res) => {
            res.sendFile(PATH.join(__dirname,'./Public/creatstock.html'))
        })
    
        app.post(`/Admin-Create-Stock-In-${StockCreate}`, (req,res) => {
            
            const Storage = MULTER.diskStorage({
                destination: `./Public/products/${StockCreate}`,
                filename(req, file, cb){
                    cb(null, file.originalname)
                }
            })
        
            const StockUpload = MULTER({
                storage: Storage
            }).single('Stock_Img')
        
            StockUpload(req,res, (err) => {
                const ItemDscp = req.body.Descp
                const ItemCate = req.body.Category
                const ItemQty = Number(req.body.Qty)
                const ItemPtag = Number(req.body.Prctag)
        
                // console.log(req.file.originalname)
                const ID = ItemCate.slice(0,3).toUpperCase()
                const query = `INSERT INTO ${ItemCate} (Id, Img, Dscp, Prc, Qty) VALUES(?,?,?,?,?)`
                MYSQL.query(query, [`${ID}${Math.floor(Math.random()*658)}`, `../products/${StockCreate}/${req.file.originalname}`, ItemDscp, ItemPtag, ItemQty],(err, Laps) =>{
                   res.redirect(`/Admin-Create-Stock-In-${StockCreate}`) 
                })
            })
    
        })
    }

})

app.get('/Admin-Products-Review', (req,res) => {
    res.sendFile(PATH.join(__dirname,'./Public/admin-dash.html'))
})

app.post('/Admin-Products-Review', (req,res) => {
    const UpdQty = req.body.UpQty
    const {GetProduct} = req.body
    // const GetProduct = req.body.Navgate
    const {KEY} = req.session
    var Key = 'Laptops'
    if(KEY !== undefined){
        Key = KEY
    }
    if(UpdQty){
        const Make = JSON.parse(`${UpdQty}`)
        for (let i = 0; i < products.length; i++) {
            const query = `UPDATE ${products[i]} SET Qty=? WHERE Id=?`
            MYSQL.query(query, [Make.Qty, Make.ID], (err, result) =>{})
        }
        res.redirect('/Admin-Products-Review')
    }else if(GetProduct){
        req.session.KEY = GetProduct
        //For Asyncronous Serving Of Data
        const query = `SELECT * FROM ${Key}`
        MYSQL.query(query, (err, Stocks) =>{res.json({serve:Stocks})})
    }else{
        const query = `SELECT * FROM ${Key}`
        MYSQL.query(query, (err, Stocks) =>{
            res.json({serve:Stocks})
        })
    }
})



/**************   LOGIN REGISTRATION PAGE     ****************/
/**************   LOGIN REGISTRATION PAGE    ****************/
app.get('/Login-Register', LOGIN, (req,res) => {
    res.sendFile(PATH.join(__dirname,'./Public/login-register.html'))
})
app.post('/Login-Register', LOGIN, (req,res) => {
    if(ToCheckOut == ''){
        ToCheckOut = '/'
    }

    const {LogEmail} = req.body
    const {LogPwd} = req.body

    const {RegFName} = req.body
    const {RegLName} = req.body
    const {RegEmail} = req.body
    const {RegPwd} = req.body
    const {RegCPwd} = req.body

    if(LogEmail,LogPwd){
        const query = `SELECT * FROM customers WHERE email=?`
        MYSQL.query(query, [LogEmail],(err, Result) =>{
            if(Result.length > 0){
                if(Result[0].pwd == LogPwd){
                    req.session.CUSTOMERIN = Result[0].buyerid
                    req.session.userEmail = LogEmail
                    res.json({valid:ToCheckOut})
                }else{
                    res.json({Notify:'Invalid Password or Email!'})
                }
            }else{
               res.json({Notify:'Invalid Credentials!'}) 
            }
            
        })
    }
    if(RegFName,RegLName,RegEmail,RegPwd,RegCPwd){
        if(RegPwd == RegCPwd){
            const ID = (Math.floor(Math.random()*36512+Math.random()*36612)).toString().slice(0,4)
            const query = `INSERT INTO customers (buyerid, firstname, lastname, email, pwd) VALUES(?,?,?,?,?)`
            MYSQL.query(query, [`ID${ID}`, RegFName, RegLName, RegEmail, RegPwd],(err, Laps) =>{
                if(err){
                    if(err.sqlMessage == `Duplicate entry '${RegEmail}' for key 'email'`){
                        res.json({Notify:'Email In Use By a Customer!'})
                    }
                }else{
                    console.log('Success')
                    res.json({valid:'Registered Successfully'})
                }
            })
        }else{
            res.json({Notify:'Password Mismatched!'})
        }
    }
})

app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`))