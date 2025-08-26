import './style.css'

// Create the main app structure
document.querySelector('#app').innerHTML = `
  <div class="app">
    <!-- Header -->
    <header class="header">
      <div class="container">
        <div class="nav-brand">
          <div class="logo">
            <div class="logo-icon"></div>
            <span class="logo-text">Advanced Dev Systems</span>
          </div>
        </div>
        <nav class="nav-menu">
          <a href="#" class="nav-link active">Home</a>
          <a href="#" class="nav-link">Projects</a>
          <a href="#" class="nav-link">Services</a>
          <a href="#" class="nav-link">About</a>
          <a href="#" class="nav-link">Contact</a>
        </nav>
        <button class="cta-button">Get Started</button>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-background"></div>
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">
            <span class="gradient-text">Advanced Development</span>
            <br>Systems & Solutions
          </h1>
          <p class="hero-description">
            Cutting-edge technology solutions that transform your business with innovative development systems, 
            modern architectures, and scalable platforms designed for the future.
          </p>
          <div class="hero-buttons">
            <button class="btn-primary">Explore Solutions</button>
            <button class="btn-secondary">Watch Demo</button>
          </div>
        </div>
        <div class="hero-visual">
          <div class="floating-card card-1">
            <div class="card-icon blue"></div>
            <h3>Cloud Native</h3>
            <p>Scalable infrastructure</p>
          </div>
          <div class="floating-card card-2">
            <div class="card-icon cyan"></div>
            <h3>AI Powered</h3>
            <p>Intelligent automation</p>
          </div>
          <div class="floating-card card-3">
            <div class="card-icon purple"></div>
            <h3>Real-time</h3>
            <p>Instant synchronization</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Powerful Features</h2>
          <p class="section-subtitle">Everything you need to build amazing applications</p>
        </div>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon blue-gradient">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
            </div>
            <h3>Lightning Fast</h3>
            <p>Optimized performance with cutting-edge technologies for blazing fast applications.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon cyan-gradient">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3>Scalable Architecture</h3>
            <p>Built to grow with your business using modern microservices and cloud-native patterns.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon purple-gradient">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <circle cx="12" cy="16" r="1"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </div>
            <h3>Enterprise Security</h3>
            <p>Bank-level security with advanced encryption and compliance standards.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon orange-gradient">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 19c-5 0-8-3-8-8s3-8 8-8 8 3 8 8-3 8-8 8"/>
                <path d="M15 12h6"/>
              </svg>
            </div>
            <h3>Real-time Analytics</h3>
            <p>Comprehensive insights and monitoring with beautiful dashboards and reports.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon green-gradient">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
              </svg>
            </div>
            <h3>AI Integration</h3>
            <p>Smart automation and machine learning capabilities built right into your workflow.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon pink-gradient">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="3"/>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
              </svg>
            </div>
            <h3>Easy Configuration</h3>
            <p>Simple setup and configuration with intuitive interfaces and comprehensive documentation.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-number">500+</div>
            <div class="stat-label">Projects Delivered</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">99.9%</div>
            <div class="stat-label">Uptime Guarantee</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">24/7</div>
            <div class="stat-label">Support Available</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">150+</div>
            <div class="stat-label">Happy Clients</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <div class="logo">
              <div class="logo-icon"></div>
              <span class="logo-text">Advanced Dev Systems</span>
            </div>
            <p>Building the future with advanced development systems and innovative solutions.</p>
          </div>
          <div class="footer-links">
            <div class="link-group">
              <h4>Product</h4>
              <a href="#">Features</a>
              <a href="#">Pricing</a>
              <a href="#">Documentation</a>
              <a href="#">API</a>
            </div>
            <div class="link-group">
              <h4>Company</h4>
              <a href="#">About</a>
              <a href="#">Careers</a>
              <a href="#">Blog</a>
              <a href="#">Press</a>
            </div>
            <div class="link-group">
              <h4>Support</h4>
              <a href="#">Help Center</a>
              <a href="#">Contact</a>
              <a href="#">Status</a>
              <a href="#">Community</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2025 Advanced Development Systems. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
`

// Add some interactive functionality
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      if (href && href !== '#') {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Add scroll effect to header
  window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Enhanced floating card animations
  const cards = document.querySelectorAll('.floating-card');
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
    
    // Add hover effects
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px) scale(1.05)';
      this.style.transition = 'all 0.3s ease';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });

  // Interactive navigation
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Remove active class from all links
      navLinks.forEach(l => l.classList.remove('active'));
      // Add active class to clicked link
      this.classList.add('active');
    });
  });

  // Button interactions
  const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .cta-button');
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      // Create ripple effect
      const ripple = document.createElement('span');
      ripple.style.position = 'absolute';
      ripple.style.borderRadius = '50%';
      ripple.style.background = 'rgba(255, 255, 255, 0.6)';
      ripple.style.transform = 'scale(0)';
      ripple.style.animation = 'ripple 0.6s linear';
      ripple.style.left = '50%';
      ripple.style.top = '50%';
      ripple.style.width = '20px';
      ripple.style.height = '20px';
      ripple.style.marginLeft = '-10px';
      ripple.style.marginTop = '-10px';
      
      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

  // Feature cards hover effects
  const featureCards = document.querySelectorAll('.feature-card');
  featureCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      const icon = this.querySelector('.feature-icon');
      icon.style.transform = 'rotate(10deg) scale(1.1)';
      icon.style.transition = 'all 0.3s ease';
    });
    
    card.addEventListener('mouseleave', function() {
      const icon = this.querySelector('.feature-icon');
      icon.style.transform = 'rotate(0deg) scale(1)';
    });
  });

  // Animated counter for stats
  const animateCounter = (element, target) => {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target + (element.textContent.includes('%') ? '%' : element.textContent.includes('+') ? '+' : '');
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current) + (element.textContent.includes('%') ? '%' : element.textContent.includes('+') ? '+' : '');
      }
    }, 20);
  };

  // Intersection Observer for stats animation
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const statNumbers = entry.target.querySelectorAll('.stat-number');
        statNumbers.forEach(stat => {
          const text = stat.textContent;
          let target = parseInt(text);
          if (text.includes('99.9%')) target = 99.9;
          else if (text.includes('500+')) target = 500;
          else if (text.includes('150+')) target = 150;
          else if (text.includes('24/7')) target = 24;
          
          animateCounter(stat, target);
        });
        statsObserver.unobserve(entry.target);
      }
    });
  });

  const statsSection = document.querySelector('.stats');
  if (statsSection) {
    statsObserver.observe(statsSection);
  }

  // Parallax effect for hero background
  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
      heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
  });

  // Mobile menu toggle (for responsive design)
  const createMobileMenu = () => {
    const header = document.querySelector('.header .container');
    const navMenu = document.querySelector('.nav-menu');
    
    // Create mobile menu button
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = '☰';
    mobileMenuBtn.style.display = 'none';
    mobileMenuBtn.style.background = 'none';
    mobileMenuBtn.style.border = 'none';
    mobileMenuBtn.style.fontSize = '1.5rem';
    mobileMenuBtn.style.cursor = 'pointer';
    mobileMenuBtn.style.color = '#667eea';
    
    header.appendChild(mobileMenuBtn);
    
    mobileMenuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('mobile-active');
    });
  };

  createMobileMenu();

  // Add loading animation
  const addLoadingAnimation = () => {
    const elements = document.querySelectorAll('.feature-card, .floating-card, .stat-item');
    elements.forEach((el, index) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'all 0.6s ease';
      
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, index * 100);
    });
  };

  addLoadingAnimation();
});