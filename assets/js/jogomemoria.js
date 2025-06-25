const form = document.querySelector("form");
const input = document.querySelector("input");
const button = document.querySelector("button");


//função para a acionar o botão de jogar
const validateInput = () => {

    if (input.value.length > 2) {
       button.removeAttribute('disabled');
       return;
    }
    button.setAttribute("disabled", "");

};

//função para a guadar o nome
const handleSubmit = (event) => {

    event.preventDefault();

    localStorage.setItem("player", input.value);
    input.value = "";
    window.location.href = "pages/game.html"

}

input.addEventListener("input", validateInput);
form.addEventListener("submit", handleSubmit)