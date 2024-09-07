const video = document.getElementById('video');

// Request access to back camera
navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
	.then(stream => {
		video.srcObject = stream;
		video.play();
	})
	.catch(error => console.error('Error accessing camera:', error));

// QR code scanner library
const qrCodeScanner = new QrCodeScanner(
	video,
	result => {
		// Redirect to scanned URL
		window.location.href = result.data;
	},
	{
		// Optional settings
		frequency: 10, // Scan frequency in milliseconds
		decoder: {
			// Use a specific decoder (e.g., for UPC or EAN codes)
			// decoder: 'upc'
		}
	}
);

// Start scanning
qrCodeScanner.start();
