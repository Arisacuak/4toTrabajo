const inican = document.getElementById("inican");
const parcan = document.getElementById("parcan");
const cancion = document.getElementById("cancion");
const imgcan = document.getElementById("imgcan");
inican.addEventListener("click",()=>{
    cancion.play();
    imgcan.style.animationPlayState="running";
    
})
parcan.addEventListener("click",()=>{
    cancion.pause();
    imgcan.animationPlayState="paused";
})
