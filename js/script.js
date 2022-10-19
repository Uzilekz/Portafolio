// Poder ver como se mueve el SCROLLBAR
let progress = document.getElementById('progressBar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}

// LETRAS SALTARINAS
$(".rubberBand").bind("webkitAnimationEnd mozAnimationEnd animationend", function(){
    $(this).removeClass("animated")  
})  
$(".rubberBand").hover(function(){
    $(this).addClass("animated");        
})

// Girar LOGO al clickear
document.querySelector("#logo").onclick = () =>{
    document.querySelector("#logo").classList.toggle("logoSpin")
}

// TOGGLE MENU
document.querySelector("#menu-btn").onclick = () =>{
    document.querySelector("#menu-btn").classList.toggle("fa-times")
    document.querySelector(".navbar").classList.toggle("active")
}

// Quitar MENU al clickear LINKS







// Efecto ESCRIBIR en hero
let typingEffect = new Typed(".multiText", {
    strings : ["Gerardo.", "Humano.", "Maquina."],
    typeSpeed : 100,
    backSpeed : 150,
    backDelay : 3500,
    loop : true
})