let Item = document.getElementById("get");
let list = document.querySelector(".list");

function Add() {
    if (Item.value == "") {
        alert("Please Enter Task")
    } else {
        let newelement = document.createElement("ul");
        newelement.innerHTML = `${Item.value} <i class ="fa-solid fa-trash"></i>`;
        list.appendChild(newelement)
        Item.value = "";
        newelement.querySelector("i").addEventListener("click", remove);
        function remove() {
            newelement.remove()

        }
    }
}