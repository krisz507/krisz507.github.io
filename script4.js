const products = [
    { id: 1, name: "Mental Focus (Scitec)", price: 2000 },
    { id: 2, name: "Arthro Forte (BiotTechUSA)", price: 3500 },
    { id: 3, name: "Aswhaganda KSM-66 (MyVitamins)", price: 4000 },
    { id: 4, name: "FFlow (?)", price: 5000 },
    { id: 5, name: "FueBrain (GymBeam)", price: 5500 },
    { id: 6, name: "Maca (Gymbeam)", price: 6000 },
    { id: 7, name: "Protein Por 1kg (Scitec)", price: 8000 },
    { id:8, name: "Vitaminok és Animósavak (GymBeam)", price: 9990 },
];

let cart = [];

const productList = document.getElementById("product-list");
products.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.className = "product";
    productDiv.innerHTML = `
        <span>${product.name} - ${product.price} Ft</span>
        <button onclick="addToCart(${product.id})">Kosárba</button>
    `;
    productList.appendChild(productDiv);
});

function updateCart() {
    const cartList = document.getElementById("cart-list");
    const totalPriceElement = document.getElementById("total-price");
    const totalItemsElement = document.getElementById("total-items");
    cartList.innerHTML = ""; 

    if (cart.length === 0) {
        cartList.innerHTML = "<p>A kosarad üres.</p>";
        totalPriceElement.textContent = "Összesen: 0 Ft";
        totalItemsElement.textContent = "Termékek száma: 0";
    } else {
        let totalPrice = 0;
        let totalItems = 0;

        cart.forEach((item, index) => {
            const cartItemDiv = document.createElement("div");
            cartItemDiv.className = "cart-item";
            cartItemDiv.innerHTML = `
                <span>${item.name} - ${item.price} Ft (Mennyiség: ${item.quantity})</span>
                <button onclick="removeFromCart(${index})">Eltávolítás</button>
            `;
            cartList.appendChild(cartItemDiv);

            totalPrice += item.price * item.quantity;
            totalItems += item.quantity;
        });

        totalPriceElement.textContent = `Összesen: ${totalPrice} Ft`;
        totalItemsElement.textContent = `Termékek száma: ${totalItems}`;
    }
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingProduct = cart.find(item => item.id === productId);

    if (existingProduct) {
    
        existingProduct.quantity++;
    } else {
   
        cart.push({ ...product, quantity: 1 });
    }
    updateCart();
}

function removeFromCart(index) {
    const item = cart[index];
    if (item.quantity > 1) {
     
        item.quantity--;
    } else {
       
        cart.splice(index, 1);
    }
    updateCart();
}

document.getElementById("checkout-button").addEventListener("click", () => {
    if (cart.length === 0) {
        alert("A kosarad üres!");
        return;
    }
    document.getElementById("checkout-form").style.display = "block";
});


document.getElementById("vasarlas").addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const email = document.getElementById("email").value;

    alert(`Köszönjük, ${name}! A rendelésedet feldolgozzuk és a következő címre küldjük: ${address}`);
    cart = [];
    updateCart();
    document.getElementById("checkout-form").style.display = "none";
    event.target.reset();
});
