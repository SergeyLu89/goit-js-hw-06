// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
//  подставляет его текущее значение в span#name-output.
//  Если инпут пустой, в спане должна отображаться строка "Anonymous".

const refs = {
  nameInput: document.querySelector("#name-input"),
  nameOutput: document.querySelector("#name-output"),
};
console.dir(refs.nameInput);
refs.nameInput.addEventListener("input", onNameInput);

function onNameInput(event) {
  event.currentTarget.value === ""
    ? (refs.nameOutput.textContent = "Anonymous")
    : (refs.nameOutput.textContent = refs.nameInput.value);
}
