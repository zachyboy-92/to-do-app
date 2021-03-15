"use strict";

//events
const inputTodo = document.querySelector("#input");
const addBtn = document.querySelector("#add-btn");
const todoList = document.querySelector("#todo-list");

//input
let todoInput = document.createElement("input");
todoInput.setAttribute("type", "checkbox");

let todo;
let deleteBtn;
let imageSrc = "./imgs/delete.png";
let checkSrc = "./imgs/checked.png";

//delete todo
const deleteTodo = function () {
  deleteBtn = document.createElement("img");
  deleteBtn.src = imageSrc;
  deleteBtn.classList = "delete-btn";
  deleteBtn.setAttribute("src", imageSrc);
  todo.appendChild(deleteBtn);
  return deleteBtn;
};

// //Check todo element
const createTodo = function () {
  todo = document.createElement("li");
  todo.setAttribute("id", "todo");

  //Checking if input is empty
  if (inputTodo.value === "") {
    alert("Please insert task");
  } else {
    todo.textContent = inputTodo.value;
    todoList.appendChild(todo);
    todo.insertAdjacentElement("afterbegin", todoInput);
    console.log(todo);
    deleteTodo();
    inputTodo.value = "";
  }

  //Deleting Item
  deleteBtn.addEventListener("click", function (e) {
    let list = e.target;
    list.parentNode.parentNode.removeChild(list.parentNode);
  });

  //Check off Item
  function checkOffTodo() {
    todo.style.textDecoration = "line-through";
    todo.style.color = "grey";
  }

  function removeCheckOff() {
    todo.style.textDecoration = "none";
    todo.style.color = "white";
  }

  todoInput.addEventListener("input", function (e) {
    let check = e.target;
    if (check.checked) {
      checkOffTodo();
    } else {
      removeCheckOff();
    }
  });
};

addBtn.addEventListener("click", createTodo);
