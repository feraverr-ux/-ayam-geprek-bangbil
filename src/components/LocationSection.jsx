export default function LocationSection() {

  return (
    <section className="py-24 px-6 bg-[#120b08]">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">

          <h2 className="text-5xl font-black text-orange-400 mb-4">
            Lokasi UMKM
          </h2>

          <p className="text-gray-300 text-lg">
            Temukan lokasi Ayam Geprek BangBil 🔥
          </p>

        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3956.474334517364!2d109.2713945!3d-7.412637299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1778999999284!5m2!1sen!2sid"
            width="100%"
            height="500"
            loading="lazy"
            className="w-full"
          ></iframe>

        </div>

      </div>

    </section>
  )
}