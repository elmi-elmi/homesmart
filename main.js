import "./style.css";


const navbtn = document.querySelector('#menu');
const menubar = document.querySelector('[role="menubar"]')

navbtn.addEventListener('click',()=>{
  const isExpanded = JSON.parse( navbtn.getAttribute('aria-expanded'))
  
  navbtn.setAttribute('aria-expanded', !isExpanded)
  menubar.classList.toggle('hidden');
  
})