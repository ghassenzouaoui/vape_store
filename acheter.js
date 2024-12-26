//Initialize the total price when the page loads
updateTotalPrice();

//button
function redirectToForm() {
    window.location.href = "formulaire.html"; // Remplacez "formulaire.html" par l'URL de votre page.
}
  
function redirectToForm() {
    // Récupérer le total price
    const totalPrice = document.getElementById("total").textContent.trim();

    // Stocker le total price dans localStorage
    localStorage.setItem("totalPrice", totalPrice);

    // Rediriger vers la page formulaire
    window.location.href = "formulaire.html";
  }
  
  function redirectToForm() {
    const totalPrice = document.getElementById("total").textContent.trim();

    // Récupérer les produits sélectionnés avec leurs quantités
    const selectedProducts = [];
    document.querySelectorAll(".card").forEach((card) => {
      const qte = parseInt(card.querySelector(".qte").textContent.trim(), 10);
      if (qte > 0) {
        selectedProducts.push({
          id: card.id, // ID du produit
          quantity: qte, // Quantité sélectionnée
        });
      }
    });

    // Stocker les données dans localStorage
    localStorage.setItem("totalPrice", totalPrice);
    localStorage.setItem("selectedProducts", JSON.stringify(selectedProducts));

    // Rediriger vers la page formulaire
    window.location.href = "formulaire.html";
  }
  