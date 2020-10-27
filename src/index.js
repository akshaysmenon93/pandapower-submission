import React from "react"
import ReactDOM from "react-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter} from "react-router-dom"


import App from "./components/App"
import AppErrorBoundary from "./components/common/errorBoundary"


const rootElement = document.getElementById( "root" )

ReactDOM.render(
  <BrowserRouter>
    <AppErrorBoundary>
      <App />
    </AppErrorBoundary>
  </BrowserRouter>,
  rootElement
)
