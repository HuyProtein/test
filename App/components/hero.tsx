import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-primary-700 to-primary-500 text-white pt-20 pb-32 overflow-hidden">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-text">Khám phá thế giới Động vật Hoang dã</h1>
          <p className="text-lg md:text-xl mb-8 opacity-90 animate-text delay-1">
            Hành trình khám phá sự đa dạng, vẻ đẹp và bí mật của các loài động vật hoang dã trên khắp thế giới
          </p>

          <div className="relative max-w-2xl mx-auto mb-10 animate-text delay-2">
            <input
              type="text"
              placeholder="Tìm kiếm loài động vật..."
              className="w-full py-4 px-6 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-300"
            />
            <button className="absolute right-2 top-2 bg-primary-600 hover:bg-primary-700 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 animate-text delay-3">
            <Link
              href="/animals"
              className="bg-white text-primary-700 hover:bg-gray-100 px-6 py-3 rounded-full font-medium transition-colors"
            >
              Khám phá ngay
            </Link>
            <Link
              href="/conservation"
              className="bg-transparent border-2 border-white hover:bg-white/10 px-6 py-3 rounded-full font-medium transition-colors"
            >
              Tìm hiểu về bảo tồn
            </Link>
          </div>

          <div className="flex justify-center gap-12 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold">8.7M+</div>
              <div className="text-sm opacity-80">Loài động vật</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">41K+</div>
              <div className="text-sm opacity-80">Loài bị đe dọa</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">196+</div>
              <div className="text-sm opacity-80">Quốc gia</div>
            </div>
          </div>
        </div>
      </div>

      <div className="wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}

