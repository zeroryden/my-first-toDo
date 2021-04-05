
//ALMACENAMIENTO DE DATOS EN ARRAY GUARDANDO EN LOCALSTORAGE
let list = document.getElementById("list");
let addBtn = document.getElementById("button-addon2");

let tasks = [];
//COMPROBANDO SI EXISTE DATOS PREVIOS GUARDADOS
if(!localStorage.getItem('tasksLog')){
  tasks.forEach(addWork);
} else {
  tasksLog = localStorage.getItem('tasksLog');
  tasks = JSON.parse(tasksLog);
  tasks.forEach(addWork);
};

//CREANDO TODA LA ESTRCUTURA DEL LISTADO, OPCION PARA ELIMINAR TAREAS 
//Y EL GUARDADO EN LOCALSTORAGE... DEBERIA DE DIVIDIR O "COMPONENTAR" CADA FUNCION...      
function addWork(t,i){
  let li = document.createElement("li");
  let text = document.createTextNode(t);
  let attLi = document.createAttribute("class");
  let idLi = document.createAttribute("id");
  let iconLi = document.createElement("link");
  let attIcon = document.createAttribute("class");
  let attValue = document.createAttribute("value");
  
  idLi.value= i;
  attIcon.value= "fas fa-trash marIcon";
  attLi.value= "list-group-item";
  attValue.value = i
  
  li.appendChild(text);
  li.appendChild(iconLi);
  list.appendChild(li);
  li.setAttributeNode(attLi);
  li.setAttributeNode(idLi);
  iconLi.setAttributeNode(attIcon);
  iconLi.setAttributeNode(attValue);
  iconLi.addEventListener("click", ()=>{
    let idTask = document.getElementById(i);
    let x = idTask.id;
    list.removeChild(idTask);
    tasks.splice(x,1);
    localStorage.setItem('tasksLog', JSON.stringify(tasks));
  });
  localStorage.setItem('tasksLog', JSON.stringify(tasks));
}

//FUNCION DEL BOTON ADD!
addBtn.addEventListener("click", ()=>{
  let task = document.getElementById("task").value;
  let id;
  if (task!=""){
    id = tasks.length;
    tasks.push(task);
    addWork(task, id);
  };          
})
//SIGUE CODEANDO... VAS A VER LO QUE PASA. :)