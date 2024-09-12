const video = document.getElementById('video');

// Request access to back camera
navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
  .then(stream => {
    video.srcObject = stream;
    video.play();
  })
  .catch(error => console.error('Error accessing camera:', error));

// Instascan library
const scanner = new Instascan.Scanner({
  video: video,
  scanPeriod: 10, // Scan frequency in milliseconds
  continuous: true,
});

scanner.addListener('scan', (content, image) => {
  // Redirect to scanned URL
  window.location.href = content;
});

// Start scanning
scanner.start();
