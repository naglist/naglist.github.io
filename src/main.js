import './style.css'

import { renderLogin } from './components/login'
import { renderExport } from './components/export'


const path = window.location.pathname


if (path === "/x") {

  renderExport()

}

else {

  renderLogin()

}