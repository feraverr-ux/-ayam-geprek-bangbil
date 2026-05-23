import { useState, useEffect } from "react"

import {
  motion,
  AnimatePresence,
} from "framer-motion"

import {
  ShoppingBag,
  Trash2,
  Receipt,
  Plus,
  Minus,
  XCircle,
  Wallet,
  Truck,
  Landmark,
} from "lucide-react"

import { useCart } from "../context/CartContext"
import { useOrders } from "../context/OrderContext"

export default function CartPage() {

  const {
    cartItems,
    removeFromCart,
    clearCart,
    addToCart,
    decreaseQuantity,
  } = useCart()

  const { addOrder } = useOrders()

  const [showModal, setShowModal] =
    useState(false)

  const [showAlert, setShowAlert] =
    useState(false)

  const [paymentMethod, setPaymentMethod] =
    useState("QRIS")

  const [customerName, setCustomerName] =
    useState("")

  const [phone, setPhone] =
    useState("")

  const [address, setAddress] =
    useState("")

  const [note, setNote] =
    useState("")

  const deliveryFee = 12000

  const subtotal = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  )

  const totalPrice = subtotal + deliveryFee

  // AUTO HIDE ALERT
  useEffect(() => {

    if (showAlert) {

      const timer = setTimeout(() => {
        setShowAlert(false)
      }, 3000)

      return () => clearTimeout(timer)
    }

  }, [showAlert])

  return (
    <div className="min-h-screen pt-32 px-6 bg-gradient-to-b from-[#140d09] to-[#22130c]">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex items-center gap-4 mb-12">

          <div className="p-4 rounded-2xl bg-orange-500/20 border border-orange-500/20">

            <ShoppingBag
              className="text-orange-400"
              size={36}
            />

          </div>

          <div>

            <h1 className="text-5xl font-black text-orange-400">
              Checkout Pesanan
            </h1>

            <p className="text-gray-300 mt-2">
              Lengkapi informasi pemesanan
            </p>

          </div>

        </div>

        {cartItems.length === 0 ? (

          <div className="text-center py-24 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">

            <h2 className="text-3xl font-bold mb-4">
              Keranjang Masih Kosong
            </h2>

            <p className="text-gray-300">
              Tambahkan menu favoritmu 🔥
            </p>

          </div>

        ) : (

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* FORM */}
            <div className="lg:col-span-2">

              <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-2xl p-8">

                <h2 className="text-3xl font-black mb-8">
                  Informasi Pengiriman
                </h2>

                <div className="space-y-6">

                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) =>
                      setCustomerName(
                        e.target.value
                      )
                    }
                    placeholder="Nama Lengkap"
                    className="w-full p-4 rounded-2xl bg-white/10 border border-white/10 outline-none"
                  />

                  <input
                    type="text"
                    value={phone}
                    onChange={(e) =>
                      setPhone(e.target.value)
                    }
                    placeholder="Nomor HP"
                    className="w-full p-4 rounded-2xl bg-white/10 border border-white/10 outline-none"
                  />

                  <textarea
                    rows="5"
                    value={address}
                    onChange={(e) =>
                      setAddress(
                        e.target.value
                      )
                    }
                    placeholder="Alamat Pengiriman"
                    className="w-full p-4 rounded-2xl bg-white/10 border border-white/10 outline-none"
                  ></textarea>

                  <textarea
                    rows="4"
                    value={note}
                    onChange={(e) =>
                      setNote(e.target.value)
                    }
                    placeholder="Catatan Pesanan"
                    className="w-full p-4 rounded-2xl bg-white/10 border border-white/10 outline-none"
                  ></textarea>

                  {/* PAYMENT */}
                  <div>

                    <h3 className="text-2xl font-bold mb-5">
                      Metode Pembayaran
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                      {/* QRIS */}
                      <button
                        onClick={() =>
                          setPaymentMethod(
                            "QRIS"
                          )
                        }
                        className={`p-5 rounded-2xl border transition-all text-left ${
                          paymentMethod ===
                          "QRIS"
                            ? "bg-orange-500 border-orange-500"
                            : "bg-white/5 border-white/10"
                        }`}
                      >

                        <Wallet
                          className="mb-3"
                          size={28}
                        />

                        <h4 className="font-bold text-lg">
                          QRIS
                        </h4>

                        <p className="text-sm opacity-80">
                          Bayar via scan QR
                        </p>

                      </button>

                      {/* COD */}
                      <button
                        onClick={() =>
                          setPaymentMethod(
                            "COD"
                          )
                        }
                        className={`p-5 rounded-2xl border transition-all text-left ${
                          paymentMethod ===
                          "COD"
                            ? "bg-orange-500 border-orange-500"
                            : "bg-white/5 border-white/10"
                        }`}
                      >

                        <Truck
                          className="mb-3"
                          size={28}
                        />

                        <h4 className="font-bold text-lg">
                          COD
                        </h4>

                        <p className="text-sm opacity-80">
                          Bayar di tempat
                        </p>

                      </button>

                      {/* TRANSFER */}
                      <button
                        onClick={() =>
                          setPaymentMethod(
                            "Transfer Bank"
                          )
                        }
                        className={`p-5 rounded-2xl border transition-all text-left ${
                          paymentMethod ===
                          "Transfer Bank"
                            ? "bg-orange-500 border-orange-500"
                            : "bg-white/5 border-white/10"
                        }`}
                      >

                        <Landmark
                          className="mb-3"
                          size={28}
                        />

                        <h4 className="font-bold text-lg">
                          Transfer
                        </h4>

                        <p className="text-sm opacity-80">
                          BCA / BRI / Mandiri
                        </p>

                      </button>

                    </div>

                    {/* QRIS INFO */}
                    <AnimatePresence>

                      {paymentMethod ===
                        "QRIS" && (

                        <motion.div
                          initial={{
                            opacity: 0,
                            y: 20,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          exit={{
                            opacity: 0,
                            y: 20,
                          }}
                          className="mt-6 p-6 rounded-3xl bg-white/5 border border-white/10"
                        >

                          <h3 className="text-2xl font-bold mb-4">
                            Scan QRIS
                          </h3>

                          <img
                            src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=AyamGeprekBangBil"
                            alt="QRIS"
                            className="w-56 mx-auto rounded-2xl"
                          />

                        </motion.div>
                      )}

                    </AnimatePresence>

                    {/* BANK INFO */}
                    <AnimatePresence>

                      {paymentMethod ===
                        "Transfer Bank" && (

                        <motion.div
                          initial={{
                            opacity: 0,
                            y: 20,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          exit={{
                            opacity: 0,
                            y: 20,
                          }}
                          className="mt-6 p-6 rounded-3xl bg-white/5 border border-white/10"
                        >

                          <h3 className="text-2xl font-bold mb-6">
                            Transfer Bank
                          </h3>

                          <div className="space-y-4">

                            <div className="p-4 rounded-2xl bg-white/5">

                              <p className="text-gray-300 text-sm">
                                BCA
                              </p>

                              <h4 className="text-xl font-bold">
                                1234567890
                              </h4>

                              <p className="text-sm text-orange-400">
                                a/n Ayam Geprek BangBil
                              </p>

                            </div>

                            <div className="p-4 rounded-2xl bg-white/5">

                              <p className="text-gray-300 text-sm">
                                BRI
                              </p>

                              <h4 className="text-xl font-bold">
                                9876543210
                              </h4>

                              <p className="text-sm text-orange-400">
                                a/n Ayam Geprek BangBil
                              </p>

                            </div>

                          </div>

                        </motion.div>
                      )}

                    </AnimatePresence>

                  </div>

                  {/* BUTTON */}
                  <button
                    onClick={() => {

                      if (
                        !customerName ||
                        !phone ||
                        !address
                      ) {

                        setShowAlert(true)

                        return
                      }

                      setShowModal(true)
                    }}
                    className="w-full py-5 rounded-2xl bg-orange-500 hover:bg-orange-600 transition-all duration-300 font-bold text-lg shadow-2xl"
                  >
                    Lanjut Checkout
                  </button>

                </div>

              </div>

            </div>

            {/* RIGHT CART */}
            <div>

              <div className="sticky top-32 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-2xl p-6">

                <div className="flex items-center gap-3 mb-8">

                  <Receipt
                    className="text-orange-400"
                    size={28}
                  />

                  <h2 className="text-3xl font-black">
                    Pesanan
                  </h2>

                </div>

                <div className="space-y-5">

                  {cartItems.map((item, index) => (

                    <div
                      key={index}
                      className="p-4 rounded-2xl bg-white/5 border border-white/10"
                    >

                      <div className="flex gap-4">

                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-24 h-24 rounded-2xl object-cover"
                        />

                        <div className="flex-1">

                          <div className="flex justify-between">

                            <div>

                              <h3 className="font-bold text-lg">
                                {item.name}
                              </h3>

                              <p className="text-orange-400 font-bold mt-1">
                                Rp{item.price.toLocaleString(
                                  "id-ID"
                                )}
                              </p>

                            </div>

                            <button
                              onClick={() =>
                                removeFromCart(
                                  item.name
                                )
                              }
                              className="p-2 rounded-xl bg-red-500/20 border border-red-500/20"
                            >

                              <Trash2 size={18} />

                            </button>

                          </div>

                          <div className="flex items-center gap-3 mt-5">

                            <button
                              onClick={() =>
                                decreaseQuantity(
                                  item.name
                                )
                              }
                              className="p-2 rounded-xl bg-white/10"
                            >

                              <Minus size={18} />

                            </button>

                            <span className="font-bold text-lg">
                              {item.quantity}
                            </span>

                            <button
                              onClick={() =>
                                addToCart(item)
                              }
                              className="p-2 rounded-xl bg-orange-500"
                            >

                              <Plus size={18} />

                            </button>

                          </div>

                        </div>

                      </div>

                    </div>
                  ))}

                </div>

                {/* TOTAL */}
                <div className="mt-8 pt-6 border-t border-white/10 space-y-4">

                  <div className="flex justify-between">

                    <span className="text-gray-300">
                      Subtotal
                    </span>

                    <span>
                      Rp{subtotal.toLocaleString(
                        "id-ID"
                      )}
                    </span>

                  </div>

                  <div className="flex justify-between">

                    <span className="text-gray-300">
                      Ongkir
                    </span>

                    <span>
                      Rp{deliveryFee.toLocaleString(
                        "id-ID"
                      )}
                    </span>

                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-white/10">

                    <span className="text-xl font-bold">
                      Total
                    </span>

                    <span className="text-3xl font-black text-orange-400">
                      Rp{totalPrice.toLocaleString(
                        "id-ID"
                      )}
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>
        )}

      </div>

      {/* ALERT */}
      <AnimatePresence>

        {showAlert && (

          <motion.div
            initial={{
              opacity: 0,
              y: -50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -50,
            }}
            className="fixed top-8 left-1/2 -translate-x-1/2 z-[999]"
          >

            <div className="flex items-center gap-4 px-6 py-5 rounded-2xl bg-red-500 shadow-2xl">

              <XCircle size={30} />

              <div>

                <h3 className="font-bold text-lg">
                  Informasi Belum Lengkap
                </h3>

                <p className="text-sm">
                  Isi semua data terlebih dahulu
                </p>

              </div>

            </div>

          </motion.div>
        )}

      </AnimatePresence>

      {/* CHECKOUT MODAL */}
<AnimatePresence>

  {showModal && (

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6"
    >

      <motion.div
        initial={{
          scale: 0.8,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        exit={{
          scale: 0.8,
          opacity: 0,
        }}
        className="w-full max-w-md rounded-3xl bg-[#1b120d] border border-white/10 p-8"
      >

        <h2 className="text-4xl font-black text-orange-400 mb-6">
          Konfirmasi Pesanan
        </h2>

        <div className="space-y-4 mb-8">

          <div className="flex justify-between">

            <span className="text-gray-300">
              Metode Bayar
            </span>

            <span className="font-bold">
              {paymentMethod}
            </span>

          </div>

          <div className="flex justify-between">

            <span className="text-gray-300">
              Total Bayar
            </span>

            <span className="text-3xl font-black text-orange-400">
              Rp{totalPrice.toLocaleString(
                "id-ID"
              )}
            </span>

          </div>

        </div>

        <button
          onClick={() => {
addOrder({
  customer: customerName,
  phone: phone,
  address: address,
  note: note,
  paymentMethod:
    paymentMethod,

  total: Number(
    totalPrice
  ),

  status: "Menunggu",

  items: cartItems.map(
    (item) => ({
      name: item.name,
      price: Number(
        item.price
      ),
      quantity: Number(
        item.quantity
      ),
      image: item.image,
    })
  ),
})
            clearCart()

            setShowModal(false)
          }}
          className="w-full py-4 rounded-2xl bg-orange-500 hover:bg-orange-600 transition-all duration-300 font-bold"
        >
          Konfirmasi Checkout
        </button>

      </motion.div>

    </motion.div>
  )}

</AnimatePresence>

    </div>
  )
}