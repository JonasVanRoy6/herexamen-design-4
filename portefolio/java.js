// Eerste onScroll-functie voor het markeren van actieve secties in de navigatie
function onScrollActiveSection() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('#scroll-nav a');

    let currentSection = '';

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section.id;
        }
    });

    navLinks.forEach(link => {
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Event listener voor scrollen
window.addEventListener('scroll', onScrollActiveSection);
// Initial call to set the correct active link on page load
onScrollActiveSection();

// Tweede onScroll-functie voor het aanpassen van de stijlen van de navigatieheader
function onScrollChangeHeaderStyles() {
    const sections = document.querySelectorAll('section');
    const navH1 = document.getElementById('navbar-title');
    const navLinks = document.querySelectorAll('#navbar a');

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 50 && rect.bottom >= 50) {
            // Haal de gewenste kleur uit het data-attribute
            const color = section.getAttribute('data-color');
            navH1.style.color = color;

            // Stel de --hover-color variabele in voor de nav-header
            document.documentElement.style.setProperty('--hover-color', color);
        }
    });
}

// Event listener voor scrollen
window.addEventListener('scroll', onScrollChangeHeaderStyles);


