const menu_btn = document.getElementById('hamburger');
const nav_links = document.querySelector('.nav-links')
let open = false;
menu_btn.addEventListener('click', ()=>{
     if(!open){
         menu_btn.classList.add('open');
         nav_links.classList.add('show')
         open = true;
     }else{
        menu_btn.classList.remove('open');
        nav_links.classList.remove('show');
        open = false;
     }
 })
