const accessButton = document.querySelector(".btn");
const errorMessage = document.querySelector(".oops");
const input = document.querySelector("input")
const form = document.querySelector("form")

let emailVal = () => {
    let val = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (input.value.length === 0) {
        errorMessage.style.display = "block";
    } else if (!val.test(input.value)) {
        errorMessage.style.display = "block";
        errorMessage.innerHTML = "Oops! Please check your email!"
    } else {
        errorMessage.classList.replace('oops', 'success')
        errorMessage.innerHTML = "Thank you for submitting your email!"
    };
};
accessButton.addEventListener('click', function(e) {
    e.preventDefault;
    emailVal();
});