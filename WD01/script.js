let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');
let menuToggle = document.getElementById('menu-toggle');
let navMenu = document.getElementById('nav-menu');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
