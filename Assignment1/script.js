    document.addEventListener('DOMContentLoaded', () => {
        const links = document.querySelectorAll('.sidebar a');
        const sections = document.querySelectorAll('.section');
        const lines = document.querySelectorAll('.nav-line');
    
        const setActiveLinkAndLine = (id) => {
            lines.forEach(line => line.classList.toggle('active', line.id === `${id}-line`));
        };
    
        const initialSectionId = 'about';
        setActiveLinkAndLine(initialSectionId);
    
        const observerOptions = { threshold: 0.8 };
    
        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveLinkAndLine(entry.target.id);
                }
            });
        };
    
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        sections.forEach(section => observer.observe(section));
    });