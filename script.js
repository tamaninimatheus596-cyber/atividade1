const botao = document.getElementById("btEnviar");

botao.addEventListener("click", function (event) {
    event.preventDefault(); 

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    alert("Formulário enviado!");
});

const sliderIdade = document.getElementById("idade");
const idadeValor = document.getElementById("idadeValor");

sliderIdade.addEventListener("input", () => {
    idadeValor.textContent = sliderIdade.value;
});
