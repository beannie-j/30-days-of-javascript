const SHIPPING_FEE = 3.99;
const deleteButtons = document.querySelectorAll(".delete-button");

deleteButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        let buttonClicked = event.target;
        buttonClicked.parentElement.remove();
        updateItemsTotal();
    });
});

function updateItemsTotal() {
    let cartItems = document.getElementsByClassName("cart-items")[0];
    let singleItem = cartItems.getElementsByClassName("item");
    let total = 0;
    
    for (let i = 0; i < singleItem.length; i++) {
        let item = singleItem[i];
        let price = item.getElementsByClassName("item-price")[0];
        let quantity = item.getElementsByClassName("quantity")[0].value;
        let priceValue = price.innerText.toString().substring(1);
        let sum = quantity * priceValue;
        total += sum;
    }
    total = "$" + total;
    document.getElementsByClassName("sub-total")[0].innerText = total;
    updateShipping();
    updateTotalPrice();
    return total;
}

function updateShipping() {
    let subTotal = document.getElementsByClassName("sub-total")[0].innerText;
    let shipping = document.getElementsByClassName("shipping")[0].innerText;
    if (subTotal < 1000) {
        document.getElementsByClassName("shipping")[0].innerText = "$" + SHIPPING_FEE;
    }
    else 
        document.getElementsByClassName("shipping")[0].innerText = "FREE";
}

function updateTotalPrice() {
    let subTotal = document.getElementsByClassName("sub-total")[0].innerText.substring(1);
    let shipping = document.getElementsByClassName("shipping")[0].innerText;
    let shippingValue = 0;
    if (shipping != "FREE") {
        shippingValue = SHIPPING_FEE;
    }
    let total = parseFloat(subTotal) + parseFloat(shippingValue);
    total = "$" + total;
    document.getElementsByClassName("total-value")[0].innerText = total;
}

function updatePricePerQuantity() {
}

updateItemsTotal();
updateShipping();
updateTotalPrice();