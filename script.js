function mostrarMensagem() {
    document.getElementById("mensagem").style.display = "block";
}

// Criar corações animados
function criarCoracao() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}




// Botão "não" foge 😈
function fugir(botao) {
    const largura = window.innerWidth - 100;
    const altura = window.innerHeight - 50;

    const x = Math.random() * largura;
    const y = Math.random() * altura;

    botao.style.left = x + "px";
    botao.style.top = y + "px";
}

function aceitou() {
    document.getElementById("resposta").style.display = "block";

    const musica = document.getElementById("musica");
    musica.volume = 0.3; // volume mais suave
    musica.play();
}

function atualizarContador() {
    // DATA QUE VOCÊS COMEÇARAM (ANO, MÊS-1, DIA)
    const inicio = new Date(2025, 3, 5); // EXEMPLO: 1 de abril de 2025

    const agora = new Date();

    const diferenca = agora - inicio;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    document.getElementById("tempo").innerHTML =
        dias + " dias, " +
        horas + " horas, " +
        minutos + " minutos e " +
        segundos + " segundos ❤️";
}

// Atualiza a cada segundo
setInterval(atualizarContador, 1000);



setInterval(criarCoracao, 300);