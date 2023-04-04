import {data as emoji} from './data.js';

const main = document.querySelector('main');

const container = document.createElement('div');
container.className = 'container';

main.append(container);
/**
 * Функция рисует все карточки
 */
renderCard(emoji)

/**
 * Получаем объекты все карточек для дальшейшей работы
 * Важно! Поиск карточек должен осуществляться после их отрисовки
 * Object.values() - так как querySelectorAll возвращает объект
 * @type {Element[]}
 */
const cards = Object.values(document.querySelectorAll(".card"))

/**
 * Получаем элемента поля ввода, что бы в дальнейшем получать из него значение
 * @type {Element}
 */
const input = document.querySelector("#finder")

/**
 * Если значнеие в поле ввода изенено, то запускаем функцию filterCards()
 */
input.addEventListener("change", (event) => {
  filterCards(cards, event.target.value)
})

/**
 * Функция фильтрации карточек cards по значению из поля textFilter
 * @param cards Array of objects
 * @param textFilter
 */
function filterCards(cards, textFilter) {
  // Преобразуем значение в нижний регистр
  textFilter = textFilter.toLowerCase()
  // перебираем все карточки
  cards.map((card) => {
      // Получаем описание из карточки и преобразуем к нижнему регистру
      const cardDesc = card.children[2].innerHTML.toLowerCase()
      // Если описание карточки включает в себя текст для поиска (textFilter)
      if (cardDesc.includes(textFilter)) {
          card.style.display = 'flex'
      } else {
          card.style.display = 'none'
      }
  })
}
/**
 * Функция отрисовки карточек
 * @param data
 */
function renderCard(data) {
  // TODO: Проверку на совдения в описании
  data.forEach(element => createCard(element));
}

function deleteDuplicates(desc) {
  // TODO: написать логику
}


// const wrapper = document.createElement('div');
// wrapper.className = 'wrapper';


// document.body.append(container);


// let card = {
//   title: '100',
//   symbol: '',
//   keywords: 'Hundred, points, symbol, wow, win, perfect, parties',
// }

function createCard(obj) {
  const card = document.createElement('div');
  card.className = 'card';

  // const card_wrap = document.createElement('div');
  // card_wrap.className = 'card_wrap';

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
  // card.append(card_wrap);
  container.append(card);
}

