export default function Footer() {

  return (
    <footer className="bg-black border-t border-white/10 py-20 px-6">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* ABOUT */}
        <div>

          <h2 className="text-3xl font-black text-orange-400 mb-6">
            Ayam Geprek BangBil
          </h2>

          <p className="text-gray-300 leading-relaxed">
            UMKM kuliner modern dengan cita rasa ayam geprek
            premium, sambal khas nusantara, dan pelayanan
            cepat untuk pelanggan Indonesia.
          </p>

        </div>

        {/* CONTACT */}
        <div>

          <h3 className="text-2xl font-bold mb-6">
            Kontak
          </h3>

          <div className="space-y-4 text-gray-300">

            <p>
              📞 0858-7522-5000
            </p>

            <p>
              📸 @ayamgeprekbangbil
            </p>

            <p>
              📍 Purwokerto, Indonesia
            </p>

          </div>

        </div>

        {/* OPENING */}
        <div>

          <h3 className="text-2xl font-bold mb-6">
            Jam Operasional
          </h3>

          <div className="space-y-3 text-gray-300">

            <p>Senin - Minggu : 07:00 - 21.00</p>

          </div>

        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-500">

        © 2026 Ayam Geprek BangBil — All Rights Reserved

      </div>

    </footer>
  )
}