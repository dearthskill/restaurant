import chef from '../images/chef.jpg';
import cuisine from '../images/cuisine.jpg'
import dining from '../images/preview.jpg'
import fries from '../images/fries.png'
import cheescake from '../images/cheescake.png'
import churros from '../images/churros.png'
import gelato from '../images/gelato.png'
import hummus from '../images/hummus.png'
import nuggs from '../images/nuggs.png'
import pizza from '../images/pizza.png'
import risotto from '../images/risotto.png'
import springs from '../images/springs.png'
const menuArray = [fries,nuggs,springs,pizza,risotto,hummus,churros,gelato,cheescake];

const homeButton = document.getElementById("home")
const container = document.querySelector(".container")
const chefImg = new Image();
chefImg.src = chef;
const cuisineImg = new Image();
cuisineImg.src = cuisine;
const diningImg = new Image();
diningImg.src = dining;

export function homeRender(){
    const page = document.querySelector(".page")
    const container = document.createElement("div")
    container.classList = "container"
    var preview = document.createElement("div")
    preview.classList="preview";
    page.innerHTML="";
    page.appendChild(preview)
    page.appendChild(container)
    preview.appendChild(diningImg)
    preview.innerHTML+=`
    <div class="desc">
        <span style="font-size: 40px; font-weight: 530;">Asia's best restaurant</span><br> Fine dining experience you would find nowhere else. Budget offered without the compromise of luxury.`
    container.innerHTML+=`We have recruited chefs of highest culinary talent and perfection to bring to life our vision of lusciousness.`
    container.appendChild(chefImg)
    container.appendChild(cuisineImg)
    container.innerHTML+=`
    We are proud of mastery in 30+ different cuisines at our restaurant. Everyone has a place in our abode; dishes that make you feel at home.
    <span>30,000 square feet infrastructure now open in 20 countries!</span>
    <ul>
        <li>📍Japan</li>
        <li>📍Singapore</li>
        <li>📍Hong Kong</li>
        <li>📍India</li>
        <li>📍Russia</li>
    </ul>`
}