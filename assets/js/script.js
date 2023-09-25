document.addEventListener("DOMContentLoaded", function () {
    // Get the button and containers
    const proceedButton = document.getElementById("proceedToPaymentBtn");
    const totalAmountContainer = document.getElementById("totalAmountContainer");
    const successMessageContainer = document.getElementById("successMessageContainer");

    // Define the total amount (you can calculate it based on your needs)
    const totalAmount = 100; // Replace with the actual total amount

    // Attach a click event listener to the "Proceed to Payment" button
    proceedButton.addEventListener("click", function () {
        // Display the total amount alert
        alert(`Total Amount: $${totalAmount}`);

        // Display the transaction success message with an image
        successMessageContainer.innerHTML = `
            <p>Transaction Successful</p>
            <img src="success-image.png" alt="Transaction Successful">
        `;

        // Optionally, you can hide the button and total amount container
        proceedButton.style.display = "none";
        totalAmountContainer.style.display = "none";
    });
});
