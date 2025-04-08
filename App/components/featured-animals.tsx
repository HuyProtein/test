import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function FeaturedAnimals() {
  const featuredAnimals = [
    {
      id: 1,
      name: "Hổ Đông Dương",
      scientificName: "Panthera tigris corbetti",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Hổ Đông Dương là một trong những loài hổ lớn nhất, sống ở các khu rừng Đông Nam Á. Hiện nay, loài này đang bị đe dọa nghiêm trọng do săn bắt trái phép và mất môi trường sống.",
      status: "Nguy cấp",
      habitat: "Rừng nhiệt đới",
      region: "Đông Nam Á",
    },
    {
      id: 2,
      name: "Voi Châu Á",
      scientificName: "Elephas maximus",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Voi Châu Á là loài voi nhỏ hơn so với voi Châu Phi, có đặc điểm nhận dạng là tai nhỏ và lưng cong. Chúng đóng vai trò quan trọng trong hệ sinh thái rừng và văn hóa nhiều quốc gia Châu Á.",
      status: "Nguy cấp",
      habitat: "Rừng nhiệt đới, đồng cỏ",
      region: "Nam và Đông Nam Á",
    },
    {
      id: 3,
      name: "Đại bàng đầu trắng",
      scientificName: "Haliaeetus leucocephalus",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Đại bàng đầu trắng là biểu tượng quốc gia của Hoa Kỳ. Loài chim săn mồi này có đầu và đuôi màu trắng đặc trưng, sống gần các vùng nước và chủ yếu ăn cá.",
      status: "Ít lo ngại",
      habitat: "Vùng ven biển, hồ và sông",
      region: "Bắc Mỹ",
    },
    {
      id: 4,
      name: "Cá heo mũi chai",
      scientificName: "Tursiops truncatus",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Cá heo mũi chai là một trong những loài cá heo thông minh nhất, nổi tiếng với khả năng học hỏi, giao tiếp phức tạp và tính cách thân thiện. Chúng sống theo đàn và có thể được tìm thấy ở hầu hết các đại dương trên thế giới.",
      status: "Ít lo ngại",
      habitat: "Đại dương, vùng biển ven bờ",
      region: "Toàn cầu",
    },
    {
      id: 5,
      name: "Tê giác Java",
      scientificName: "Rhinoceros sondaicus",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Tê giác Java là một trong những loài động vật có vú quý hiếm nhất thế giới, với chỉ khoảng 74 cá thể còn sống trong tự nhiên. Chúng có một sừng và da nhăn nheo đặc trưng.",
      status: "Cực kỳ nguy cấp",
      habitat: "Rừng nhiệt đới ẩm",
      region: "Indonesia",
    },
    {
      id: 6,
      name: "Gấu trúc lớn",
      scientificName: "Ailuropoda melanoleuca",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Gấu trúc lớn là biểu tượng toàn cầu của công tác bảo tồn động vật hoang dã. Loài này chủ yếu ăn tre và sống ở các khu rừng núi cao tại Trung Quốc.",
      status: "Sắp nguy cấp",
      habitat: "Rừng tre vùng núi cao",
      region: "Trung Quốc",
    },
  ]

  return (
    <section className="py-16">
      <div className="container">
        <div className="section-header">
          <h2>Các loài động vật nổi bật</h2>
          <div className="underline"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {featuredAnimals.map((animal) => (
            <Card key={animal.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={animal.image || "/placeholder.svg"}
                  alt={animal.name}
                  fill
                  className="object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{animal.name}</CardTitle>
                    <CardDescription className="italic">{animal.scientificName}</CardDescription>
                  </div>
                  <Badge
                    variant={
                      animal.status === "Cực kỳ nguy cấp"
                        ? "destructive"
                        : animal.status === "Nguy cấp"
                          ? "destructive"
                          : animal.status === "Sắp nguy cấp"
                            ? "default"
                            : "outline"
                    }
                  >
                    {animal.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 line-clamp-3">{animal.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline" className="bg-primary-50">
                    {animal.habitat}
                  </Badge>
                  <Badge variant="outline" className="bg-primary-50">
                    {animal.region}
                  </Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href={`/animals/${animal.id}`}>Tìm hiểu thêm</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/animals">Xem tất cả các loài</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

