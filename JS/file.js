let input=document.querySelector("#Text");
let button=document.querySelector("#Rverse")
let container=document.querySelector(".data")
button.addEventListener("click",e=>{
    let hold=input.value+"";
    if(hold!=""){
    let reversed=""
    for (let index = hold.length-1; index >= 0; index--) {
        reversed+=hold[index];
    }
    container.classList.add("active")
    container.innerHTML="Reverse is : "+reversed;
}
else{
    container.classList.remove("active")
    container.innerHTML=""
}
})
