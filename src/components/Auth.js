export class Auth {
  constructor() {
    this.currentUser = null;
    this.users = JSON.parse(localStorage.getItem('busgo_users') || '[]');
    this.checkAuthStatus();
  }

  render(mode = 'login') {
    return `
      <div class="auth-container">
        <div class="auth-content">
          <div class="auth-card">
            <div class="auth-header">
              <div class="logo">
                <div class="logo-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M8 6v6h8V6M6 8h2M16 8h2M8 14v4h8v-4M6 16h2M16 16h2"/>
                    <rect x="4" y="4" width="16" height="16" rx="2"/>
                  </svg>
                </div>
                <span class="logo-text">BusGo</span>
              </div>
              <h2>${mode === 'login' ? 'Welcome Back' : 'Create Account'}</h2>
              <p>${mode === 'login' ? 'Sign in to your account' : 'Join BusGo today'}</p>
            </div>

            <form id="auth-form" class="auth-form">
              ${mode === 'signup' ? `
                <div class="form-group">
                  <label>Full Name</label>
                  <input type="text" name="fullName" required>
                </div>
              ` : ''}
              
              <div class="form-group">
                <label>Email Address</label>
                <input type="email" name="email" required>
              </div>
              
              <div class="form-group">
                <label>Password</label>
                <input type="password" name="password" required>
              </div>
              
              ${mode === 'signup' ? `
                <div class="form-group">
                  <label>Confirm Password</label>
                  <input type="password" name="confirmPassword" required>
                </div>
              ` : ''}
              
              <button type="submit" class="auth-button">
                ${mode === 'login' ? 'Sign In' : 'Create Account'}
              </button>
            </form>

            <div class="auth-footer">
              <p>
                ${mode === 'login' ? "Don't have an account?" : "Already have an account?"}
                <a href="#" id="toggle-mode">
                  ${mode === 'login' ? 'Sign up' : 'Sign in'}
                </a>
              </p>
            </div>

            <div class="demo-credentials">
              <p><strong>Demo Account:</strong></p>
              <p>Email: demo@busgo.com</p>
              <p>Password: demo123</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  init(mode = 'login') {
    this.currentMode = mode;
    
    document.getElementById('auth-form').addEventListener('submit', (e) => {
      e.preventDefault();
      if (mode === 'login') {
        this.handleLogin(e);
      } else {
        this.handleSignup(e);
      }
    });

    document.getElementById('toggle-mode').addEventListener('click', (e) => {
      e.preventDefault();
      const newMode = mode === 'login' ? 'signup' : 'login';
      window.busApp.showAuth(newMode);
    });
  }

  handleLogin(e) {
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');

    // Check demo account
    if (email === 'demo@busgo.com' && password === 'demo123') {
      this.currentUser = {
        id: 'demo',
        email: 'demo@busgo.com',
        fullName: 'Demo User'
      };
      localStorage.setItem('busgo_current_user', JSON.stringify(this.currentUser));
      window.busApp.onAuthSuccess();
      return;
    }

    // Check registered users
    const user = this.users.find(u => u.email === email && u.password === password);
    if (user) {
      this.currentUser = user;
      localStorage.setItem('busgo_current_user', JSON.stringify(this.currentUser));
      window.busApp.onAuthSuccess();
    } else {
      alert('Invalid email or password');
    }
  }

  handleSignup(e) {
    const formData = new FormData(e.target);
    const fullName = formData.get('fullName');
    const email = formData.get('email');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    if (this.users.find(u => u.email === email)) {
      alert('Email already registered');
      return;
    }

    const newUser = {
      id: Date.now().toString(),
      fullName,
      email,
      password
    };

    this.users.push(newUser);
    localStorage.setItem('busgo_users', JSON.stringify(this.users));
    
    this.currentUser = newUser;
    localStorage.setItem('busgo_current_user', JSON.stringify(this.currentUser));
    window.busApp.onAuthSuccess();
  }

  checkAuthStatus() {
    const stored = localStorage.getItem('busgo_current_user');
    if (stored) {
      this.currentUser = JSON.parse(stored);
    }
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem('busgo_current_user');
    window.busApp.showAuth();
  }

  isAuthenticated() {
    return this.currentUser !== null;
  }

  getCurrentUser() {
    return this.currentUser;
  }
}