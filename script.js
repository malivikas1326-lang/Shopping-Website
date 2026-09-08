// ===============================
// SHOP EASY - MAIN JAVASCRIPT
// ===============================


// ===============================
// ADD TO CART
// ===============================

function addToCart(name, price) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check product already exists
    let existingProduct = cart.find(product => product.name === name);

    if (existingProduct) {

        existingProduct.quantity += 1;

    } else {

        cart.push({
            name: name,
            price: price,
            quantity: 1
        });

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " added to cart! 🛒");
}


// ===============================
// SHOW CART
// ===============================

function displayCart() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let cartList = document.getElementById("cartList");
    let totalPrice = document.getElementById("totalPrice");

    if (!cartList) {
        return;
    }

    cartList.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {

        cartList.innerHTML =
            "<h3>Your cart is empty 🛒</h3>";

        if (totalPrice) {
            totalPrice.innerText = "Total: ₹0";
        }

        return;
    }


    cart.forEach((product, index) => {

        let itemTotal = product.price * product.quantity;

        total += itemTotal;

        cartList.innerHTML += `

            <div class="cart-item">

                <h3>${product.name}</h3>

                <p>Price: ₹${product.price}</p>

                <p>
                    Quantity:
                    ${product.quantity}
                </p>

                <p>
                    Item Total:
                    ₹${itemTotal}
                </p>

                <button onclick="removeFromCart(${index})">
                    ❌ Remove
                </button>

            </div>

        `;

    });


    if (totalPrice) {

        totalPrice.innerText =
            "Total: ₹" + total;

    }

}


// ===============================
// REMOVE FROM CART
// ===============================

function removeFromCart(index) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}


// ===============================
// CLEAR CART
// ===============================

function clearCart() {

    localStorage.removeItem("cart");

    displayCart();

}


// ===============================
// ADD TO WISHLIST
// ===============================

function addWishlist(name, price) {

    let wishlist =
        JSON.parse(localStorage.getItem("wishlist")) || [];


    let alreadyExists =
        wishlist.some(product => product.name === name);


    if (alreadyExists) {

        alert(name + " is already in Wishlist ❤️");

        return;

    }


    wishlist.push({

        name: name,
        price: price

    });


    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );


    alert(name + " added to Wishlist ❤️");

}


// ===============================
// DISPLAY WISHLIST
// ===============================

function displayWishlist() {

    let wishlist =
        JSON.parse(localStorage.getItem("wishlist")) || [];


    let wishlistList =
        document.getElementById("wishlistList");


    if (!wishlistList) {
        return;
    }


    wishlistList.innerHTML = "";


    if (wishlist.length === 0) {

        wishlistList.innerHTML =
            "<h3>Your Wishlist is empty ❤️</h3>";

        return;

    }


    wishlist.forEach((product, index) => {

        wishlistList.innerHTML += `

            <div class="card">

                <h3>${product.name}</h3>

                <p>₹${product.price}</p>

                <button
                    onclick="addToCart('${product.name}',${product.price})">
                    🛒 Add to Cart
                </button>

                <button
                    onclick="removeWishlist(${index})">
                    ❌ Remove
                </button>

            </div>

        `;

    });

}


// ===============================
// REMOVE WISHLIST
// ===============================

function removeWishlist(index) {

    let wishlist =
        JSON.parse(localStorage.getItem("wishlist")) || [];


    wishlist.splice(index, 1);


    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );


    displayWishlist();

}


// ===============================
// SEARCH PRODUCTS
// ===============================

function searchProducts() {

    let searchInput =
        document.getElementById("search");


    if (!searchInput) {
        return;
    }


    let searchValue =
        searchInput.value.toLowerCase();


    let products =
        document.querySelectorAll(".card");


    products.forEach(function(product) {

        let productName =
            product.querySelector("h3");


        if (!productName) {
            return;
        }


        let name =
            productName.innerText.toLowerCase();


        if (name.includes(searchValue)) {

            product.style.display = "";

        } else {

            product.style.display = "none";

        }

    });

}


// ===============================
// PAGE LOAD
// ===============================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        displayCart();

        displayWishlist();

    }
);
