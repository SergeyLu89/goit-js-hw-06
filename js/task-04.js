// Создай переменную counterValue
//  в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const refs = {
  decrementButton: document.querySelector('button[data-action="decrement"]'),
  incrementButton: document.querySelector('button[data-action="increment"]'),
  value: document.querySelector("#value"),
};

let counterValue = 0;

refs.decrementButton.addEventListener("click", onButtonClick);
refs.incrementButton.addEventListener("click", onButtonClick);

function onButtonClick(event) {
  event.currentTarget.dataset.action === "decrement"
    ? (counterValue -= 1)
    : (counterValue += 1);
  refs.value.textContent = counterValue;
}
