
let lista_tarefas = []
function adicionarTarefa() {
    let mensagemSucesso = "Tarefa adicionada com sucesso!";
    const addTarefa = document.getElementById("inputTarefa").value.trim();
    const mensagem = document.getElementById("mensagem")
    if (addTarefa == "") {
        let mensagemErro = "O campo está vazio, digite uma tarefa para ser adicionada";
        mensagem.textContent = mensagemErro;
        mensagem.style.color = "#A34743"
    } else {
        mensagem.textContent = mensagemSucesso;
        lista_tarefas.push(addTarefa)
        renderizarTarefas()
    }
    inputTarefa.value = ""
}
function renderizarTarefas() {
    mensagem.style.color = "#28A745"
    const listagemTarefas = document.getElementById("listaTarefas")
    listagemTarefas.innerHTML = ""
    
    for (let i = 0; i < lista_tarefas.length; i++) {
        let li = document.createElement('li')
        li.textContent = lista_tarefas[i]

        let botaoRemover = document.createElement("button")
        botaoRemover.textContent = "Remover"
        botaoRemover.className = "remover"
        botaoRemover.onclick = () => removerTarefa(i)

        let botaoEditar = document.createElement("button")
        botaoEditar.textContent = "Editar"
        botaoEditar.className = "editar"
        botaoEditar.onclick = () => editarTarefa(i)

        li.appendChild(botaoRemover)
        li.appendChild(botaoEditar)
        listagemTarefas.appendChild(li)
    }
}
function removerTarefa(i) {
    lista_tarefas.splice(i,1)
    renderizarTarefas()
}

function editarTarefa(i){
    let tarefaEditada = prompt("Edite o nome da tarefa:")
    if(tarefaEditada.trim() !== "") {
        lista_tarefas[i] = tarefaEditada
    }
    renderizarTarefas()
}

function limparLista() {
    lista_tarefas.length = 0
    renderizarTarefas()
    const mensagem = document.getElementById("mensagem")
    mensagem.textContent = "Lista de tarefas limpa com sucesso"
}