import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Trash2, Thermometer, Globe } from "lucide-react"

export default function ConservationSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="section-header">
          <h2>Bảo tồn Động vật Hoang dã</h2>
          <div className="underline"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4">Các mối đe dọa đối với động vật hoang dã</h3>
            <p className="mb-6">
              Hiện nay, nhiều loài động vật hoang dã đang đối mặt với nguy cơ tuyệt chủng do nhiều mối đe dọa khác nhau.
              Việc hiểu rõ các mối đe dọa này là bước đầu tiên để bảo vệ chúng.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                  <Trash2 size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Mất môi trường sống</h4>
                  <p className="text-gray-600">
                    Phá rừng, đô thị hóa và phát triển nông nghiệp đang làm mất đi môi trường sống tự nhiên của nhiều
                    loài động vật.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                  <AlertTriangle size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Săn bắt và buôn bán trái phép</h4>
                  <p className="text-gray-600">
                    Nhiều loài động vật bị săn bắt để lấy thịt, da, ngà, sừng hoặc buôn bán làm thú cưng, gây suy giảm
                    nghiêm trọng số lượng cá thể trong tự nhiên.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                  <Thermometer size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Biến đổi khí hậu</h4>
                  <p className="text-gray-600">
                    Sự thay đổi nhiệt độ và điều kiện thời tiết ảnh hưởng đến môi trường sống, nguồn thức ăn và chu kỳ
                    sinh sản của nhiều loài.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                  <Globe size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Ô nhiễm môi trường</h4>
                  <p className="text-gray-600">
                    Ô nhiễm không khí, nước và đất đang gây ra nhiều tác động tiêu cực đến sức khỏe và khả năng sinh sản
                    của động vật hoang dã.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Bảo tồn động vật hoang dã"
              width={800}
              height={600}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-6 text-center">Các biện pháp bảo tồn</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-primary-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-3 text-primary-700">Xây dựng khu bảo tồn</h4>
              <p className="text-gray-700 mb-4">
                Thiết lập các khu bảo tồn, vườn quốc gia và khu dự trữ sinh quyển để bảo vệ môi trường sống tự nhiên của
                động vật hoang dã.
              </p>
              <Link href="/conservation/reserves" className="text-primary-600 hover:text-primary-800 font-medium">
                Tìm hiểu thêm →
              </Link>
            </div>

            <div className="bg-primary-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-3 text-primary-700">Luật pháp và chính sách</h4>
              <p className="text-gray-700 mb-4">
                Ban hành và thực thi các luật pháp, công ước quốc tế về bảo vệ động vật hoang dã và ngăn chặn buôn bán
                trái phép.
              </p>
              <Link href="/conservation/laws" className="text-primary-600 hover:text-primary-800 font-medium">
                Tìm hiểu thêm →
              </Link>
            </div>

            <div className="bg-primary-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-3 text-primary-700">Giáo dục cộng đồng</h4>
              <p className="text-gray-700 mb-4">
                Nâng cao nhận thức của cộng đồng về tầm quan trọng của động vật hoang dã và sự cần thiết phải bảo vệ
                chúng.
              </p>
              <Link href="/conservation/education" className="text-primary-600 hover:text-primary-800 font-medium">
                Tìm hiểu thêm →
              </Link>
            </div>

            <div className="bg-primary-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-3 text-primary-700">Nghiên cứu khoa học</h4>
              <p className="text-gray-700 mb-4">
                Thực hiện các nghiên cứu về sinh thái, hành vi và di truyền của động vật hoang dã để có biện pháp bảo
                tồn hiệu quả.
              </p>
              <Link href="/conservation/research" className="text-primary-600 hover:text-primary-800 font-medium">
                Tìm hiểu thêm →
              </Link>
            </div>

            <div className="bg-primary-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-3 text-primary-700">Phục hồi quần thể</h4>
              <p className="text-gray-700 mb-4">
                Triển khai các chương trình nhân giống bảo tồn và tái thả động vật về tự nhiên để phục hồi quần thể các
                loài bị đe dọa.
              </p>
              <Link href="/conservation/restoration" className="text-primary-600 hover:text-primary-800 font-medium">
                Tìm hiểu thêm →
              </Link>
            </div>

            <div className="bg-primary-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-3 text-primary-700">Hợp tác quốc tế</h4>
              <p className="text-gray-700 mb-4">
                Thúc đẩy hợp tác giữa các quốc gia, tổ chức phi chính phủ và cộng đồng quốc tế trong công tác bảo tồn
                động vật hoang dã.
              </p>
              <Link href="/conservation/cooperation" className="text-primary-600 hover:text-primary-800 font-medium">
                Tìm hiểu thêm →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-6">Bạn có thể làm gì để giúp đỡ?</h3>
          <p className="max-w-3xl mx-auto mb-8 text-lg">
            Mỗi người đều có thể đóng góp vào công tác bảo tồn động vật hoang dã thông qua những hành động đơn giản hàng
            ngày.
          </p>

          <Button asChild size="lg" className="bg-primary-600 hover:bg-primary-700">
            <Link href="/conservation/take-action">Hành động ngay</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

