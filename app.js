let amigos = [];

function adicionarAmigo() {
    let nome = document.getElementById("amigo").value.trim();
    if (nome && !amigos.includes(nome)) {
        amigos.push(nome);
        atualizarLista();
        document.getElementById("amigo").value = "";
    }
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear.");
        return;
    }
    let sorteados = [...amigos];
    sorteados.sort(() => Math.random() - 0.5);
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    for (let i = 0; i < sorteados.length; i++) {
        let amigo1 = sorteados[i];
        let amigo2 = sorteados[(i + 1) % sorteados.length];
        let li = document.createElement("li");
        li.textContent = `${amigo1} → ${amigo2}`;
        resultado.appendChild(li);
    }
}

function compartilharSorteio() {
    let texto = "Sorteio de Amigo Secreto:\n" + amigos.join(", ");
    navigator.clipboard.writeText(texto).then(() => {
        alert("Lista copiada para a área de transferência!");
    });
}

function resetarSorteio() {
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
}

function alternarTema() {
    document.body.classList.toggle('dark-theme');

    // Salvar a preferência no localStorage
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('tema', 'escuro');
    } else {
        localStorage.setItem('tema', 'claro');
    }
}

// Aplicar tema salvo no carregamento da página
window.onload = function () {
    if (localStorage.getItem('tema') === 'escuro') {
        document.body.classList.add('dark-theme');
    }
};

