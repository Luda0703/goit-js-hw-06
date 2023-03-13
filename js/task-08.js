//  управління формою логіна.
// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості,
// а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.Напиши скрипт


const form = document.querySelector('.login-form');
form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
  
    if (!email.value.trim() || !password.value.trim()) {
      return alert('Всі поля повинні бути заповнені!!!');
    } else {
      const formData = {
        email: email.value,
        password: password.value,
      };
      console.log(formData);
      event.currentTarget.reset();
    }
  }


