function generateBarcode() {
            try {
                const pin = document.getElementById('pinInput').value;
                const name = document.getElementById('nameInput').value;
                const dob = document.getElementById('dobInput').value;
                const ds = document.getElementById('dsInput').value;

                const barcodeData = `<pin>${pin}</pin><name>${name}</name><DOB>${dob}</DOB><ds>${ds}</ds>`;

                // Remove existing barcode canvas if any
                const barcodeContainer = document.getElementById('barcode-container');
                barcodeContainer.innerHTML = ''; // Clears the container before adding a new barcode

                // Create new canvas
                const canvas = document.createElement('canvas');
                canvas.id = "barcodeCanvas"; // Set an ID
                canvas.style.position = "absolute";
                canvas.style.top = "225px";
                canvas.style.left = "415px";
                canvas.style.width = "308px";
                canvas.style.height = "45px";      

                barcodeContainer.appendChild(canvas);

                // Generate the barcode
                bwipjs.toCanvas(canvas, {
                    bcid: 'pdf417',
                    text: barcodeData,
                    scale: 15, // Adjust scale if needed
                    includetext: false
                });
            } catch (e) {
                console.error("Barcode generation error: ", e);
            }
        }

        window.onload = function() {
            document.getElementById('pinInput').value = "19966702747808367";
            document.getElementById('nameInput').value = "Sahriar Ahmed";
            document.getElementById('dobInput').value = "02 Jun 1996";
            document.getElementById('dsInput').value = "4f2a8d3c7e51b029c6d7e84f0a23b5c9d1e6f4072bdc8a5319ef26a0387d45be6f0c3d2a9b4187e52d6c0f1348a9b2c1";
            
            generateBarcode(); // Auto-generate barcode on load
        };