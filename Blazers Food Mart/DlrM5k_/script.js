document.addEventListener('DOMContentLoaded', () => {

    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            navbar.classList.remove('py-4');
        } else {
            navbar.classList.remove('scrolled');
            navbar.classList.add('py-4');
        }
    });


    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    function toggleMenu() {
        const isClosed = mobileMenu.classList.contains('translate-x-full');
        if (isClosed) {
            mobileMenu.classList.remove('translate-x-full');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        } else {
            mobileMenu.classList.add('translate-x-full');
            document.body.style.overflow = '';
        }
    }

    mobileMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);


    mobileLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });


    const testimonials = document.querySelectorAll('#testimonial-slider > div');
    const dots = document.querySelectorAll('.slider-dot');
    const sliderContainer = document.getElementById('testimonial-slider');
    let currentIndex = 0;

    function updateSlider(index) {
        sliderContainer.style.transform = `translateX(-${index * 100}%)`;
        
        dots.forEach(dot => {
            dot.classList.remove('bg-brand-gold');
            dot.classList.add('bg-gray-600');
        });
        dots[index].classList.remove('bg-gray-600');
        dots[index].classList.add('bg-brand-gold');
        
        currentIndex = index;
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            updateSlider(index);
        });
    });


    setInterval(() => {
        let nextIndex = (currentIndex + 1) % testimonials.length;
        updateSlider(nextIndex);
    }, 5000);


    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
