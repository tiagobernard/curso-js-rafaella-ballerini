//função para criar tarefas
function adicionarTarefa() {
    //variável que cria a mensagem do parágrafo
    let mensagem = "Tarefa adicionada com sucesso!";
    //variável que armazena o que foi digitado no imput
    let addTarefa = document.getElementById("inputTarefa").value;
    //Se o campo de texto estiver vazio, retorna um alerta
    if(addTarefa == ""){
        alert('O campo de texto está vazio')
    //Se não, cria a lista de tarefas
    } else {
    //exibe a mensagem de sucesso no parágrafo de id mensagem
    document.getElementById("mensagem").textContent = mensagem;
    
    //varável para pegar o elemento ul com id listaTarefas
    let listagemTarefas = document.getElementById("listaTarefas")

    //cria o elemento html li
    let li = document.createElement('li')

    //adiciona o conteúdo deigitado no input no elemento li
    li.textContent = addTarefa
    //adiciona o elemento li dentro do elemnto ul
    listagemTarefas.appendChild(li)

    //limpa do campo de texto ao clicar no botão Adicionar Tarefa.
    inputTarefa.value = ""
    }
}