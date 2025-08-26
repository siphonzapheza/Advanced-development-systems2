export class SeatSelection {
  constructor() {
    this.selectedSeats = [];
    this.busData = null;
    this.seatPrice = 0;
  }

  render(busId) {
    this.busData = this.getBusData(busId);
    this.seatPrice = this.busData.price;
    
    return `
      <div class="seat-selection-container">
        <div class="seat-selection-header">
          <button class="back-button" onclick="window.busApp.showResults()">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Results
          </button>
          
          <div class="bus-details">
            <h2>${this.busData.company}</h2>
            <p>${this.busData.fromCity} → ${this.busData.toCity}</p>
            <p>${this.busData.departureTime} - ${this.busData.arrivalTime}</p>
          </div>
        </div>

        <div class="seat-selection-content">
          <div class="bus-layout">
            <div class="bus-header">
              <div class="driver-area">
                <div class="steering-wheel"></div>
                <span>Driver</span>
              </div>
            </div>
            
            <div class="seats-container">
              <div class="seat-legend">
                <div class="legend-item">
                  <div class="seat-demo available"></div>
                  <span>Available</span>
                </div>
                <div class="legend-item">
                  <div class="seat-demo selected"></div>
                  <span>Selected</span>
                </div>
                <div class="legend-item">
                  <div class="seat-demo occupied"></div>
                  <span>Occupied</span>
                </div>
                <div class="legend-item">
                  <div class="seat-demo reserved"></div>
                  <span>Reserved</span>
                </div>
              </div>
              
              <div class="bus-seats">
                ${this.renderSeats()}
              </div>
            </div>
          </div>
          
          <div class="booking-summary">
            <div class="summary-card">
              <h3>Booking Summary</h3>
              
              <div class="selected-seats-info">
                <h4>Selected Seats</h4>
                <div id="selected-seats-list">
                  <p class="no-seats">No seats selected</p>
                </div>
              </div>
              
              <div class="price-breakdown">
                <div class="price-row">
                  <span>Base Price per seat:</span>
                  <span>$${this.seatPrice}</span>
                </div>
                <div class="price-row">
                  <span>Selected seats:</span>
                  <span id="seat-count">0</span>
                </div>
                <div class="price-row">
                  <span>Service fee:</span>
                  <span>$5.00</span>
                </div>
                <div class="price-row total">
                  <span>Total:</span>
                  <span id="total-price">$0.00</span>
                </div>
              </div>
              
              <button class="proceed-button" id="proceed-to-payment" disabled>
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  renderSeats() {
    const rows = 12;
    const seatsPerRow = 4;
    let seatsHTML = '';
    
    for (let row = 1; row <= rows; row++) {
      seatsHTML += `<div class="seat-row">`;
      seatsHTML += `<div class="row-number">${row}</div>`;
      
      for (let seat = 1; seat <= seatsPerRow; seat++) {
        const seatNumber = `${row}${String.fromCharCode(64 + seat)}`;
        const isOccupied = Math.random() < 0.3; // 30% chance of being occupied
        const isReserved = Math.random() < 0.1; // 10% chance of being reserved
        
        let seatClass = 'seat available';
        if (isOccupied) seatClass = 'seat occupied';
        else if (isReserved) seatClass = 'seat reserved';
        
        seatsHTML += `
          <div class="${seatClass}" 
               data-seat="${seatNumber}" 
               onclick="window.busApp.seatSelection.toggleSeat('${seatNumber}')">
            <span class="seat-number">${seatNumber}</span>
          </div>
        `;
        
        // Add aisle after second seat
        if (seat === 2) {
          seatsHTML += `<div class="aisle"></div>`;
        }
      }
      
      seatsHTML += `</div>`;
    }
    
    return seatsHTML;
  }

  toggleSeat(seatNumber) {
    const seatElement = document.querySelector(`[data-seat="${seatNumber}"]`);
    
    if (seatElement.classList.contains('occupied') || seatElement.classList.contains('reserved')) {
      return; // Can't select occupied or reserved seats
    }
    
    if (seatElement.classList.contains('selected')) {
      // Deselect seat
      seatElement.classList.remove('selected');
      seatElement.classList.add('available');
      this.selectedSeats = this.selectedSeats.filter(seat => seat !== seatNumber);
    } else {
      // Select seat (max 4 seats)
      if (this.selectedSeats.length < 4) {
        seatElement.classList.remove('available');
        seatElement.classList.add('selected');
        this.selectedSeats.push(seatNumber);
      } else {
        alert('You can select maximum 4 seats at a time.');
        return;
      }
    }
    
    this.updateBookingSummary();
  }

  updateBookingSummary() {
    const selectedSeatsList = document.getElementById('selected-seats-list');
    const seatCount = document.getElementById('seat-count');
    const totalPrice = document.getElementById('total-price');
    const proceedButton = document.getElementById('proceed-to-payment');
    
    if (this.selectedSeats.length === 0) {
      selectedSeatsList.innerHTML = '<p class="no-seats">No seats selected</p>';
      proceedButton.disabled = true;
    } else {
      selectedSeatsList.innerHTML = this.selectedSeats.map(seat => 
        `<div class="selected-seat-item">Seat ${seat}</div>`
      ).join('');
      proceedButton.disabled = false;
    }
    
    seatCount.textContent = this.selectedSeats.length;
    const total = (this.selectedSeats.length * this.seatPrice) + 5; // +5 service fee
    totalPrice.textContent = `$${total.toFixed(2)}`;
  }

  getBusData(busId) {
    // Mock bus data - in real app, this would come from API
    return {
      id: busId,
      company: 'MegaBus',
      fromCity: 'New York',
      toCity: 'Los Angeles',
      departureTime: '08:00',
      arrivalTime: '20:30',
      price: 45
    };
  }

  init() {
    document.getElementById('proceed-to-payment')?.addEventListener('click', () => {
      if (this.selectedSeats.length > 0) {
        window.busApp.showPayment({
          busData: this.busData,
          selectedSeats: this.selectedSeats,
          totalPrice: (this.selectedSeats.length * this.seatPrice) + 5
        });
      }
    });
  }
}