const criarItem = () => {
    const btnAdicionar = document.querySelector(".js-btn-adicionar");
    btnAdicionar.addEventListener("click", () => {
        const input = document.querySelector(".js-input");
        const inputTarefa = input.value;

        const item = document.createElement("div");
        item.classList.add("todo__tarefa");
        item.innerHTML = `
        <input type="checkbox" class="todo__checkbox">
        <p class="todo__tarefa--nome">${inputTarefa}</p>
        <button class="todo__tarefa--btn">X</button>
    `
    const tarefa = document.querySelector(".js-todo-tarefas");
        tarefa.appendChild(item);
    });
}

criarItem()









{/* <div class="todo__tarefa">
    
</div> */}