function Perform(){
    $.ajax({
        method:"POST",
        success: (data) => {
            const ShowDis = document.querySelector('.DisplayProducts')
            ShowDis.innerHTML = ''
            for (let i = 0; i < data.serve.length; i++) {
                ShowDis.innerHTML +=
                    `
                    <div class="row product-layout-list " style="padding: 0 0 20px 0;">
                        <div class="col-lg-3 col-md-5 ">
                            <div class="product-image">
                                <a><img src="${data.serve[i].Img}" alt="Li's Product Image"></a>
                            </div>
                        </div>
                        <div class="col-lg-5 col-md-7">
                            <div class="product_desc">
                                <div class="product_desc_info">
                                    <div class="product-review">
                                        <h5 class="manufacturer">${data.serve[i].Dscp}</h5>
                                    </div>
                                    <div class="price-box">
                                        <span class="new-price">N${data.serve[i].Prc.toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="shop-add-action mb-xs-30">
                                <ul class="add-actions-link">
                                    <li class="add-cart RemovePro">REMOVE PRODUCT</li>
                                    <li class="wishlist StockTot">${data.serve[i].QtySold} || TOTAL STOCK SOLD</li>
                                    <li class="wishlist StockTot"><i class="fa fa-shopping-cart"></i><i> ${data.serve[i].Qty}</i> Total Stock</li>
                                    <li class="Edit${data.serve[i].Id}"><a class="quick-view AdminEd" data-toggle="modal" data-target="#exampleModalCenter"><i class="fa fa-pencil"></i>Edit Product</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    `
            }

            /*****************      FOR MODAL VIEW FORMAT       ****************/
            for (let i = 0; i < data.serve.length; i++) {
                $(`.Edit${data.serve[i].Id}`).on('click', () => {
                    
                    $('.qvimage').html(`<img src="${data.serve[i].Img}" alt="${data.serve[i].Img}">`)
                    $('.infoview').html(data.serve[i].Dscp)
                    $('.new-price-2').html(`N${data.serve[i].Prc.toLocaleString()}`)
                    $('.product-details-ref span').html(data.serve[i].Id)
                    document.querySelector('.add-to-cart').classList.add(`UP${data.serve[i].Id}`)
                    $('.ProValue').val(1)
                    
                    for (let n = 0; n < data.serve.length; n++) {
                        $(`.UP${data.serve[n].Id}`).on('click', () => { //For Updating Product Quantity
                            $('.UpQty').val(`{"ID":"${data.serve[n].Id}", "Qty":${data.serve[n].Qty + Number($('.ProValue').val())}}`) //Get Input
                            $('.AdminQtyUpd').submit()//Submit Form
                        })

                        $('.closemodal').on('click', () => { // For Removing The Class 
                            document.querySelector('.add-to-cart').classList.remove(`UP${data.serve[n].Id}`)
                        })
                    }
                })
            }
        }
    })
}Perform()
function Laps(){
    RunRequest('laptops')
    // $('.Navgate').val('laptops')
    // $('.Logto').submit()
}
function Cams(){RunRequest('Cameras')}
function Tv(){RunRequest('television')}
function Phn(){RunRequest('phones')}
function HApp(){RunRequest('homeapps')}
function Goto(){window.location.href = '/Admin-Select-Stock-Category'}
// function Goto(){window.location.href = '/Admin-Create-New-Stock'}

function RunRequest(word){
    $('.Navgate').val(`${word}`)
    $.ajax({
        method:"POST",
        data: {
            GetProduct : $('.Navgate').val()
        },
        success : (data) => {
            Perform()
        }
    })
}