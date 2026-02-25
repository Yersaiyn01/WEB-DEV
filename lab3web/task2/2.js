"use strict";

const form = document.getElementById("todoForm");
const input = document.getElementById("taskInput");
const list = document.getElementById("todoList");

function makeItem(text) {
  const li = document.createElement("li");
  li.className = "item";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const span = document.createElement("span");
  span.className = "taskText";
  span.textContent = text;

  const edit = document.createElement("button");
  edit.type = "button";
  edit.textContent = "✏️";

  const del = document.createElement("button");
  del.type = "button";
  del.className = "deleteBtn";
  del.textContent = "🗑";

  checkbox.addEventListener("change", () => {
    li.classList.toggle("done");
  });

  del.addEventListener("click", () => {
    li.remove();
  });

  edit.addEventListener("click", () => {
    const newText = prompt("Edit task:", span.textContent);

    if (newText === null) return; 

    if (newText.trim() === "") {
      alert("Task cannot be empty!");
      return;
    }

    span.textContent = newText.trim();
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(edit);
  li.appendChild(del);

  return li;
}


function addTask() {
  const text = input.value.trim();

  if (text === "") {
    alert("Please enter a Word!");
    input.focus();
    return;
  }

  list.appendChild(makeItem(text));
  input.value = "";
  input.focus();
}


form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTask();
});
const deleteAllBtn = document.getElementById("deleteAll");

deleteAllBtn.addEventListener("click", () => {

  if(list.children.length === 0){

    alert("No tasks!");

    return;

  }

  if(confirm("Delete all tasks?")){

    list.innerHTML = "";

  }

});
const hideBtn = document.getElementById("hideBtn");

let hidden = false;

hideBtn.addEventListener("click", () => {

  if(hidden){

    list.style.display = "block";
    hideBtn.textContent = "Hide";
    hidden = false;

  }else{

    list.style.display = "none";
    hideBtn.textContent = "Show";
    hidden = true;

  }

});


input.focus();

