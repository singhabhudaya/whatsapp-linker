document.addEventListener('DOMContentLoaded', () => {
    const phoneNumberInput = document.getElementById('phoneNumber');
    const generateLinkBtn = document.getElementById('generateLinkBtn');
    const resultArea = document.getElementById('resultArea');

    // Function to create and open WhatsApp link
    function openWhatsAppChat() {
        const number = phoneNumberInput.value.trim();
        resultArea.innerHTML = ''; // Clear previous results

        // Validate the number
        if (number.length !== 10 || !/^\d{10}$/.test(number)) {
            const errorMessage = document.createElement('p');
            errorMessage.textContent = 'Please enter a valid 10-digit Indian mobile number.';
            errorMessage.className = 'error-message';
            resultArea.appendChild(errorMessage);
            phoneNumberInput.focus(); // Re-focus on the input for correction
            return;
        }

        const waLink = `https://wa.me/91${number}`;

        // For mobile, directly try to open. For desktop, show a clickable link.
        // We can simplify and just always try to open, browsers handle it.
        // Or provide a link for desktop users to click if auto-redirect feels too aggressive.

        // Create a link element for better accessibility and user control
        const linkElement = document.createElement('a');
        linkElement.href = waLink;
        linkElement.textContent = `Chat with +91 ${number}`;
        linkElement.className = 'wa-link'; // For styling
        linkElement.target = '_blank'; // Open in new tab or WhatsApp app
        linkElement.rel = 'noopener noreferrer'; // Security best practice

        // Append the link and then programmatically click it to initiate action
        // resultArea.appendChild(linkElement);
        // linkElement.click(); // This can sometimes be blocked by popup blockers or feel abrupt.

        // Safer approach: Just open the window.
        // Users are more accustomed to this flow from web to app.
        window.open(waLink, '_blank');


        // Optional: Display the link as well if the user wants to copy it or if auto-open fails
        resultArea.innerHTML = `<p>Opening chat with +91 ${number}...</p><p><a href="${waLink}" target="_blank" rel="noopener noreferrer" class="wa-link">Click here if it doesn't open automatically</a></p>`;


        // Optional: Clear the input after successful attempt
        // phoneNumberInput.value = '';
    }

    // Event listener for the button
    generateLinkBtn.addEventListener('click', openWhatsAppChat);

    // Event listener for "Enter" key in the input field
    phoneNumberInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent default form submission if it were in a form
            openWhatsAppChat();
        }
    });

    // Ensure keyboard is focused on load (autofocus attribute should handle this, but good fallback)
    // if (phoneNumberInput) {
    //     phoneNumberInput.focus();
    // }
});