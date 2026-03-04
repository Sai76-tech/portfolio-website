// Welcome message in console to check link
console.log("Welcome to Sainath Sherugar's Portfolio!");

// Simple animation on scroll effect can be added here later
window.addEventListener('scroll', () => {
    let nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = '#020617';
        nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
    } else {
        nav.style.background = '#1e293b';
        nav.style.boxShadow = 'none';
    }
});