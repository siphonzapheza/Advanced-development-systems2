import './style.css'
import { SearchForm } from './components/SearchForm.js'
import { BusResults } from './components/BusResults.js'
import { SeatSelection } from './components/SeatSelection.js'
import { Payment } from './components/Payment.js'
import { Confirmation } from './components/Confirmation.js'

class BusTicketApp {
  constructor() {
    this.currentView = 'search';
    this.searchForm = new SearchForm();
    this.busResults = new BusResults();
    this.seatSelection = new SeatSelection();
    this.payment = new Payment();
    this.confirmation = new Confirmation();
    this.searchData = null;
    
    this.init();
  }

  init() {
    this.render();
    this.setupEventListeners();
    
    // Make app globally available for component callbacks
    window.busApp = this;
  }

  render() {
    const app = document.querySelector('#app');
    
    switch (this.currentView) {
      case 'search':
        app.innerHTML = this.renderHeader() + this.searchForm.render();
        this.searchForm.onSearch = (data) => this.handleSearch(data);
        this.searchForm.init();
        break;
        
      case 'results':
        app.innerHTML = this.renderHeader() + this.busResults.render(this.searchData);
        this.busResults.init();
        break;
        
      case 'seats':
        app.innerHTML = this.seatSelection.render(this.selectedBusId);
        this.seatSelection.init();
        break;
        
      case 'payment':
        app.innerHTML = this.payment.render(this.paymentData);
        this.payment.init();
        break;
        
      case 'confirmation':
        app.innerHTML = this.confirmation.render(this.confirmationData);
        this.confirmation.init();
        break;
    }
  }

  renderHeader() {
    return `
      <header class="app-header">
        <div class="container">
          <div class="header-content">
            <div class="logo" onclick="window.busApp.showSearch()">
              <div class="logo-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M8 6v6h8V6M6 8h2M16 8h2M8 14v4h8v-4M6 16h2M16 16h2"/>
                  <rect x="4" y="4" width="16" height="16" rx="2"/>
                </svg>
              </div>
              <span class="logo-text">BusGo</span>
            </div>
            
            <nav class="header-nav">
              <a href="#" class="nav-link ${this.currentView === 'search' ? 'active' : ''}" onclick="window.busApp.showSearch()">
                Search
              </a>
              <a href="#" class="nav-link">My Bookings</a>
              <a href="#" class="nav-link">Help</a>
            </nav>
            
            <div class="header-actions">
              <button class="login-btn">Login</button>
              <button class="signup-btn">Sign Up</button>
            </div>
          </div>
        </div>
      </header>
    `;
  }

  setupEventListeners() {
    // Handle browser back button
    window.addEventListener('popstate', (e) => {
      if (e.state) {
        this.currentView = e.state.view;
        this.render();
      }
    });
  }

  handleSearch(searchData) {
    this.searchData = searchData;
    this.showResults();
  }

  showSearch() {
    this.currentView = 'search';
    this.render();
    history.pushState({ view: 'search' }, '', '#search');
  }

  showResults() {
    this.currentView = 'results';
    this.render();
    history.pushState({ view: 'results' }, '', '#results');
  }

  selectBus(busId) {
    this.selectedBusId = busId;
    this.showSeatSelection(busId);
  }

  showSeatSelection(busId) {
    this.selectedBusId = busId;
    this.currentView = 'seats';
    this.render();
    history.pushState({ view: 'seats' }, '', '#seats');
  }

  showPayment(paymentData) {
    this.paymentData = paymentData;
    this.currentView = 'payment';
    this.render();
    history.pushState({ view: 'payment' }, '', '#payment');
  }

  showConfirmation(confirmationData) {
    this.confirmationData = confirmationData;
    this.currentView = 'confirmation';
    this.render();
    history.pushState({ view: 'confirmation' }, '', '#confirmation');
  }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new BusTicketApp();
});

// Add some global animations and interactions
document.addEventListener('DOMContentLoaded', function() {
  // Add ripple effect to buttons
  document.addEventListener('click', function(e) {
    if (e.target.matches('button:not(.no-ripple)')) {
      const button = e.target;
      const ripple = document.createElement('span');
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.classList.add('ripple');
      
      button.style.position = 'relative';
      button.style.overflow = 'hidden';
      button.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    }
  });

  // Smooth scrolling for anchor links
  document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
      e.preventDefault();
      const href = e.target.getAttribute('href');
      if (href && href !== '#') {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    }
  });

  // Add loading states to forms
  document.addEventListener('submit', function(e) {
    const submitButton = e.target.querySelector('button[type="submit"]');
    if (submitButton && !submitButton.classList.contains('no-loading')) {
      const originalText = submitButton.innerHTML;
      submitButton.innerHTML = '<div class="loading-spinner"></div> Loading...';
      submitButton.disabled = true;
      
      // Reset after 3 seconds (for demo purposes)
      setTimeout(() => {
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
      }, 3000);
    }
  });
});