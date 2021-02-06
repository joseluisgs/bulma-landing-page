/* MIS SCRIPTS VANILA JS */

// TRANSICIONES
// en todos los href le apliacmos el estilo smooth
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// NAVBAR
// Seleccionamos los id y cambiamos los estilos
const burgerIcon = document.querySelector('#navbar-menu-burguer');
const navbarMenu = document.querySelector('#navbar-menu-items');

// Cuando se pulsa cambiamos la propiedad is-active
burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');
    burgerIcon.classList.toggle('is-active');
});

// CAMBIO DE TEMA
const toggleSwitch = document.querySelector('#temaCheckbox');
console.log(toggleSwitch);
const currentTheme = localStorage.getItem('theme');
console.log(currentTheme);

if (currentTheme) {
    // añadimos o cambiamos la etiqueta de la clase html al tema recuperado
    let htmlElement = document.documentElement;
    htmlElement.setAttribute('theme', currentTheme);

    // Si es el tema oscuro lo marcamos
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    // Si esta marcado es el tema oscuro
    let htmlElement = document.documentElement;
    if (e.target.checked) {
        htmlElement.setAttribute('theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    // Si no es el tema claro
    else {
        htmlElement.setAttribute('theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);

