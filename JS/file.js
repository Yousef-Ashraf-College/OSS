let input=document.querySelector("#Text");
let button=document.querySelector("#Rverse")
let container=document.querySelector(".data")
button.addEventListener("click",e=>{
    let hold=input.value+"";
    hold=hold.split("").reverse().join("")
    container.classList.add("active")
    container.innerHTML="Reverse is : "+hold;
    
})
