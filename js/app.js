console.log("script app.js connected");

function addTodoItem() {
    console.log("on click- Add todo item")

    const targeElemnt = document.getElementById("todo-container")
    
    const newTodoItem = document.createElement("div")
    newTodoItem.classList.add("todo-item")


    // Add h2-tag to newTodoItem, a title
    const newTodoTitle = document.createElement("h2")
    newTodoTitle.innerText = "Todo title"
    newTodoItem.appendChild(newTodoTitle)

    //n Add p-tag, our thing that we should do
    const newTodoText = document.createElement("p")
    newTodoText.innerText = "something we need to do"
    newTodoItem.appendChild(newTodoText)

    // add button-tag to remove "node" ( newTodoitem)
    const newBtnRemove = document.createElement("button")
    newBtnRemove.innerText = "Remove"
    newBtnRemove.classList.add("btn-remove-todo")
    newBtnRemove.addEventListener("click", function(){
        console.log("onClick  = Remove item")
        newTodoItem.remove();
    })
    
    newTodoItem.appendChild(newBtnRemove)



    targeElemnt.appendChild(newTodoItem)
}




