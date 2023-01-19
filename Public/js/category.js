// fetch('../js/products.json').then(
//     res => res.json()   
// ).then(Result => {
//     console.log(Result)
// })
$.ajax({
    method:"POST",
    success: (data) => {

        $('.route').html(data.ROUTE)
        const ProductDis = document.querySelector('.mainview')
        ProductDis.innerHTML = ''
        for (let i = 0; i < data.PRD.length; i++) {
            var Badged = ''
           if(data.PRD[i].Qty <= 0){
            Badged = 'soldout'
           }
            ProductDis.innerHTML +=
                `<div class="col-lg-3 col-md-4 col-sm-6 mt-40">
                    <div>
                        <div class="product-image">
                        <img src="${data.PRD[i].Img}" alt="${data.PRD[i].Img}">
                            <span class="sticker ${Badged}">New</span>
                        </div>
                        <div class="product_desc">
                            <div class="product_desc_info">
                                <div class="product-review">
                                    <h5 class="manufacturer">${data.PRD[i].Dscp}</h5>
                                </div>
                                <div class="price-box">
                                    <span class="new-price">N${((data.PRD[i].Prc).toLocaleString())}</span>
                                </div>
                                <ul class="add-actions-link">
                                    <li class="add-cart active ${data.PRD[i].Id}"><a style="cursor:pointer;" class="${Badged}">Add to cart</a></li>
                                    <li><a title="quick view" class="quick-view-btn qv${data.PRD[i].Id}" data-toggle="modal" data-target="#exampleModalCenter"><i class="fa fa-eye"></i></a></li>
                                    <li><a style="cursor:pointer;"><i class="fa fa-heart-o"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>`
                if(data.PRD[i].Qty <= 0){
                    document.querySelector(`.${data.PRD[i].Id}`).classList.remove(`${data.PRD[i].Id}`)
                } 
        }
        $('.soldout').html('SOLD OUT')//For Sold Out Stocks
             
        /*****************      FOR MODAL VIEW FORMAT       ****************/
        for (let i = 0; i < data.PRD.length; i++) {
            $(`.qv${data.PRD[i].Id}`).on('click', () => {
                if(data.PRD[i].Qty <= 0){
                    document.querySelector('.add-to-cart').classList.add('soldout')
                }else{
                    document.querySelector('.add-to-cart').classList.add(`${data.PRD[i].Id}`)
                }
                $('.soldout').html('SOLD OUT')//For Sold Out Stocks
                $('.qvimage').html(`<img src="${data.PRD[i].Img}" alt="${data.PRD[i].Img}">`)
                $('.infoview').html(data.PRD[i].Dscp)
                $('.new-price-2').html(`N${data.PRD[i].Prc.toLocaleString()}`)

                for (let k = 0; k < data.PRD.length; k++) {
                    $(`.${data.PRD[k].Id}`).on('click', () => {
                        Adder(CartHold,data.PRD[k].Id,data.PRD[k],data.PRD[k].Prc)
                        document.querySelector('.add-to-cart').classList.remove(`${data.PRD[i].Id}`)
                    })
                }
                $('.closemodal').on('click', () => {
                    document.querySelector('.add-to-cart').classList.remove(`soldout`)
                })

            })

            //For Adding Of Orders To CartHold
            $(`.${data.PRD[i].Id}`).on('click', () => {
                Adder(CartHold,data.PRD[i].Id,data.PRD[i],data.PRD[i].Prc)
            })
        }  
    }
}) 

/*************** FUNCTION FOR ADDING ORDERS TO CARTS *********************/
if(localStorage.length == 0){
    localStorage.setItem('Orders', JSON.stringify([]))
}

const Store = JSON.parse(localStorage.getItem('Orders')) //Local Storage Cart Holder

for (let i = 0; i < Store.length; i++) {
    c++
    $('.CartCount').html(c)
    CartTP += Store[i].Prc
    $('.CartTprice').html(`N${(CartTP).toLocaleString()}`)
    CartHold.push(Store[i])
}

function Adder(Main,Add,Addwhole,Addprc) {
    const index = Main.findIndex(obj => obj.Id === Add)
    if(index === -1){
        Store.push(Addwhole)
        localStorage.setItem('Orders',JSON.stringify(Store))

        console.log(JSON.parse(localStorage.getItem('Orders')))

        c++
        $('.CartCount').html(c)
        CartTP += Addprc
        $('.CartTprice').html(`N${(CartTP).toLocaleString()}`)
        Main.push(Addwhole)
        
        ViewCart() //View Cart Box Function
    }
}

$('.clear_cart').on('click', () => {//CLEARING OF CARTS
    localStorage.clear()
    localStorage.setItem('Orders', JSON.stringify([]))
    Store.length = 0

    c = 0
    $('.CartCount').html(c)
    CartTP = 0
    $('.CartTprice').html(`N00.00`)
    $('.minicart-total span').html(`N00.00`)
    CartHold.length = 0
    ViewCart()
})

//PERFORM THIS FUCTION BEFORE GOING TO CHECK-OUT
$('.Checkout').on('click', () => {  
    const CheckOutOrder = []
    for (let i = 0; i < CartHold.length; i++) {
        CheckOutOrder.push({Id:CartHold[i].Id,Dscp:CartHold[i].Dscp,Prc:CartHold[i].Prc,Qty:1})
    }
    localStorage.setItem('CheckOrders', JSON.stringify(CheckOutOrder))
})

// function Adder(Main,Add,Addwhole,Addprc) {
//     const index = Main.findIndex(obj => obj.Id === Add)
//     if(index === -1){
//         c++
//         $('.CartCount').html(c)
//         CartTP += Addprc
//         $('.CartTprice').html(`N${(CartTP).toLocaleString()}`)
//         Main.push(Addwhole)

//         ViewCart()
//         $('.BuyID').val(`{"Id":"${Addwhole.Id}","Img":"${Addwhole.Img}","Dscp":"${Addwhole.Dscp}","Prc":${Addwhole.Prc},"Qty":${Addwhole.Qty}}`)
//         $('.Orderform').submit()
//         $.ajax({
//             method:"POST",
//             data: {
//                 BuyID : $('.BuyID').val()
//             },
//             success : (data) => {

//             }
//         })
//     }
// }