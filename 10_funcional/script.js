const exemplo1 = document.getElementById('exemplo1');
const btn = document.getElementById('btn-send');

btn.addEventListener('click', function (event1) {
    event1.preventDefault();

    const user = document.getElementById('usuario').value.trim();
    const verificado = document.querySelector('input[name="check"]:checked');
    const texto_aprovado = document.getElementById('texto_aprovacao');
    const imagem = document.getElementById('img');

    let estado

    if (verificado) {
        estado = "checado";
        texto_aprovado.style.color='green'
        imagem.classList.remove("invisivel");
    } else {
        estado = "não checado"
        texto_aprovado.style.color='red'
        imagem.classList.add("invisivel")
    }

    texto_aprovado.textContent = "Seu nome é " + user + " estado checagem: " + estado;
    
})