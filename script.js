const loehr = document.querySelector(".img");
let angle = 0;

const rotate = () => {
    angle += 45;
    loehr.style.transform = `rotate(${angle}deg)`;        
    
}

loehr.addEventListener("mousedown", rotate)