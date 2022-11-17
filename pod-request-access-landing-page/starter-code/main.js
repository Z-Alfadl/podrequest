const accessButton = document.querySelector(".btn");
const errorMessage = document.querySelector(".oops");
accessButton.addEventlistener('click', () => {
    errorMessage.style.display = "block"
})