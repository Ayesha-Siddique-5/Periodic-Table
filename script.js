// Function to display modal with element information
document.querySelectorAll('.element').forEach(function(element) {
    element.addEventListener('click', function() {
        let elementInfo = element.querySelector('span:nth-child(2)').textContent; // Element Symbol
        let elementName = element.querySelector('span:nth-child(3)').textContent; // Element Name
        let elementNumber = element.querySelector('span:nth-child(1)').textContent; // Atomic Number
        let elementDetails = `Atomic Number: ${elementNumber}<br>Symbol: ${elementInfo}<br>Name: ${elementName}<br>Additional information here...`;

        // Update modal content dynamically
        document.querySelector('#elementModal .modal-body').innerHTML = elementDetails;

        // Show the modal
        var myModal = new bootstrap.Modal(document.getElementById('elementModal'));
        myModal.show();
    });
});

// Filter elements by group (alkali, noble gases, etc.)
function filterElements(group) {
    const elements = document.querySelectorAll('.element');
    elements.forEach(function(element) {
        if (!element.classList.contains(group)) {
            element.style.display = 'none';
        } else {
            element.style.display = 'flex';
        }
    });
}

// Search function to search for elements by name or symbol
function searchElements() {
    let searchQuery = document.getElementById('search-bar').value.toLowerCase();
    const elements = document.querySelectorAll('.element');
    elements.forEach(function(element) {
        let elementName = element.querySelector('span:nth-child(3)').textContent.toLowerCase();
        let elementSymbol = element.querySelector('span:nth-child(2)').textContent.toLowerCase();
        if (elementName.includes(searchQuery) || elementSymbol.includes(searchQuery)) {
            element.style.display = 'flex';
        } else {
            element.style.display = 'none';
        }
    });
}

// Hover effect for elements
document.querySelectorAll('.element').forEach(function(element) {
    element.addEventListener('mouseenter', function() {
        element.style.backgroundColor = '#dcdcdc'; // Change color on hover
    });

    element.addEventListener('mouseleave', function() {
        element.style.backgroundColor = ''; // Reset color when hover ends
    });
});

// Adding tooltips for element information
document.querySelectorAll('.element').forEach(function(element) {
    element.setAttribute('title', function() {
        let elementName = element.querySelector('span:nth-child(3)').textContent;
        let elementSymbol = element.querySelector('span:nth-child(2)').textContent;
        let elementNumber = element.querySelector('span:nth-child(1)').textContent;
        return `Name: ${elementName}\nSymbol: ${elementSymbol}\nAtomic Number: ${elementNumber}`;
    });
});

// Example of using modal for each element click
document.querySelectorAll('.element').forEach(function(element) {
    element.addEventListener('click', function() {
        let modalContent = `Element: ${element.querySelector('span:nth-child(3)').textContent}<br>Symbol: ${element.querySelector('span:nth-child(2)').textContent}`;
        // Dynamically set modal content
        document.querySelector('#elementModal .modal-body').innerHTML = modalContent;
        // Open modal (Bootstrap modal)
        var myModal = new bootstrap.Modal(document.getElementById('elementModal'));
        myModal.show();
    });
});

// Search bar listener
document.getElementById('search-bar').addEventListener('input', function() {
    searchElements();
});

// Button event listeners for filtering by group (alkali, noble gases, etc.)
document.getElementById('filter-alkali').addEventListener('click', function() {
    filterElements('alkali');
});
document.getElementById('filter-noble-gas').addEventListener('click', function() {
    filterElements('noble-gas');
});
// Add more filter buttons as needed
