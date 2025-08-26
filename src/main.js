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
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
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

  // Animate floating cards
  const cards = document.querySelectorAll('.floating-card');
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
  });
});