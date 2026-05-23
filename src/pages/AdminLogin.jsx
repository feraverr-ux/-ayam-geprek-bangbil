import { useState } from "react"
import { useNavigate } from "react-router-dom"

import {
  ShieldCheck,
  Lock,
  User,
  Eye,
  EyeOff,
} from "lucide-react"

import { motion } from "framer-motion"

export default function AdminLogin() {

  const navigate = useNavigate()

  const [username, setUsername] =
    useState("")

  const [password, setPassword] =
    useState("")

  const [showPassword, setShowPassword] =
    useState(false)

  const [error, setError] =
    useState("")

  const handleLogin = () => {

    if (
      username === "admin" &&
      password === "admin123"
    ) {

      localStorage.setItem(
        "admin",
        "true"
      )

      navigate("/admin")

    } else {

      setError(
        "Username atau password salah"
      )
    }
  }

  return (
  <div className="min-h-screen pt-32 flex items-start justify-center px-6 bg-gradient-to-b from-[#140d09] via-[#1b120d] to-[#24150d] overflow-hidden relative">
      {/* BLUR */}
      <div className="absolute w-[260px] h-[260px] bg-orange-500/20 blur-[120px] rounded-full top-[-100px] left-[-100px]" />

      <div className="absolute w-[240px] h-[240px] bg-red-500/10 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />

      {/* CARD */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
          scale: 0.95,
        }}

        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}

        transition={{
          duration: 0.4,
        }}

        className="relative z-10 w-full max-w-[390px] rounded-[30px] bg-white/5 border border-white/10 backdrop-blur-2xl p-6 shadow-2xl"
      >

        {/* ICON */}
        <div className="flex justify-center mb-5">

          <div className="w-16 h-16 rounded-[20px] bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">

            <ShieldCheck
              size={34}
              className="text-orange-400"
            />

          </div>

        </div>

        {/* TITLE */}
        <div className="text-center mb-6">

          <h1 className="text-3xl font-black text-orange-400">
            Admin Login
          </h1>

          <p className="text-gray-400 mt-2 text-sm leading-relaxed">
            Dashboard Ayam Geprek BangBil
          </p>

        </div>

        {/* FORM */}
        <div className="space-y-4">

          {/* USERNAME */}
          <div>

            <label className="block text-sm text-gray-400 mb-2">
              Username
            </label>

            <div className="relative">

              <User
                size={18}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                placeholder="Masukkan username"
                value={username}
                onChange={(e) =>
                  setUsername(
                    e.target.value
                  )
                }
                className="w-full h-13 pl-14 pr-5 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-orange-500/40 transition-all text-white placeholder:text-gray-500"
              />

            </div>

          </div>

          {/* PASSWORD */}
          <div>

            <label className="block text-sm text-gray-400 mb-2">
              Password
            </label>

            <div className="relative">

              <Lock
                size={18}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Masukkan password"
                value={password}
                onChange={(e) =>
                  setPassword(
                    e.target.value
                  )
                }
                className="w-full h-13 pl-14 pr-14 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-orange-500/40 transition-all text-white placeholder:text-gray-500"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-400 transition-all"
              >

                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}

              </button>

            </div>

          </div>

          {/* ERROR */}
          {error && (

            <motion.div
              initial={{
                opacity: 0,
                y: -10,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              className="p-3 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 text-center text-sm"
            >

              {error}

            </motion.div>
          )}

          {/* BUTTON */}
          <button
            onClick={handleLogin}
            className="w-full h-13 rounded-2xl bg-orange-500 hover:bg-orange-600 transition-all duration-300 font-bold text-sm shadow-xl shadow-orange-500/20 mt-2"
          >
            Masuk Dashboard
          </button>

        </div>

      </motion.div>

    </div>
  )
}