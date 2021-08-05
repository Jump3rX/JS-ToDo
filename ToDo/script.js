let toDoList = []
let inputEl = document.getElementById("input-el")
const sendBtn = document.getElementById("send-btn")
let toDoItems = document.getElementById("toDoItems")
let toDoStorage = JSON.parse(localStorage.getItem("toDolist"))
const clearBtn = document.getElementById("clear-btn")

if (toDoStorage) {
    toDoList = toDoStorage
    renderItems()
}

sendBtn.addEventListener("click", function() {
    let listData = inputEl.value
    if (listData === "") {
        alert("Value Cannot be empty!")
    } else {
        toDoList.push(listData)
        inputEl.value = ""
        console.log(toDoList)
        localStorage.setItem("toDolist", JSON.stringify(toDoList))
        renderItems()
    }

})
clearBtn.addEventListener("click", function() {
    localStorage.clear()
    toDoList = []
    renderItems()
})

function renderItems() {
    let items = ""
    for (let i = 0; i < toDoList.length; i++) {

        items += `<div class="list-group-item">
                    <input type="checkbox" class="list-radio">
                    <label>${toDoList[i]}</label>
                </div>`
    }
    toDoItems.innerHTML = items
}