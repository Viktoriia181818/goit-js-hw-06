const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsItem = document.querySelector('#ingredients');
const ulIngredients = [];

ingredients.forEach((ingredient) => {
  const item = document.createElement('li');
  item.className = 'item';
  item.textContent = ingredient;

  ulIngredients.push(item);
});

ingredientsItem.append(...ulIngredients);
