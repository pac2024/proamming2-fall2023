document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.getElementById('contact-popup').style.display = 'flex';
    }, 5000);
});

function acceptContact() {
    alert('Great! Press OK and fill out our form!');
    window.location.href = 'contact.html';
}


function closePopup() {
    document.getElementById('contact-popup').style.display = 'none';
}
