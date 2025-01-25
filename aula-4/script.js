//criando um array vazio
let lista_tarefas = []
//função para criar tarefas
function adicionarTarefa() {
    //variável que cria a mensagem de sucesso
    let mensagemSucesso = "Tarefa adicionada com sucesso!";
    //variável que armazena o que foi digitado no imput
    const addTarefa = document.getElementById("inputTarefa").value.trim();
    //constante que conecta com o elemento p com id mensagem
    const mensagem = document.getElementById("mensagem")
    //Se o campo de texto estiver vazio, retorna um alerta
    if (addTarefa == "") {
        //variavel que cria a mensagem de erro
        let mensagemErro = "O campo está vazio, digite uma tarefa para ser adicionada";
        //exibe a mensagem de erro no parágrafo de id mensagem
        mensagem.textContent = mensagemErro;
        //Coloca o estilo de cor na mensagem de erro
        mensagem.style.color = "#A34743"
        //Se não, cria a lista de tarefas
    } else {
        //exibe a mensagem de sucesso no parágrafo de id mensagem
        mensagem.textContent = mensagemSucesso;
        lista_tarefas.push(addTarefa)
        //função que renderiza as tarefas
        renderizarTarefas()
    }
    //limpa do campo de texto ao clicar no botão Adicionar Tarefa.
    inputTarefa.value = ""
}
function renderizarTarefas() {
    //Coloca o estilo de cor na mensagem de sucesso
    mensagem.style.color = "#28A745"
    //varável para pegar o elemento ul com id listaTarefas
    const listagemTarefas = document.getElementById("listaTarefas")
    //ESTRUTURA DO FOR
    //1.item inicial (iterador)
    //2. item final (condição)
    //3. Se vai de um em um elemento ou se pula
    listagemTarefas.innerHTML = ""
    let i = 0
    for (i; i < lista_tarefas.length; i++) {
        //cria o elemento html li
        let li = document.createElement('li')
        //adiciona o conteúdo deigitado no input no elemento li
        li.textContent = lista_tarefas[i]
        //adiciona o elemento li dentro do elemnto ul
        listagemTarefas.appendChild(li)
    }
}