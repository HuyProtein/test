import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function HabitatsPage() {
  const habitats = [
    {
      id: "rainforest",
      name: "Rừng nhiệt đới",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Rừng nhiệt đới là hệ sinh thái đa dạng nhất trên Trái Đất, với hàng triệu loài động thực vật sinh sống. Chúng đóng vai trò quan trọng trong việc điều hòa khí hậu toàn cầu và cung cấp oxy.",
      animals: ["Hổ", "Voi", "Khỉ đột", "Vẹt", "Báo đốm"],
    },
    {
      id: "savanna",
      name: "Đồng cỏ Savanna",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Savanna là vùng đồng cỏ rộng lớn với những cây thưa thớt, chủ yếu ở châu Phi. Đây là nơi sinh sống của nhiều loài động vật lớn như sư tử, voi, hươu cao cổ và ngựa vằn.",
      animals: ["Sư tử", "Voi châu Phi", "Hươu cao cổ", "Ngựa vằn", "Linh dương"],
    },
    {
      id: "desert",
      name: "Sa mạc",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Sa mạc là vùng đất khô cằn với lượng mưa rất thấp. Mặc dù điều kiện khắc nghiệt, nhưng vẫn có nhiều loài động vật thích nghi để sống sót, như lạc đà, cáo sa mạc và bò sát.",
      animals: ["Lạc đà", "Cáo sa mạc", "Rắn đuôi chuông", "Thằn lằn", "Bọ cạp"],
    },
    {
      id: "ocean",
      name: "Đại dương",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Đại dương chiếm hơn 70% bề mặt Trái Đất và là nơi sinh sống của vô số loài sinh vật, từ sinh vật phù du nhỏ bé đến cá voi khổng lồ. Chúng đóng vai trò quan trọng trong chu trình carbon và điều hòa khí hậu.",
      animals: ["Cá voi", "Cá heo", "Cá mập", "Bạch tuộc", "San hô"],
    },
    {
      id: "mountain",
      name: "Vùng núi cao",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Vùng núi cao có khí hậu lạnh và điều kiện sống khắc nghiệt. Các loài động vật sống ở đây đã phát triển những thích nghi đặc biệt để chịu đựng nhiệt độ thấp và không khí loãng.",
      animals: ["Báo tuyết", "Dê núi", "Đại bàng", "Gấu nâu", "Sói"],
    },
    {
      id: "wetland",
      name: "Đầm lầy",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Đầm lầy là vùng đất ngập nước, nơi đất bị bão hòa nước thường xuyên hoặc theo mùa. Chúng là nơi sinh sống của nhiều loài chim nước, cá, lưỡng cư và bò sát.",
      animals: ["Cá sấu", "Hải ly", "Chim hồng hạc", "Ếch", "Rùa"],
    },
    {
      id: "tundra",
      name: "Thảo nguyên Tundra",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Tundra là vùng đất lạnh giá ở Bắc Cực, nơi đất đóng băng vĩnh cửu dưới bề mặt. Thực vật chủ yếu là rêu, địa y và cây bụi nhỏ. Động vật ở đây có lớp lông dày để chống chọi với cái lạnh.",
      animals: ["Gấu Bắc Cực", "Tuần lộc", "Cáo Bắc Cực", "Chim cú tuyết", "Bò xạ"],
    },
    {
      id: "coral-reef",
      name: "Rạn san hô",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Rạn san hô là hệ sinh thái biển đa dạng nhất, được tạo thành từ xương của san hô. Chúng cung cấp nơi ở cho khoảng 25% các loài sinh vật biển, mặc dù chỉ chiếm chưa đến 1% đáy đại dương.",
      animals: ["Cá hề", "San hô", "Cá đuối", "Bạch tuộc", "Cua"],
    },
  ]

  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Môi trường sống của Động vật Hoang dã</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Khám phá các môi trường sống đa dạng nơi động vật hoang dã sinh sống. Từ rừng nhiệt đới đến sa mạc khô cằn,
          mỗi hệ sinh thái đều có những đặc điểm riêng và là nơi sinh sống của nhiều loài động vật khác nhau.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {habitats.map((habitat) => (
          <Card key={habitat.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48 overflow-hidden">
              <Image
                src={habitat.image || "/placeholder.svg"}
                alt={habitat.name}
                fill
                className="object-cover transition-transform hover:scale-105 duration-300"
              />
            </div>
            <CardHeader>
              <CardTitle>{habitat.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4 line-clamp-3">{habitat.description}</p>
              <div>
                <p className="font-medium mb-2">Động vật tiêu biểu:</p>
                <div className="flex flex-wrap gap-2">
                  {habitat.animals.map((animal, index) => (
                    <span key={index} className="bg-primary-50 text-primary-700 px-2 py-1 rounded-full text-sm">
                      {animal}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={`/habitats/${habitat.id}`}>Tìm hiểu thêm</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

