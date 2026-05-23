import { useNavigate } from "react-router-dom"

import {
  ShoppingCart,
  DollarSign,
  Users,
  LogOut,
  Wallet,
  PackageCheck,
  MapPin,
  Phone,
  CreditCard,
  Clock3,
} from "lucide-react"

import { motion } from "framer-motion"

import { useOrders } from "../context/OrderContext"

export default function AdminPage() {

  const navigate = useNavigate()

  const {
  orders,
  updateOrderStatus,
} = useOrders()

  const totalOrders = orders.length

  const totalRevenue = orders.reduce(
    (total, order) =>
      total + order.total,
    0
  )

  const totalCustomers = new Set(
    orders.map(
      (order) => order.customer
    )
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

    localStorage.removeItem(
      "admin"
    )

    navigate("/login")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#140d09] via-[#1a100a] to-[#22130c] text-white pt-32 px-6 pb-16">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">

          <div>

            <h1 className="text-5xl md:text-6xl font-black text-orange-400 leading-tight">
              Admin Dashboard
            </h1>

            <p className="text-gray-400 mt-3 text-lg">
              Monitoring realtime Ayam Geprek BangBil
            </p>

          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-red-500/10 border border-red-500/20 hover:bg-red-500 hover:border-red-500 transition-all duration-300 w-fit"
          >

            <LogOut size={20} />

            <span className="font-semibold">
              Logout
            </span>

          </button>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">

          <StatCard
            icon={<ShoppingCart size={30} />}
            title="Total Pesanan"
            value={totalOrders}
            color="orange"
          />

          <StatCard
            icon={<DollarSign size={30} />}
            title="Pendapatan"
            value={`Rp${totalRevenue.toLocaleString(
              "id-ID"
            )}`}
            color="green"
          />

          <StatCard
            icon={<Users size={30} />}
            title="Pelanggan"
            value={totalCustomers}
            color="blue"
          />

          <StatCard
            icon={<Wallet size={30} />}
            title="Menu Terjual"
            value={totalMenus}
            color="purple"
          />

        </div>

        {/* ORDER SECTION */}
        <div className="rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-2xl p-8">

          <div className="flex items-center gap-4 mb-10">

            <div className="p-4 rounded-2xl bg-orange-500/10 border border-orange-500/20">

              <PackageCheck
                className="text-orange-400"
                size={30}
              />

            </div>

            <div>

              <h2 className="text-3xl md:text-4xl font-black">
                Pesanan Customer
              </h2>

              <p className="text-gray-400 mt-1">
                Semua data pesanan masuk realtime
              </p>

            </div>

          </div>

          {orders.length === 0 ? (

            <div className="text-center py-24 rounded-3xl bg-white/5 border border-white/10">

              <Clock3
                size={60}
                className="mx-auto text-orange-400 mb-6"
              />

              <h3 className="text-3xl font-black mb-3">
                Belum Ada Pesanan
              </h3>

              <p className="text-gray-400">
                Pesanan customer akan muncul di sini
              </p>

            </div>

          ) : (

            <div className="space-y-8">

              {orders
                .slice()
                .reverse()
                .map((order, index) => (

                  <motion.div
                    key={order.firebaseId}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className="rounded-[28px] bg-[#20130d] border border-white/10 overflow-hidden"
                  >

                    {/* TOP */}
                    <div className="p-8 border-b border-white/10">

                      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8">

                        {/* LEFT */}
                        <div className="space-y-4">

                          <div>

                            <h2 className="text-3xl md:text-4xl font-black text-orange-400">
                              {order.customer}
                            </h2>

                            <p className="text-gray-400 mt-2">
                              Customer Order
                            </p>

                          </div>

                          <div className="space-y-3">

                            <div className="flex items-center gap-3 text-gray-300">

                              <Phone size={18} />

                              <span>
                                {order.phone}
                              </span>

                            </div>

                            <div className="flex items-start gap-3 text-gray-300">

                              <MapPin
                                size={18}
                                className="mt-1"
                              />

                              <span className="leading-relaxed">
                                {order.address}
                              </span>

                            </div>

                          </div>

                        </div>

                        {/* RIGHT */}
<div className="xl:text-right flex flex-col items-start xl:items-end">

  <p className="text-gray-400 mb-2">
    Total Pembayaran
  </p>

  {/* STATUS BADGE */}
  <div
    className={`px-4 py-2 rounded-2xl border mb-5 font-bold text-sm ${
      order.status === "Menunggu"
        ? "bg-yellow-500/20 border-yellow-400/20 text-yellow-300"

        : order.status === "Diproses"
        ? "bg-blue-500/20 border-blue-400/20 text-blue-300"

        : order.status === "Dikirim"
        ? "bg-purple-500/20 border-purple-400/20 text-purple-300"

        : "bg-green-500/20 border-green-400/20 text-green-300"
    }`}
  >

    {order.status || "Menunggu"}

  </div>

 <h2 className="text-4xl font-black text-orange-400">
  Rp{(
    order.total || 0
  ).toLocaleString(
    "id-ID"
  )}
</h2>
  {/* BUTTON STATUS */}
  <div className="flex flex-wrap gap-3 mt-6 justify-start xl:justify-end">

    <button
      onClick={() =>
        updateOrderStatus(
  order.firebaseId,
  "Menunggu"
)
      }
      className={`px-4 py-3 rounded-2xl border transition-all duration-300 text-sm font-semibold ${
        order.status === "Menunggu"
          ? "bg-yellow-500/20 border-yellow-400 text-yellow-300"
          : "bg-white/5 border-white/10 hover:bg-yellow-500/10"
      }`}
    >
      Menunggu
    </button>

    <button
      onClick={() =>
  updateOrderStatus(
    order.firebaseId,
    "Diproses"
  )
}
      className={`px-4 py-3 rounded-2xl border transition-all duration-300 text-sm font-semibold ${
        order.status === "Diproses"
          ? "bg-blue-500/20 border-blue-400 text-blue-300"
          : "bg-white/5 border-white/10 hover:bg-blue-500/10"
      }`}
    >
      Diproses
    </button>

    <button
      onClick={() =>
        updateOrderStatus(
  order.firebaseId,
  "Dikirim"
)
      }
      className={`px-4 py-3 rounded-2xl border transition-all duration-300 text-sm font-semibold ${
        order.status === "Dikirim"
          ? "bg-purple-500/20 border-purple-400 text-purple-300"
          : "bg-white/5 border-white/10 hover:bg-purple-500/10"
      }`}
    >
      Dikirim
    </button>

    <button
      onClick={() =>
        updateOrderStatus(
  order.firebaseId,
  "Selesai"
)
      }
      className={`px-4 py-3 rounded-2xl border transition-all duration-300 text-sm font-semibold ${
        order.status === "Selesai"
          ? "bg-green-500/20 border-green-400 text-green-300"
          : "bg-white/5 border-white/10 hover:bg-green-500/10"
      }`}
    >
      Selesai
    </button>

  </div>

</div>

                      </div>

                    </div>

                   {/* ITEMS */}
<div className="p-8">

  <h3 className="text-2xl font-black mb-6">
    Detail Pesanan
  </h3>

  <div className="space-y-4">

    {order.items?.map(
      (
        item,
        idx
      ) => (

        <div
          key={idx}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 p-5 rounded-2xl bg-white/5 border border-white/10"
        >

          <div className="flex items-center gap-4">

            <img
              src={item?.image || ""}
              alt={item?.name || ""}
              className="w-20 h-20 rounded-2xl object-cover"
            />

            <div>

              <h4 className="text-xl font-bold">
                {item?.name || "-"}
              </h4>

              <p className="text-orange-400 mt-1">
                Rp{(
                  item?.price || 0
                ).toLocaleString(
                  "id-ID"
                )}
              </p>

            </div>

          </div>

          <div className="text-left sm:text-right">

            <p className="text-gray-400">
              Quantity
            </p>

            <h4 className="text-3xl font-black text-orange-400">
              x
              {item?.quantity || 0}
            </h4>

          </div>

        </div>

      )
    )}

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

function StatCard({
  icon,
  title,
  value,
  color,
}) {

  const colors = {
    orange:
      "bg-orange-500/10 text-orange-400 border-orange-500/20",

    green:
      "bg-green-500/10 text-green-400 border-green-500/20",

    blue:
      "bg-blue-500/10 text-blue-400 border-blue-500/20",

    purple:
      "bg-purple-500/10 text-purple-400 border-purple-500/20",
  }

  return (

    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="rounded-[28px] bg-white/5 border border-white/10 backdrop-blur-2xl p-7"
    >

      <div className="flex items-center justify-between mb-7">

        <div
          className={`p-4 rounded-2xl border ${colors[color]}`}
        >

          {icon}

        </div>

      </div>

      <p className="text-gray-400 text-lg">
        {title}
      </p>

      <h2 className="text-4xl font-black mt-3 leading-tight break-words">
        {value}
      </h2>

    </motion.div>
  )
}