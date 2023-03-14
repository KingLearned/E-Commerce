const CartHold = []
let c = 0
let CartTP = 0


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

const Adder = (Main,Add,Addwhole,Addprc) => {
    const index = Main.findIndex(obj => obj.Id === Add)
    if(index === -1){
        Store.push(Addwhole)
        localStorage.setItem('Orders',JSON.stringify(Store))

        // console.log(JSON.parse(localStorage.getItem('Orders')))

        c++
        $('.CartCount').html(c)
        CartTP += Addprc
        $('.CartTprice').html(`N${(CartTP).toLocaleString()}`)
        Main.push(Addwhole)
        
        ViewCart() //View Cart Box Function
        document.querySelector(`.${Addwhole.Id}`).classList.add('added')
        $('.added').html('ADDED')
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


/*************** FOR VIEWING OF CARTS CONTENT *********************/
function ViewCart(){
    const Detail = document.querySelector('.minicart-product-list')
    Detail.innerHTML=''
    for (let i = 0; i < CartHold.length; i++) {
        Detail.innerHTML += `
        <li>
            <a href="single-product.html" class="minicart-product-image">
                <img src="${CartHold[i].Img}" alt="cart products">
            </a>
            <div class="minicart-product-details">
                <h6>${CartHold[i].Dscp}</h6>
                <span>N${(CartHold[i].Prc).toLocaleString()} x 1</span>
            </div>
            <button class="close Rmv${CartHold[i].Id}" title="Remove">
                <i class="fa fa-close"></i>
            </button>
        </li>
        `
        $('.minicart-total span').html(`N${(CartTP).toLocaleString()}`)
    }

    /*************** FOR REMOVING OF ORDERS CONTENT *********************/
    for (let i = 0; i < CartHold.length; i++) {
        $(`.Rmv${CartHold[i].Id}`).on('click', () => {
            for (let n = 0; n < CartHold.length; n++) {
                if((CartHold[n].Id == CartHold[i].Id)){
                    CartTP -= CartHold[i].Prc
                    function Rem(comm,Add){
                        var index = comm.indexOf(Add)
                        if(index > -1){
                            comm.splice(index,1)
                        }
                        comm
                    }Rem(CartHold,CartHold[n])
                    
                    localStorage.setItem('Orders', JSON.stringify(CartHold))//For Updating Of Local Storage CartHolder
                }
            }
            c--
            $('.CartTprice').html(`N${(CartTP).toLocaleString()}`)
            $('.minicart-total span').html(`N${(CartTP).toLocaleString()}`)
            $('.CartCount').html(c)
            ViewCart()
        })
    }
}
