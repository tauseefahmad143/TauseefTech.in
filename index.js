const searchInput = document.querySelector('.searchinput');
const contents = document.querySelectorAll('.box-list');
const searchButton = document.querySelector('.search-button'); // Assuming a search button exists

// Function to perform search
function performSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();

    contents.forEach(content => {
        const title = content.querySelector('span').textContent.toLowerCase(); // Corrected to textContent

        if (searchTerm === '' || title.includes(searchTerm)) {

            content.style.display = 'block';
            let containerWidth=document.querySelector('.container');
                containerWidth.style.width=1159+'px';
                containerWidth.style.transition="all 0.4s ease";
        } else {
            content.style.display = 'none';
            let containerWidth=document.querySelector('.container');
            containerWidth.style.transition="all 0.4s ease";
        }
    });
}

searchInput.addEventListener('input',function(event)
{ 
    performSearch();
})

// Event listener for Enter key press
searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
});

// Event listener for search button click
searchButton.addEventListener('click', function(event) {
    performSearch();
});
