function generateQR() {
    var urlInput = document.getElementById('urlInput').value;
    var qrCodeContainer = document.getElementById('qrCode');

    if (urlInput.trim() === '') {
        alert('Please enter a valid URL');
        return;
    }

    qrCodeContainer.innerHTML = ''; // Clear previous QR code

    var qr = new QRious({
        element: qrCodeContainer,
        value: urlInput
    });

    qrCodeContainer.style.display = 'block'; // Display the QR code container
}
