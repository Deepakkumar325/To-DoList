function displayTask(){

    let text = document.getElementById("display").value;

    let newStat= document.getElementById("stat"); // ul

    const newItem = document.createElement("li"); // li

  // delete button is created
    var delBtn = document.createElement("li");
    delBtn.classList.add("far", "fa-trash-alt");

 // task done button is created 
    var doneBtn = document.createElement("i");
    doneBtn.classList.add("fa-solid", "fa-clipboard-check");
    
    
    
    
   newItem.innerHTML =  `<span class="todo-list">${text}</span>`;
    
    // both the buttons are added in li

    newItem.appendChild(doneBtn);
    newItem.appendChild(delBtn);
    
   //   li is appeneded in ul
     if(text!== ""){
        newStat.appendChild(newItem);
      }else{
      alert("Please Enter The Task🤯")
        text.value="";
    
     }
    
       // to clear the input text after clicking submit
       document.getElementById("display").value="";
       
       // delete function is looped in all the del buttons
       var currtask = document.querySelectorAll(".far");
       
       for(var j=0; j<currtask.length; j++){
          currtask[j].onclick = function(){
             this.parentNode.remove()}};
             
             
             var edittasks = document.querySelectorAll(".fa-solid",".fa-clipboard-check");
             
             for (var k=0; k<edittasks.length; k++){
                edittasks[k].onclick  = function(){
                   
                   this.parentNode.style.textDecoration = "line-through";
                  }
               }
            };       
         
      
   
            