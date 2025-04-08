import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays } from "lucide-react"

export default function NewsSection() {
  const newsItems = [
    {
      id: 1,
      title: "Phát hiện loài hổ quý hiếm tại Vườn Quốc gia Cát Tiên",
      image: "/placeholder.svg?height=300&width=400",
      date: "15/04/2025",
      category: "Bảo tồn",
      excerpt:
        "Các nhà nghiên cứu đã ghi nhận hình ảnh của một cá thể hổ Đông Dương quý hiếm tại Vườn Quốc gia Cát Tiên, đánh dấu sự xuất hiện trở lại của loài này sau nhiều năm.",
    },
    {
      id: 2,
      title: "Việt Nam tăng cường nỗ lực bảo vệ voi hoang dã",
      image: "/placeholder.svg?height=300&width=400",
      date: "02/04/2025",
      category: "Chính sách",
      excerpt:
        "Chính phủ Việt Nam vừa thông qua kế hoạch hành động quốc gia về bảo tồn voi giai đoạn 2025-2035, với nhiều biện pháp mạnh mẽ nhằm bảo vệ quần thể voi hoang dã đang bị đe dọa.",
    },
    {
      id: 3,
      title: "Phát hiện loài chim mới tại rừng Amazon",
      image: "/placeholder.svg?height=300&width=400",
      date: "28/03/2025",
      category: "Khám phá",
      excerpt:
        "Các nhà khoa học đã phát hiện một loài chim mới chưa từng được ghi nhận tại rừng Amazon, Brazil. Loài chim này có bộ lông rực rỡ và tiếng hót độc đáo.",
    },
  ]

  return (
    <section className="py-16">
      <div className="container">
        <div className="section-header">
          <h2>Tin tức & Sự kiện</h2>
          <div className="underline"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {newsItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform hover:scale-105 duration-300"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-primary-600 hover:bg-primary-700">{item.category}</Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <CalendarDays size={16} className="mr-1" />
                  {item.date}
                </div>
                <CardTitle className="line-clamp-2">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 line-clamp-3">{item.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/news/${item.id}`}>Đọc tiếp</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/news">Xem tất cả tin tức</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

