const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

input.addEventListener('input', size);
function size(event) {
    span.style.fontSize = event.currentTarget.value + "px";
};