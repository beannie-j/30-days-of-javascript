const SHIPPING_FEE = 3.99;
const deleteButtons = document.querySelectorAll(".delete-button");
const likeButtons = document.querySelectorAll(".like-button");
const qtyDropDowns = document.querySelectorAll(".qty-number");

likeButtonArray = new Array('img/heart-red.png', 'img/heart-clear.png');

qtyDropDowns.forEach(button => {
    button.addEventListener('change', function(event) {
        let parent = event.target.parentElement.parentElement;
        let price = parent.getElementsByClassName("item-price")[0].innerHTML.substring(1);
        console.log("price " + price);
        let qty = parent.getElementsByClassName("qty-number")[0];
        let selectedQty = qty.options[qty.selectedIndex].value;
        console.log(selectedQty);
        updatePricePerQuantity(price, selectedQty, event.target.parentElement.parentElement);   
    });
});

deleteButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        let buttonClicked = event.target;
        buttonClicked.parentElement.remove();
        updateItemsTotal();
    });
});

likeButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        let likeButtonClicked = event.target;
        let likeButtonClickedSrcStr = likeButtonClicked.src.toString();
        if (likeButtonClickedSrcStr.includes("clear")) {
            // add to favourite
            event.target.src = "img/heart-red.png";
            return;
        }
        if (likeButtonClickedSrcStr.includes("red")) {
            event.target.src = "img/heart-clear.png";
            return;
        }
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

function updatePricePerQuantity(price, qty, parent) {
    let total = price * qty;
    total = "$" + total;
    parent.getElementsByClassName("item-price")[0].innerText = total;
}

updateItemsTotal();
updateShipping();
updateTotalPrice();