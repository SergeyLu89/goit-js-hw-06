// Напиши скрипт, который при потере фокуса на инпуте (событие blur),
// проверяет его содержимое на правильное количество введённых символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным,
//  если неправильное - красным.

const refs = {
  validationInput: document.querySelector("input[data-length='6']"),
};

refs.validationInput.addEventListener("blur", onValidationInputBlur);

function onValidationInputBlur() {
  refs.validationInput.value.length ===
  Number(refs.validationInput.dataset.length)
    ? refs.validationInput.classList.add("valid")
    : refs.validationInput.classList.add("invalid");
}
