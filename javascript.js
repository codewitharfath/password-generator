const togglebtn = document.getElementById("togglebtn")

const input = document.querySelector(".input-container input")

let password = true;

togglebtn.addEventListener("click",function(){
  if(password){
    input.setAttribute("type","text");
    togglebtn.classList.remove("fa-eye")
    togglebtn.classList.add("fa-eye-slash")
    password=false
  }
  else{
    input.setAttribute("type","password")
    togglebtn.classList.remove("fa-eye-slash")
    togglebtn.classList.add("fa-eye")
    password =true
  }
})