import { motion } from "framer-motion"
import heroImage from "../assets/images/hero.png"
import { Link } from "react-router-dom"

export default function Hero() {

  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* GLOW EFFECT */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>

      {/* FLOATING GRADIENT */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
        }}
        className="absolute top-1/3 left-1/4 w-40 h-40 bg-orange-400/10 rounded-full blur-3xl"
      />

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6"
      >


        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-5xl md:text-7xl font-black mb-6 leading-tight"
        >
          Ayam Geprek

          <span className="block text-orange-400 drop-shadow-[0_0_20px_rgba(251,146,60,0.8)]">
            BangBil
          </span>

        </motion.h1>

        {/* DESC */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 mb-8 leading-relaxed"
        >
          Ayam crispy gurih dengan sambal pedas khas rumahan.
          Sensasi pedas nikmat dengan tampilan modern yang bikin pelanggan balik lagi.
        </motion.p>

        {/* BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >

          {/* PESAN SEKARANG */}
          <Link to="/cart">

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 30px rgba(249,115,22,0.7)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-2xl bg-orange-500 hover:bg-orange-600 transition-all duration-300 font-semibold shadow-2xl"
            >
              Pesan Sekarang
            </motion.button>

          </Link>

          {/* LIHAT MENU */}
          <Link to="/menu">

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl hover:bg-white/20 transition-all duration-300 font-semibold"
            >
              Lihat Menu
            </motion.button>

          </Link>

        </motion.div>

      </motion.div>

    </section>
  )
}