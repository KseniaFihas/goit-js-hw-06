const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients");

const listArray = [];

ingredients.forEach((ingridient) => {

  const listItem = document.createElement('li');

  listItem.textContent = ingridient;

  listItem.classList.add('item');

  listArray.push(listItem);
});


list.append(...listArray);
