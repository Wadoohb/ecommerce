const botonMenu = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

if(botonMenu){
    botonMenu.addEventListener("click", () => {
        menu.classList.toggle("activo");
    });
}

const titulo = document.getElementById("titulo-banner");
const botonColor = document.getElementById("cambiarColor");

if(botonColor && titulo){
    botonColor.addEventListener("click", () => {

        if(titulo.style.color === "yellow"){
            titulo.style.color = "white";
        }else{
            titulo.style.color = "yellow";
        }

    });
}

const banner = document.getElementById("banner");
const botonBanner = document.getElementById("ocultarBanner");

if(botonBanner && banner){
    botonBanner.addEventListener("click", () => {

        if(banner.style.display === "none"){
            banner.style.display = "block";
            botonBanner.textContent = "Ocultar Banner";
        }else{
            banner.style.display = "none";
            botonBanner.textContent = "Mostrar Banner";
        }

    });
}

