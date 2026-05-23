import { NavLink } from "react-router-dom"
import logo from "../assets/images/bangbillogo.png"

export default function Navbar() {

  const navClass = ({ isActive }) =>
    `px-4 py-2 rounded-2xl border whitespace-nowrap transition-all duration-300 text-sm ${
      isActive
        ? "bg-orange-500/30 border-orange-400 text-orange-300 shadow-lg shadow-orange-500/20"
        : "bg-white/5 border-white/10 hover:bg-orange-500/20 hover:border-orange-400/30 text-white"
    }`

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">

      <div className="max-w-7xl mx-auto px-3 md:px-6 py-3">

        <div className="flex items-center justify-between gap-3">

          {/* LOGO */}
          <NavLink
            to="/"
            className="flex items-center gap-2 min-w-fit"
          >

            <img
              src={logo}
              alt="BangBil Logo"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border border-orange-400 shadow-lg shadow-orange-500/30"
            />

            <div className="hidden sm:block">

              <h1 className="text-lg md:text-xl font-black text-orange-400 leading-none">
                BangBil
              </h1>

              <p className="text-[10px] md:text-xs text-gray-400">
                Ayam Geprek
              </p>

            </div>

          </NavLink>

          {/* MENU */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1">

            <NavLink
              to="/"
              className={navClass}
            >
              Home
            </NavLink>

            <NavLink
              to="/menu"
              className={navClass}
            >
              Menu
            </NavLink>

            <NavLink
              to="/cart"
              className={navClass}
            >
              Keranjang
            </NavLink>

            <NavLink
              to="/orders"
              className={navClass}
            >
              Pesanan
            </NavLink>

            <NavLink
              to="/admin"
              className={navClass}
            >
              Admin
            </NavLink>

          </div>

        </div>

      </div>

    </nav>
  )
}