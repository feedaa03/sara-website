/* ========================================
   JavaScript - Sara Almashoug Landing Page
   ======================================== */

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// CTA Buttons click handlers
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('click', function() {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe cards
document.querySelectorAll('.service-card, .event-card, .post-card, .social-card').forEach(element => {
    element.style.opacity = '0';
    observer.observe(element);
});

// Add fade-in animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Active navigation link on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = 'var(--white)';
        if (link.getAttribute('href') === '#' + current) {
            link.style.color = 'var(--accent)';
        }
    });

    // Header shadow on scroll
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 198, 255, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Add hover effects to buttons
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.05)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Social card click handling
document.querySelectorAll('.social-card').forEach(card => {
    card.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href) {
            window.open(href, '_blank');
        }
    });
});

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                }
                img.classList.add('lazy-loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// Console welcome message
console.log('%c🛡️ مرحباً في موقع سارة المشروق', 
    'color: #00C6FF; font-size: 20px; font-weight: bold; font-family: "Brittany Signature", cursive;');
console.log('%cحماية الطفل الرقمي مسؤوليتنا جميعاً 💙', 
    'color: #CCF3FD; font-size: 14px; font-family: "GJU Hi Light", sans-serif;');

// Form handling (if added in future)
const handleContactForm = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Contact form submitted');
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Sara Almashoug Landing Page loaded successfully!');
});
