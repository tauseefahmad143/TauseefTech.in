let inputElement = document.querySelector('.input');
let inputContainer=document.querySelector('.input-container');

setHeight();

function setHeight()
{
    if(inputContainer.value==null)
    {
	    // inputContainer.style.height= 43 + 'px';
    }
}

let userInput = inputElement.value;
let msg=document.querySelector(".container .nullMassage");
tagCounter();
inputElement.addEventListener("keypress", function(event) {
    if (event.key === 'Enter') {
        if (inputElement.value.trim() === '') { 
            msg.style.display='block';
        } else {
               let input = inputElement.value.split(' ');
               let ul = document.querySelector('ul');
                msg.style.display = 'none';

    input.forEach(function(inputValue) {
        let tag = document.createElement('li');
        tag.classList.add('tag');
        tag.innerHTML = `${inputValue}<i class="fa-solid fa-xmark cancel"></i>`;
        ul.insertBefore(tag, inputElement);
    });

    inputElement.value = '';
    tagCounter();
}

        event.preventDefault();
    }
});


let ul=document.querySelector('ul');
function tagCounter() {
	let span=document.querySelector(".paraButt .text .counter");
	    let totalTags = document.querySelectorAll("ul li").length;
    span.textContent = totalTags;
}
tagCounter();

function removeAll()
{
	let allTags=document.querySelector('.allTags');
	allTags.remove()
	tagCounter();
	setHeight();
}

ul.addEventListener("click", function(event) {
    if (event.target.classList.contains('cancel')) {
        let tag = event.target.parentNode;
        ul.removeChild(tag);
        tagCounter();
        setHeight();
    }
});