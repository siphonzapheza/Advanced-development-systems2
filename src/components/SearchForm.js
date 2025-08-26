export class SearchForm {
  constructor() {
    this.element = null;
    this.onSearch = null;
  }

  render() {
    return `
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
    `;
  }

  init() {
    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('departure-date').min = today;
    document.getElementById('return-date').min = today;

    // Handle city swap
    document.getElementById('swap-cities').addEventListener('click', () => {
      const fromSelect = document.getElementById('from');
      const toSelect = document.getElementById('to');
      const temp = fromSelect.value;
      fromSelect.value = toSelect.value;
      toSelect.value = temp;
    });

    // Handle form submission
    document.getElementById('bus-search-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = {
        from: document.getElementById('from').value,
        to: document.getElementById('to').value,
        departureDate: document.getElementById('departure-date').value,
        returnDate: document.getElementById('return-date').value,
        passengers: document.getElementById('passengers').value
      };
      
      if (this.onSearch) {
        this.onSearch(formData);
      }
    });

    // Update return date minimum when departure date changes
    document.getElementById('departure-date').addEventListener('change', (e) => {
      document.getElementById('return-date').min = e.target.value;
    });
  }
}