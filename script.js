function addToCart(name,price){let cart=JSON.parse(localStorage.getItem("cart"))||[];cart.push({name,price});localStorage.setItem("cart",JSON.stringify(cart));alert(name+" added to cart!")}
function displayCart(){let cart=JSON.parse(localStorage.getItem("cart"))||[],box=document.getElementById("cartItems"),totalEl=document.getElementById("total");if(!box)return;box.innerHTML="";let total=0;if(!cart.length){box.innerHTML="<p>Your cart is empty.</p>";totalEl.innerText="0";return}cart.forEach((item,i)=>{total+=item.price;box.innerHTML+=`<div><strong>${item.name}</strong> - ₹${item.price} <button onclick="removeFromCart(${i})">Remove</button></div>`});totalEl.innerText=total}
function removeFromCart(i){let cart=JSON.parse(localStorage.getItem("cart"))||[];cart.splice(i,1);localStorage.setItem("cart",JSON.stringify(cart));displayCart()}
function addWishlist(name){let w=JSON.parse(localStorage.getItem("wishlist"))||[];if(!w.includes(name)){w.push(name);localStorage.setItem("wishlist",JSON.stringify(w));alert(name+" added to wishlist!")}else alert("Already in wishlist!")}
function displayWishlist(){let w=JSON.parse(localStorage.getItem("wishlist"))||[],box=document.getElementById("wishlistItems");if(!box)return;box.innerHTML=w.length?w.map((x,i)=>`<div>❤️ ${x} <button onclick="removeWishlist(${i})">Remove</button></div>`).join(""):"<p>Your wishlist is empty.</p>"}
function removeWishlist(i){let w=JSON.parse(localStorage.getItem("wishlist"))||[];w.splice(i,1);localStorage.setItem("wishlist",JSON.stringify(w));displayWishlist()}
function searchProducts(){let q=document.getElementById("search").value.toLowerCase();document.querySelectorAll("#productList .card").forEach(c=>c.style.display=c.querySelector("h3").innerText.toLowerCase().includes(q)?"block":"none")}
function loginUser(e){e.preventDefault();alert("Welcome "+document.getElementById("email").value+"!")}
function contactForm(e){e.preventDefault();alert("Thank you! Your message has been sent.");e.target.reset()}
function checkout(){let cart=JSON.parse(localStorage.getItem("cart"))||[];if(!cart.length){alert("Your cart is empty!");return}alert("Order placed successfully!");localStorage.removeItem("cart");displayCart()}
        return;
    }

    let total = 0;

    cart.forEach(function(item, index) {
        let price = Number(item.price);
        total += price;

        box.innerHTML += `
            <div class="cart-item">
                <h3>${item.name}</h3>
                <p>Price: ₹${price.toLocaleString("en-IN")}</p>
                <button onclick="removeFromCart(${index})">
                    Remove
                </button>
            </div>
            <hr>
        `;
    });

    if (totalBox) {
        totalBox.innerText = total.toLocaleString("en-IN");
    }
}


// ---------- REMOVE FROM CART ----------
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}


// ---------- CHECKOUT ----------
function checkout() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    alert("Order placed successfully!");

    localStorage.removeItem("cart");

    displayCart();
}


// ---------- ADD WISHLIST ----------
function addWishlist(name) {
    let wishlist =
        JSON.parse(localStorage.getItem("wishlist")) || [];

    if (wishlist.includes(name)) {
        alert("Already in wishlist!");
        return;
    }

    wishlist.push(name);

    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );

    alert(name + " added to wishlist!");
}


// ---------- DISPLAY WISHLIST ----------
function displayWishlist() {
    let wishlist =
        JSON.parse(localStorage.getItem("wishlist")) || [];

    let box = document.getElementById("wishlistItems");

    if (!box) return;

    box.innerHTML = "";

    if (wishlist.length === 0) {
        box.innerHTML = "<p>Your wishlist is empty.</p>";
        return;
    }

    wishlist.forEach(function(item, index) {
        box.innerHTML += `
            <div>
                <h3>❤️ ${item}</h3>
                <button onclick="removeWishlist(${index})">
                    Remove
                </button>
            </div>
            <hr>
        `;
    });
}


// ---------- REMOVE WISHLIST ----------
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


// ---------- SEARCH PRODUCTS ----------
function searchProducts() {
    let searchBox = document.getElementById("search");

    if (!searchBox) return;

    let text = searchBox.value.toLowerCase();

    document
        .querySelectorAll("#productList .card")
        .forEach(function(card) {

            let productName =
                card.querySelector("h3").innerText.toLowerCase();

            if (productName.includes(text)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
}


// ---------- LOGIN ----------
function loginUser(event) {
    event.preventDefault();

    let email = document.getElementById("email");

    if (email) {
        alert("Welcome " + email.value + "!");
    }
}


// ---------- CONTACT ----------
function contactForm(event) {
    event.preventDefault();

    alert("Thank you! Your message has been sent.");

    event.target.reset();
}


// ---------- PAGE LOAD ----------
document.addEventListener("DOMContentLoaded", function() {
    displayCart();
    displayWishlist();
});        box.innerHTML = "<p>Your cart is empty.</p>";

        if (totalEl) {
            totalEl.innerText = "0";
        }

        return;
    }

    cart.forEach(function(item, index) {

        total += Number(item.price);

        box.innerHTML += `
            <div class="cart-item">
                <h3>${item.name}</h3>
                <p>Price: ₹${Number(item.price).toLocaleString("en-IN")}</p>

                <button onclick="removeFromCart(${index})">
                    Remove
                </button>
            </div>

            <hr>
        `;
    });

    if (totalEl) {
        totalEl.innerText = total.toLocaleString("en-IN");
    }
}


// REMOVE FROM CART
function removeFromCart(index) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}


// CHECKOUT
function checkout() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        alert("Your cart is empty! 🛒");
        return;
    }

    alert("Order placed successfully! 🎉");

    localStorage.removeItem("cart");

    displayCart();
}


// WISHLIST
function addWishlist(name) {

    let wishlist =
        JSON.parse(localStorage.getItem("wishlist")) || [];

    if (!wishlist.includes(name)) {

        wishlist.push(name);

        localStorage.setItem(
            "wishlist",
            JSON.stringify(wishlist)
        );

        alert(name + " added to wishlist! ❤️");

    } else {

        alert("Already in wishlist! ❤️");
    }
}


// DISPLAY WISHLIST
function displayWishlist() {

    let wishlist =
        JSON.parse(localStorage.getItem("wishlist")) || [];

    let box = document.getElementById("wishlistItems");

    if (!box) return;

    box.innerHTML = "";

    if (wishlist.length === 0) {

        box.innerHTML = "<p>Your wishlist is empty.</p>";

        return;
    }

    wishlist.forEach(function(item, index) {

        box.innerHTML += `
            <div>
                <h3>❤️ ${item}</h3>

                <button onclick="removeWishlist(${index})">
                    Remove
                </button>
            </div>

            <hr>
        `;
    });
}


// REMOVE WISHLIST
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


// SEARCH
function searchProducts() {

    let search = document.getElementById("search");

    if (!search) return;

    let text = search.value.toLowerCase();

    document.querySelectorAll("#productList .card").forEach(function(card) {

        let name = card.querySelector("h3").innerText.toLowerCase();

        card.style.display =
            name.includes(text) ? "block" : "none";
    });
}


// LOGIN
function loginUser(event) {

    event.preventDefault();

    let email = document.getElementById("email");

    if (email) {
        alert("Welcome " + email.value + "!");
    }
}


// CONTACT
function contactForm(event) {

    event.preventDefault();

    alert("Thank you! Your message has been sent.");

    event.target.reset();
}


// LOAD CART / WISHLIST
document.addEventListener("DOMContentLoaded", function() {

    displayCart();
    displayWishlist();

});    if (cart.length === 0) {

        cartItems.innerHTML = "<p>Your cart is empty.</p>";

        if (total) {
            total.innerText = "0";
        }

        return;
    }

    cart.forEach(function(item, index) {

        totalPrice += Number(item.price);

        cartItems.innerHTML += `
            <div class="cart-item">
                <h3>${item.name}</h3>
                <p>Price: ₹${Number(item.price).toLocaleString("en-IN")}</p>

                <button onclick="removeFromCart(${index})">
                    Remove
                </button>
            </div>
            <hr>
        `;
    });

    if (total) {
        total.innerText = totalPrice.toLocaleString("en-IN");
    }
}


// ---------- REMOVE FROM CART ----------
function removeFromCart(index) {

    let cart = JSON.parse(localStorage.getItem("shopEasyCart")) || [];

    cart.splice(index, 1);

    localStorage.setItem("shopEasyCart", JSON.stringify(cart));

    displayCart();
}


// ---------- CHECKOUT ----------
function checkout() {

    let cart = JSON.parse(localStorage.getItem("shopEasyCart")) || [];

    if (cart.length === 0) {

        alert("Your cart is empty! 🛒");

        return;
    }

    alert("Order placed successfully! 🎉");

    localStorage.removeItem("shopEasyCart");

    displayCart();
}


// ---------- WISHLIST ----------
function addWishlist(name) {

    let wishlist =
        JSON.parse(localStorage.getItem("shopEasyWishlist")) || [];

    if (!wishlist.includes(name)) {

        wishlist.push(name);

        localStorage.setItem(
            "shopEasyWishlist",
            JSON.stringify(wishlist)
        );

        alert(name + " added to wishlist! ❤️");

    } else {

        alert("Already in wishlist! ❤️");
    }
}


// ---------- DISPLAY WISHLIST ----------
function displayWishlist() {

    let wishlist =
        JSON.parse(localStorage.getItem("shopEasyWishlist")) || [];

    let box = document.getElementById("wishlistItems");

    if (!box) {
        return;
    }

    box.innerHTML = "";

    if (wishlist.length === 0) {

        box.innerHTML = "<p>Your wishlist is empty.</p>";

        return;
    }

    wishlist.forEach(function(item, index) {

        box.innerHTML += `
            <div class="wishlist-item">
                <h3>❤️ ${item}</h3>

                <button onclick="removeWishlist(${index})">
                    Remove
                </button>
            </div>
            <hr>
        `;
    });
}


// ---------- REMOVE WISHLIST ----------
function removeWishlist(index) {

    let wishlist =
        JSON.parse(localStorage.getItem("shopEasyWishlist")) || [];

    wishlist.splice(index, 1);

    localStorage.setItem(
        "shopEasyWishlist",
        JSON.stringify(wishlist)
    );

    displayWishlist();
}


// ---------- SEARCH PRODUCTS ----------
function searchProducts() {

    let searchBox = document.getElementById("search");

    if (!searchBox) {
        return;
    }

    let searchText = searchBox.value.toLowerCase();

    let cards = document.querySelectorAll(
        "#productList .card"
    );

    cards.forEach(function(card) {

        let productName =
            card.querySelector("h3").innerText.toLowerCase();

        if (productName.includes(searchText)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";
        }
    });
}


// ---------- LOGIN ----------
function loginUser(event) {

    event.preventDefault();

    let email = document.getElementById("email");

    if (email) {

        alert("Welcome " + email.value + "!");

    }
}


// ---------- CONTACT ----------
function contactForm(event) {

    event.preventDefault();

    alert("Thank you! Your message has been sent.");

    event.target.reset();
}


// ---------- AUTO LOAD ----------
document.addEventListener("DOMContentLoaded", function() {

    displayCart();

    displayWishlist();

});// ===============================
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
