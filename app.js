var three=document.getElementById("three")
var btn=document.getElementById("btn")
var two=document.getElementById("two")
var blue=document.getElementById("blue")
var one=document.getElementById("one")
var main=document.getElementById("main")
var center=document.getElementById("center")
var text=document.getElementById("text")

console.log(blue);

three.style.height="700px"

btn.addEventListener("click",()=>{
 
  three.style.transition="all ease-in 0.9s"
  three.style.height="0px"
  btn.style.display="none"
  setTimeout(() => {
    two.style.display="block"
  }, 1000);
})

blue.addEventListener("click",()=>{
    two.style.transition="all ease-in 0.9s"
    two.style.height="0px"
    
    blue.style.display="none"
    one.style.display="flex"
    main.style.display="flex"
    text.style.display="none"
    setTimeout(() => {
        main.style.display="none"
        center.style.display="flex"
    }, 13000);
    
})