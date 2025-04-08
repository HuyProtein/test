import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera, BookOpen, Map, Video } from "lucide-react"

export default function ExploreSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="section-header">
          <h2>Góc khám phá</h2>
          <div className="underline"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera size={32} />
              </div>
              <CardTitle>Thư viện ảnh</CardTitle>
              <CardDescription>Bộ sưu tập hình ảnh đẹp về động vật hoang dã</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                <Image
                  src="/placeholder.svg?height=100&width=150"
                  alt="Thư viện ảnh"
                  width={150}
                  height={100}
                  className="rounded-md object-cover"
                />
                <Image
                  src="/placeholder.svg?height=100&width=150"
                  alt="Thư viện ảnh"
                  width={150}
                  height={100}
                  className="rounded-md object-cover"
                />
                <Image
                  src="/placeholder.svg?height=100&width=150"
                  alt="Thư viện ảnh"
                  width={150}
                  height={100}
                  className="rounded-md object-cover"
                />
                <Image
                  src="/placeholder.svg?height=100&width=150"
                  alt="Thư viện ảnh"
                  width={150}
                  height={100}
                  className="rounded-md object-cover"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/explore/gallery">Khám phá thư viện</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video size={32} />
              </div>
              <CardTitle>Video</CardTitle>
              <CardDescription>Các video về cuộc sống của động vật hoang dã</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative h-[150px] rounded-md overflow-hidden">
                <Image src="/placeholder.svg?height=150&width=300" alt="Video" fill className="object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-primary-600 ml-1"></div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/explore/videos">Xem video</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Map size={32} />
              </div>
              <CardTitle>Bản đồ phân bố</CardTitle>
              <CardDescription>Khám phá phân bố của các loài động vật trên thế giới</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative h-[150px] rounded-md overflow-hidden">
                <Image src="/placeholder.svg?height=150&width=300" alt="Bản đồ" fill className="object-cover" />
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/explore/map">Xem bản đồ</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen size={32} />
              </div>
              <CardTitle>Trò chơi & Câu đố</CardTitle>
              <CardDescription>Học hỏi về động vật hoang dã qua các trò chơi thú vị</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-primary-50 p-3 rounded-md text-center">
                  <p className="text-sm font-medium text-primary-700">Câu đố</p>
                </div>
                <div className="bg-primary-50 p-3 rounded-md text-center">
                  <p className="text-sm font-medium text-primary-700">Ghép hình</p>
                </div>
                <div className="bg-primary-50 p-3 rounded-md text-center">
                  <p className="text-sm font-medium text-primary-700">Trắc nghiệm</p>
                </div>
                <div className="bg-primary-50 p-3 rounded-md text-center">
                  <p className="text-sm font-medium text-primary-700">Tô màu</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/explore/games">Chơi ngay</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Câu chuyện từ các nhà bảo tồn</h3>
              <p className="mb-6">
                Khám phá những câu chuyện đầy cảm hứng từ các nhà khoa học, nhà bảo tồn và tình nguyện viên đang nỗ lực
                bảo vệ động vật hoang dã trên khắp thế giới.
              </p>
              <Button asChild>
                <Link href="/explore/stories">Đọc các câu chuyện</Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Nhà bảo tồn động vật"
                width={600}
                height={400}
                className="rounded-lg shadow object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

