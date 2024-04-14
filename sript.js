// 1) отримати доступ до елемента
// # - селектор id
const link = document.querySelector("#link");
const button = document.querySelector("#button");
const body = document.querySelector("body");
console.log(link);
// 2) Замінити текст

link.textContent = "Посилання";

// Вона генерує рандомні кольори у hex форматі
function getRandomHexColor() {
  const hexChars = "0123456789ABCDEF";
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hexChars[Math.floor(Math.random() * 16)];
  }
  return hexColor;
}

// #fcba03
// "При кліці"(cлучхач подій клік)

button.addEventListener("click", onClick);
//
function onClick() {
  body.style.backgroundColor = getRandomHexColor();
}
