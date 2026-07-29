/* ============================================
   SWIFT LOGISTICS — Main JavaScript
   Modern interactive features for portfolio
   ============================================ */

// Enable JS class so CSS knows JS is active
document.documentElement.classList.add('js-enabled');

document.addEventListener('DOMContentLoaded', () => {

  // ============================================
  // 1. NAVIGATION — Scroll effect & Mobile menu
  // ============================================
  const navbar = document.querySelector('.navbar');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.navbar-links');
  const navAnchors = document.querySelectorAll('.navbar-links a');

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      navLinks.classList.toggle('open');
    });
  }

  // Close mobile menu on link click
  navAnchors.forEach(link => {
    link.addEventListener('click', () => {
      mobileToggle?.classList.remove('active');
      navLinks?.classList.remove('open');
    });
  });

  // ============================================
  // 2. DARK MODE TOGGLE
  // ============================================
  const themeToggle = document.querySelector('.theme-toggle');
  const themeIcons = document.querySelectorAll('.toggle-icon');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  function getTheme() {
    return localStorage.getItem('theme') || (prefersDark.matches ? 'dark' : 'light');
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    themeIcons.forEach(icon => {
      icon.classList.toggle('active', icon.dataset.theme === theme);
    });
  }

  if (themeToggle) {
    // Initialize
    setTheme(getTheme());

    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  // ============================================
  // 3. HERO PARTICLES (Canvas)
  // ============================================
  const particlesCanvas = document.getElementById('particles-canvas');
  if (particlesCanvas) {
    const ctx = particlesCanvas.getContext('2d');
    let particles = [];
    let mouseX = -1000;
    let mouseY = -1000;

    function resizeCanvas() {
      particlesCanvas.width = particlesCanvas.parentElement.offsetWidth;
      particlesCanvas.height = particlesCanvas.parentElement.offsetHeight;
    }

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * particlesCanvas.width;
        this.y = Math.random() * particlesCanvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        // Mouse interaction
        const dx = this.x - mouseX;
        const dy = this.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const force = (120 - dist) / 120;
          this.x += dx * force * 0.02;
          this.y += dy * force * 0.02;
        }
        if (this.x < 0 || this.x > particlesCanvas.width ||
            this.y < 0 || this.y > particlesCanvas.height) {
          this.reset();
        }
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
      }
    }

    function initParticles() {
      resizeCanvas();
      const count = Math.min(Math.floor((particlesCanvas.width * particlesCanvas.height) / 12000), 80);
      particles = Array.from({ length: count }, () => new Particle());
    }

    function connectParticles() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.06 * (1 - dist / 150)})`;
            ctx.stroke();
          }
        }
      }
    }

    function animateParticles() {
      ctx.clearRect(0, 0, particlesCanvas.width, particlesCanvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      connectParticles();
      requestAnimationFrame(animateParticles);
    }

    // Mouse tracking
    window.addEventListener('mousemove', (e) => {
      const rect = particlesCanvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    });

    window.addEventListener('resize', () => {
      resizeCanvas();
      particles.forEach(p => {
        if (p.x > particlesCanvas.width) p.x = particlesCanvas.width * 0.8;
        if (p.y > particlesCanvas.height) p.y = particlesCanvas.height * 0.8;
      });
    });

    initParticles();
    animateParticles();
  }

  // ============================================
  // 4. SCROLL REVEAL (Intersection Observer)
  // ============================================
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // ============================================
  // 5. ANIMATED COUNTERS
  // ============================================
  const counters = document.querySelectorAll('.stat-number');
  
  if (counters.length) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const targetValue = parseInt(target.dataset.count) || 0;
          const duration = 2000;
          const startTime = performance.now();

          function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const currentValue = Math.floor(eased * targetValue);
            
            if (target.dataset.suffix === '+') {
              target.textContent = currentValue + '+';
            } else if (target.dataset.suffix === 'K') {
              target.textContent = currentValue + 'K+';
            } else {
              target.textContent = currentValue;
            }

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            }
          }

          requestAnimationFrame(updateCounter);
          counterObserver.unobserve(target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(c => counterObserver.observe(c));
  }

  // ============================================
  // 6. TESTIMONIAL AUTO-SCROLL
  // ============================================
  const testimonialTrack = document.querySelector('.testimonials-track');
  if (testimonialTrack) {
    let scrollAmount = 0;
    const scrollStep = 1;

    function autoScrollTestimonials() {
      if (!testimonialTrack) return;
      const maxScroll = testimonialTrack.scrollWidth - testimonialTrack.clientWidth;
      
      if (scrollAmount >= maxScroll) {
        scrollAmount = 0;
        testimonialTrack.scrollTo({ left: 0, behavior: 'instant' });
      } else {
        scrollAmount += scrollStep;
        testimonialTrack.scrollLeft = scrollAmount;
      }
    }

    // Start auto-scroll
    let scrollInterval = setInterval(autoScrollTestimonials, 30);

    // Pause on hover
    testimonialTrack.addEventListener('mouseenter', () => {
      clearInterval(scrollInterval);
    });

    testimonialTrack.addEventListener('mouseleave', () => {
      scrollInterval = setInterval(autoScrollTestimonials, 30);
    });

    // Touch events for mobile
    let isDown = false;
    let startX;
    let scrollLeft;

    testimonialTrack.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX - testimonialTrack.offsetLeft;
      scrollLeft = testimonialTrack.scrollLeft;
      clearInterval(scrollInterval);
    });

    testimonialTrack.addEventListener('mouseleave', () => {
      isDown = false;
    });

    testimonialTrack.addEventListener('mouseup', () => {
      isDown = false;
      scrollInterval = setInterval(autoScrollTestimonials, 30);
    });

    testimonialTrack.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - testimonialTrack.offsetLeft;
      const walk = (x - startX) * 2;
      testimonialTrack.scrollLeft = scrollLeft - walk;
    });
  }

  // ============================================
  // 7. BACK TO TOP BUTTON
  // ============================================
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ============================================
  // 8. SMOOTH SCROLL FOR ANCHOR LINKS
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ============================================
  // 9. CONTACT FORM HANDLING
  // ============================================
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('.btn[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '⏳ Sending...';
      submitBtn.disabled = true;

      // Simulate form submission with a success message
      // In production, replace with actual form action URL
      setTimeout(() => {
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Log form data (for demo)
        console.log('Form submitted:', data);

        // Show success message
        const successMsg = document.createElement('div');
        successMsg.className = 'form-success';
        successMsg.innerHTML = `
          <div style="
            background: linear-gradient(135deg, rgba(74, 222, 128, 0.1), rgba(34, 197, 94, 0.1));
            border: 1px solid rgba(74, 222, 128, 0.3);
            border-radius: 12px;
            padding: 20px;
            margin-top: 20px;
            text-align: center;
          ">
            <div style="font-size: 2rem; margin-bottom: 8px;">✅</div>
            <strong style="color: var(--text-primary);">Message Sent!</strong>
            <p style="color: var(--text-secondary); font-size: 0.9rem; margin-top: 4px;">
              Thank you! We'll get back to you within 24 hours.
            </p>
          </div>
        `;
        
        const oldSuccess = contactForm.querySelector('.form-success');
        if (oldSuccess) oldSuccess.remove();
        contactForm.appendChild(successMsg);
        contactForm.reset();
        
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }, 1500);
    });
  }

  // ============================================
  // 10. PARALLAX ON MOUSE MOVE (Home hero stats)
  // ============================================
  const heroContent = document.querySelector('.hero-content');
  if (heroContent && !isMobile()) {
    document.querySelector('.hero')?.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      heroContent.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
  }

  // ============================================
  // 11. ACTIVE NAV LINK HIGHLIGHTING
  // ============================================
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  navAnchors.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPage) {
      link.classList.add('active');
    }
  });

  // Helper
  function isMobile() {
    return window.innerWidth <= 768;
  }

}); // End DOMContentLoaded
