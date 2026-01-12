// Select the Like button
const likeBtn = document.querySelector('button');
let likes = 0;

likeBtn.addEventListener('click', () => {
    likes++;
    alert(`You liked this! Total likes: ${likes}`);
});

// Select the input field
const input = document.querySelector('input');
const container = document.querySelector('.container');

// Create a paragraph for showing comments
const commentDisplay = document.createElement('p');
container.appendChild(commentDisplay);

input.addEventListener('keypress', function(event) {
    if(event.key === 'Enter') { // submit comment with Enter
        const comment = input.value.trim();
        if(comment !== '') {
            commentDisplay.textContent = `Your comment: ${comment}`;
            input.value = ''; // clear input
        }
    }
});

const img = document.querySelector('img');

img.addEventListener('click', () => {
    img.style.transform = 'scale(1.2)';
    img.style.transition = 'transform 0.3s';
    setTimeout(() => {
        img.style.transform = 'scale(1)';
    }, 300);
});

const aboutLink = document.querySelector('nav a[href="about.html"]');
const aboutHeading = document.querySelector('h1:nth-of-type(2)'); // About me heading

aboutLink.addEventListener('click', function(e){
    e.preventDefault(); // prevent default link
    aboutHeading.scrollIntoView({ behavior: 'smooth' });
});

const listItems = document.querySelectorAll('ul li');

listItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.color = 'orange';
        item.style.fontWeight = 'bold';
    });
    item.addEventListener('mouseleave', () => {
        item.style.color = '';
        item.style.fontWeight = '';
    });
});
