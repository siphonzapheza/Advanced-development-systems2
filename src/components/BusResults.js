export class BusResults {
  constructor() {
    this.results = [];
    this.selectedBus = null;
  }

  render(searchData) {
    if (!searchData) {
      return '<div class="no-results">Please search for buses to see results.</div>';
    }

    // Mock bus data
    this.results = this.generateMockResults(searchData);

    return `
      <div class="results-container">
        <div class="results-header">
          <h2>Available Buses</h2>
          <p>Found ${this.results.length} buses from ${this.getCityName(searchData.from)} to ${this.getCityName(searchData.to)}</p>
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
          ${this.results.map(bus => this.renderBusCard(bus)).join('')}
        </div>
      </div>
    `;
  }

  renderBusCard(bus) {
    return `
      <div class="bus-card" data-bus-id="${bus.id}">
        <div class="bus-info">
          <div class="bus-header">
            <h3 class="bus-company">${bus.company}</h3>
            <div class="bus-type ${bus.type}">${bus.type.toUpperCase()}</div>
          </div>
          
          <div class="journey-info">
            <div class="time-info">
              <div class="departure">
                <span class="time">${bus.departureTime}</span>
                <span class="city">${bus.fromCity}</span>
              </div>
              <div class="journey-duration">
                <div class="duration-line">
                  <div class="duration-dot"></div>
                  <div class="duration-bar"></div>
                  <div class="duration-dot"></div>
                </div>
                <span class="duration">${bus.duration}</span>
              </div>
              <div class="arrival">
                <span class="time">${bus.arrivalTime}</span>
                <span class="city">${bus.toCity}</span>
              </div>
            </div>
          </div>
          
          <div class="bus-features">
            ${bus.features.map(feature => `<span class="feature">${feature}</span>`).join('')}
          </div>
          
          <div class="rating">
            <div class="stars">
              ${this.renderStars(bus.rating)}
            </div>
            <span class="rating-text">${bus.rating}/5 (${bus.reviews} reviews)</span>
          </div>
        </div>
        
        <div class="booking-info">
          <div class="price">
            <span class="currency">$</span>
            <span class="amount">${bus.price}</span>
            <span class="per-person">per person</span>
          </div>
          
          <div class="seats-available">
            <span class="seats-count">${bus.seatsAvailable}</span> seats left
          </div>
          
          <button class="book-button" onclick="window.busApp.selectBus('${bus.id}')">
            Select Seats
          </button>
        </div>
      </div>
    `;
  }

  renderStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
      stars += '<span class="star filled">★</span>';
    }
    
    if (hasHalfStar) {
      stars += '<span class="star half">★</span>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars += '<span class="star">★</span>';
    }
    
    return stars;
  }

  generateMockResults(searchData) {
    const companies = ['MegaBus', 'Greyhound', 'FlixBus', 'BoltBus', 'RedCoach'];
    const types = ['luxury', 'standard', 'economy'];
    const features = [
      ['WiFi', 'AC', 'Reclining Seats'],
      ['WiFi', 'AC', 'USB Charging'],
      ['WiFi', 'Restroom', 'Entertainment'],
      ['AC', 'Reclining Seats', 'Snacks'],
      ['WiFi', 'AC', 'Extra Legroom']
    ];

    return Array.from({ length: 8 }, (_, i) => ({
      id: `bus-${i + 1}`,
      company: companies[i % companies.length],
      type: types[i % types.length],
      fromCity: this.getCityName(searchData.from),
      toCity: this.getCityName(searchData.to),
      departureTime: this.generateTime(6, 22),
      arrivalTime: this.generateTime(8, 24),
      duration: this.generateDuration(),
      price: Math.floor(Math.random() * 100) + 25,
      rating: (Math.random() * 2 + 3).toFixed(1),
      reviews: Math.floor(Math.random() * 500) + 50,
      seatsAvailable: Math.floor(Math.random() * 20) + 5,
      features: features[i % features.length]
    }));
  }

  generateTime(start, end) {
    const hour = Math.floor(Math.random() * (end - start)) + start;
    const minute = Math.floor(Math.random() * 4) * 15;
    return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
  }

  generateDuration() {
    const hours = Math.floor(Math.random() * 8) + 2;
    const minutes = Math.floor(Math.random() * 4) * 15;
    return `${hours}h ${minutes}m`;
  }

  getCityName(cityCode) {
    const cities = {
      'new-york': 'New York',
      'los-angeles': 'Los Angeles',
      'chicago': 'Chicago',
      'houston': 'Houston',
      'phoenix': 'Phoenix',
      'philadelphia': 'Philadelphia',
      'san-antonio': 'San Antonio',
      'san-diego': 'San Diego',
      'dallas': 'Dallas',
      'san-jose': 'San Jose'
    };
    return cities[cityCode] || cityCode;
  }

  init() {
    // Initialize filters
    document.getElementById('sort-filter')?.addEventListener('change', (e) => {
      this.sortResults(e.target.value);
    });

    document.getElementById('type-filter')?.addEventListener('change', (e) => {
      this.filterByType(e.target.value);
    });
  }

  sortResults(sortBy) {
    // Implementation for sorting results
    console.log('Sorting by:', sortBy);
  }

  filterByType(type) {
    // Implementation for filtering by type
    console.log('Filtering by type:', type);
  }
}