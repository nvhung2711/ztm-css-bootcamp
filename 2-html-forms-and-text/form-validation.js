function validateUsername() {
    var usernameInput = document.getElementById('username');
    var isValid = usernameInput.checkValidity();
    usernameInput.setAttribute('aria-invalid', !isValid);
}

function updateTotal() {
    var price = parseFloat(document.getElementById('price').value);
    var quantity = parseInt(document.getElementById('quantity').value);
    var total = price * quantity;
    document.getElementById('total').value = '$' + total.toFixed(2);
}