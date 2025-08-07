document.getElementById("salvarBtn").addEventListener("click", function() {
    const nome = document.getElementById("nome").value;
    const classe = document.getElementById("classe").value;
    const fotoUpload = document.getElementById("fotoUpload").value;
    const vida = document.getElementById("vida").value;
    const sanidade = document.getElementById("sanidade").value;
    const PE = document.getElementById("PE").value;
    const alma = document.getElementById("alma").value;
    const aura = document.getElementById("aura").value;
    const poder = document.getElementById("poder").value;
    const inteligencia = document.getElementById("inteligencia").value;
    const agilidade = document.getElementById("agilidade").value;
    const forca = document.getElementById("forca").value;
    const constituicao = document.getElementById("constituicao").value;
    const presenca = document.getElementById("presenca").value;
    const fotoBase64 = document.getElementById("fotoPersonagem").src;


   const ficha = {
        nome: nome,
        classe: classe,
        fotoUpload: fotoUpload,
        vida: vida,
        sanidade: sanidade,
        pe: PE,
        alma: alma,
        aura: aura,
        poder: poder,
        inteligencia: inteligencia,
        agilidade: agilidade,
        forca: forca,
        constituicao: constituicao,
        presenca: presenca,
        fotoBase64: fotoBase64
    };

    // Salvar o objeto no Local Storage como texto (JSON)
    localStorage.setItem("fichaRPG", JSON.stringify(ficha));

    alert("Ficha salva no navegador!");
});

 document.getElementById("fotoUpload").addEventListener("change", function(event) {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function(e) {
                const fotoBase64 = e.target.result;
                const fotoElemento = document.getElementById("fotoPersonagem");

                fotoElemento.src = fotoBase64;
                fotoElemento.style.display = "block"
            };

            reader.readAsDataURL(file);
        } else {
            const fotoElemento = document.getElementById("fotoPersonagem");
            fotoElemento.src = "";
            fotoElemento.style.display = "none";
        }
    });

// Quando o site carregar, vamos tentar recuperar a ficha salva
window.addEventListener("load", function() {
    const fichaSalva = localStorage.getItem("fichaRPG");

    if (fichaSalva) {
        const ficha = JSON.parse(fichaSalva);

        document.getElementById("nome").value = ficha.nome;
        document.getElementById("classe").value = ficha.classe;
        document.getElementById("fotoUrl").value = ficha.fotoUrl;
        document.getElementById("vida").value = ficha.vida;
        document.getElementById("sanidade").value = ficha.sanidade;
        document.getElementById("PE").value = ficha.PE;
        document.getElementById("alma").value = ficha.alma;
        document.getElementById("aura").value = ficha.aura;
        document.getElementById("inteligencia").value = ficha.inteligencia;
        document.getElementById("forca").value = ficha.forca;
        document.getElementById("constituicao").value = ficha.constituicao;
        document.getElementById("poder").value = ficha.poder;
        document.getElementById("agilidade").value = ficha.agilidade;
        document.getElementById("presenca").value = ficha.presenca;
        
        const fotoElemento = document.getElementById("fotoPersonagem");
        if(ficha.fotoBase64) {
            fotoElemento.src = ficha.fotoBase64;
            fotoElemento.style.display = "block";
        }
    }
});