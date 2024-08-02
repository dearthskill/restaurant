import fineDine from '../images/socials.jpg'

export function contactRender(){
    const page = document.querySelector(".page");
    const container = document.createElement("div")
    container.classList = "containerContact";
    page.innerHTML = ""
    page.appendChild(container);
    container.innerHTML= ` <div class="contact">
        Contact our headquarters.
        <div class="deets">
            <i class="fa fa-phone"> +080 111 111 111</i>
            <i class="fa fa-map-marker"> Bangkok, Thailand.</i>
            <i class="fa fa-envelope"> worldsbestfood@gmail.com</i>
        </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d496114.04864508426!2d100.30343080053207!3d13.725048159663613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d6032280d61f3%3A0x10100b25de24820!2sBangkok%2C%20Thailand!5e0!3m2!1sen!2sin!4v1722015587601!5m2!1sen!2sin" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`

    const dine = document.createElement("div");
    dine.classList = "dine"
    dine.innerHTML = `<img src="${fineDine}" class="fineDine">
            <div class="media">
            Share your dining<br> experience in your <br>socials and tag us.
            <div class="socials">
            <i class="fa fa-instagram"></i>
            <i class="fa fa-twitter"></i>
            <i class="fa fa-youtube"></i>
            <i class="fa fa-snapchat"></i>
            </div>
        </div>`
    page.appendChild(dine);
}