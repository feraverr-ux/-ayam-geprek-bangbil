import menu1 from "../assets/images/menu1.png"
import menu2 from "../assets/images/menu2.png"
import menu3 from "../assets/images/menu3.png"
import menu4 from "../assets/images/menu4.png"
import menu5 from "../assets/images/menu5.png"
import menu6 from "../assets/images/menu6.png"
import menu7 from "../assets/images/menu7.png"
import menu8 from "../assets/images/menu8.png"
import menu9 from "../assets/images/menu9.png"
import menu10 from "../assets/images/menu10.png"
import menu11 from "../assets/images/menu11.png"
import menu12 from "../assets/images/menu12.png"
import menu13 from "../assets/images/menu13.png"
import menu14 from "../assets/images/menu14.png"
import menu15 from "../assets/images/menu15.png"
import menu16 from "../assets/images/menu16.png"
import menu17 from "../assets/images/menu17.png"
import menu18 from "../assets/images/menu18.png"
import menu19 from "../assets/images/menu19.png"
import menu20 from "../assets/images/menu20.png"
import menu21 from "../assets/images/menu21.png"
import menu22 from "../assets/images/menu22.png"

import { useCart } from "../context/CartContext"
import toast from "react-hot-toast"

const favoriteMenus = [
  {
    name: "Ayam Geprek Original",
    price: 18000,
    image: menu1,
    description:
      "Ayam crispy gurih dengan sambal geprek khas BangBil yang pedas nikmat.",
  },
  {
    name: "Ayam Geprek Mozzarella",
    price: 25000,
    image: menu2,
    description:
      "Perpaduan ayam crispy pedas dengan lelehan mozzarella premium.",
  },
  {
    name: "Ayam Geprek Sambal Matah",
    price: 22000,
    image: menu3,
    description:
      "Ayam geprek dengan sambal matah segar khas Bali yang gurih dan pedas.",
  },
]

const regularMenus = [
  {
    name: "Fried Chicken",
    price: 7000,
    image: menu4,
    description:
      "Ayam goreng crispy renyah dengan bumbu gurih khas.",
  },
  {
    name: "Ayam Geprek + Nasi",
    price: 10000,
    image: menu5,
    description:
      "Ayam geprek pedas lengkap dengan nasi hangat.",
  },
  {
    name: "Tongseng Ayam",
    price: 10000,
    image: menu6,
    description:
      "Tongseng ayam gurih dengan kuah rempah khas nusantara.",
  },
  {
    name: "Tongseng Ati Ampela",
    price: 10000,
    image: menu7,
    description:
      "Ati ampela empuk dengan kuah tongseng kaya rempah.",
  },
  {
    name: "Tongseng Ayam + Nasi",
    price: 12000,
    image: menu8,
    description:
      "Tongseng ayam hangat lengkap dengan nasi putih.",
  },
  {
    name: "Tongseng Ati Ampela + Nasi",
    price: 12000,
    image: menu9,
    description:
      "Tongseng ati ampela lezat dengan nasi hangat.",
  },
  {
    name: "Air Es",
    price: 1000,
    image: menu10,
    description:
      "Air dingin segar pelepas dahaga.",
  },
  {
    name: "Nutrisari",
    price: 3000,
    image: menu11,
    description:
      "Minuman jeruk segar dengan rasa manis menyegarkan.",
  },
  {
    name: "Es Teh",
    price: 3000,
    image: menu12,
    description:
      "Teh manis dingin yang segar dan nikmat.",
  },
  {
    name: "Teh Anget",
    price: 3000,
    image: menu13,
    description:
      "Teh hangat manis yang cocok dinikmati kapan saja.",
  },
  {
    name: "Es Jeruk",
    price: 3500,
    image: menu14,
    description:
      "Jeruk dingin segar dengan rasa manis alami.",
  },
  {
    name: "Jeruk Anget",
    price: 3500,
    image: menu15,
    description:
      "Minuman jeruk hangat yang menyegarkan tubuh.",
  },
  {
    name: "Good Day",
    price: 4000,
    image: menu16,
    description:
      "Minuman kopi susu dingin dengan rasa creamy nikmat.",
  },
  {
    name: "Es Susu",
    price: 4000,
    image: menu17,
    description:
      "Susu dingin segar dengan rasa creamy lembut.",
  },
  {
    name: "Milo",
    price: 5000,
    image: menu18,
    description:
      "Minuman coklat dingin favorit dengan rasa manis lezat.",
  },
  {
    name: "Tempe Goreng",
    price: 1000,
    image: menu19,
    description:
      "Tempe goreng gurih renyah cocok untuk lauk tambahan.",
  },
  {
    name: "Tahu Goreng",
    price: 1000,
    image: menu20,
    description:
      "Tahu goreng crispy dengan rasa gurih nikmat.",
  },
  {
    name: "Bakwan",
    price: 1000,
    image: menu21,
    description:
      "Bakwan sayur renyah dengan rasa gurih tradisional.",
  },
  {
    name: "Telor",
    price: 3000,
    image: menu22,
    description:
      "Telur dadar gurih dengan tekstur lembut dan nikmat.",
  },
]

export default function MenuSection({ showAllMenus = true }) {

  const { addToCart } = useCart()

  const handleAdd = (item) => {

    addToCart(item)

    toast.success(`${item.name} ditambahkan ke keranjang`, {
      style: {
        borderRadius: "12px",
        background: "#1f1f1f",
        color: "#fff",
      },
    })
  }

const renderCard = (item, index) => (
  <div
    key={index}
    className="group w-full rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-2xl hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300 shadow-xl"
  >

    {/* IMAGE */}
    <div className="overflow-hidden h-44">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>

    {/* CONTENT */}
    <div className="p-4">

      {/* TITLE + PRICE */}
      <div className="mb-3">

        <h3 className="text-base font-bold leading-tight mb-1 line-clamp-1">
          {item.name}
        </h3>

        <span className="text-orange-400 font-bold text-sm">
          Rp{item.price.toLocaleString("id-ID")}
        </span>

      </div>

      {/* DESCRIPTION */}
      <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2 min-h-[40px]">
        {item.description}
      </p>

      {/* BUTTON */}
      <button
        onClick={() => handleAdd(item)}
        className="w-full py-2 rounded-xl bg-white/10 border border-white/20 backdrop-blur-xl hover:bg-orange-500/30 transition-all duration-300 font-medium text-sm"
      >
        + Tambah
      </button>

    </div>
  </div>
)

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#140d09] to-[#22130c]">

      <div className="max-w-7xl mx-auto">

        {/* FAVORITE MENU */}
        <div className="text-center mb-16">

          <h2 className="text-5xl font-black text-orange-400 mb-4">
            Menu Favorit
          </h2>

          <p className="text-gray-300">
            Signature menu paling favorit di Ayam Geprek BangBil.
          </p>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
  {favoriteMenus.map((item, index) => renderCard(item, index))}
</div>

        {/* OTHER MENU */}
        {showAllMenus && (
          <>

            <div className="text-center mb-16">

              <h2 className="text-5xl font-black text-white mb-4">
                Menu Lainnya
              </h2>

              <p className="text-gray-400">
                Aneka makanan, minuman, dan tambahan favorit lainnya.
              </p>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {regularMenus.map((item, index) => renderCard(item, index))}
</div>

          </>
        )}

      </div>
    </section>
  )
}