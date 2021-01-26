const nav = document.querySelector('.bottom-nav');
const nav_btn = document.getElementById('nav-btn')
let open = false;
nav_btn.addEventListener('click', ()=>{
     if(!open){
         nav.classList.add('open');
         console.log('mere')
         open = true;
     }else{
        nav.classList.remove('open');
        open = false;
     }
 })

