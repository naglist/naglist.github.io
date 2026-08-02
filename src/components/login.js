import { loginUser } from "../services/authService"
import { renderApp } from "../app"

export function renderLogin() {

  document.querySelector("#app").innerHTML = `

    <div class="login-page">

      <div class="login-card">

        <h1>Naglist</h1>

        <p>Parcel Management System</p>


        <div class="form-group">

          <label>Username</label>

          <input
            id="login-username"
            type="text"
            placeholder="Enter username"
          >

        </div>


        <div class="form-group">

          <label>Password</label>

          <input
            id="login-password"
            type="password"
            placeholder="Enter password"
          >

        </div>


        <button id="login-btn">
          Login
        </button>


      </div>

    </div>

  `


  setupLogin()

}



function setupLogin() {


  const button = document.querySelector("#login-btn")


  button.addEventListener("click", async () => {


    const username =
      document.querySelector("#login-username").value


    const password =
      document.querySelector("#login-password").value



    if (!username || !password) {

      alert("Enter username and password")

      return

    }


    try {

      const user = await loginUser(
        username,
        password
      )


      console.log(
        "Login successful:",
        user.email
      )

renderApp()


    }
    catch(error) {

      console.log(error)

      alert("Invalid username or password")

    }


  })

}