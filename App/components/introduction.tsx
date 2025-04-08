import Image from "next/image"
import { Leaf, Globe, Shield, Heart } from "lucide-react"

export default function Introduction() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="section-header">
          <h2>Giới thiệu về Động vật Hoang dã</h2>
          <div className="underline"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-6">
              Động vật hoang dã là những loài động vật sống tự nhiên trong môi trường tự nhiên, không được thuần hóa
              hoặc nuôi dưỡng bởi con người. Chúng đóng vai trò quan trọng trong việc duy trì sự cân bằng của hệ sinh
              thái và đa dạng sinh học trên Trái Đất.
            </p>
            <p className="text-lg mb-6">
              Với hàng triệu loài động vật hoang dã đã được phát hiện và còn nhiều loài chưa được khám phá, thế giới
              động vật hoang dã mang đến sự đa dạng và phong phú đáng kinh ngạc về hình thái, tập tính và khả năng thích
              nghi.
            </p>
            <p className="text-lg">
              Tuy nhiên, nhiều loài động vật hoang dã đang đối mặt với nguy cơ tuyệt chủng do mất môi trường sống, săn
              bắt trái phép, ô nhiễm môi trường và biến đổi khí hậu. Việc bảo tồn và bảo vệ chúng là trách nhiệm của tất
              cả chúng ta.
            </p>
          </div>

          <div className="relative">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Động vật hoang dã"
              width={800}
              height={600}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="w-16 h-16 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Đa dạng sinh học</h3>
            <p className="text-gray-600">
              Động vật hoang dã góp phần tạo nên sự đa dạng sinh học phong phú, với hàng triệu loài khác nhau trên toàn
              cầu.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="w-16 h-16 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Cân bằng sinh thái</h3>
            <p className="text-gray-600">
              Mỗi loài đều có vai trò riêng trong việc duy trì sự cân bằng của hệ sinh thái và chuỗi thức ăn tự nhiên.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="w-16 h-16 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Bảo tồn thiên nhiên</h3>
            <p className="text-gray-600">
              Bảo vệ động vật hoang dã đồng nghĩa với việc bảo vệ môi trường sống và các hệ sinh thái tự nhiên.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="w-16 h-16 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Giá trị văn hóa</h3>
            <p className="text-gray-600">
              Động vật hoang dã có giá trị văn hóa, tinh thần và giáo dục to lớn đối với con người qua nhiều thế hệ.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

