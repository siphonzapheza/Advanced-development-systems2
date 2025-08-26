(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();class c{constructor(){this.element=null,this.onSearch=null}render(){return`
      <div class="search-form-container">
        <div class="search-form">
          <h2>Find Your Perfect Journey</h2>
          <form id="bus-search-form" class="search-inputs">
            <div class="input-group">
              <label for="from">From</label>
              <select id="from" required>
                <option value="">Select departure city</option>
                <option value="new-york">New York</option>
                <option value="los-angeles">Los Angeles</option>
                <option value="chicago">Chicago</option>
                <option value="houston">Houston</option>
                <option value="phoenix">Phoenix</option>
                <option value="philadelphia">Philadelphia</option>
                <option value="san-antonio">San Antonio</option>
                <option value="san-diego">San Diego</option>
                <option value="dallas">Dallas</option>
                <option value="san-jose">San Jose</option>
              </select>
            </div>
            
            <div class="swap-button" id="swap-cities">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M7 16l4-4-4-4M17 8l-4 4 4 4"/>
              </svg>
            </div>
            
            <div class="input-group">
              <label for="to">To</label>
              <select id="to" required>
                <option value="">Select destination city</option>
                <option value="new-york">New York</option>
                <option value="los-angeles">Los Angeles</option>
                <option value="chicago">Chicago</option>
                <option value="houston">Houston</option>
                <option value="phoenix">Phoenix</option>
                <option value="philadelphia">Philadelphia</option>
                <option value="san-antonio">San Antonio</option>
                <option value="san-diego">San Diego</option>
                <option value="dallas">Dallas</option>
                <option value="san-jose">San Jose</option>
              </select>
            </div>
            
            <div class="input-group">
              <label for="departure-date">Departure Date</label>
              <input type="date" id="departure-date" required>
            </div>
            
            <div class="input-group">
              <label for="return-date">Return Date (Optional)</label>
              <input type="date" id="return-date">
            </div>
            
            <div class="input-group">
              <label for="passengers">Passengers</label>
              <select id="passengers" required>
                <option value="1">1 Passenger</option>
                <option value="2">2 Passengers</option>
                <option value="3">3 Passengers</option>
                <option value="4">4 Passengers</option>
                <option value="5">5+ Passengers</option>
              </select>
            </div>
            
            <button type="submit" class="search-button">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
              Search Buses
            </button>
          </form>
        </div>
      </div>
    `}init(){const e=new Date().toISOString().split("T")[0];document.getElementById("departure-date").min=e,document.getElementById("return-date").min=e,document.getElementById("swap-cities").addEventListener("click",()=>{const t=document.getElementById("from"),i=document.getElementById("to"),s=t.value;t.value=i.value,i.value=s}),document.getElementById("bus-search-form").addEventListener("submit",t=>{t.preventDefault();const i={from:document.getElementById("from").value,to:document.getElementById("to").value,departureDate:document.getElementById("departure-date").value,returnDate:document.getElementById("return-date").value,passengers:document.getElementById("passengers").value};this.onSearch&&this.onSearch(i)}),document.getElementById("departure-date").addEventListener("change",t=>{document.getElementById("return-date").min=t.target.value})}}class u{constructor(){this.results=[],this.selectedBus=null}render(e){return e?(this.results=this.generateMockResults(e),`
      <div class="results-container">
        <div class="results-header">
          <h2>Available Buses</h2>
          <p>Found ${this.results.length} buses from ${this.getCityName(e.from)} to ${this.getCityName(e.to)}</p>
        </div>
        
        <div class="filters">
          <div class="filter-group">
            <label>Sort by:</label>
            <select id="sort-filter">
              <option value="price">Price (Low to High)</option>
              <option value="departure">Departure Time</option>
              <option value="duration">Duration</option>
              <option value="rating">Rating</option>
            </select>
          </div>
          
          <div class="filter-group">
            <label>Bus Type:</label>
            <select id="type-filter">
              <option value="all">All Types</option>
              <option value="luxury">Luxury</option>
              <option value="standard">Standard</option>
              <option value="economy">Economy</option>
            </select>
          </div>
        </div>
        
        <div class="bus-results" id="bus-results">
          ${this.results.map(t=>this.renderBusCard(t)).join("")}
        </div>
      </div>
    `):'<div class="no-results">Please search for buses to see results.</div>'}renderBusCard(e){return`
      <div class="bus-card" data-bus-id="${e.id}">
        <div class="bus-info">
          <div class="bus-header">
            <h3 class="bus-company">${e.company}</h3>
            <div class="bus-type ${e.type}">${e.type.toUpperCase()}</div>
          </div>
          
          <div class="journey-info">
            <div class="time-info">
              <div class="departure">
                <span class="time">${e.departureTime}</span>
                <span class="city">${e.fromCity}</span>
              </div>
              <div class="journey-duration">
                <div class="duration-line">
                  <div class="duration-dot"></div>
                  <div class="duration-bar"></div>
                  <div class="duration-dot"></div>
                </div>
                <span class="duration">${e.duration}</span>
              </div>
              <div class="arrival">
                <span class="time">${e.arrivalTime}</span>
                <span class="city">${e.toCity}</span>
              </div>
            </div>
          </div>
          
          <div class="bus-features">
            ${e.features.map(t=>`<span class="feature">${t}</span>`).join("")}
          </div>
          
          <div class="rating">
            <div class="stars">
              ${this.renderStars(e.rating)}
            </div>
            <span class="rating-text">${e.rating}/5 (${e.reviews} reviews)</span>
          </div>
        </div>
        
        <div class="booking-info">
          <div class="price">
            <span class="currency">$</span>
            <span class="amount">${e.price}</span>
            <span class="per-person">per person</span>
          </div>
          
          <div class="seats-available">
            <span class="seats-count">${e.seatsAvailable}</span> seats left
          </div>
          
          <button class="book-button" onclick="window.busApp.selectBus('${e.id}')">
            Select Seats
          </button>
        </div>
      </div>
    `}renderStars(e){const t=Math.floor(e),i=e%1!==0;let s="";for(let n=0;n<t;n++)s+='<span class="star filled">★</span>';i&&(s+='<span class="star half">★</span>');const a=5-Math.ceil(e);for(let n=0;n<a;n++)s+='<span class="star">★</span>';return s}generateMockResults(e){const t=["MegaBus","Greyhound","FlixBus","BoltBus","RedCoach"],i=["luxury","standard","economy"],s=[["WiFi","AC","Reclining Seats"],["WiFi","AC","USB Charging"],["WiFi","Restroom","Entertainment"],["AC","Reclining Seats","Snacks"],["WiFi","AC","Extra Legroom"]];return Array.from({length:8},(a,n)=>({id:`bus-${n+1}`,company:t[n%t.length],type:i[n%i.length],fromCity:this.getCityName(e.from),toCity:this.getCityName(e.to),departureTime:this.generateTime(6,22),arrivalTime:this.generateTime(8,24),duration:this.generateDuration(),price:Math.floor(Math.random()*100)+25,rating:(Math.random()*2+3).toFixed(1),reviews:Math.floor(Math.random()*500)+50,seatsAvailable:Math.floor(Math.random()*20)+5,features:s[n%s.length]}))}generateTime(e,t){const i=Math.floor(Math.random()*(t-e))+e,s=Math.floor(Math.random()*4)*15;return`${i.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`}generateDuration(){const e=Math.floor(Math.random()*8)+2,t=Math.floor(Math.random()*4)*15;return`${e}h ${t}m`}getCityName(e){return{"new-york":"New York","los-angeles":"Los Angeles",chicago:"Chicago",houston:"Houston",phoenix:"Phoenix",philadelphia:"Philadelphia","san-antonio":"San Antonio","san-diego":"San Diego",dallas:"Dallas","san-jose":"San Jose"}[e]||e}init(){document.getElementById("sort-filter")?.addEventListener("change",e=>{this.sortResults(e.target.value)}),document.getElementById("type-filter")?.addEventListener("change",e=>{this.filterByType(e.target.value)})}sortResults(e){console.log("Sorting by:",e)}filterByType(e){console.log("Filtering by type:",e)}}class p{constructor(){this.selectedSeats=[],this.busData=null,this.seatPrice=0}render(e){return this.busData=this.getBusData(e),this.seatPrice=this.busData.price,`
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
    `}renderSeats(){let i="";for(let s=1;s<=12;s++){i+='<div class="seat-row">',i+=`<div class="row-number">${s}</div>`;for(let a=1;a<=4;a++){const n=`${s}${String.fromCharCode(64+a)}`,l=Math.random()<.3,d=Math.random()<.1;let r="seat available";l?r="seat occupied":d&&(r="seat reserved"),i+=`
          <div class="${r}" 
               data-seat="${n}" 
               onclick="window.busApp.seatSelection.toggleSeat('${n}')">
            <span class="seat-number">${n}</span>
          </div>
        `,a===2&&(i+='<div class="aisle"></div>')}i+="</div>"}return i}toggleSeat(e){const t=document.querySelector(`[data-seat="${e}"]`);if(!(t.classList.contains("occupied")||t.classList.contains("reserved"))){if(t.classList.contains("selected"))t.classList.remove("selected"),t.classList.add("available"),this.selectedSeats=this.selectedSeats.filter(i=>i!==e);else if(this.selectedSeats.length<4)t.classList.remove("available"),t.classList.add("selected"),this.selectedSeats.push(e);else{alert("You can select maximum 4 seats at a time.");return}this.updateBookingSummary()}}updateBookingSummary(){const e=document.getElementById("selected-seats-list"),t=document.getElementById("seat-count"),i=document.getElementById("total-price"),s=document.getElementById("proceed-to-payment");this.selectedSeats.length===0?(e.innerHTML='<p class="no-seats">No seats selected</p>',s.disabled=!0):(e.innerHTML=this.selectedSeats.map(n=>`<div class="selected-seat-item">Seat ${n}</div>`).join(""),s.disabled=!1),t.textContent=this.selectedSeats.length;const a=this.selectedSeats.length*this.seatPrice+5;i.textContent=`$${a.toFixed(2)}`}getBusData(e){return{id:e,company:"MegaBus",fromCity:"New York",toCity:"Los Angeles",departureTime:"08:00",arrivalTime:"20:30",price:45}}init(){document.getElementById("proceed-to-payment")?.addEventListener("click",()=>{this.selectedSeats.length>0&&window.busApp.showPayment({busData:this.busData,selectedSeats:this.selectedSeats,totalPrice:this.selectedSeats.length*this.seatPrice+5})})}}class v{constructor(){this.bookingData=null}render(e){return this.bookingData=e,`
      <div class="payment-container">
        <div class="payment-header">
          <button class="back-button" onclick="window.busApp.showSeatSelection('${e.busData.id}')">
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
                  <span class="from">${e.busData.fromCity}</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                  <span class="to">${e.busData.toCity}</span>
                </div>
                <div class="timing">
                  <span>${e.busData.departureTime} - ${e.busData.arrivalTime}</span>
                </div>
                <div class="company">${e.busData.company}</div>
              </div>
              
              <div class="seats-info">
                <h4>Selected Seats</h4>
                <div class="seats-list">
                  ${e.selectedSeats.map(t=>`<span class="seat-tag">${t}</span>`).join("")}
                </div>
              </div>
              
              <div class="price-summary">
                <div class="price-row">
                  <span>Seats (${e.selectedSeats.length}x):</span>
                  <span>$${(e.selectedSeats.length*e.busData.price).toFixed(2)}</span>
                </div>
                <div class="price-row">
                  <span>Service Fee:</span>
                  <span>$5.00</span>
                </div>
                <div class="price-row total">
                  <span>Total Amount:</span>
                  <span>$${e.totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="payment-form">
            <div class="form-card">
              <h3>Passenger Information</h3>
              <form id="booking-form">
                <div class="passenger-section">
                  ${e.selectedSeats.map((t,i)=>`
                    <div class="passenger-info">
                      <h4>Passenger ${i+1} - Seat ${t}</h4>
                      <div class="form-row">
                        <div class="form-group">
                          <label>First Name</label>
                          <input type="text" name="firstName_${i}" required>
                        </div>
                        <div class="form-group">
                          <label>Last Name</label>
                          <input type="text" name="lastName_${i}" required>
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="form-group">
                          <label>Age</label>
                          <input type="number" name="age_${i}" min="1" max="120" required>
                        </div>
                        <div class="form-group">
                          <label>Gender</label>
                          <select name="gender_${i}" required>
                            <option value="">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  `).join("")}
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
                  Complete Booking - $${e.totalPrice.toFixed(2)}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    `}init(){document.querySelectorAll(".payment-method").forEach(i=>{i.addEventListener("click",()=>{document.querySelectorAll(".payment-method").forEach(a=>a.classList.remove("active")),i.classList.add("active");const s=document.getElementById("card-details");i.dataset.method==="card"?s.style.display="block":s.style.display="none"})});const e=document.querySelector('input[name="cardNumber"]');e&&e.addEventListener("input",i=>{let s=i.target.value.replace(/\s/g,"").replace(/[^0-9]/gi,""),a=s.match(/.{1,4}/g)?.join(" ")||s;i.target.value=a});const t=document.querySelector('input[name="expiryDate"]');t&&t.addEventListener("input",i=>{let s=i.target.value.replace(/\D/g,"");s.length>=2&&(s=s.substring(0,2)+"/"+s.substring(2,4)),i.target.value=s}),document.getElementById("booking-form").addEventListener("submit",i=>{i.preventDefault(),this.processBooking()})}processBooking(){const e=document.querySelector(".complete-booking-button");e.innerHTML,e.innerHTML=`
      <div class="loading-spinner"></div>
      Processing...
    `,e.disabled=!0,setTimeout(()=>{window.busApp.showConfirmation({...this.bookingData,bookingId:"BK"+Date.now(),bookingDate:new Date().toLocaleDateString()})},3e3)}}class h{constructor(){this.bookingData=null}render(e){return this.bookingData=e,`
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
                <div class="id-display">${e.bookingId}</div>
              </div>

              <div class="journey-summary">
                <h3>Journey Details</h3>
                <div class="journey-route">
                  <div class="route-info">
                    <span class="city">${e.busData.fromCity}</span>
                    <div class="route-line">
                      <div class="route-dot"></div>
                      <div class="route-bar"></div>
                      <div class="route-dot"></div>
                    </div>
                    <span class="city">${e.busData.toCity}</span>
                  </div>
                  <div class="timing-info">
                    <span class="time">${e.busData.departureTime}</span>
                    <span class="duration">12h 30m</span>
                    <span class="time">${e.busData.arrivalTime}</span>
                  </div>
                </div>
                
                <div class="booking-details-grid">
                  <div class="detail-item">
                    <span class="label">Bus Company</span>
                    <span class="value">${e.busData.company}</span>
                  </div>
                  <div class="detail-item">
                    <span class="label">Booking Date</span>
                    <span class="value">${e.bookingDate}</span>
                  </div>
                  <div class="detail-item">
                    <span class="label">Seats</span>
                    <span class="value">${e.selectedSeats.join(", ")}</span>
                  </div>
                  <div class="detail-item">
                    <span class="label">Total Amount</span>
                    <span class="value">$${e.totalPrice.toFixed(2)}</span>
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
    `}init(){setTimeout(()=>{document.querySelector(".checkmark-circle").classList.add("animate")},500),document.querySelector(".download-ticket-btn")?.addEventListener("click",()=>{this.downloadTicket()}),document.querySelector(".email-ticket-btn")?.addEventListener("click",()=>{this.emailTicket()}),document.querySelector(".manage-booking-btn")?.addEventListener("click",()=>{alert("Manage booking functionality would be implemented here")})}downloadTicket(){const e=`
      BUS TICKET
      ==========
      
      Booking ID: ${this.bookingData.bookingId}
      
      Journey: ${this.bookingData.busData.fromCity} → ${this.bookingData.busData.toCity}
      Date: ${this.bookingData.bookingDate}
      Time: ${this.bookingData.busData.departureTime} - ${this.bookingData.busData.arrivalTime}
      
      Bus Company: ${this.bookingData.busData.company}
      Seats: ${this.bookingData.selectedSeats.join(", ")}
      
      Total Amount: $${this.bookingData.totalPrice.toFixed(2)}
      
      Please arrive 30 minutes before departure.
      Valid ID required.
    `,t=new Blob([e],{type:"text/plain"}),i=window.URL.createObjectURL(t),s=document.createElement("a");s.href=i,s.download=`bus-ticket-${this.bookingData.bookingId}.txt`,document.body.appendChild(s),s.click(),document.body.removeChild(s),window.URL.revokeObjectURL(i)}emailTicket(){alert("Email ticket functionality would integrate with email service")}}class m{constructor(){this.currentView="search",this.searchForm=new c,this.busResults=new u,this.seatSelection=new p,this.payment=new v,this.confirmation=new h,this.searchData=null,this.init()}init(){this.render(),this.setupEventListeners(),window.busApp=this}render(){const e=document.querySelector("#app");switch(this.currentView){case"search":e.innerHTML=this.renderHeader()+this.searchForm.render(),this.searchForm.onSearch=t=>this.handleSearch(t),this.searchForm.init();break;case"results":e.innerHTML=this.renderHeader()+this.busResults.render(this.searchData),this.busResults.init();break;case"seats":e.innerHTML=this.seatSelection.render(this.selectedBusId),this.seatSelection.init();break;case"payment":e.innerHTML=this.payment.render(this.paymentData),this.payment.init();break;case"confirmation":e.innerHTML=this.confirmation.render(this.confirmationData),this.confirmation.init();break}}renderHeader(){return`
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
              <a href="#" class="nav-link ${this.currentView==="search"?"active":""}" onclick="window.busApp.showSearch()">
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
    `}setupEventListeners(){window.addEventListener("popstate",e=>{e.state&&(this.currentView=e.state.view,this.render())})}handleSearch(e){this.searchData=e,this.showResults()}showSearch(){this.currentView="search",this.render(),history.pushState({view:"search"},"","#search")}showResults(){this.currentView="results",this.render(),history.pushState({view:"results"},"","#results")}selectBus(e){this.selectedBusId=e,this.showSeatSelection(e)}showSeatSelection(e){this.selectedBusId=e,this.currentView="seats",this.render(),history.pushState({view:"seats"},"","#seats")}showPayment(e){this.paymentData=e,this.currentView="payment",this.render(),history.pushState({view:"payment"},"","#payment")}showConfirmation(e){this.confirmationData=e,this.currentView="confirmation",this.render(),history.pushState({view:"confirmation"},"","#confirmation")}}document.addEventListener("DOMContentLoaded",()=>{new m});document.addEventListener("DOMContentLoaded",function(){document.addEventListener("click",function(o){if(o.target.matches("button:not(.no-ripple)")){const e=o.target,t=document.createElement("span"),i=e.getBoundingClientRect(),s=Math.max(i.width,i.height),a=o.clientX-i.left-s/2,n=o.clientY-i.top-s/2;t.style.width=t.style.height=s+"px",t.style.left=a+"px",t.style.top=n+"px",t.classList.add("ripple"),e.style.position="relative",e.style.overflow="hidden",e.appendChild(t),setTimeout(()=>{t.remove()},600)}}),document.addEventListener("click",function(o){if(o.target.matches('a[href^="#"]')){o.preventDefault();const e=o.target.getAttribute("href");if(e&&e!=="#"){const t=document.querySelector(e);t&&t.scrollIntoView({behavior:"smooth"})}}}),document.addEventListener("submit",function(o){const e=o.target.querySelector('button[type="submit"]');if(e&&!e.classList.contains("no-loading")){const t=e.innerHTML;e.innerHTML='<div class="loading-spinner"></div> Loading...',e.disabled=!0,setTimeout(()=>{e.innerHTML=t,e.disabled=!1},3e3)}})});
