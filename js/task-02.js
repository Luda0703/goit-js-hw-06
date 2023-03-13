
// HTML містить порожній список ul#ingredients.
// JavaScript містить масив рядків.
// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngradients = document.querySelector('#ingredients');

const makeListIngradients = ingredients => {
  return ingredients.map((ingredient) => {
    const listElement= document.createElement('li');
    listElement.classList.add('item');
    listElement.textContent = ingredient;
return listElement;
  });
}
const elements = makeListIngradients(ingredients)
console.log(elements)
listIngradients.append(...elements)
console.log(listIngradients)



// const list = document.querySelector("ul#ingredients");
// const firstItem = document.createElement("li");
// firstItem.textContent = "Potatoes";
// firstItem.className = ("item");
// list.append(firstItem);

// const secondItem = document.createElement("li");
// secondItem.textContent = 'Mushrooms';
// secondItem.className = ("item");
// list.append(secondItem);

// const thirdItem = document.createElement("li");
// thirdItem.textContent = 'Garlic';
// thirdItem.className = ("item");
// list.append(thirdItem);

// const fourthItem = document.createElement("li");
// fourthItem.textContent = 'Tomatos';
// fourthItem.className = ("item");
// list.append(fourthItem);

// const fifthItem = document.createElement("li");
// fifthItem.textContent = 'Herbs';
// fifthItem.className = ("item");
// list.append(fifthItem);

// const sixthItem = document.createElement("li");
// sixthItem.textContent = 'Condiments';
// sixthItem.className = ("item");
// list.append(sixthItem);

// console.log(list)















