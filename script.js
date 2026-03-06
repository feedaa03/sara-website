/* ========================================
   Design System - Sara Almashoug
   ======================================== */
:root {
    --primary: #00122B;
    --secondary: #CCF3FD;
    --accent: #00C6FF;
    --white: #FFFFFF;
}

/* ========================================
   Global Styles
   ======================================== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'GJU Hi Light', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: linear-gradient(135deg, var(--primary) 0%, #001a3d 100%);
    color: var(--white);
    line-height: 1.8;
}

/* ========================================
   Typography
   ======================================== */
h1, h2, h3, h4, h5, h6 {
    font-family: 'Brittany Signature', cursive;
    font-weight: normal;
    margin-bottom: 1rem;
}

h2 {
    font-size: 3rem;
    text-align: center;
    color: var(--white);
}

h3 {
    font-size: 1.5rem;
    color: var(--accent);
}

h4 {
    font-size: 1.2rem;
    color: var(--accent);
}

p {
    font-family: 'GJU Hi Light', sans-serif;
    font-size: 1rem;
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.9);
}

a {
    color: var(--accent);
    text-decoration: none;
    transition: all 0.3s ease;
}

a:hover {
    color: var(--secondary);
}

/* ========================================
   Container
   ======================================== */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

/* ========================================
   Navigation Bar
   ======================================== */
.navbar {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1000;
    background: rgba(0, 18, 43, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 2px solid var(--accent);
    padding: 1rem 0;
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-family: 'Brittany Signature', cursive;
    font-size: 1.8rem;
    color: var(--accent);
    font-weight: normal;
}

.nav-links {
    display: flex;
    gap: 2rem;
    list-style: none;
}

.nav-links a {
    font-family: 'GJU Hi Light', sans-serif;
    font-size: 1rem;
    color: var(--white);
    position: relative;
    padding-bottom: 5px;
}

.nav-links a::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 2px;
    background: var(--accent);
    transition: width 0.3s ease;
}

.nav-links a:hover {
    color: var(--accent);
}

.nav-links a:hover::after {
    width: 100%;
}

/* ========================================
   Hero Section
   ======================================== */
.hero {
    margin-top: 80px;
    padding: 4rem 0;
    background: linear-gradient(135deg, rgba(0, 18, 43, 0.8) 0%, rgba(0, 30, 60, 0.8) 100%);
}

.hero-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
}

.hero-image {
    display: flex;
    justify-content: center;
}

.hero-image img {
    width: 100%;
    max-width: 400px;
    border-radius: 20px;
    box-shadow: 0 15px 50px rgba(0, 198, 255, 0.2);
    border: 2px solid var(--accent);
}

.hero-text h1 {
    font-size: 3.5rem;
    color: var(--accent);
    margin-bottom: 0.5rem;
}

.hero-text .subtitle {
    font-size: 1.3rem;
    color: var(--secondary);
    margin-bottom: 1.5rem;
    font-family: 'GJU Hi Light', sans-serif;
}

.hero-text .description {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    line-height: 1.9;
    text-align: justify;
}

.cta-buttons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

.btn-primary, .btn-secondary {
    padding: 1rem 2rem;
    border-radius: 50px;
    font-family: 'GJU Hi Light', sans-serif;
    font-weight: 700;
    font-size: 1rem;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn-primary {
    background: linear-gradient(135deg, var(--accent), #0099cc);
    color: var(--primary);
    box-shadow: 0 8px 25px rgba(0, 198, 255, 0.3);
}

.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(0, 198, 255, 0.5);
}

.btn-secondary {
    background: transparent;
    color: var(--accent);
    border: 2px solid var(--accent);
}

.btn-secondary:hover {
    background: rgba(0, 198, 255, 0.1);
    transform: translateY(-3px);
}

/* ========================================
   Section Styles
   ======================================== */
section {
    padding: 5rem 0;
}

.section-subtitle {
    text-align: center;
    color: var(--secondary);
    font-family: 'GJU Hi Light', sans-serif;
    font-size: 1.1rem;
    margin-bottom: 3rem;
    font-weight: 600;
}

/* ========================================
   Services Section
   ======================================== */
.services {
    background: linear-gradient(180deg, rgba(0, 30, 60, 0.5) 0%, rgba(0, 18, 43, 0.5) 100%);
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

.service-card {
    background: rgba(0, 198, 255, 0.05);
    border: 2px solid var(--accent);
    border-radius: 16px;
    padding: 2rem;
    transition: all 0.3s ease;
    cursor: pointer;
}

.service-card:hover {
    border-color: var(--secondary);
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 198, 255, 0.25);
    background: rgba(0, 198, 255, 0.1);
}

.service-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    display: inline-block;
}

.service-card h3 {
    margin-bottom: 1rem;
}

.service-card p {
    color: rgba(255, 255, 255, 0.85);
}

/* ========================================
   About Section
   ======================================== */
.about {
    background: linear-gradient(180deg, rgba(0, 18, 43, 0.5) 0%, rgba(0, 30, 60, 0.5) 100%);
}

.about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: start;
}

.about-text p {
    text-align: justify;
    margin-bottom: 1.5rem;
    font-size: 1.05rem;
}

.timeline {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.timeline-item {
    display: flex;
    gap: 1.5rem;
    align-items: flex-start;
}

.timeline-dot {
    width: 20px;
    height: 20px;
    background: var(--accent);
    border-radius: 50%;
    flex-shrink: 0;
    margin-top: 5px;
    box-shadow: 0 0 0 8px rgba(0, 198, 255, 0.2);
}

.timeline-content {
    background: rgba(0, 198, 255, 0.08);
    padding: 1.5rem;
    border-radius: 12px;
    border-left: 3px solid var(--accent);
}

.timeline-content h4 {
    margin-bottom: 0.5rem;
}

.timeline-content p {
    margin: 0;
    font-size: 0.95rem;
}

/* ========================================
   Events Section
   ======================================== */
.events {
    background: linear-gradient(180deg, rgba(0, 30, 60, 0.5) 0%, rgba(0, 18, 43, 0.5) 100%);
}

.events-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 2rem;
}

.event-card {
    background: rgba(0, 198, 255, 0.05);
    border: 2px solid var(--accent);
    border-radius: 16px;
    padding: 2rem;
    text-align: center;
    transition: all 0.3s ease;
}

.event-card:hover {
    border-color: var(--secondary);
    transform: translateY(-10px);
    background: rgba(0, 198, 255, 0.1);
}

.event-logo {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.event-card h3 {
    margin-bottom: 0.5rem;
}

.event-role {
    color: var(--accent);
    font-weight: 600;
    font-size: 0.95rem;
    margin-bottom: 0.5rem;
}

.event-description {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.8);
    margin: 0;
}

/* ========================================
   Posts Section
   ======================================== */
.posts {
    background: linear-gradient(180deg, rgba(0, 18, 43, 0.5) 0%, rgba(0, 30, 60, 0.5) 100%);
}

.posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.post-card {
    background: rgba(0, 198, 255, 0.05);
    border: 2px solid var(--accent);
    border-radius: 16px;
    padding: 2rem;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    height: 100%;
}

.post-card:hover {
    border-color: var(--secondary);
    transform: translateY(-10px);
    background: rgba(0, 198, 255, 0.1);
}

.post-image {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.post-card h3 {
    margin-bottom: 1rem;
    flex-grow: 1;
}

.post-card p {
    color: rgba(255, 255, 255, 0.85);
    margin-bottom: 1.5rem;
    font-size: 0.95rem;
}

.post-link {
    color: var(--accent);
    font-weight: 600;
    display: inline-block;
    margin-top: auto;
}

.post-link:hover {
    color: var(--secondary);
}

/* ========================================
   Contact Section
   ======================================== */
.contact {
    background: linear-gradient(180deg, rgba(0, 30, 60, 0.5) 0%, rgba(0, 18, 43, 0.5) 100%);
}

.social-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
}

.social-card {
    background: rgba(0, 198, 255, 0.05);
    border: 2px solid var(--accent);
    border-radius: 16px;
    padding: 2rem;
    text-align: center;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    color: var(--white);
}

.social-card:hover {
    border-color: var(--secondary);
    transform: translateY(-10px);
    background: rgba(0, 198, 255, 0.1);
    color: var(--secondary);
}

.social-icon {
    font-size: 2.5rem;
}

.social-card h3 {
    margin: 0;
}

.social-card p {
    margin: 0;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.8);
}

.social-card:hover p {
    color: var(--secondary);
}

.contact-info {
    background: rgba(0, 198, 255, 0.1);
    border: 2px solid var(--accent);
    border-radius: 16px;
    padding: 2rem;
    text-align: center;
}

.contact-info h3 {
    margin-bottom: 1rem;
}

.contact-info a {
    font-weight: 600;
    font-size: 1.1rem;
}

/* ========================================
   Footer
   ======================================== */
.footer {
    background: var(--primary);
    border-top: 2px solid var(--accent);
    padding: 2rem 0;
    text-align: center;
}

.footer p {
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
}

/* ========================================
   Responsive Design
   ======================================== */
@media (max-width: 768px) {
    .nav-links {
        gap: 1rem;
        font-size: 0.9rem;
    }

    h2 {
        font-size: 2rem;
    }

    .hero-content {
        grid-template-columns: 1fr;
    }

    .hero-text h1 {
        font-size: 2.5rem;
    }

    .cta-buttons {
        flex-direction: column;
    }

    .btn-primary, .btn-secondary {
        width: 100%;
    }

    .about-content {
        grid-template-columns: 1fr;
    }

    .services-grid,
    .events-grid,
    .posts-grid,
    .social-grid {
        grid-template-columns: 1fr;
    }

    section {
        padding: 3rem 0;
    }
}

@media (max-width: 480px) {
    .navbar {
        padding: 1rem 0;
    }

    .nav-container {
        padding: 0 1rem;
    }

    .logo {
        font-size: 1.3rem;
    }

    .nav-links {
        display: none;
    }

    h2 {
        font-size: 1.5rem;
    }

    .hero {
        margin-top: 70px;
        padding: 2rem 0;
    }

    .hero-text h1 {
        font-size: 2rem;
    }

    .hero-image img {
        max-width: 300px;
    }

    section {
        padding: 2rem 0;
    }
}
