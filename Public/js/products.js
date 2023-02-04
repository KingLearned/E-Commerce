$.ajax({
    method:"POST",
    success: (data) => {
        const ShowItems = [data.Laps, data.Tele, data.Phones, data.HomeApps, data.Cam]
        const ProClass = ['laptops','Television','SmartPhones','HomeAppliance','Cameras']
        for (let n = 0; n < ProClass.length; n++) {
            for (let i = 0; i < ShowItems[n].length; i++) {
                
                let Badged = ''
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

        // for (let i = 0; i < data.Laps.length; i++) {
        //     let Badged = ''
        //     if(data.Laps[i].Qty <= 0){
        //         Badged = 'soldout'
        //     }
        //     document.querySelector(`.laptops`).innerHTML += `
        //     <div class="col-lg-12">
        //         <div class="single-product-wrap">
        //             <div class="product-image">
        //                     <img src="${data.Laps[i].Img}" alt="${data.Laps[i].Img}">
        //                 <span class="sticker ${Badged}">New</span>
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
        //                         <li class="add-cart active ${data.Laps[i].Id} ${Badged}">Add to cart</li>
        //                         <li><a class="links-details"><i class="fa fa-heart-o"></i></a></li>
        //                         <li><a title="quick view" class="quick-view-btn qv" data-toggle="modal" data-target="#exampleModalCenter"><i class="fa fa-eye"></i></a></li>
        //                     </ul>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     `
        //     if(data.Laps[i].Qty <= 0){
        //         document.querySelector(`.${data.Laps[i].Id}`).classList.remove(`${data.Laps[i].Id}`)
        //     }
        // }
        // for (let i = 0; i < data.Tele.length; i++) {
        //     let Badged = ''
        //     if(data.Tele[i].Qty <= 0){
        //         Badged = 'soldout'
        //     }
        //     document.querySelector(`.Television`).innerHTML += `
        //     <div class="col-lg-12">
        //         <div class="single-product-wrap">
        //             <div class="product-image">
        //                     <img src="${data.Tele[i].Img}" alt="${data.Tele[i].Img}">
        //                 <span class="sticker ${Badged}">New</span>
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
        //                         <li class="add-cart active ${data.Tele[i].Id} ${Badged}">Add to cart</li>
        //                         <li><a class="links-details"><i class="fa fa-heart-o"></i></a></li>
        //                         <li><a title="quick view" class="quick-view-btn qv" data-toggle="modal" data-target="#exampleModalCenter"><i class="fa fa-eye"></i></a></li>
        //                     </ul>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     `
        //     if(data.Tele[i].Qty <= 0){
        //         document.querySelector(`.${data.Tele[i].Id}`).classList.remove(`${data.Tele[i].Id}`)
        //     }
        // }
        // for (let i = 0; i <  data.Phones.length; i++) {
        //     let Badged = ''
        //     if( data.Phones[i].Qty <= 0){
        //         Badged = 'soldout'
        //     }
        //     document.querySelector(`.SmartPhones`).innerHTML += `
        //     <div class="col-lg-12">
        //         <div class="single-product-wrap">
        //             <div class="product-image">
        //                     <img src="${ data.Phones[i].Img}" alt="${ data.Phones[i].Img}">
        //                 <span class="sticker ${Badged}">New</span>
        //             </div>
        //             <div class="product_desc">
        //                 <div class="product_desc_info">
        //                     <div class="product-review">
        //                         <h5 class="manufacturer">${ data.Phones[i].Dscp}</h5>
        //                     </div>
        //                     <div class="price-box">
        //                         <span class="new-price">N${(( data.Phones[i].Prc).toLocaleString())}</span>
        //                     </div>
        //                 </div>
        //                 <div class="add-actions">
        //                     <ul class="add-actions-link">
        //                         <li class="add-cart active ${ data.Phones[i].Id} ${Badged}">Add to cart</li>
        //                         <li><a class="links-details"><i class="fa fa-heart-o"></i></a></li>
        //                         <li><a title="quick view" class="quick-view-btn qv" data-toggle="modal" data-target="#exampleModalCenter"><i class="fa fa-eye"></i></a></li>
        //                     </ul>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     `
        //     if( data.Phones[i].Qty <= 0){
        //         document.querySelector(`.${ data.Phones[i].Id}`).classList.remove(`${ data.Phones[i].Id}`)
        //     }
        // }
        // for (let i = 0; i <  data.HomeApps.length; i++) {
        //     let Badged = ''
        //     if( data.HomeApps[i].Qty <= 0){
        //         Badged = 'soldout'
        //     }
        //     document.querySelector(`.HomeAppliance`).innerHTML += `
        //     <div class="col-lg-12">
        //         <div class="single-product-wrap">
        //             <div class="product-image">
        //                     <img src="${ data.HomeApps[i].Img}" alt="${ data.HomeApps[i].Img}">
        //                 <span class="sticker ${Badged}">New</span>
        //             </div>
        //             <div class="product_desc">
        //                 <div class="product_desc_info">
        //                     <div class="product-review">
        //                         <h5 class="manufacturer">${ data.HomeApps[i].Dscp}</h5>
        //                     </div>
        //                     <div class="price-box">
        //                         <span class="new-price">N${(( data.HomeApps[i].Prc).toLocaleString())}</span>
        //                     </div>
        //                 </div>
        //                 <div class="add-actions">
        //                     <ul class="add-actions-link">
        //                         <li class="add-cart active ${ data.HomeApps[i].Id} ${Badged}">Add to cart</li>
        //                         <li><a class="links-details"><i class="fa fa-heart-o"></i></a></li>
        //                         <li><a title="quick view" class="quick-view-btn qv" data-toggle="modal" data-target="#exampleModalCenter"><i class="fa fa-eye"></i></a></li>
        //                     </ul>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     `
        //     if( data.HomeApps[i].Qty <= 0){
        //         document.querySelector(`.${ data.HomeApps[i].Id}`).classList.remove(`${ data.HomeApps[i].Id}`)
        //     }
        // }
        // for (let i = 0; i <  data.Cam.length; i++) {
        //     let Badged = ''
        //     if( data.Cam[i].Qty <= 0){
        //         Badged = 'soldout'
        //     }
        //     document.querySelector(`.Cameras`).innerHTML += `
        //     <div class="col-lg-12">
        //         <div class="single-product-wrap">
        //             <div class="product-image">
        //                     <img src="${ data.Cam[i].Img}" alt="${ data.Cam[i].Img}">
        //                 <span class="sticker ${Badged}">New</span>
        //             </div>
        //             <div class="product_desc">
        //                 <div class="product_desc_info">
        //                     <div class="product-review">
        //                         <h5 class="manufacturer">${ data.Cam[i].Dscp}</h5>
        //                     </div>
        //                     <div class="price-box">
        //                         <span class="new-price">N${(( data.Cam[i].Prc).toLocaleString())}</span>
        //                     </div>
        //                 </div>
        //                 <div class="add-actions">
        //                     <ul class="add-actions-link">
        //                         <li class="add-cart active ${ data.Cam[i].Id} ${Badged}">Add to cart</li>
        //                         <li><a class="links-details"><i class="fa fa-heart-o"></i></a></li>
        //                         <li><a title="quick view" class="quick-view-btn qv" data-toggle="modal" data-target="#exampleModalCenter"><i class="fa fa-eye"></i></a></li>
        //                     </ul>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     `
        //     if( data.Cam[i].Qty <= 0){
        //         document.querySelector(`.${ data.Cam[i].Id}`).classList.remove(`${ data.Cam[i].Id}`)
        //     }
        // }

        //For Indicating Added Orders into Cart
        for (let i = 0; i < CartHold.length; i++) {
            document.querySelector(`.${Store[i].Id}`).classList.add('added')
            $('.added').html('Added')
        }
        $('.soldout').html('SOLD OUT')//For Sold Out Stocks



        /***********    FOR ADDING OF ALL PRODUCTS TO CARTS      ***************/
        const AddItems = [data.Laps, data.Tele, data.Phones, data.HomeApps ,data.Cam]
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
    }
})

