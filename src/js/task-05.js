
const mainFormInput = document.querySelector("input#name-input");
const mainFormTextArea = document.querySelector("span#name-output");



mainFormInput.addEventListener("input", event => {

    mainFormTextArea.textContent = event.target.value;


    if (event.target.value === "") {
        mainFormTextArea.textContent = "Anonymus";
    }

});










