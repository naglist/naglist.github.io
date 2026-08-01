export function renderApp() {
  document.querySelector('#app').innerHTML = `
    <div class="container">

      <header class="header">
        <h1>Naglist</h1>
      </header>

      <main class="main-layout">

        <section class="card">

          <h2>Parcel Entry</h2>

          <div class="form-group">
            <label>Date</label>
            <input type="date">
          </div>

          <div class="form-group">
            <label>State</label>
            <select>
              <option>Select State</option>
            </select>
          </div>

          <div class="form-group">
            <label>Transporter</label>
            <select>
              <option>Select Transporter</option>
            </select>
          </div>

          <div class="form-group">
            <label>Bilty Number</label>
            <input type="number">
          </div>

          <div class="form-group">
            <label>Parcel Count</label>
            <input type="number">
          </div>

          <h3>Weights</h3>

          <div id="weights-container"></div>

          <div class="total-weight">
            Total Weight: <strong>0.00 KG</strong>
          </div>

          <button class="submit-btn">
            Submit
          </button>

        </section>

        <aside class="card">

          <h2>Last Saved</h2>

          <p><strong>Date:</strong> --</p>
          <p><strong>State:</strong> --</p>
          <p><strong>Transporter:</strong> --</p>
          <p><strong>Bilty:</strong> --</p>
          <p><strong>Parcels:</strong> --</p>
          <p><strong>Total Weight:</strong> --</p>
          <p><strong>Submitted At:</strong> --</p>

        </aside>

      </main>

    </div>
  `
}