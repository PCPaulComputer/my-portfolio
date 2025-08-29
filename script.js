
    // Reveal animation on scroll
    const projects = document.querySelectorAll('.project');
    const revealOnScroll = () => {
      projects.forEach(project => {
        const rect = project.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          project.classList.add('show');
        }
      });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
