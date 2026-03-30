document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const root = document.documentElement;
    const currentTheme = localStorage.getItem('theme') || 'light';

    root.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);

    themeToggle?.addEventListener('click', () => {
        const theme = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        root.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        updateThemeIcon(theme);
    });

    function updateThemeIcon(theme) {
        if (!themeToggle) return;
        themeToggle.innerHTML = theme === 'light' 
            ? '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>'
            : '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>';
    }

    // RTL Toggle
    const rtlToggle = document.getElementById('rtl-toggle');
    const currentDir = localStorage.getItem('dir') || 'ltr';

    root.setAttribute('dir', currentDir);

    rtlToggle?.addEventListener('click', () => {
        const dir = root.getAttribute('dir') === 'ltr' ? 'rtl' : 'ltr';
        root.setAttribute('dir', dir);
        localStorage.setItem('dir', dir);
    });

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }
    });

    // Mobile Menu
    const menuToggle = document.getElementById('menu-toggle');
    const drawer = document.getElementById('drawer');
    const overlay = document.getElementById('overlay');
    const closeDrawer = document.getElementById('close-drawer');

    menuToggle?.addEventListener('click', () => {
        drawer?.classList.add('open');
        overlay?.classList.add('active');
    });

    const closeAll = () => {
        drawer?.classList.remove('open');
        overlay?.classList.remove('active');
    };

    closeDrawer?.addEventListener('click', closeAll);
    overlay?.addEventListener('click', closeAll);

    // Scroll Animations (Intersection Observer)
    const observeOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observeOptions);

    document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));

    // Hero Animation Trigger
    const hero = document.querySelector('.hero');
    if (hero) {
        setTimeout(() => {
            hero.classList.add('hero-animate');
        }, 100);
    }
});
