const card = document.querySelector('#ga-7096a2 .card__content--h5');

card.textContent = 'Example of Updating Page Content';

const container = document.createElement('span');

container.textContent = ', right now!';

const mainHeading = document.querySelector('h1');

mainHeading.appendChild(container);

const cardContainer = document.querySelector('.hero__module');

const firstCard = cardContainer.firstElementChild

cardContainer.removeChild(firstCard);

const heading = document.querySelector('.text-center');

heading.style.color = 'orange';

heading.style.fontSize = '2em';

console.log(heading.classList.contains('text-center'));

heading.classList.add('ice-cream');

heading.classList.remove('ice-cream');

//heading.classList.toggle('text-center');

document.addEventListener('click', function() {
    const mainHeading = document.querySelector('h1');
    mainHeading.style.background = 'red';
})

document.body.addEventListener('keypress', function () {
    console.log('removing first child');
    document.querySelector('#contain-all').firstElementChild.remove();
})


