import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera, BookOpen, Map, Video, Gamepad, BookMarked } from "lucide-react"

export default function ExplorePage() {
  const exploreCategories = [
    {
      id: "gallery",
      title: "Thư viện ảnh",
      description: "Bộ sưu tập hình ảnh đẹp về động vật hoang dã từ khắp nơi trên thế giới",
      icon: <Camera className="h-8 w-8" />,
      image: "/placeholder.svg?height=300&width=500",
      link: "/explore/gallery",
    },
    {
      id: "videos",
      title: "Video",
      description: "Các video về cuộc sống của động vật hoang dã trong tự nhiên",
      icon: <Video className="h-8 w-8" />,
      image: "/placeholder.svg?height=300&width=500",
      link: "/explore/videos",
    },
    {
      id: "map",
      title: "Bản đồ phân bố",
      description: "Khám phá phân bố của các loài động vật trên thế giới qua bản đồ tương tác",
      icon: <Map className="h-8 w-8" />,
      image: "/placeholder.svg?height=300&width=500",
      link: "/explore/map",
    },
    {
      id: "games",
      title: "Trò chơi & Câu đố",
      description: "Học hỏi về động vật hoang dã qua các trò chơi thú vị và câu đố hấp dẫn",
      icon: <Gamepad className="h-8 w-8" />,
      image: "/placeholder.svg?height=300&width=500",
      link: "/explore/games",
    },
    {
      id: "stories",
      title: "Câu chuyện từ các nhà bảo tồn",
      description: "Những câu chuyện đầy cảm hứng từ các nhà khoa học và tình nguyện viên bảo tồn",
      icon: <BookMarked className="h-8 w-8" />,
      image: "/placeholder.svg?height=300&width=500",
      link: "/explore/stories",
    },
    {
      id: "virtual-tours",
      title: "Tham quan ảo",
      description: "Trải nghiệm tham quan ảo các khu bảo tồn và môi trường sống tự nhiên",
      icon: <BookOpen className="h-8 w-8" />,
      image: "/placeholder.svg?height=300&width=500",
      link: "/explore/virtual-tours",
    },
  ]

  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Góc khám phá</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Khám phá thế giới động vật hoang dã qua hình ảnh, video, bản đồ tương tác và nhiều hoạt động thú vị khác. Hãy
          bắt đầu cuộc phiêu lưu của bạn ngay hôm nay!
        </p>
      </div>

      {/* Hero Section */}
      <div className="relative rounded-xl overflow-hidden mb-16">
        <div className="aspect-[21/9] relative">
          <Image
            src="/placeholder.svg?height=600&width=1400"
            alt="Khám phá thế giới động vật hoang dã"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
          <div className="p-8 md:p-12 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Khám phá thế giới tự nhiên</h2>
            <p className="text-white/80 mb-6">
              Hãy bắt đầu hành trình khám phá vẻ đẹp và sự kỳ diệu của thế giới động vật hoang dã qua nhiều hoạt động
              tương tác thú vị.
            </p>
            <Button asChild size="lg" className="bg-primary-600 hover:bg-primary-700">
              <Link href="#explore-categories">Bắt đầu khám phá</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Explore Categories */}
      <div id="explore-categories" className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Các hoạt động khám phá</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Chọn một trong các hoạt động dưới đây để bắt đầu cuộc phiêu lưu của bạn vào thế giới động vật hoang dã.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exploreCategories.map((category) => (
            <Card key={category.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button asChild variant="secondary" className="bg-white/80 hover:bg-white">
                    <Link href={category.link}>Khám phá ngay</Link>
                  </Button>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center">
                    {category.icon}
                  </div>
                  <CardTitle>{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{category.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href={category.link}>Tìm hiểu thêm</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Featured Content */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Nội dung nổi bật</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Khám phá những nội dung hấp dẫn và được yêu thích nhất về động vật hoang dã.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-64">
              <Image src="/placeholder.svg?height=400&width=600" alt="Video nổi bật" fill className="object-cover" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-primary-600 ml-1"></div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Cuộc sống bí ẩn của hổ Đông Dương</h3>
              <p className="text-gray-600 mb-4">
                Khám phá cuộc sống hàng ngày của loài hổ Đông Dương quý hiếm trong môi trường tự nhiên qua video tài
                liệu độc đáo này.
              </p>
              <Button asChild>
                <Link href="/explore/videos/tiger-life">Xem video</Link>
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-64">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Bộ sưu tập ảnh nổi bật"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Bộ sưu tập ảnh: Vẻ đẹp của thiên nhiên hoang dã</h3>
              <p className="text-gray-600 mb-4">
                Chiêm ngưỡng bộ sưu tập ảnh tuyệt đẹp về động vật hoang dã và môi trường sống tự nhiên của chúng từ các
                nhiếp ảnh gia hàng đầu.
              </p>
              <Button asChild>
                <Link href="/explore/gallery/wildlife-beauty">Xem bộ sưu tập</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Experience */}
      <div className="bg-primary-50 rounded-xl p-8 md:p-12 mb-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Trải nghiệm tương tác</h2>
            <p className="text-gray-700 mb-6">
              Tham gia các hoạt động tương tác thú vị để học hỏi về động vật hoang dã một cách vui nhộn và hấp dẫn. Từ
              trò chơi câu đố đến bản đồ tương tác, chúng tôi có nhiều hoạt động phù hợp với mọi lứa tuổi.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <div className="bg-primary-100 text-primary-700 rounded-full p-1 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span>Trò chơi nhận diện động vật</span>
              </li>
              <li className="flex items-start">
                <div className="bg-primary-100 text-primary-700 rounded-full p-1 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span>Câu đố về động vật hoang dã</span>
              </li>
              <li className="flex items-start">
                <div className="bg-primary-100 text-primary-700 rounded-full p-1 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span>Bản đồ tương tác về phân bố động vật</span>
              </li>
              <li className="flex items-start">
                <div className="bg-primary-100 text-primary-700 rounded-full p-1 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span>Tô màu động vật cho trẻ em</span>
              </li>
            </ul>
            <Button asChild size="lg">
              <Link href="/explore/games">Khám phá các hoạt động</Link>
            </Button>
          </div>
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Trải nghiệm tương tác"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Educational Resources */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Tài nguyên giáo dục</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Khám phá các tài nguyên giáo dục về động vật hoang dã và bảo tồn, phù hợp cho học sinh, sinh viên và những
            người yêu thích thiên nhiên.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Tài liệu cho giáo viên</CardTitle>
              <CardDescription>Các kế hoạch bài giảng và hoạt động về động vật hoang dã</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>Kế hoạch bài giảng theo cấp lớp</li>
                <li>Hoạt động thực hành</li>
                <li>Tài liệu trình chiếu</li>
                <li>Hướng dẫn thảo luận</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/explore/education/teachers">Xem tài liệu</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tài liệu cho học sinh</CardTitle>
              <CardDescription>Tài liệu học tập thú vị về động vật hoang dã</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>Tờ thông tin về các loài động vật</li>
                <li>Hoạt động tương tác</li>
                <li>Dự án nghiên cứu</li>
                <li>Câu đố và trò chơi giáo dục</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/explore/education/students">Xem tài liệu</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tài liệu cho gia đình</CardTitle>
              <CardDescription>Hoạt động gia đình về động vật hoang dã</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>Hoạt động ngoài trời</li>
                <li>Dự án thủ công</li>
                <li>Hướng dẫn quan sát động vật</li>
                <li>Trò chơi gia đình</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/explore/education/families">Xem tài liệu</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Đăng ký nhận bản tin</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Đăng ký để nhận thông tin mới nhất về động vật hoang dã, các hoạt động khám phá và cơ hội tham gia bảo tồn.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Họ tên
              </label>
              <Input id="name" type="text" placeholder="Nhập họ tên của bạn" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Input id="email" type="email" placeholder="Nhập địa chỉ email của bạn" />
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <Checkbox id="newsletter" />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="newsletter" className="font-medium text-gray-700">
                  Tôi muốn nhận bản tin hàng tháng
                </label>
              </div>
            </div>
            <Button type="submit" className="w-full">
              Đăng ký
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

