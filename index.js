const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");

    if (navMenu.classList.contains("nav-menu_visible")){
        navToggle.setAttribute("arial-label", "Cerrar menú");
    } else { 
        navToggle.setAttribute("arial-label", "Abrir menú");
    }

    let lastScrollTop = 0;
    window.addEventListener("scroll", () => {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScroll > lastScrollTop) {
            document.querySelector('.header').style.top = "-80px";
        } else {
            document.querySelector('.header').style.top = "0";
        }
        lastScrollTop = currentScroll;
    });
});
