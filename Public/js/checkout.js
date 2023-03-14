$.ajax({
    method:"POST",
    success: (data) => {
        if(data.paymentMade){
            localStorage.clear()
            $('.CartCount').html(0)
        }

        const PlacedOrder = document.querySelector('.checkout_order')
        let YourOder = JSON.parse(localStorage.getItem('CheckOrders'))//Check Out Order Cart Holder
        if(localStorage.length == 0){
            YourOder = []
        }

        var OrderAmt = 0
        $('.CartCount').html(YourOder.length)//Display Number Of Items Bought, At Top Menu

        for (let i = 0; i < YourOder.length; i++) {
            OrderAmt += YourOder[i].Qty*YourOder[i].Prc
            PlacedOrder.innerHTML += `
            <tr class="cart_item">
            <td class="cart-product-name">${YourOder[i].Dscp}</td>
            <td class="cart-product-name"><strong class="product-quantity">${YourOder[i].Qty}</strong></td>
                <td class="cart-product-total"><span class="amount">N${(YourOder[i].Qty*YourOder[i].Prc).toLocaleString()}</span></td>  
            </tr>
            ` 
            $('.order-total .amount').html(`N${OrderAmt.toLocaleString()}`)
        }

        if(YourOder.length == 0){
            PlacedOrder.innerHTML = `
            <tr class="cart_item">
            <td class="cart-product-name">No Order</td>
            <td class="cart-product-name"><strong class="product-quantity">No Order</strong></td>
                <td class="cart-product-total"><span class="amount">No Order</span></td>  
            </tr>
            ` 
        }

        $('.SubmitOrder').on('click', () => {
            
                $.ajax({
                    method:"POST",
                    data: {Purchased: YourOder}, //Sending Of Orders Back To Server
                    success: (data) => {
                        window.location = data.payLink
                    }
                })
        
        })
    }
})
