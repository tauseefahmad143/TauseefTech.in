const searchInput = document.querySelector('.searchinput');
const contents = document.querySelectorAll('.images');

searchInput.addEventListener('input', function(event) {
    const searchTerm = event.target.value.toLowerCase().trim();

    contents.forEach(content => {
        const title = content.querySelector('h3').textContent.toLowerCase();

        if (searchTerm === '' || title.includes(searchTerm)) {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
});
