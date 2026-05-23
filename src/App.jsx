import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom"

import {
  AnimatePresence,
  motion,
} from "framer-motion"

import Navbar from "./components/Navbar"

import HomePage from "./pages/HomePage"
import MenuPage from "./pages/MenuPage"
import CartPage from "./pages/CartPage"
import OrdersPage from "./pages/OrdersPage"
import AdminPage from "./pages/AdminPage"
import AdminLogin from "./pages/AdminLogin"

function ProtectedRoute({
  children,
}) {

  const isAdmin =
    localStorage.getItem("admin")

  if (!isAdmin) {

    return (
      <Navigate
        to="/login"
        replace
      />
    )
  }

  return children
}

function AnimatedRoutes() {

  const location = useLocation()

  return (

    <AnimatePresence mode="wait">

      <Routes
        location={location}
        key={location.pathname}
      >

        {/* HOME */}
        <Route
          path="/"
          element={
            <PageWrapper>
              <HomePage />
            </PageWrapper>
          }
        />

        {/* MENU */}
        <Route
          path="/menu"
          element={
            <PageWrapper>
              <MenuPage />
            </PageWrapper>
          }
        />

        {/* CART */}
        <Route
          path="/cart"
          element={
            <PageWrapper>
              <CartPage />
            </PageWrapper>
          }
        />

        {/* ORDERS */}
        <Route
          path="/orders"
          element={
            <PageWrapper>
              <OrdersPage />
            </PageWrapper>
          }
        />

        {/* LOGIN */}
        <Route
          path="/login"
          element={
            <PageWrapper>
              <AdminLogin />
            </PageWrapper>
          }
        />

        {/* ADMIN */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>

              <PageWrapper>
                <AdminPage />
              </PageWrapper>

            </ProtectedRoute>
          }
        />

      </Routes>

    </AnimatePresence>
  )
}

function PageWrapper({
  children,
}) {

  return (

    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      exit={{
        opacity: 0,
        y: -40,
      }}

      transition={{
        duration: 0.4,
      }}
    >

      {children}

    </motion.div>
  )
}

export default function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <AnimatedRoutes />

    </BrowserRouter>
  )
}