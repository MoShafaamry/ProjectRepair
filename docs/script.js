document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Simple form validation and submission
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Here you would typically send the form data to a server
            alert('Thank you for your message. We\'ll get back to you soon!');
            form.reset();
        }
    });

    function validateForm() {
        let isValid = true;
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            if (input.hasAttribute('required') && !input.value) {
                isValid = false;
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });
        return isValid;
    }

    // Auto-scrolling testimonials
    const testimonials = document.querySelector('.testimonial-slider');
    let scrollAmount = 0;
    const scrollSpeed = 2;
    const scrollPause = 3000; // 3 seconds pause between scrolls

    function autoScroll() {
        const maxScroll = testimonials.scrollWidth - testimonials.clientWidth;
        scrollAmount += scrollSpeed;
        if (scrollAmount > maxScroll) {
            scrollAmount = 0;
        }
        testimonials.scrollTo(scrollAmount, 0);
        setTimeout(() => requestAnimationFrame(autoScroll), scrollPause);
    }

    setTimeout(() => requestAnimationFrame(autoScroll), scrollPause);
});

