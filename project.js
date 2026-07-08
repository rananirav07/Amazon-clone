



window.addEventListener("load", () => {
    alert("Welcome to Amazon Clone!");
});



const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 20){
        navbar.style.boxShadow = "0 4px 10px rgba(0,0,0,0.4)";
    }
    else{
        navbar.style.boxShadow = "none";
    }

});



const topBtn = document.querySelector(".footer_panel1");

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});



const searchInput = document.querySelector(".input");

const boxes = document.querySelectorAll(".bborder");

searchInput.addEventListener("keyup", () => {

    let value = searchInput.value.toLowerCase();

    boxes.forEach((box)=>{

        let title = box.querySelector("h2").innerText.toLowerCase();

        if(title.includes(value)){
            box.style.display = "block";
        }
        else{
            box.style.display = "none";
        }

    });

});



const hero = document.querySelector(".hero-section");

const images = [
    "bgi1.jpg",
    "bgi2.jpg",
    "bgi3.jpg",
    "bgi4.jpg"
];

let index = 0;

setInterval(()=>{

    index++;

    if(index == images.length){
        index = 0;
    }

    hero.style.backgroundImage = `url(${images[index]})`;

},3000);



boxes.forEach((box)=>{

    box.addEventListener("mouseenter",()=>{

        box.style.transform = "translateY(-8px)";
        box.style.transition = "0.3s";

    });

    box.addEventListener("mouseleave",()=>{

        box.style.transform = "translateY(0px)";

    });

});



searchInput.addEventListener("focus",()=>{

    document.querySelector(".search").style.border =
    "2px solid orange";

});

searchInput.addEventListener("blur",()=>{

    document.querySelector(".search").style.border =
    "none";

});