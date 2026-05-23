import { useOrders } from "../context/OrderContext"

export default function OrdersPage() {

  const { orders } = useOrders()

  return (
    <div className="min-h-screen pt-32 px-6 bg-gradient-to-b from-[#140d09] to-[#22130c] text-white">

      <div className="max-w-5xl mx-auto">

        <div className="mb-12">

          <h1 className="text-5xl font-black text-orange-400 mb-4">
            Riwayat Pesanan
          </h1>

          <p className="text-gray-400 text-lg">
            Daftar seluruh pesanan yang telah dibuat.
          </p>

        </div>

        {orders.length === 0 ? (

          <div className="text-center py-20 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-2xl">

            <p className="text-gray-300 text-xl">
              Belum ada pesanan.
            </p>

          </div>

        ) : (

          <div className="space-y-8">

            {orders.map((order) => (

              <div
                key={order.id}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-2xl shadow-2xl"
              >

                {/* HEADER */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

                  <div>

                    <div className="flex items-center gap-3 mb-2">

                      <h2 className="text-2xl font-bold">
                        {order.customer || "-"}
                      </h2>

                      <span className="px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-sm">
                        {order.status || "Menunggu"}
                      </span>

                    </div>

                    <p className="text-gray-400">
                      {order.date || "-"}
                    </p>

                    <p className="text-gray-500 text-sm mt-1">
                      Order ID: {order.id}
                    </p>

                  </div>

                  <div className="text-right">

                    <h2 className="text-4xl font-black text-orange-400">
                      Rp{(
                        order.total || 0
                      ).toLocaleString(
                        "id-ID"
                      )}
                    </h2>

                    <p className="text-gray-400 mt-1 capitalize">
                      {order.paymentMethod || "-"}
                    </p>

                  </div>

                </div>

                {/* ADDRESS */}
                <div className="bg-white/5 rounded-2xl p-5 mb-6 border border-white/5">

                  <h3 className="font-bold mb-2 text-orange-400">
                    Alamat Pengiriman
                  </h3>

                  <p className="text-gray-300">
                    {order.address || "-"}
                  </p>

                </div>

                {/* ITEMS */}
                <div className="space-y-4">

                  {order.items?.map((item, index) => (

                    <div
                      key={index}
                      className="flex items-center gap-4 bg-white/5 rounded-2xl p-4 border border-white/5"
                    >

                      <img
                        src={item?.image || ""}
                        alt={item?.name || ""}
                        className="w-24 h-24 object-cover rounded-2xl"
                      />

                      <div className="flex-1">

                        <h3 className="font-bold text-lg mb-1">
                          {item?.name || "-"}
                        </h3>

                        <p className="text-gray-400">
                          Jumlah: {item?.quantity || 0}
                        </p>

                      </div>

                      <div className="text-orange-400 font-bold text-lg">
                        Rp{(
                          (item?.price || 0) *
                          (item?.quantity || 0)
                        ).toLocaleString("id-ID")}
                      </div>

                    </div>
                  ))}

                </div>

                {/* NOTE */}
                {order.note && (

                  <div className="mt-6 bg-orange-500/10 border border-orange-500/20 rounded-2xl p-5">

                    <h3 className="font-bold text-orange-400 mb-2">
                      Catatan Pesanan
                    </h3>

                    <p className="text-gray-300">
                      {order.note}
                    </p>

                  </div>

                )}

              </div>
            ))}

          </div>
        )}

      </div>

    </div>
  )
}