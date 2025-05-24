var three=document.getElementById("three")
var btn=document.getElementById("btn")
var two=document.getElementById("two")
var blue=document.getElementById("blue")
var one=document.getElementById("one")
var main=document.getElementById("main")
var center=document.getElementById("center")
var text=document.getElementById("text")

console.log(blue);

three.style.height="100vh"

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
        center.style.transition="all ease-in 0.5s"
        
        
      }, 10000);
      setTimeout(() => {
          
          center.style.height="200px"
          center.style.width="350px"        
          
          setTimeout(() => {
            
            center.style.padding="30px"
             
              center.innerText="Congratulations on finishing your papers! 🎉 All your hard work and late nights have paid off. Now it’s time to relax, recharge, and enjoy some well-deserved rest. You did it!"
               
            
          }, 1000);
          
      }, 11000);
    
})