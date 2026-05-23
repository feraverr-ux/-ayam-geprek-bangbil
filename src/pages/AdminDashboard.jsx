import { useNavigate } from "react-router-dom"

import {
  ShoppingCart,
  DollarSign,
  Users,
  LogOut,
  Wallet,
  Clock3,
} from "lucide-react"

import { motion } from "framer-motion"

import { useOrders } from "../context/OrderContext"

export default function AdminDashboard() {

  const navigate = useNavigate()

  const { orders } = useOrders()

  const totalOrders = orders.length

  const totalRevenue = orders.reduce(
    (total, order) => total + order.total,
    0
  )

  const totalCustomers = new Set(
    orders.map((order) => order.customer)
  ).size

  const totalMenus = orders.reduce(
    (total, order) =>
      total +
      order.items.reduce(
        (sum, item) =>
          sum + item.quantity,
        0
      ),
    0
  )

  const handleLogout = () => {

    localStorage.removeItem("admin")

    navigate("/")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#140d09] to-[#22130c] text-white pt-32 px-6">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">

          <div>

            <h1 className="text-5xl font-black text-orange-400">
              Admin Dashboard
            </h1>

            <p className="text-gray-300 mt-3 text-lg">
              Monitoring realtime penjualan Ayam Geprek BangBil
            </p>

          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-red-500/20 border border-red-500/30 hover:bg-red-500 hover:text-white transition-all duration-300 w-fit"
          >

            <LogOut size={22} />

            <span className="font-bold">
              Logout
            </span>

          </button>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">

          {/* TOTAL ORDER */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-2xl"
          >

            <div className="flex items-center justify-between mb-6">

              <div className="p-4 rounded-2xl bg-orange-500/20">

                <ShoppingCart
                  className="text-orange-400"
                  size={34}
                />

              </div>

              <span className="text-gray-400 text-sm">
                realtime
              </span>

            </div>

            <p className="text-gray-300">
              Total Pesanan
            </p>

            <h2 className="text-5xl font-black text-orange-400 mt-3">
              {totalOrders}
            </h2>

          </motion.div>

          {/* REVENUE */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.1,
            }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-2xl"
          >

            <div className="flex items-center justify-between mb-6">

              <div className="p-4 rounded-2xl bg-green-500/20">

                <DollarSign
                  className="text-green-400"
                  size={34}
                />

              </div>

              <span className="text-gray-400 text-sm">
                income
              </span>

            </div>

            <p className="text-gray-300">
              Total Pendapatan
            </p>

            <h2 className="text-4xl font-black text-green-400 mt-3">
              Rp{totalRevenue.toLocaleString(
                "id-ID"
              )}
            </h2>

          </motion.div>

          {/* CUSTOMER */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
            }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-2xl"
          >

            <div className="flex items-center justify-between mb-6">

              <div className="p-4 rounded-2xl bg-blue-500/20">

                <Users
                  className="text-blue-400"
                  size={34}
                />

              </div>

              <span className="text-gray-400 text-sm">
                active
              </span>

            </div>

            <p className="text-gray-300">
              Total Pelanggan
            </p>

            <h2 className="text-5xl font-black text-blue-400 mt-3">
              {totalCustomers}
            </h2>

          </motion.div>

          {/* MENU SOLD */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
            }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-2xl"
          >

            <div className="flex items-center justify-between mb-6">

              <div className="p-4 rounded-2xl bg-purple-500/20">

                <Wallet
                  className="text-purple-400"
                  size={34}
                />

              </div>

              <span className="text-gray-400 text-sm">
                sold
              </span>

            </div>

            <p className="text-gray-300">
              Menu Terjual
            </p>

            <h2 className="text-5xl font-black text-purple-400 mt-3">
              {totalMenus}
            </h2>

          </motion.div>

        </div>

        {/* RECENT ORDERS */}
        <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-2xl p-8">

          <div className="flex items-center gap-4 mb-10">

            <div className="p-4 rounded-2xl bg-orange-500/20">

              <Clock3
                className="text-orange-400"
                size={30}
              />

            </div>

            <div>

              <h2 className="text-4xl font-black">
                Pesanan Terbaru
              </h2>

              <p className="text-gray-300 mt-1">
                Data realtime customer
              </p>

            </div>

          </div>

          {orders.length === 0 ? (

            <div className="text-center py-20 rounded-3xl bg-white/5 border border-white/10">

              <h3 className="text-3xl font-bold mb-4">
                Belum Ada Pesanan
              </h3>

              <p className="text-gray-300">
                Pesanan customer akan muncul di sini
              </p>

            </div>

          ) : (

            <div className="space-y-6">

              {orders
                .slice()
                .reverse()
                .map((order) => (

                  <motion.div
                    key={order.id}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className="p-6 rounded-3xl bg-white/5 border border-white/10"
                  >

                    {/* TOP */}
                    <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 mb-6">

                      <div>

                        <h3 className="text-3xl font-black text-orange-400">
                          {order.customer}
                        </h3>

                        <p className="text-gray-300 mt-2">
                          {order.phone}
                        </p>

                        <p className="text-gray-400 text-sm mt-1">
                          {order.createdAt}
                        </p>

                      </div>

                      <div className="text-left xl:text-right">

                        <p className="text-gray-300 mb-2">
                          Total Pembayaran
                        </p>

                        <h2 className="text-4xl font-black text-green-400">
                          Rp{order.total.toLocaleString(
                            "id-ID"
                          )}
                        </h2>

                      </div>

                    </div>

                    {/* DETAIL */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                      {/* LEFT */}
                      <div className="space-y-4">

                        <div className="p-5 rounded-2xl bg-white/5">

                          <p className="text-gray-400 text-sm mb-2">
                            Alamat
                          </p>

                          <h4 className="font-semibold">
                            {order.address}
                          </h4>

                        </div>

                        <div className="p-5 rounded-2xl bg-white/5">

                          <p className="text-gray-400 text-sm mb-2">
                            Pembayaran
                          </p>

                          <h4 className="font-semibold text-orange-400">
                            {order.paymentMethod}
                          </h4>

                        </div>

                      </div>

                      {/* RIGHT */}
                      <div className="p-5 rounded-2xl bg-white/5">

                        <p className="text-gray-400 text-sm mb-4">
                          Item Pesanan
                        </p>

                        <div className="space-y-3">

                          {order.items.map(
                            (
                              item,
                              index
                            ) => (

                              <div
                                key={index}
                                className="flex items-center justify-between"
                              >

                                <span>
                                  {item.name}
                                </span>

                                <span className="text-orange-400 font-bold">
                                  x{item.quantity}
                                </span>

                              </div>
                            )
                          )}

                        </div>

                      </div>

                    </div>

                  </motion.div>
                ))}

            </div>
          )}

        </div>

      </div>

    </div>
  )
}