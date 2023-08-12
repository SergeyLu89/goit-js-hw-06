// Напиши скрипт, который изменяет цвета фона элемента <body>
// через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

// Для генерации случайного цвета используй функцию getRandomHexColor.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  bodyEl: document.querySelector("body"),
  bgcTextEl: document.querySelector(".color"),
  changeColorButton: document.querySelector(".change-color"),
};

refs.changeColorButton.addEventListener("click", onChangeColorButtonClick);

function onChangeColorButtonClick() {
  const randomColor = getRandomHexColor();

  refs.bodyEl.style.backgroundColor = randomColor;

  refs.bgcTextEl.textContent = randomColor;
}
