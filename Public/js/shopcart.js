
    const FullOrders = JSON.parse(localStorage.getItem('Orders'))
    const CheckOutOrder = []

    if(FullOrders){
        $('.CartCount').html(FullOrders.length)
        const InitialQty = []
        const FullCart = document.querySelector('.shopping_cart tbody')
        FullCart.innerHTML = ''
        setTimeout(() => {
            function ShopCart(){
                FullCart.innerHTML = ''
                for (let i = 0; i < FullOrders.length; i++) {
                    InitialQty.push(FullOrders[i].Qty)
                    FullCart.innerHTML += `
                    <tr>
                        <td class="li-product-remove Rmv${FullOrders[i].Id}"><i class="fa fa-times"></i></td>
                        <td class="li-product-thumbnail"><img src="${FullOrders[i].Img}" alt="Li's Product Image"></td>
                        <td class="li-product-name">${FullOrders[i].Dscp}</td>
                        <td class="li-product-price"><span class="amount">N${(FullOrders[i].Prc).toLocaleString()}</span></td>
                        <td class="quantity">
                            <label>Quantity</label>
                            <div class="cart-plus-minus">
                                <input class="cart-plus-minus-box Inval${FullOrders[i].Id}" value="1" type="text">
                                <div class="dec qtybutton Dec${FullOrders[i].Id}"><i class="fa fa-angle-down"></i></div>
                                <div class="inc qtybutton In${FullOrders[i].Id}"><i class="fa fa-angle-up"></i></div>
                            </div>
                        </td>
                        <td class="product-subtotal"><span class="amount">N<span class="Amt${FullOrders[i].Id}">${(FullOrders[i].Prc).toLocaleString()}</span></span></td>
                    </tr>
                    ` 
                }
                
                var SPTotal = 0
                for (let i = 0; i < FullOrders.length; i++) {
                    SPTotal += FullOrders[i].Prc
                    document.querySelector(`.shopTP`).innerHTML = SPTotal.toLocaleString()
                    // FullOrders[i].Qty -=1
                    /*************    For Increasing The Quantity     **************/
                    document.querySelector(`.In${FullOrders[i].Id}`).addEventListener('click', () => {
                        if($(`.Inval${FullOrders[i].Id}`).val() < InitialQty[i]){
                            $(`.Inval${FullOrders[i].Id}`).val(Number($(`.Inval${FullOrders[i].Id}`).val())+1) //Input Increament
                            const Amt = Number((document.querySelector(`.Amt${FullOrders[i].Id}`).innerHTML).split(',').join(''))
                            const SP = Number((document.querySelector(`.shopTP`).innerHTML).split(',').join(''))
                            document.querySelector(`.shopTP`).innerHTML = (SP+FullOrders[i].Prc).toLocaleString() //For Total Sum of Products
                            document.querySelector(`.Amt${FullOrders[i].Id}`).innerHTML = (Amt+FullOrders[i].Prc).toLocaleString()
                            FullOrders[i].Qty --
                            QtyUpdate(FullOrders[i].Id,$(`.Inval${FullOrders[i].Id}`).val())
                        }
                    })
                    /***********   For Decreasing The Quantity     ************/
                    document.querySelector(`.Dec${FullOrders[i].Id}`).addEventListener('click', () => {
                        const Amt = Number((document.querySelector(`.Amt${FullOrders[i].Id}`).innerHTML).split(',').join(''))
                        if(Amt !== FullOrders[i].Prc){
                            $(`.Inval${FullOrders[i].Id}`).val(Number($(`.Inval${FullOrders[i].Id}`).val())-1)
                            const SP = Number((document.querySelector(`.shopTP`).innerHTML).split(',').join(''))
                            document.querySelector(`.shopTP`).innerHTML = (SP-FullOrders[i].Prc).toLocaleString() //For Total Sum of Products
                            document.querySelector(`.Amt${FullOrders[i].Id}`).innerHTML = (Amt-FullOrders[i].Prc).toLocaleString()
                            FullOrders[i].Qty ++
                            QtyUpdate(FullOrders[i].Id,$(`.Inval${FullOrders[i].Id}`).val())
                        }
                    })

                    //INPUT FUNCTION OF THE QUANTITY X THE PRODUCT AMOUNT
                    const Amt = Number((document.querySelector(`.Amt${FullOrders[i].Id}`).innerHTML).split(',').join(''))
                    document.querySelector(`.Inval${FullOrders[i].Id}`).addEventListener('change', () => {
                        if($(`.Inval${FullOrders[i].Id}`).val() > InitialQty[i]){//Inputting Exceeded Numbers
                            $(`.Inval${FullOrders[i].Id}`).val(InitialQty[i])
                            FullOrders[i].Qty = 0
                            QtyUpdate(FullOrders[i].Id,$(`.Inval${FullOrders[i].Id}`).val())

                            /*************      SUM OF THE TOTAL PRICE        ***********************/
                            var TP = 0
                            for (let n = 0; n < FullOrders.length; n++) {
                                TP +=  Number((document.querySelector(`.Amt${FullOrders[n].Id}`).innerHTML).split(',').join(''))
                            }
                            document.querySelector(`.shopTP`).innerHTML = TP.toLocaleString()
                        }

                        if($(`.Inval${FullOrders[i].Id}`).val() <= InitialQty[i]){
                            if($(`.Inval${FullOrders[i].Id}`).val() < 1){
                                $(`.Inval${FullOrders[i].Id}`).val(1)
                                FullOrders[i].Qty = InitialQty[i]-1
                            }
                            QtyUpdate(FullOrders[i].Id,$(`.Inval${FullOrders[i].Id}`).val())
                            /*************      FOR MULTIPLING THE PRODUCTS Price and Qty     ***********************/
                            FullOrders[i].Qty = InitialQty[i]-$(`.Inval${FullOrders[i].Id}`).val()
                            
                            /*************      SUM OF THE TOTAL PRICE      ********************/
                            document.querySelector(`.Amt${FullOrders[i].Id}`).innerHTML = (Amt*Number($(`.Inval${FullOrders[i].Id}`).val())).toLocaleString()
                            var TP = 0
                            for (let n = 0; n < FullOrders.length; n++) {
                                TP +=  Number((document.querySelector(`.Amt${FullOrders[n].Id}`).innerHTML).split(',').join(''))
                            }
                            document.querySelector(`.shopTP`).innerHTML = TP.toLocaleString() 
                            // console.log(FullOrders[i])
                        }
                    })
                    
                }

                for (let i = 0; i < FullOrders.length; i++) {
                    $(`.Rmv${FullOrders[i].Id}`).on('click', () => {
                        for (let n = 0; n < FullOrders.length; n++) {
                            if((FullOrders[n].Id == FullOrders[i].Id)){
                                CartTP -= FullOrders[i].Prc
                                function Rem(comm,Add){
                                    var index = comm.indexOf(Add)
                                    if(index > -1){
                                        comm.splice(index,1)
                                    }
                                    comm
                                }Rem(FullOrders,FullOrders[n])
                                
                                localStorage.setItem('Orders', JSON.stringify(FullOrders))//For Updating Of Local Storage CartHolder
                                $('.CartCount').html(FullOrders.length)
                                ShopCart()

                                //FOR GETTING THE FINAL CART ORDERS
                                CheckOutOrder.length = 0
                                for (let i = 0; i < FullOrders.length; i++) {
                                    CheckOutOrder.push({Id:FullOrders[i].Id,Dscp:FullOrders[i].Dscp,Prc:FullOrders[i].Prc,Qty:1})
                                }
                            }
                        }
                    })
                }

            }ShopCart()

            
        },1000)

    setTimeout(() => { 
        
    }, 1000)
    }
    


//FOR GETTING THE FINAL CART ORDERS
for (let i = 0; i < FullOrders.length; i++) {
    CheckOutOrder.push({Id:FullOrders[i].Id,Dscp:FullOrders[i].Dscp,Prc:FullOrders[i].Prc,Qty:1})
}

function QtyUpdate(QtyId,Num) {
    for (let i = 0; i < CheckOutOrder.length; i++) {
        if(CheckOutOrder[i].Id == QtyId){CheckOutOrder[i].Qty = Number(Num)}
    }
}
function checkout(){//Do This Before Moving To Check-Out 
    localStorage.setItem('CheckOrders', JSON.stringify(CheckOutOrder))
    window.location = '/Check-Out'
}





// $.ajax({
//     method:"POST",
//     success: (data) => {
//         if(data.FullOrders){
//             $('.CartCount').html(data.FullOrders.length)
//             const InitialQty = []
//             const FullCart = document.querySelector('.shopping_cart tbody')
//             FullCart.innerHTML = ''
//             setTimeout(() => {
//                 for (let i = 0; i < data.FullOrders.length; i++) {
//                     InitialQty.push(data.FullOrders[i].Qty)
//                     FullCart.innerHTML += `
//                     <tr>
//                         <td class="li-product-remove"><i class="fa fa-times"></i></td>
//                         <td class="li-product-thumbnail"><img src="${data.FullOrders[i].Img}" alt="Li's Product Image"></td>
//                         <td class="li-product-name">${data.FullOrders[i].Dscp}</td>
//                         <td class="li-product-price"><span class="amount">N${(data.FullOrders[i].Prc).toLocaleString()}</span></td>
//                         <td class="quantity">
//                             <label>Quantity</label>
//                             <div class="cart-plus-minus">
//                                 <input class="cart-plus-minus-box Inval${data.FullOrders[i].Id}" value="1" type="text">
//                                 <div class="dec qtybutton Dec${data.FullOrders[i].Id}"><i class="fa fa-angle-down"></i></div>
//                                 <div class="inc qtybutton In${data.FullOrders[i].Id}"><i class="fa fa-angle-up"></i></div>
//                             </div>
//                         </td>
//                         <td class="product-subtotal"><span class="amount">N<span class="Amt${data.FullOrders[i].Id}">${(data.FullOrders[i].Prc).toLocaleString()}</span></span></td>
//                     </tr>
//                     ` 
//                 }
//                 var SPTotal = 0
//                 for (let i = 0; i < data.FullOrders.length; i++) {
//                     SPTotal += data.FullOrders[i].Prc
//                     document.querySelector(`.shopTP`).innerHTML = SPTotal.toLocaleString()
//                     // data.FullOrders[i].Qty -=1
//                     /*************    For Increasing The Quantity     **************/
//                     document.querySelector(`.In${data.FullOrders[i].Id}`).addEventListener('click', () => {
//                         if($(`.Inval${data.FullOrders[i].Id}`).val() < InitialQty[i]){
//                             $(`.Inval${data.FullOrders[i].Id}`).val(Number($(`.Inval${data.FullOrders[i].Id}`).val())+1) //Input Increament
//                             const Amt = Number((document.querySelector(`.Amt${data.FullOrders[i].Id}`).innerHTML).split(',').join(''))
//                             const SP = Number((document.querySelector(`.shopTP`).innerHTML).split(',').join(''))
//                             document.querySelector(`.shopTP`).innerHTML = (SP+data.FullOrders[i].Prc).toLocaleString() //For Total Sum of Products
//                             document.querySelector(`.Amt${data.FullOrders[i].Id}`).innerHTML = (Amt+data.FullOrders[i].Prc).toLocaleString()
//                             data.FullOrders[i].Qty --
//                             QtyUpdate(data.FullOrders[i].Id,$(`.Inval${data.FullOrders[i].Id}`).val())
//                         }
//                     })
//                     /***********   For Decreasing The Quantity     ************/
//                     document.querySelector(`.Dec${data.FullOrders[i].Id}`).addEventListener('click', () => {
//                         const Amt = Number((document.querySelector(`.Amt${data.FullOrders[i].Id}`).innerHTML).split(',').join(''))
//                         if(Amt !== data.FullOrders[i].Prc){
//                             $(`.Inval${data.FullOrders[i].Id}`).val(Number($(`.Inval${data.FullOrders[i].Id}`).val())-1)
//                             const SP = Number((document.querySelector(`.shopTP`).innerHTML).split(',').join(''))
//                             document.querySelector(`.shopTP`).innerHTML = (SP-data.FullOrders[i].Prc).toLocaleString() //For Total Sum of Products
//                             document.querySelector(`.Amt${data.FullOrders[i].Id}`).innerHTML = (Amt-data.FullOrders[i].Prc).toLocaleString()
//                             data.FullOrders[i].Qty ++
//                             QtyUpdate(data.FullOrders[i].Id,$(`.Inval${data.FullOrders[i].Id}`).val())
//                         }
//                     })

//                     //INPUT FUNCTION OF THE QUANTITY X THE PRODUCT AMOUNT
//                     const Amt = Number((document.querySelector(`.Amt${data.FullOrders[i].Id}`).innerHTML).split(',').join(''))
//                     document.querySelector(`.Inval${data.FullOrders[i].Id}`).addEventListener('change', () => {
//                         if($(`.Inval${data.FullOrders[i].Id}`).val() > InitialQty[i]){//Inputting Exceeded Numbers
//                             $(`.Inval${data.FullOrders[i].Id}`).val(InitialQty[i])
//                             data.FullOrders[i].Qty = 0
//                             QtyUpdate(data.FullOrders[i].Id,$(`.Inval${data.FullOrders[i].Id}`).val())

//                             /*************      SUM OF THE TOTAL PRICE        ***********************/
//                             var TP = 0
//                             for (let n = 0; n < data.FullOrders.length; n++) {
//                                 TP +=  Number((document.querySelector(`.Amt${data.FullOrders[n].Id}`).innerHTML).split(',').join(''))
//                             }
//                             document.querySelector(`.shopTP`).innerHTML = TP.toLocaleString()
//                         }

//                         if($(`.Inval${data.FullOrders[i].Id}`).val() <= InitialQty[i]){
//                             if($(`.Inval${data.FullOrders[i].Id}`).val() < 1){
//                                 $(`.Inval${data.FullOrders[i].Id}`).val(1)
//                                 data.FullOrders[i].Qty = InitialQty[i]-1
//                             }
//                             QtyUpdate(data.FullOrders[i].Id,$(`.Inval${data.FullOrders[i].Id}`).val())
//                             /*************      FOR MULTIPLING THE PRODUCTS Price and Qty     ***********************/
//                             data.FullOrders[i].Qty = InitialQty[i]-$(`.Inval${data.FullOrders[i].Id}`).val()
                            
//                             /*************      SUM OF THE TOTAL PRICE      ********************/
//                             document.querySelector(`.Amt${data.FullOrders[i].Id}`).innerHTML = (Amt*Number($(`.Inval${data.FullOrders[i].Id}`).val())).toLocaleString()
//                             var TP = 0
//                             for (let n = 0; n < data.FullOrders.length; n++) {
//                                 TP +=  Number((document.querySelector(`.Amt${data.FullOrders[n].Id}`).innerHTML).split(',').join(''))
//                             }
//                             document.querySelector(`.shopTP`).innerHTML = TP.toLocaleString() 
//                             // console.log(data.FullOrders[i])
//                         }
//                     })
                    
//                 }
//             },1000)
//         }
//     },
//     error: (err) => {
//     }
// })

// function QtyUpdate(QtyId,Num) {

//     $('.QtyUp').val(`{"Id":"${Addwhole.Id}","Img":"${Addwhole.Img}","Dscp":"${Addwhole.Dscp}","Prc":${Addwhole.Prc},"Qty":${Addwhole.Qty}}`)
//     $('.QtyForm').submit()
//     $.ajax({
//         method:"POST",
//         data: {
//             QtyUp : $('.QtyUp').val()
//         },
//         success : (data) => {

    
//         }
//     })
// }