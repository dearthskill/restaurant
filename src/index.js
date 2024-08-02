import './styles.css';
import { menuRender } from './js-modules/menu.js';
import { homeRender } from './js-modules/home.js';
import { contactRender } from './js-modules/contact.js';
const homeButton = document.getElementById("home")
const menuButton = document.getElementById("menu")
const contactButton = document.getElementById("contact")
homeButton.addEventListener("click", function(){
    homeRender();
})

homeRender();

menuButton.addEventListener("click", function(){
    menuRender();
})

contactButton.addEventListener("click",function(){
    contactRender();
})