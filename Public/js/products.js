const CartHold = []
var c = 0
var CartTP = 0
$.ajax({
    method:"POST",
    success: (data) => {
    /*************** FUNCTION FOR ALL CONTENTS DISPLAY *********************/
    const ShowItems = [data.Laps,data.Tele,data.Phones,data.HomeApps,data.Cam]
    const ProClass = ['laptops','Television','SmartPhones','HomeAppliance','Cameras']
    for (let n = 0; n < ProClass.length; n++) {
        for (let i = 0; i < ShowItems[n].length; i++) {
            var Badged = ''
           if(ShowItems[n][i].Qty <= 0){
            Badged = 'soldout'
           }
            document.querySelector(`.${ProClass[n]}`).innerHTML += `
            <div class="col-lg-12">
                <div class="single-product-wrap">
                    <div class="product-image">
                            <img src="${ShowItems[n][i].Img}" alt="${ShowItems[n][i].Img}">
                        <span class="sticker ${Badged}">New</span>
                    </div>
                    <div class="product_desc">
                        <div class="product_desc_info">
                            <div class="product-review">
                                <h5 class="manufacturer">${ShowItems[n][i].Dscp}</h5>
                            </div>
                            <div class="price-box">
                                <span class="new-price">N${((ShowItems[n][i].Prc).toLocaleString())}</span>
                            </div>
                        </div>
                        <div class="add-actions">
                            <ul class="add-actions-link">
                                <li class="add-cart active ${ShowItems[n][i].Id} ${Badged}">Add to cart</li>
                                <li><a class="links-details"><i class="fa fa-heart-o"></i></a></li>
                                <li><a title="quick view" class="quick-view-btn qv${ShowItems[n][i].Id}" data-toggle="modal" data-target="#exampleModalCenter"><i class="fa fa-eye"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            `
            if(ShowItems[n][i].Qty <= 0){
                document.querySelector(`.${ShowItems[n][i].Id}`).classList.remove(`${ShowItems[n][i].Id}`)
            }
        }
    }
    $('.soldout').html('SOLD OUT')//For Sold Out Stocks

    // for (let i = 0; i < data.Laps.length; i++) {
    //     DisLaps.innerHTML += `
    //     <div class="col-lg-12">
    //         <div class="single-product-wrap">
    //             <div class="product-image">
    //                     <img src="${data.Laps[i].Img}" alt="${data.Laps[i].Img}">
    //                 <span class="sticker">New</span>
    //             </div>
    //             <div class="product_desc">
    //                 <div class="product_desc_info">
    //                     <div class="product-review">
    //                         <h5 class="manufacturer">${data.Laps[i].Dscp}</h5>
    //                     </div>
    //                     <div class="price-box">
    //                         <span class="new-price">N${((data.Laps[i].Prc).toLocaleString())}</span>
    //                     </div>
    //                 </div>
    //                 <div class="add-actions">
    //                     <ul class="add-actions-link">
    //                         <li class="add-cart active ${data.Laps[i].Id}">Add to cart</li>
    //                         <li><a class="links-details"><i class="fa fa-heart-o"></i></a></li>
    //                         <li><a title="quick view" class="quick-view-btn qv${data.Laps[i].Id}" data-toggle="modal" data-target="#exampleModalCenter"><i class="fa fa-eye"></i></a></li>
    //                     </ul>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //     `
    // }

    ///*************** TELEVISION CONTENT DISPLAY *********************/
    // const DisTele = document.querySelector('.Television')
    // for (let i = 0; i < data.Tele.length; i++) {
    //     DisTele.innerHTML += `
    //     <div class="col-lg-12">
    //         <div class="single-product-wrap">
    //             <div class="product-image">
    //                     <img src="${data.Tele[i].Img}" alt="Li's Product Image">
    //                 <span class="sticker">New</span>
    //             </div>
    //             <div class="product_desc">
    //                 <div class="product_desc_info">
    //                     <div class="product-review">
    //                         <h5 class="manufacturer">${data.Tele[i].Dscp}</h5>
    //                     </div>
    //                     <div class="price-box">
    //                         <span class="new-price">N${((data.Tele[i].Prc).toLocaleString())}</span>
    //                     </div>
    //                 </div>
    //                 <div class="add-actions">
    //                     <ul class="add-actions-link">
    //                         <li class="add-cart active ${data.Tele[i].Id}">Add to cart</li>
    //                         <li><a class="links-details"><i class="fa fa-heart-o"></i></a></li>
    //                         <li><a title="quick view" class="quick-view-btn qv${data.Tele[i].Id}" data-toggle="modal" data-target="#exampleModalCenter"><i class="fa fa-eye"></i></a></li>
    //                     </ul>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //     `
    // }
    // /*************** SMARTPHONES CONTENT DISPLAY *********************/
    // const Disphnone = document.querySelector('.SmartPhones')
    // for (let i = 0; i < data.Phones.length; i++) {
    //     Disphnone.innerHTML += `
    //     <div class="col-lg-12">
    //         <div class="single-product-wrap">
    //             <div class="product-image">
    //                     <img src="${data.Phones[i].Img}" alt="Li's Product Image">
    //                 <span class="sticker">New</span>
    //             </div>
    //             <div class="product_desc">
    //                 <div class="product_desc_info">
    //                     <div class="product-review">
    //                         <h5 class="manufacturer">${data.Phones[i].Dscp}</h5>
    //                     </div>
    //                     <div class="price-box">
    //                         <span class="new-price">N${((data.Phones[i].Prc).toLocaleString())}</span>
    //                     </div>
    //                 </div>
    //                 <div class="add-actions">
    //                     <ul class="add-actions-link">
    //                         <li class="add-cart active ${data.Phones[i].Id}">Add to cart</li>
    //                         <li><a class="links-details"><i class="fa fa-heart-o"></i></a></li>
    //                         <li><a title="quick view" class="quick-view-btn qv${data.Phones[i].Id}" data-toggle="modal" data-target="#exampleModalCenter"><i class="fa fa-eye"></i></a></li>
    //                     </ul>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //     `
    // }
    // /*************** HOME APPLIANCES CONTENT DISPLAY *********************/
    // const DisHome = document.querySelector('.HomeAppliance')
    // for (let i = 0; i < data.HomeApps.length; i++) {
    //     DisHome.innerHTML += `
    //     <div class="col-lg-12">
    //         <div class="single-product-wrap">
    //             <div class="product-image">
    //                     <img src="${data.HomeApps[i].Img}" alt="Li's Product Image">
    //                 <span class="sticker">New</span>
    //             </div>
    //             <div class="product_desc">
    //                 <div class="product_desc_info">
    //                     <div class="product-review">
    //                         <h5 class="manufacturer">${data.HomeApps[i].Dscp}</h5>
    //                     </div>
    //                     <div class="price-box">
    //                         <span class="new-price">N${((data.HomeApps[i].Prc).toLocaleString())}</span>
    //                     </div>
    //                 </div>
    //                 <div class="add-actions">
    //                     <ul class="add-actions-link">
    //                         <li class="add-cart active ${data.HomeApps[i].Id}">Add to cart</li>
    //                         <li><a class="links-details"><i class="fa fa-heart-o"></i></a></li>
    //                         <li><a title="quick view" class="quick-view-btn qv${data.HomeApps[i].Id}" data-toggle="modal" data-target="#exampleModalCenter"><i class="fa fa-eye"></i></a></li>
    //                     </ul>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //     `
    // }
    // /*************** CAMERAS CONTENT DISPLAY *********************/
    // const DisCam = document.querySelector('.Cameras')
    // for (let i = 0; i < data.Cam.length; i++) {
    //     DisCam.innerHTML += `
    //     <div class="col-lg-12">
    //         <div class="single-product-wrap">
    //             <div class="product-image">
    //                     <img src="${data.Cam[i].Img}" alt="Li's Product Image">
    //                 <span class="sticker">New</span>
    //             </div>
    //             <div class="product_desc">
    //                 <div class="product_desc_info">
    //                     <div class="product-review">
    //                         <h5 class="manufacturer">${data.Cam[i].Dscp}</h5>
    //                     </div>
    //                     <div class="price-box">
    //                         <span class="new-price">N${((data.Cam[i].Prc).toLocaleString())}</span>
    //                     </div>
    //                 </div>
    //                 <div class="add-actions">
    //                     <ul class="add-actions-link">
    //                         <li class="add-cart active ${data.Cam[i].Id}">Add to cart</li>
    //                         <li><a class="links-details"><i class="fa fa-heart-o"></i></a></li>
    //                         <li><a title="quick view" class="quick-view-btn qv${data.Cam[i].Id}" data-toggle="modal" data-target="#exampleModalCenter"><i class="fa fa-eye"></i></a></li>
    //                     </ul>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //     `
    // }

    /*************** FUNCTION FOR ADDING ORDERS TO CARTS *********************/
    // function Adder(Main,Add,Addwhole,Addprc) {
    //     const index = Main.findIndex(obj => obj.Id === Add)
    //     if(index === -1){
    //         c++
    //         $('.CartCount').html(c)
    //         CartTP += Addprc
    //         $('.CartTprice').html(`N${(CartTP).toLocaleString()}`)
    //         Main.push(Addwhole)
    //         console.log(Main)
    //         ViewCart()
    //         $('.BuyID').val(`{"Id":"${Addwhole.Id}","Img":"${Addwhole.Img}","Dscp":"${Addwhole.Dscp}","Prc":${Addwhole.Prc},"Qty":${Addwhole.Qty}}`)
    //         // $('.Orderform').submit()
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
    /***********    FOR ADDING OF ALL PRODUCTS TO CARTS      ***************/
    const AddItems = [data.Laps,data.Tele,data.Phones,data.HomeApps,data.Cam]
    for (let i = 0; i < AddItems.length; i++) {
        for (let n = 0; n < AddItems[i].length; n++) {
            /*******************   For Modal View *********************/
            $(`.qv${AddItems[i][n].Id}`).on('click', () => {
                if(AddItems[i][n].Qty <= 0){
                    document.querySelector('.add-to-cart').classList.add('soldout')
                }else{
                    document.querySelector('.add-to-cart').classList.add(`${AddItems[i][n].Id}`)
                }
                $('.soldout').html('SOLD OUT')//For Sold Out Stocks
                $('.qvimage').html(`<img src="${AddItems[i][n].Img}" alt="${AddItems[i][n].Img}">`)
                $('.infoview').html(AddItems[i][n].Dscp)
                $('.new-price-2').html(`N${AddItems[i][n].Prc.toLocaleString()}`)

                for (let k = 0; k < AddItems.length; k++) {
                    for (let l = 0; l < AddItems[k].length; l++) {
                        $(`.${AddItems[k][l].Id}`).on('click', () => {
                            Adder(CartHold,AddItems[k][l].Id,AddItems[k][l],AddItems[k][l].Prc)
                            document.querySelector('.add-to-cart').classList.remove(`${AddItems[i][n].Id}`)
                        }) 
                    }
                }
                $('.closemodal').on('click', () => {
                    document.querySelector('.add-to-cart').classList.remove(`soldout`)
                })
            })
            /******************    For Carts Adding   *********************/
           $(`.${AddItems[i][n].Id}`).on('click', () => {
               Adder(CartHold,AddItems[i][n].Id,AddItems[i][n],AddItems[i][n].Prc)
           }) 
        }
    }
}})

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
