import fries from '../images/fries.png';
import cheescake from '../images/cheescake.png';
import churros from '../images/churros.png';
import gelato from '../images/gelato.png';
import hummus from '../images/hummus.png';
import nuggs from '../images/nuggs.png';
import pizza from '../images/pizza.png';
import risotto from '../images/risotto.png';
import springs from '../images/springs.png';

const menuArray = [
    { src: fries, description: "Delicious peri peri flavoured french fries." },
    { src: nuggs, description: "Aromatic meaty chicken nuggets." },
    { src: springs, description: "Crunchy and delicious spring rolls." },
    { src: pizza, description: "Italian gourmet pizza." },
    { src: risotto, description: "Steak and steamed risotto." },
    { src: hummus, description: "Turkish marvel hummus." },
    { src: churros, description: "Churros with chocolate dip." },
    { src: gelato, description: "Creamy flavorful gelato." },
    { src: cheescake, description: "Dairy delight cheescake." }
];

export function menuRender() {
    const page = document.querySelector(".page");
    const container = document.createElement("div");
    container.classList.add("containerMenu");
    page.innerHTML = "";
    page.appendChild(container);

    container.innerHTML = `
        <div class="nav">
            <a href="#appetizers">Appetizers</a> 
            <a href="#course">Main course</a>
            <a href="#desserts">Desserts</a>
        </div>
        <div class="section">
            <span id="appetizers">Appetizers</span>
            <div class="food">
                <div class="card">
                    <img src="${menuArray[0].src}" alt="Fries">
                    ${menuArray[0].description}
                </div>
                <div class="card">
                    <img src="${menuArray[1].src}" alt="Nuggs">
                    ${menuArray[1].description}
                </div>
                <div class="card">
                    <img src="${menuArray[2].src}" alt="Springs">
                    ${menuArray[2].description}
                </div>
            </div>
            <span id="course">Main course</span>
            <div class="food">
                <div class="card">
                    <img src="${menuArray[3].src}" alt="Pizza">
                    ${menuArray[3].description}
                </div>
                <div class="card">
                    <img src="${menuArray[4].src}" alt="Risotto">
                    ${menuArray[4].description}
                </div>
                <div class="card">
                    <img src="${menuArray[5].src}" alt="Hummus">
                    ${menuArray[5].description}
                </div>
            </div>
            <span id="desserts">Desserts</span>
            <div class="food">
                <div class="card">
                    <img src="${menuArray[6].src}" alt="Churros">
                    ${menuArray[6].description}
                </div>
                <div class="card">
                    <img src="${menuArray[7].src}" alt="Gelato">
                    ${menuArray[7].description}
                </div>
                <div class="card">
                    <img src="${menuArray[8].src}" alt="Cheescake">
                    ${menuArray[8].description}
                </div>
            </div>
        </div>`;
}
