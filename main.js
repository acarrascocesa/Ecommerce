const addToShoppingCartButton = document.querySelectorAll(".shop-item-button")

addToShoppingCartButton.forEach(addToCartButton => {
    addToCartButton.addEventListener("click", addToCartClicked)
})

const shoppingCartItemsContainer = document.querySelector(".shoppingCartItemContainer")

function addToCartClicked(event) {
    const button = event.target;
    const item = button.closest(".shop-item");

    const itemTitle = item.querySelector(".shop-item-title").textContent;
    const itemPrice = item.querySelector(".shop-item-price").textContent;
    const itemImg = item.querySelector(".shop-item-image").src;


    addItemToShoppingCart(itemTitle, itemPrice, itemImg);

}

function addItemToShoppingCart(itemTitle, itemPrice, itemImg) {
    shoppingCartRow = document.createElement("div");
    const shoppingCartContent =
        `
        <div class="cart-row">
                    <div class="cart-item cart-column">
                        <img class="cart-item-image" src=${itemImg} width="100" height="100">
                        <span class="cart-item-title">${itemTitle}</span>
                    </div>
                    <span class="cart-price cart-column">${itemPrice}</span>
                    <div class="cart-quantity cart-column">
                        <input class="cart-quantity-input" min="1" type="number" value="1">
                        <button class="btn btn-danger" type="button">REMOVE</button>
                    </div>
                </div>
                `

    shoppingCartRow.innerHTML = shoppingCartContent;
    shoppingCartItemsContainer.append(shoppingCartRow);

    updateShoppingCartTotal()
}

function updateShoppingCartTotal() {
    let total = 0;
    const shoppingCartTotal = document.querySelector(".cart-total")
    console.log(shoppingCartTotal);

}
