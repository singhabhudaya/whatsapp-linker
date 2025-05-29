const phoneNumberInput = document.getElementById('phoneNumber');
const generateLinkBtn = document.getElementById('generateLinkBtn');
const resultDiv = document.getElementById('result');

generateLinkBtn.addEventListener('click', createWhatsAppLink);
phoneNumberInput.addEventListener('keypress', function(event) {
    // If the user presses "Enter" in the input field
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent form submission (if it were in a form)
        createWhatsAppLink();
    }
});


function createWhatsAppLink() {
    const number = phoneNumberInput.value.trim(); // Get value and remove whitespace

    // Basic validation
    if (number.length !== 10 || !/^\d{10}$/.test(number)) {
        resultDiv.innerHTML = '<p style="color: red;">Please enter a valid 10-digit number.</p>';
        return;
    }

    const waLink = `https://wa.me/91${number}`;

    // Create a clickable link
    resultDiv.innerHTML = `<a href="${waLink}" target="_blank" rel="noopener noreferrer" class="wa-link">Chat with +91 ${number} on WhatsApp</a>`;

    // Optional: Clear the input field after generating link
    // phoneNumberInput.value = '';
}
