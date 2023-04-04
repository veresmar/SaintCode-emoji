import {data as emoji} from './data.js';

const main = document.querySelector('main');

const container = document.createElement('div');
container.className = 'container';

main.append(container);

const input = document.querySelector("#finder");



function findEmoji() {
  let value = input.value.toLowerCase().trim();
  container.innerHTML = '';
  let sort = emoji.filter(el => 
    el.keywords.toLowerCase().trim().includes(value) || '');
  renderCard(sort);
}

input.addEventListener('input', findEmoji)

function renderCard(data) {
  data.forEach(element => createCard(element));
}

renderCard(emoji)

function createCard(obj) {
  const card = document.createElement('div');
  card.className = 'card';

  const symbol = document.createElement('p');
  symbol.className = 'symbol';
  symbol.textContent = `${obj.symbol}`

  const title = document.createElement('h2');
  title.className = 'title';
  title.textContent = `${obj.title}`;

  const keywords = document.createElement('p');
  keywords.className = 'keywords';
  keywords.textContent = `${obj.keywords}`;

  card.append(symbol, title, keywords);
  container.append(card);
}

