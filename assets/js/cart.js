// Initialize cart as an empty array
let cart = [];

// Function to add an item to the cart
function addToCart(productName, price) {
    cart.push({ productName, price });
    updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotalElement = document.getElementById("cart-total");
    
    // Clear the cart display
    cartItemsContainer.innerHTML = "";
    
    let total = 0;

    // Loop through the items in the cart
    cart.forEach((item) => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart__item");
        cartItem.innerHTML = `
            <span class="cart__product">${item.productName}</span>
            <span class="cart__price">Rs ${item.price}</span>
        `;
        cartItemsContainer.appendChild(cartItem);

        // Update the total
        total += item.price;
    });

    // Update the total in the cart display
    cartTotalElement.textContent = total;
}

// Add event listeners to "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll(".product__button");
addToCartButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        const productName = document.querySelectorAll(".product__title")[index].textContent;
        const productPrice = parseInt(document.querySelectorAll(".product__price")[index].textContent.split("Rs ")[1]);
        addToCart(productName, productPrice);
    });
});

// Add an event listener to execute code when the page is loaded
window.addEventListener("load", () => {
    updateCartDisplay(); // Initialize cart display
});
