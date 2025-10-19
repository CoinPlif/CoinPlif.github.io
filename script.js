// Анимация появления элементов при загрузке
document.addEventListener('DOMContentLoaded', function() {
    // Анимация для герой-секции
    const heroElements = document.querySelectorAll('.hero-title, .hero-subtitle, .hero-description, .social-buttons');
    
    heroElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = `opacity 0.8s ease ${index * 0.2}s, transform 0.8s ease ${index * 0.2}s`;
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 100);
    });

    // Анимация для Timeline
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const timelineItems = entry.target.querySelectorAll('.timeline-item');
                timelineItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateX(0)';
                    }, index * 200);
                });
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    const timeline = document.querySelector('.timeline');
    if (timeline) {
        const timelineItems = timeline.querySelectorAll('.timeline-item');
        timelineItems.forEach(item => {
            const isOdd = Array.from(timelineItems).indexOf(item) % 2 === 0;
            item.style.opacity = '0';
            item.style.transform = isOdd ? 'translateX(-50px)' : 'translateX(50px)';
            item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });
        timelineObserver.observe(timeline);
    }

    // Анимация для Projects
    const projectsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const projectCards = entry.target.querySelectorAll('.project-card');
                projectCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 150);
                });
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    const projects = document.querySelector('.projects-grid');
    if (projects) {
        const projectCards = projects.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });
        projectsObserver.observe(projects);
    }

    // Эффекты при наведении на кнопки
    const socialButtons = document.querySelectorAll('.social-btn');
    socialButtons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

// Плавная прокрутка к секциям
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}