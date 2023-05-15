// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо 
// правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна 
// кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли 
// завдання.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }


  const input = document.querySelector('#validation-input');

  function handleInputBlur() {
    const requiredLength = parseInt(input.getAttribute('data-length'));
    const inputLength = input.value.length;

    if (inputLength === requiredLength) {
      input.classList.remove('#validation-input.invalid');
      input.classList.add('#validation-input.valid');
    } else {
      input.classList.remove('#validation-input.valid');
      input.classList.add('#validation-input.invalid');
    }
  }

  input.addEventListener('blur', handleInputBlur);




// <script>
//     const inputEl = document.querySelector('#name-input');
//     const outputEl = document.querySelector('#name-output');

//     inputEl.addEventListener('input', event => {
//       const name = event.target.value;
//       outputEl.textContent = name ? name : 'Anonymous';
//     });
//   </script>

  // const inputEl = document.querySelector('#validation-input');
  // const length = inputEl.getAttribute('data-length');

  // inputEl.addEventListener('blur', event => {
  //   const value = event.target.value;
  //   if (value.length === +length) {
  //     inputEl.classList.add('valid');
  //     inputEl.classList.remove('invalid');
  //   } else {
  //     inputEl.classList.add('invalid');
  //     inputEl.classList.remove('valid');
  //   }
  // });
