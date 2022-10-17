// Poder ver como se mueve el SCROLLBAR
let progress = document.getElementById('progressBar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}

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
    backDelay : 2000,
    loop : true
})

// Deslizar SLIDER de portafolio
$(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000, //1000ms = 1s;
    autoplayHoverPause: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0:{
            items: 1,
            nav: true
        },
        800:{
            items: 2,
            nav: true
        },
        1300:{
            items: 3,
            nav: true
        }
    }
});