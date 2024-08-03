// content.js
(function() {
    if (typeof window !== 'undefined') {
        // Create a hidden div element
        var hiddenDiv = document.createElement('div');
        hiddenDiv.id = 'extmemeinst';
        hiddenDiv.style.display = 'none';
        
        // Append the hidden div to the body
        document.body.appendChild(hiddenDiv);
        
        console.log("ZipStreams Extension is installed and hidden div added.");
    } else {
        console.error("window object is not available.");
    }
})();