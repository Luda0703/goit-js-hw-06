const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("ul#ingredients");
const firstItem = document.createElement("li");
firstItem.textContent = "Potatoes";
firstItem.className = ("item");
list.append(firstItem);

const secondItem = document.createElement("li");
secondItem.textContent = 'Mushrooms';
secondItem.className = ("item");
list.append(secondItem);

const thirdItem = document.createElement("li");
thirdItem.textContent = 'Garlic';
thirdItem.className = ("item");
list.append(thirdItem);

const fourthItem = document.createElement("li");
fourthItem.textContent = 'Tomatos';
fourthItem.className = ("item");
list.append(fourthItem);

const fifthItem = document.createElement("li");
fifthItem.textContent = 'Herbs';
fifthItem.className = ("item");
list.append(fifthItem);

const sixthItem = document.createElement("li");
sixthItem.textContent = 'Condiments';
sixthItem.className = ("item");
list.append(sixthItem);
//list.append(...allIngredients);
console.log(list)















