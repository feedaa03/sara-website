// التمرير السلس
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// قائمة الجوال
const menuToggle = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');

if(menuToggle) {
    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
    });
}