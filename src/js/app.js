AOS.init();
const navbar = document.getElementById("navbar");
const navbarToggle = navbar.querySelector(".navbar-toggle");

function openMobileNavbar() {
  navbar.classList.add("opened");
  navbarToggle.setAttribute("aria-expanded", "true");
}

function closeMobileNavbar() {
  navbar.classList.remove("opened");
  navbarToggle.setAttribute("aria-expanded", "false");
}

navbarToggle.addEventListener("click", () => {
  if (navbar.classList.contains("opened")) {
    closeMobileNavbar();
  } else {
    openMobileNavbar();
  }
});

const navbarMenu = navbar.querySelector("#navbar-menu");
const navbarLinksContainer = navbar.querySelector(".navbar-links");

navbarLinksContainer.addEventListener("click", (clickEvent) => {
  clickEvent.stopPropagation();
});

navbarMenu.addEventListener("click", closeMobileNavbar);

const USERLOGIN = JSON.parse(localStorage.getItem('login_success'))

if(USERLOGIN){
  document.getElementById('name').innerHTML= USERLOGIN.name.split(' ', 1);
  document.getElementById('entrar-salir').innerHTML= "Salir";
}
else {
  document.getElementById('entrar-salir').innerHTML= "Entrar";
}

const entrarSalir = navbar.querySelector("#entrar-salir");

entrarSalir.addEventListener("click",  () => {
  if(USERLOGIN){
    localStorage.setItem('login_success', JSON.stringify(null))
    return 0;
  }else{
    window.location.href = 'login.html'
  }

})
