import React from "react"
import ReactDOM from "react-dom/client"

import App from "./App"

import "./index.css"

import { CartProvider } from "./context/CartContext"
import { OrderProvider } from "./context/OrderContext"

import { Toaster } from "react-hot-toast"

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <React.StrictMode>

    <OrderProvider>

      <CartProvider>

        <App />

        <Toaster position="top-right" />

      </CartProvider>

    </OrderProvider>

  </React.StrictMode>
)