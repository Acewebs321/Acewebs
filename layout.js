document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('#mobile-menu a');

    function toggleMenu() {
        mobileMenu.classList.toggle('-translate-x-full');
        mobileMenu.classList.toggle('translate-x-0');

        const icon = hamburger.querySelector('i');
        if (mobileMenu.classList.contains('translate-x-0')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }

    // ✅ Toggle on hamburger click
    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }

    // ✅ Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu.classList.contains('translate-x-0')) {
                toggleMenu();
            }
        });
    });

    // ✅ Close on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('translate-x-0')) {
            toggleMenu();
        }
    });

    // ✅ Init AOS after DOM loads
    if (typeof AOS !== "undefined") {
        AOS.init();
    }
});


 // Netlify form submission handling
        const form = document.getElementById('contact');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const formData = new FormData(form);
                fetch(form.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                }).then(response => {
                    if (response.ok) {
                        window.location.href = form.action;
                    } else {
                        throw new Error('Form submission failed.');
                    }
                }).catch(error => {
                    const messageElement = document.createElement('div');
                    messageElement.id = 'form-messages';
                    messageElement.classList.add('error', 'mt-4', 'p-4', 'rounded-md', 'text-center', 'font-bold');
                    messageElement.textContent = 'Oops! There was a problem with your submission. Please try again.';
                    form.after(messageElement);
                    console.error('Error:', error);
                });
            });
        }
document.getElementById("current-year").textContent = new Date().getFullYear();