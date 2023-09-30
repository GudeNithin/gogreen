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
        alert(`Confirm Your Payment`);
    
        // Optionally, you can hide the button and total amount container
        proceedButton.style.display = "none";
        totalAmountContainer.style.display = "none";
    
        // Call the buttonClick function to set the background image
        buttonClick();
    });

function buttonClick(){
    document.getElementById("successMessageContainer").style.backgroundImage='url("C:\Users\chand\Desktop\Mini Project\responsive-plants-website-main\assets\img\paymentSuccess.png")';
}
});
