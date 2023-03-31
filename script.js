let card = {
  emoji: '💯',
  title: '100',
  keywords: 'Hundred, points, symbol, wow, win, perfect, parties',
}


function createCard(obj) {
  const card = document.createElement('div');
  card.className = 'card';

  const emoji = document.createElement('p');


  const title = document.createElement('h2');
  title.textContent = obj.name;
  title.className = 'title';

  const keywords = document.createElement('p');

  card.append(emoji, title, keywords);
  document.body.append(card);

}

createCard(card);