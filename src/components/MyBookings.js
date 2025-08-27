export class MyBookings {
  constructor() {
    this.bookings = this.getBookings();
  }

  render() {
    const user = window.busApp.auth.getCurrentUser();
    
    return `
      <div class="bookings-container">
        <div class="bookings-header">
          <div class="container">
            <h2>My Bookings</h2>
            <p>Welcome back, ${user.fullName}!</p>
          </div>
        </div>

        <div class="bookings-content">
          <div class="container">
            ${this.bookings.length === 0 ? this.renderEmptyState() : this.renderBookings()}
          </div>
        </div>
      </div>
    `;
  }

  renderEmptyState() {
    return `
      <div class="empty-bookings">
        <div class="empty-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M8 6v6h8V6M6 8h2M16 8h2M8 14v4h8v-4M6 16h2M16 16h2"/>
            <rect x="4" y="4" width="16" height="16" rx="2"/>
          </svg>
        </div>
        <h3>No bookings yet</h3>
        <p>Start your journey by booking your first bus ticket</p>
        <button class="book-now-btn" onclick="window.busApp.showSearch()">
          Book Your First Trip
        </button>
      </div>
    `;
  }

  renderBookings() {
    return `
      <div class="bookings-grid">
        ${this.bookings.map(booking => this.renderBookingCard(booking)).join('')}
      </div>
    `;
  }

  renderBookingCard(booking) {
    const statusClass = this.getStatusClass(booking.status);
    const isUpcoming = new Date(booking.travelDate) > new Date();
    
    return `
      <div class="booking-card">
        <div class="booking-header">
          <div class="booking-id">
            <span class="label">Booking ID</span>
            <span class="value">${booking.bookingId}</span>
          </div>
          <div class="booking-status ${statusClass}">
            ${booking.status}
          </div>
        </div>

        <div class="journey-details">
          <div class="route">
            <div class="city-info">
              <span class="city">${booking.fromCity}</span>
              <span class="time">${booking.departureTime}</span>
            </div>
            <div class="route-line">
              <div class="route-dot"></div>
              <div class="route-bar"></div>
              <div class="route-dot"></div>
            </div>
            <div class="city-info">
              <span class="city">${booking.toCity}</span>
              <span class="time">${booking.arrivalTime}</span>
            </div>
          </div>
          
          <div class="travel-date">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            ${new Date(booking.travelDate).toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </div>
        </div>

        <div class="booking-info">
          <div class="info-row">
            <span class="label">Bus Company</span>
            <span class="value">${booking.company}</span>
          </div>
          <div class="info-row">
            <span class="label">Seats</span>
            <span class="value">${booking.seats.join(', ')}</span>
          </div>
          <div class="info-row">
            <span class="label">Passengers</span>
            <span class="value">${booking.passengers}</span>
          </div>
          <div class="info-row total">
            <span class="label">Total Amount</span>
            <span class="value">$${booking.totalAmount}</span>
          </div>
        </div>

        <div class="booking-actions">
          <button class="action-btn secondary" onclick="window.busApp.myBookings.downloadTicket('${booking.bookingId}')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7,10 12,15 17,10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download Ticket
          </button>
          
          ${isUpcoming && booking.status === 'Confirmed' ? `
            <button class="action-btn danger" onclick="window.busApp.myBookings.cancelBooking('${booking.bookingId}')">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="15" y1="9" x2="9" y2="15"/>
                <line x1="9" y1="9" x2="15" y2="15"/>
              </svg>
              Cancel Booking
            </button>
          ` : ''}
        </div>
      </div>
    `;
  }

  getStatusClass(status) {
    switch (status) {
      case 'Confirmed': return 'confirmed';
      case 'Cancelled': return 'cancelled';
      case 'Completed': return 'completed';
      default: return 'pending';
    }
  }

  getBookings() {
    const user = window.busApp.auth.getCurrentUser();
    if (!user) return [];
    
    const allBookings = JSON.parse(localStorage.getItem('busgo_bookings') || '[]');
    return allBookings.filter(booking => booking.userId === user.id);
  }

  addBooking(bookingData) {
    const user = window.busApp.auth.getCurrentUser();
    const booking = {
      ...bookingData,
      userId: user.id,
      bookingDate: new Date().toISOString(),
      status: 'Confirmed'
    };
    
    const allBookings = JSON.parse(localStorage.getItem('busgo_bookings') || '[]');
    allBookings.push(booking);
    localStorage.setItem('busgo_bookings', JSON.stringify(allBookings));
    
    this.bookings = this.getBookings();
  }

  downloadTicket(bookingId) {
    const booking = this.bookings.find(b => b.bookingId === bookingId);
    if (!booking) return;

    const ticketContent = `
BUS TICKET
==========

Booking ID: ${booking.bookingId}
Passenger: ${window.busApp.auth.getCurrentUser().fullName}

Journey: ${booking.fromCity} → ${booking.toCity}
Date: ${new Date(booking.travelDate).toLocaleDateString()}
Time: ${booking.departureTime} - ${booking.arrivalTime}

Bus Company: ${booking.company}
Seats: ${booking.seats.join(', ')}
Total Amount: $${booking.totalAmount}

Status: ${booking.status}

Please arrive 30 minutes before departure.
Valid ID required.
    `;

    const blob = new Blob([ticketContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `bus-ticket-${booking.bookingId}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }

  cancelBooking(bookingId) {
    if (!confirm('Are you sure you want to cancel this booking?')) return;
    
    const allBookings = JSON.parse(localStorage.getItem('busgo_bookings') || '[]');
    const bookingIndex = allBookings.findIndex(b => b.bookingId === bookingId);
    
    if (bookingIndex !== -1) {
      allBookings[bookingIndex].status = 'Cancelled';
      localStorage.setItem('busgo_bookings', JSON.stringify(allBookings));
      this.bookings = this.getBookings();
      window.busApp.showMyBookings(); // Refresh the view
      alert('Booking cancelled successfully');
    }
  }

  init() {
    // Initialize any interactive elements
  }
}