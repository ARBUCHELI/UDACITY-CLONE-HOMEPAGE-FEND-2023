const card = document.querySelector('#ga-7096a2 .card__content--h5');

card.textContent = 'Example of Updating Page Content';

const container = document.createElement('span');

container.textContent = ', right now!';

const mainHeading = document.querySelector('h1');

mainHeading.appendChild(container);

const cardContainer = document.querySelector('.hero__module');

const firstCard = cardContainer.firstElementChild

cardContainer.removeChild(firstCard);

