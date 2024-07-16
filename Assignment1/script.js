document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.sidebar a');
    const sections = document.querySelectorAll('.section');
    const initialSectionId = 'about';
    const initialLink = document.querySelector(`.sidebar a[href="#${initialSectionId}"]`);
    if (initialLink) {
        initialLink.classList.add('active');
    }
    const initialLine = document.getElementById(`${initialSectionId}-line`);
    if (initialLine) {
        initialLine.style.width = '10%';
    }
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const sectionId = link.getAttribute('href').substring(1);
            document.getElementById(sectionId).scrollIntoView({
                behavior: 'smooth'
            });
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            const lineId = `${sectionId}-line`;
            const lines = document.querySelectorAll('.nav-line');
            lines.forEach(line => line.style.width = '20px');
            document.getElementById(lineId).style.width = '10%';
        });
    });

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.8
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                links.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href').substring(1) === id);
                });
                const lineId = `${id}-line`;
                const lines = document.querySelectorAll('.nav-line');
                lines.forEach(line => line.style.width = '20px');
                document.getElementById(lineId).style.width = '10%';
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => observer.observe(section));
});