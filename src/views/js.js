let tasks = [];
let list = document.getElementById("list");
let addBtn = document.getElementById("button-addon2")
        
tasks.forEach(addWork);
        
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
  });
}

addBtn.addEventListener("click", ()=>{
  let task = document.getElementById("task").value;
  let id;
  if (task!=""){
    id = tasks.length;
    tasks.push(task);
    addWork(task, id);
  };          
})