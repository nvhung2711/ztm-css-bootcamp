//Function to check if page is scrolled and adjust the logo size
function checkScroll() {
    const navbar = document.getElementById('navbar');
    const logo = document.getElementById('logo');
    let scrollPosition = window.scrollY;

    //Add/remove 'scrolled' class based on scroll position
    if(scrollPosition > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    //Calculate new font size based on scroll position
    let newSize = 3 - (scrollPosition * 0.03);

    //Clamping the font size between 1.5 rem and 3rem
    newSize = Math.max(1.5, newSize);
    newSize = Math.min(3, newSize);

    logo.style.fontSize = newSize + 'rem';
}

//Event Listener for scroll event
window.addEventListener('scroll', checkScroll);