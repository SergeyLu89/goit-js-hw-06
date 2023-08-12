// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input)
// и изменяет инлайн-стиль span#text обновляя свойство font-size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const refs = {
  fontSizeControl: document.querySelector("#font-size-control"),
  textEl: document.querySelector("#text"),
};

refs.fontSizeControl.addEventListener("input", onFontSizeControlChanges);

refs.textEl.style.fontSize = "56px";

function onFontSizeControlChanges() {
  refs.textEl.style.fontSize = `${refs.fontSizeControl.value}px`;
}
