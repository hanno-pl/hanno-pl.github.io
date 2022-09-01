const loehr = document.querySelector(".img");
let angle = 0;
let intId;

const rotate = () => {
    angle += 10;
    loehr.style.transform = `rotate(${angle}deg)`;        
    
}

const rotateLoop = () => {
    intId = setInterval (()=> rotate(), 20)
    console.log(intId)
}

loehr.addEventListener("mouseenter", rotateLoop)
loehr.addEventListener("mouseleave", () => {clearInterval(intId)})