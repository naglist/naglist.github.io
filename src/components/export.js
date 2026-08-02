import * as XLSX from "xlsx"
import { getDocs, collection } from "firebase/firestore"
import { db } from "../firebase/config"


const EXPORT_PASSWORD = "yo"


export function renderExport() {

  document.querySelector("#app").innerHTML = `

    <div class="container">

      <div class="card">

        <h2>yo</h2>


        <div class="form-group">

          <label>yo</label>

          <input 
            id="export-password"
            type="password"
            placeholder="yo"
          >

        </div>


        <button id="export-btn">
          Export
        </button>


      </div>

    </div>

  `


  setupExport()

}



function setupExport() {


  document
  .querySelector("#export-btn")
  .addEventListener("click", async () => {


    const password =
      document.querySelector("#export-password").value


    if(password !== EXPORT_PASSWORD) {

      alert("Wrong password")

      return

    }


    const snapshot =
      await getDocs(collection(db,"parcelEntries"))


    const data = []


    snapshot.forEach((doc)=>{

      data.push(doc.data())

    })


    const worksheet =
      XLSX.utils.json_to_sheet(data)


    const workbook =
      XLSX.utils.book_new()


    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "Parcels"
    )


    XLSX.writeFile(
      workbook,
      "Naglist_Export.xlsx"
    )


  })

}