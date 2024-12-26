// Function to change the main image when a thumbnail is clicked
function changeMainImage(imageSrc) {
    document.getElementById("main-image").src = imageSrc;
}

// Function to update the total price
function updateTotalPrice() {
    let total = 0;
    const productCards = document.querySelectorAll('.card');
    productCards.forEach(card => {
        const unitPrice = parseInt(card.querySelector('.unit-price').textContent);
        const quantity = parseInt(card.querySelector('.qte').textContent);
        total += unitPrice * quantity;  // Add the price of each product based on quantity
    });

    const totalPriceElement = document.getElementById('total');  // Target the total price span

    // Display total price only if it's greater than 0
    if (total > 0) {
        totalPriceElement.textContent = total;  // Show total price
    } else {
        totalPriceElement.textContent = '';  // Clear total price when it's 0
    }
}

// Add event listeners to all product cards for the plus and minus buttons
document.querySelectorAll('.plus-btn').forEach(btn => {
    btn.addEventListener('click', (event) => {
        const quantityElement = event.target.closest('.card').querySelector('.qte');
        let quantity = parseInt(quantityElement.textContent);
        quantity++;  // Increase quantity by 1
        quantityElement.textContent = quantity;
        updateTotalPrice();  // Recalculate the total price
    });
});

document.querySelectorAll('.minus-btn').forEach(btn => {
    btn.addEventListener('click', (event) => {
        const quantityElement = event.target.closest('.card').querySelector('.qte');
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 0) {
            quantity--;  // Decrease quantity by 1, if it's greater than 0
            quantityElement.textContent = quantity;
            updateTotalPrice();  // Recalculate the total price
        }
    });
});

// Optional: Add functionality for the trash icon (remove item) and heart icon (favorite item)
document.querySelectorAll('.fa-trash-alt').forEach(icon => {
    icon.addEventListener('click', (event) => {
        const card = event.target.closest('.card');
        card.remove();  // Remove the product card
        updateTotalPrice();  // Recalculate total price after removal
    });
});

document.querySelectorAll('.fa-heart').forEach(icon => {
    icon.addEventListener('click', (event) => {
        event.target.classList.toggle('toggleHeart');
        // coul3.classList.toggle("");
    });
});

