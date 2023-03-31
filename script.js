import {data as emoji} from 'data.js';
console.log(emoji);

const wrapper = document.createElement('div');
wrapper.className = 'wrapper';
document.body.append(wrapper);

const main = document.querySelector('main');

const container = document.createElement('div');
container.className = 'container';

main.append(container);

let card = {
  emoji: '💯',
  title: '100',
  keywords: 'Hundred, points, symbol, wow, win, perfect, parties',
}

function createCard(obj) {
  const card = document.createElement('div');
  card.className = 'card';

  const card_wrap = document.createElement('div');
  card_wrap.className = 'card_wrap';

  const emoji = document.createElement('p');
  emoji.className = 'emoji';
  emoji.textContent = '💯'

  const title = document.createElement('h2');
  title.className = 'title';
  title.textContent = `${obj.title}`;

  const keywords = document.createElement('p');
  keywords.className = 'keywords';
  keywords.textContent = `${obj.keywords}`;

  card_wrap.append(emoji, title, keywords);
  card.append(card_wrap);
  container.append(card);
}

createCard(card);