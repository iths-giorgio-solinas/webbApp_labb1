let hide = document.querySelector(".hide");
let hamburger = document.querySelector(".hamburger");
let nav = document.querySelector('.navigation');
let x= window.matchMedia("(max-width: 1024px)");
let selected = document.querySelectorAll('nav a');
let cartItems= document.querySelector('.cartItems');
let cart = document.querySelector('.cart');
if(localStorage.getItem('order')!=null){
    let local2=JSON.parse(localStorage.getItem('order'));
    let sum=0;
    for(let disk of local2){
        sum+=disk.Amount;
    }
    console.log(sum);
    cartItems.innerHTML=sum;
}
selected.forEach((x)=>{
    console.log(x);
    if(x.href==window.location.href){
        x.style.color="red";
    }
})
function matchesSize(){
    nav.style.display="none";
    hamburger.addEventListener('click',()=>{
        nav.style.display="flex";
    })
    hide.addEventListener('click',()=>{
        nav.style.display="none";
    })
    
}

window.addEventListener('load',()=>{
    if (x.matches){
        matchesSize();
        x.addEventListener('change',()=>{
            if(x.matches){
                matchesSize();
            }
            else{
                nav.style.display="flex";
            }
        })
    }
    else{ 
        nav.style.display="flex";
        x.addEventListener('change',()=>{
            if(x.matches){
                matchesSize();
            }
            else{
                nav.style.display="flex";
            }
        }   
        )
    }
})

