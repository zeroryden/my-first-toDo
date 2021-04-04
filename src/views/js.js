let tasks = [];
let list = document.getElementById("list");
let addBtn = document.getElementById("button-addon2")
        
tasks.forEach(addWork);
        
function addWork(t){
    let li = document.createElement("li");
    let text = document.createTextNode(t);
    let att = document.createAttribute("class");
    att.value= "list-group-item list-group-item-dark";
    li.appendChild(text);
    list.appendChild(li);
    li.setAttributeNode(att);

};

addBtn.addEventListener("click", ()=>{
    let task = document.getElementById("task").value;
    if (task!=""){
        tasks.push(task);
        //console.log(tasks); 
        addWork(task);
    };          
});

//console.log(tasks[0]);
//console.log(tasks[0].toString());