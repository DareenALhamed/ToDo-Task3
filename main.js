toDoForm=document.querySelector(".toDoForm");
toDoTask = document.querySelector(".toDoTask");
add = document.querySelector(".add");
list = document.querySelector(".list");
const array = [];
toDoForm.onsubmit=function(e) {

  e.preventDefault();
  array.push(toDoTask.value);
  list.innerHTML = array.map(function(ele){
   return `<li> 
             <input type="checkbox" class="checkbox"/>
             <span>${ele}</span>
   
            </li>`

  }

  ).join("");
  
  
  toDoTask.value = '';


  let checkbox = document.querySelectorAll(".checkbox");
  for(let i=0;i < checkbox.length; i++) {
    checkbox[i].addEventListener("change", function(e){
      e.target.nextElementSibling.classList.toggle("completedTask")
    })
 }
  
}

