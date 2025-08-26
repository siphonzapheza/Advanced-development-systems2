export class Payment {
  constructor() {
    this.bookingData = null;
  }

  render(bookingData) {
    this.bookingData = bookingData;
    
    return `
      <div class="payment-container">
        <div class="payment-header">
          <button class="back-button" onclick="window.busApp.showSeatSelection('${bookingData.busData.id}')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Seat Selection
          </button>
          <h2>Complete Your Booking</h2>
        </div>

        <div class="payment-content">
          <div class="booking-details">
            <div class="details-card">
              <h3>Journey Details</h3>
              <div class="journey-info">
                <div class="route">
                  <span class="from">${bookingData.busData.fromCity}</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                  <span class="to">${bookingData.busData.toCity}</span>
                </div>
                <div class="timing">
                  <span>${bookingData.busData.departureTime} - ${bookingData.busData.arrivalTime}</span>
                </div>
                <div class="company">${bookingData.busData.company}</div>
              </div>
              
              <div class="seats-info">
                <h4>Selected Seats</h4>
                <div class="seats-list">
                  ${bookingData.selectedSeats.map(seat => `<span class="seat-tag">${seat}</span>`).join('')}
                </div>
              </div>
              
              <div class="price-summary">
                <div class="price-row">
                  <span>Seats (${bookingData.selectedSeats.length}x):</span>
                  <span>$${(bookingData.selectedSeats.length * bookingData.busData.price).toFixed(2)}</span>
                </div>
                <div class="price-row">
                  <span>Service Fee:</span>
                  <span>$5.00</span>
                </div>
                <div class="price-row total">
                  <span>Total Amount:</span>
                  <span>$${bookingData.totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="payment-form">
            <div class="form-card">
              <h3>Passenger Information</h3>
              <form id="booking-form">
                <div class="passenger-section">
                  ${bookingData.selectedSeats.map((seat, index) => `
                    <div class="passenger-info">
                      <h4>Passenger ${index + 1} - Seat ${seat}</h4>
                      <div class="form-row">
                        <div class="form-group">
                          <label>First Name</label>
                          <input type="text" name="firstName_${index}" required>
                        </div>
                        <div class="form-group">
                          <label>Last Name</label>
                          <input type="text" name="lastName_${index}" required>
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="form-group">
                          <label>Age</label>
                          <input type="number" name="age_${index}" min="1" max="120" required>
                        </div>
                        <div class="form-group">
                          <label>Gender</label>
                          <select name="gender_${index}" required>
                            <option value="">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  `).join('')}
                </div>

                <div class="contact-section">
                  <h4>Contact Information</h4>
                  <div class="form-row">
                    <div class="form-group">
                      <label>Email Address</label>
                      <input type="email" name="email" required>
                    </div>
                    <div class="form-group">
                      <label>Phone Number</label>
                      <input type="tel" name="phone" required>
                    </div>
                  </div>
                </div>

                <div class="payment-section">
                  <h4>Payment Information</h4>
                  <div class="payment-methods">
                    <div class="payment-method active" data-method="card">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                        <line x1="1" y1="10" x2="23" y2="10"/>
                      </svg>
                      Credit/Debit Card
                    </div>
                    <div class="payment-method" data-method="paypal">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M7 21h10l2-12H5l2 12zM5 9V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2"/>
                      </svg>
                      PayPal
                    </div>
                  </div>

                  <div class="card-details" id="card-details">
                    <div class="form-group">
                      <label>Card Number</label>
                      <input type="text" name="cardNumber" placeholder="1234 5678 9012 3456" maxlength="19">
                    </div>
                    <div class="form-row">
                      <div class="form-group">
                        <label>Expiry Date</label>
                        <input type="text" name="expiryDate" placeholder="MM/YY" maxlength="5">
                      </div>
                      <div class="form-group">
                        <label>CVV</label>
                        <input type="text" name="cvv" placeholder="123" maxlength="4">
                      </div>
                    </div>
                    <div class="form-group">
                      <label>Cardholder Name</label>
                      <input type="text" name="cardholderName" placeholder="John Doe">
                    </div>
                  </div>
                </div>

                <div class="terms-section">
                  <label class="checkbox-label">
                    <input type="checkbox" name="terms" required>
                    <span class="checkmark"></span>
                    I agree to the <a href="#" class="terms-link">Terms and Conditions</a> and <a href="#" class="privacy-link">Privacy Policy</a>
                  </label>
                </div>

                <button type="submit" class="complete-booking-button">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9 12l2 2 4-4"/>
                    <circle cx="12" cy="12" r="10"/>
                  </svg>
                  Complete Booking - $${bookingData.totalPrice.toFixed(2)}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  init() {
    // Payment method selection
    document.querySelectorAll('.payment-method').forEach(method => {
      method.addEventListener('click', () => {
        document.querySelectorAll('.payment-method').forEach(m => m.classList.remove('active'));
        method.classList.add('active');
        
        const cardDetails = document.getElementById('card-details');
        if (method.dataset.method === 'card') {
          cardDetails.style.display = 'block';
        } else {
          cardDetails.style.display = 'none';
        }
      });
    });

    // Card number formatting
    const cardNumberInput = document.querySelector('input[name="cardNumber"]');
    if (cardNumberInput) {
      cardNumberInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\s/g, '').replace(/[^0-9]/gi, '');
        let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
        e.target.value = formattedValue;
      });
    }

    // Expiry date formatting
    const expiryInput = document.querySelector('input[name="expiryDate"]');
    if (expiryInput) {
      expiryInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length >= 2) {
          value = value.substring(0, 2) + '/' + value.substring(2, 4);
        }
        e.target.value = value;
      });
    }

    // Form submission
    document.getElementById('booking-form').addEventListener('submit', (e) => {
      e.preventDefault();
      this.processBooking();
    });
  }

  processBooking() {
    // Show loading state
    const submitButton = document.querySelector('.complete-booking-button');
    const originalText = submitButton.innerHTML;
    submitButton.innerHTML = `
      <div class="loading-spinner"></div>
      Processing...
    `;
    submitButton.disabled = true;

    // Simulate payment processing
    setTimeout(() => {
      window.busApp.showConfirmation({
        ...this.bookingData,
        bookingId: 'BK' + Date.now(),
        bookingDate: new Date().toLocaleDateString()
      });
    }, 3000);
  }
}