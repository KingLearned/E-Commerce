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

        // For Indicating Added Orders into Cart
        for (let i = 0; i < CartHold.length; i++) {
            for (let n = 0; n < data.PRD.length; n++) {
                if(CartHold[i].Id == data.PRD[n].Id){
                    document.querySelector(`.${CartHold[i].Id}`).classList.add('added')
                    $('.added').html('ADDED')
                }
            }
        }
        $('.soldout').html('SOLD OUT')//For Sold Out Stocks


        /********************   FOR ADDING OF ORDERS TO CARTHOLD    ********************/
        for (let i = 0; i < data.PRD.length; i++) {
            $(`.${data.PRD[i].Id}`).on('click', () => {
                Adder(CartHold,data.PRD[i].Id,data.PRD[i],data.PRD[i].Prc)
            })

        /********************      FOR MODAL VIEW FORMAT       ***********************/
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

        }

    }
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