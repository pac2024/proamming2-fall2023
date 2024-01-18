document.addEventListener('DOMContentLoaded', function() {
    // Delay showing the popup for 5 seconds (5000 milliseconds)
    setTimeout(function() {
        document.getElementById('contact-popup').style.display = 'flex';
    }, 5000);
});

function acceptContact() {
    alert('Great! Press OK and fill out our form!');
    // Add the redirection logic here
    window.location.href = 'contact.html';
}


function closePopup() {
    document.getElementById('contact-popup').style.display = 'none';
}
