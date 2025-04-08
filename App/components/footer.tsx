import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white pt-16 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Về chúng tôi</h3>
            <p className="text-gray-300 mb-4">
              Trang web cung cấp thông tin về các loài động vật hoang dã, môi trường sống và các nỗ lực bảo tồn, nhằm
              nâng cao nhận thức và thúc đẩy hành động bảo vệ thiên nhiên.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Youtube size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link href="/animals" className="text-gray-300 hover:text-white transition-colors">
                  Các loài động vật
                </Link>
              </li>
              <li>
                <Link href="/habitats" className="text-gray-300 hover:text-white transition-colors">
                  Môi trường sống
                </Link>
              </li>
              <li>
                <Link href="/conservation" className="text-gray-300 hover:text-white transition-colors">
                  Bảo tồn
                </Link>
              </li>
              <li>
                <Link href="/explore" className="text-gray-300 hover:text-white transition-colors">
                  Góc khám phá
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-300 hover:text-white transition-colors">
                  Tin tức & Sự kiện
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Tài nguyên</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/resources/education" className="text-gray-300 hover:text-white transition-colors">
                  Tài liệu giáo dục
                </Link>
              </li>
              <li>
                <Link href="/resources/research" className="text-gray-300 hover:text-white transition-colors">
                  Nghiên cứu khoa học
                </Link>
              </li>
              <li>
                <Link href="/resources/organizations" className="text-gray-300 hover:text-white transition-colors">
                  Tổ chức bảo tồn
                </Link>
              </li>
              <li>
                <Link href="/resources/volunteer" className="text-gray-300 hover:text-white transition-colors">
                  Cơ hội tình nguyện
                </Link>
              </li>
              <li>
                <Link href="/resources/donate" className="text-gray-300 hover:text-white transition-colors">
                  Ủng hộ bảo tồn
                </Link>
              </li>
              <li>
                <Link href="/resources/faq" className="text-gray-300 hover:text-white transition-colors">
                  Câu hỏi thường gặp
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Liên hệ</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">123 Đường Thiên Nhiên, Quận Bảo Tồn, TP. Hồ Chí Minh, Việt Nam</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <span className="text-gray-300">(+84) 28 1234 5678</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <span className="text-gray-300">info@wildlife.vn</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Wildlife - Khám phá thế giới Động vật Hoang dã. Tất cả các quyền được bảo
            lưu.
          </p>
        </div>
      </div>
    </footer>
  )
}

