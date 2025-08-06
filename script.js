document.getElementById("salvarBtn").addEventListener("click", function() {
    const nome = document.getElementById("nome").value;
    const forca = document.getElementById("forca").value;
    const vida = document.getElementById("vida").value;

    alert(`Personagem Salvo!\nNome: ${nome}\nForça: ${forca}\nVida: ${vida}`);
});