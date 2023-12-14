const areaPrincipal = document.getElementById("area-principal");
const addTarefa = document.getElementById("input-add-tarefa");
const btnAddTarefa = document.getElementById("btn-add");
let cont = 0;

const error = document.querySelector(".erro");

// atalho do enter no btn adicionar
addTarefa.addEventListener("keyup", function (event) {
    //SE TECLOU ENTER (13)
    if (event.keyCode === 13) {
      event.preventDefault();
      btnAddTarefa.click();
    }
});

function adicionarTarefa(){
    let valorTarefa = addTarefa.value;
    if(valorTarefa !== ""){
        cont++;
        let Tarefa =  `
        <div id="${cont}" class="div-item">
            <div class="item">
                ${valorTarefa}
            </div>
            <div>
                <button class="btn-delete" class="btn" onclick="deletarTarefa(${cont})">Deletar</button>
            </div>
        </div> `;

        areaPrincipal.innerHTML += Tarefa;
        addTarefa.value = "";
        addTarefa.focus();

        if(error.style.display = "block"){
            error.style.display = "none";
        }

    }else{
        error.style.display = "block";
    }  
}

function deletarTarefa(id){
    let tarefaInput = document.getElementById(id);
    tarefaInput.remove();
}