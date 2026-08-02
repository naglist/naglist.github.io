import { states } from './data/states'
import { transporters } from './data/transporters'
import { saveParcelEntry } from './services/parcelService'

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
            <input type="date" id="date">
          </div>

          <div class="form-group">
            <label>State</label>
            <select id="state">
  <option>Select State</option>
  ${states.map(state => `
    <option>${state}</option>
  `).join('')}
</select>
          </div>

          <div class="form-group">
            <label>Transporter</label>
            <select id="transporter">
  <option>Select Transporter</option>
  ${transporters.map(transporter => `
    <option>${transporter}</option>
  `).join('')}
</select>
          </div>

          <div class="form-group">
            <label>Bilty Number</label>
            <input type="number" id="bilty">
          </div>

          <div class="form-group">
            <label>Parcel Count</label>
            <input type="number" id="parcel-count">
          </div>

          <h3>Weights</h3>

          <div id="weights-container"></div>

          <div class="total-weight">
            Total Weight: <strong id="total-weight">0.00 KG</strong>
          </div>

          <button class="submit-btn" id="submit-btn">
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

const dateInput = document.querySelector('#date')

const today = new Date().toISOString().split('T')[0]

dateInput.value = today

  const parcelInput = document.querySelector('#parcel-count')
  const weightsContainer = document.querySelector('#weights-container')


  parcelInput.addEventListener('input', () => {

    const count = Number(parcelInput.value)

    weightsContainer.innerHTML = ''


    if (count > 0) {

      for (let i = 1; i <= count; i++) {

        const div = document.createElement('div')
        div.className = 'form-group'

        div.innerHTML = `
        <label>Weight ${i}</label>
        <input 
          type="number" 
          class="weight-input"
          data-index="${i}"
          placeholder="Enter weight"
        >
      `

        weightsContainer.appendChild(div)

      }


      const weightInputs = document.querySelectorAll('.weight-input')


      weightInputs.forEach((input, index) => {

        input.addEventListener('keydown', (e) => {

          if (e.key === 'Enter') {

            e.preventDefault()

            const nextInput = weightInputs[index + 1]

            if (nextInput) {
              nextInput.focus()
            }

          }

        })


        input.addEventListener('input', calculateTotal)

      })


      weightInputs[0].focus()

    }

  })


  function calculateTotal() {

    const weightInputs = document.querySelectorAll('.weight-input')

    let total = 0


    weightInputs.forEach(input => {

      total += Number(input.value) || 0

    })


    document.querySelector('#total-weight').textContent =
      `${total.toFixed(2)} KG`

  }
  const submitButton = document.querySelector('#submit-btn')


  submitButton.addEventListener('click', async () => {
    console.log("Submit clicked")

    const date = document.querySelector('#date').value
const state = document.querySelector('#state').value
const transporter = document.querySelector('#transporter').value
const bilty = document.querySelector('#bilty').value
const parcels = document.querySelector('#parcel-count').value
const totalWeight = document.querySelector('#total-weight').textContent
const now = new Date()
const submittedTime = now.toLocaleTimeString()
const entry = {

  date,
  state,
  transporter,
  bilty,
  parcelCount: parcels,
  totalWeight: Number(
    totalWeight.replace(" KG", "")
  ),
  submittedAt: submittedTime

}
    
await saveParcelEntry(entry)



if (!date) {
  alert("Please select date")
  return
}


if (state === "Select State") {
  alert("Please select state")
  return
}


if (transporter === "Select Transporter") {
  alert("Please select transporter")
  return
}


if (!bilty) {
  alert("Please enter bilty number")
  return
}


if (!parcels) {
  alert("Please enter parcel count")
  return
}


const weightInputs = document.querySelectorAll('.weight-input')


for (let input of weightInputs) {

  if (!input.value) {
    alert("Please enter all weights")
    input.focus()
    return
  }

}

    

    


    document.querySelector('aside').innerHTML = `

    <h2>Last Saved</h2>

    <p><strong>Date:</strong> ${date || '--'}</p>

    <p><strong>State:</strong> ${state}</p>

    <p><strong>Transporter:</strong> ${transporter}</p>

    <p><strong>Bilty:</strong> ${bilty || '--'}</p>

    <p><strong>Parcels:</strong> ${parcels || '--'}</p>

    <p><strong>Total Weight:</strong> ${totalWeight}</p>

    <p><strong>Submitted At:</strong> ${submittedTime}</p>

  `
// Reset form after successful save

document.querySelector('#state').value = "Select State"

document.querySelector('#transporter').value = "Select Transporter"

document.querySelector('#bilty').value = ""

document.querySelector('#parcel-count').value = ""

document.querySelector('#weights-container').innerHTML = ""

document.querySelector('#total-weight').textContent = "0.00 KG"


// Keep today's date

dateInput.value = today
document.querySelector('#date').focus()

  })

}