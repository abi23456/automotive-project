// Define the products array
const products = [
    {
        id: 1,
        name: "Engine Part A",
        description: "High-quality engine part for improved performance",
        image: "engine-part-a.jpg",
        category: "engine",
        price: 49.99,
        inStock: 100,
        demand: 80
    },
    {
        id: 2,
        name: "Brake Pad Set",
        description: "Durable brake pads for enhanced safety",
        image: "brake-pad-set.jpg",
        category: "brakes",
        price: 29.99,
        inStock: 50,
        demand: 60
    },
    {
        id: 3,
        name: "Suspension Shock",
        description: "Smooth and responsive suspension for a comfortable ride",
        image: "suspension-shock.jpg",
        category: "suspension",
        price: 99.99,
        inStock: 30,
        demand: 40
    },
    {
        id: 4,
        name: "Tire Set",
        description: "High-performance tires for improved handling and grip",
        image: "tire-set.jpg",
        category: "tires",
        price: 199.99,
        inStock: 20,
        demand: 70
    }
];

// Get the product list element
const productList = document.getElementById('product-list');

// Function to render the product list
function renderProductList() {
    productList.innerHTML = '';

    products.forEach((product) => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');

        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Price: $${product.price.toFixed(2)}</p>
            <p>In Stock: ${product.inStock}</p>
            <p>Demand: ${product.demand}</p>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        `;

        productList.appendChild(productElement);
    });
}

// Function to add a product to the cart
function addToCart(productId) {
    const product = products.find((p) => p.id === productId);
    if (product.inStock > 0) {
        // Implement cart functionality here
        console.log(`Added ${product.name} to the cart.`);
        product.inStock--;
        product.demand++;
        renderProductList();
    } else {
        console.log(`${product.name} is out of stock.`);
    }
}

// Add event listener to the product list
productList.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart')) {
        const productId = parseInt(e.target.dataset.id);
        addToCart(productId);
    }
});

// Initial render of the product list
renderProductList();
