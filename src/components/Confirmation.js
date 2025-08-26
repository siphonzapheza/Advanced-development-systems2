export class Confirmation {
  constructor() {
    this.bookingData = null;
  }

  render(bookingData) {
    this.bookingData = bookingData;
    
    return `
      <div class="confirmation-container">
        <div class="confirmation-content">
          <div class="success-animation">
            <div class="checkmark-circle">
              <svg class="checkmark" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                <path d="M9 12l2 2 4-4"/>
              </svg>
            </div>
          </div>
          
          <div class="confirmation-header">
            <h1>Booking Confirmed!</h1>
            <p>Your bus ticket has been successfully booked</p>
          </div>

          <div class="booking-confirmation">
            <div class="confirmation-card">
              <div class="booking-id">
                <h3>Booking ID</h3>
                <div class="id-display">${bookingData.bookingId}</div>
              </div>

              <div class="journey-summary">
                <h3>Journey Details</h3>
                <div class="journey-route">
                  <div class="route-info">
                    <span class="city">${bookingData.busData.fromCity}</span>
                    <div class="route-line">
                      <div class="route-dot"></div>
                      <div class="route-bar"></div>
                      <div class="route-dot"></div>
                    </div>
                    <span class="city">${bookingData.busData.toCity}</span>
                  </div>
                  <div class="timing-info">
                    <span class="time">${bookingData.busData.departureTime}</span>
                    <span class="duration">12h 30m</span>
                    <span class="time">${bookingData.busData.arrivalTime}</span>
                  </div>
                </div>
                
                <div class="booking-details-grid">
                  <div class="detail-item">
                    <span class="label">Bus Company</span>
                    <span class="value">${bookingData.busData.company}</span>
                  </div>
                  <div class="detail-item">
                    <span class="label">Booking Date</span>
                    <span class="value">${bookingData.bookingDate}</span>
                  </div>
                  <div class="detail-item">
                    <span class="label">Seats</span>
                    <span class="value">${bookingData.selectedSeats.join(', ')}</span>
                  </div>
                  <div class="detail-item">
                    <span class="label">Total Amount</span>
                    <span class="value">$${bookingData.totalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div class="ticket-actions">
                <button class="download-ticket-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7,10 12,15 17,10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  Download E-Ticket
                </button>
                
                <button class="email-ticket-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  Email Ticket
                </button>
              </div>
            </div>
          </div>

          <div class="important-info">
            <h3>Important Information</h3>
            <div class="info-grid">
              <div class="info-item">
                <div class="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12,6 12,12 16,14"/>
                  </svg>
                </div>
                <div class="info-content">
                  <h4>Arrival Time</h4>
                  <p>Please arrive at the bus station at least 30 minutes before departure</p>
                </div>
              </div>
              
              <div class="info-item">
                <div class="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14,2 14,8 20,8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10,9 9,9 8,9"/>
                  </svg>
                </div>
                <div class="info-content">
                  <h4>Valid ID Required</h4>
                  <p>Bring a government-issued photo ID that matches the name on your ticket</p>
                </div>
              </div>
              
              <div class="info-item">
                <div class="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
                  </svg>
                </div>
                <div class="info-content">
                  <h4>Baggage Policy</h4>
                  <p>One carry-on bag and one checked bag included. Additional fees may apply</p>
                </div>
              </div>
            </div>
          </div>

          <div class="next-actions">
            <button class="new-booking-btn" onclick="window.busApp.showSearch()">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 3h18v18H3zM9 9h6v6H9z"/>
              </svg>
              Book Another Trip
            </button>
            
            <button class="manage-booking-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
              </svg>
              Manage Booking
            </button>
          </div>
        </div>
      </div>
    `;
  }

  init() {
    // Animate checkmark
    setTimeout(() => {
      document.querySelector('.checkmark-circle').classList.add('animate');
    }, 500);

    // Download ticket functionality
    document.querySelector('.download-ticket-btn')?.addEventListener('click', () => {
      this.downloadTicket();
    });

    // Email ticket functionality
    document.querySelector('.email-ticket-btn')?.addEventListener('click', () => {
      this.emailTicket();
    });

    // Manage booking functionality
    document.querySelector('.manage-booking-btn')?.addEventListener('click', () => {
      alert('Manage booking functionality would be implemented here');
    });
  }

  downloadTicket() {
    // Create a simple ticket content
    const ticketContent = `
      BUS TICKET
      ==========
      
      Booking ID: ${this.bookingData.bookingId}
      
      Journey: ${this.bookingData.busData.fromCity} → ${this.bookingData.busData.toCity}
      Date: ${this.bookingData.bookingDate}
      Time: ${this.bookingData.busData.departureTime} - ${this.bookingData.busData.arrivalTime}
      
      Bus Company: ${this.bookingData.busData.company}
      Seats: ${this.bookingData.selectedSeats.join(', ')}
      
      Total Amount: $${this.bookingData.totalPrice.toFixed(2)}
      
      Please arrive 30 minutes before departure.
      Valid ID required.
    `;

    const blob = new Blob([ticketContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `bus-ticket-${this.bookingData.bookingId}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }

  emailTicket() {
    alert('Email ticket functionality would integrate with email service');
  }
}