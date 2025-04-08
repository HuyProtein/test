import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, Trash2, Thermometer, Globe } from "lucide-react"

export default function ConservationPage() {
  const threats = [
    {
      id: "habitat-loss",
      icon: <Trash2 className="h-8 w-8 text-red-600" />,
      title: "Mất môi trường sống",
      description:
        "Phá rừng, đô thị hóa và phát triển nông nghiệp đang làm mất đi môi trường sống tự nhiên của nhiều loài động vật.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "poaching",
      icon: <AlertTriangle className="h-8 w-8 text-red-600" />,
      title: "Săn bắt và buôn bán trái phép",
      description:
        "Nhiều loài động vật bị săn bắt để lấy thịt, da, ngà, sừng hoặc buôn bán làm thú cưng, gây suy giảm nghiêm trọng số lượng cá thể trong tự nhiên.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "climate-change",
      icon: <Thermometer className="h-8 w-8 text-red-600" />,
      title: "Biến đổi khí hậu",
      description:
        "Sự thay đổi nhiệt độ và điều kiện thời tiết ảnh hưởng đến môi trường sống, nguồn thức ăn và chu kỳ sinh sản của nhiều loài.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "pollution",
      icon: <Globe className="h-8 w-8 text-red-600" />,
      title: "Ô nhiễm môi trường",
      description:
        "Ô nhiễm không khí, nước và đất đang gây ra nhiều tác động tiêu cực đến sức khỏe và khả năng sinh sản của động vật hoang dã.",
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  const conservationMethods = [
    {
      id: "protected-areas",
      title: "Khu bảo tồn và vườn quốc gia",
      description:
        "Thiết lập các khu bảo tồn, vườn quốc gia và khu dự trữ sinh quyển để bảo vệ môi trường sống tự nhiên của động vật hoang dã.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "laws",
      title: "Luật pháp và chính sách",
      description:
        "Ban hành và thực thi các luật pháp, công ước quốc tế về bảo vệ động vật hoang dã và ngăn chặn buôn bán trái phép.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "education",
      title: "Giáo dục cộng đồng",
      description:
        "Nâng cao nhận thức của cộng đồng về tầm quan trọng của động vật hoang dã và sự cần thiết phải bảo vệ chúng.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "research",
      title: "Nghiên cứu khoa học",
      description:
        "Thực hiện các nghiên cứu về sinh thái, hành vi và di truyền của động vật hoang dã để có biện pháp bảo tồn hiệu quả.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "restoration",
      title: "Phục hồi quần thể",
      description:
        "Triển khai các chương trình nhân giống bảo tồn và tái thả động vật về tự nhiên để phục hồi quần thể các loài bị đe dọa.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "cooperation",
      title: "Hợp tác quốc tế",
      description:
        "Thúc đẩy hợp tác giữa các quốc gia, tổ chức phi chính phủ và cộng đồng quốc tế trong công tác bảo tồn động vật hoang dã.",
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  const organizations = [
    {
      id: "wwf",
      name: "World Wildlife Fund (WWF)",
      logo: "/placeholder.svg?height=100&width=100&text=WWF",
      description:
        "Tổ chức bảo tồn hàng đầu thế giới, hoạt động trong lĩnh vực bảo tồn động vật hoang dã, môi trường sống và đa dạng sinh học.",
      website: "https://www.worldwildlife.org/",
    },
    {
      id: "iucn",
      name: "International Union for Conservation of Nature (IUCN)",
      logo: "/placeholder.svg?height=100&width=100&text=IUCN",
      description:
        "Tổ chức quốc tế về bảo tồn thiên nhiên, cung cấp dữ liệu, đánh giá và phân tích về tình trạng của thế giới tự nhiên và các biện pháp bảo tồn.",
      website: "https://www.iucn.org/",
    },
    {
      id: "traffic",
      name: "TRAFFIC",
      logo: "/placeholder.svg?height=100&width=100&text=TRAFFIC",
      description:
        "Mạng lưới giám sát buôn bán động vật hoang dã, làm việc để đảm bảo rằng việc buôn bán động thực vật hoang dã không đe dọa đến bảo tồn thiên nhiên.",
      website: "https://www.traffic.org/",
    },
    {
      id: "wcs",
      name: "Wildlife Conservation Society (WCS)",
      logo: "/placeholder.svg?height=100&width=100&text=WCS",
      description:
        "Tổ chức bảo tồn toàn cầu làm việc để bảo vệ động vật hoang dã và các vùng hoang dã trên khắp thế giới thông qua khoa học, bảo tồn và giáo dục.",
      website: "https://www.wcs.org/",
    },
  ]

  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Bảo tồn Động vật Hoang dã</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Bảo tồn động vật hoang dã là nỗ lực bảo vệ các loài động vật và môi trường sống của chúng khỏi sự tuyệt chủng
          và suy giảm. Tìm hiểu về các mối đe dọa, biện pháp bảo tồn và cách bạn có thể đóng góp.
        </p>
      </div>

      {/* Hero Section */}
      <div className="relative rounded-xl overflow-hidden mb-16">
        <div className="aspect-[21/9] relative">
          <Image
            src="/placeholder.svg?height=600&width=1400"
            alt="Bảo tồn động vật hoang dã"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
          <div className="p-8 md:p-12 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Hành động ngay hôm nay</h2>
            <p className="text-white/80 mb-6">
              Mỗi người đều có thể đóng góp vào công tác bảo tồn động vật hoang dã. Hãy tham gia cùng chúng tôi để bảo
              vệ những loài động vật tuyệt vời này cho các thế hệ tương lai.
            </p>
            <Button asChild size="lg" className="bg-primary-600 hover:bg-primary-700">
              <Link href="/conservation/take-action">Tìm hiểu cách bạn có thể giúp đỡ</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Threats Section */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Các mối đe dọa</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Động vật hoang dã đang đối mặt với nhiều mối đe dọa khác nhau, chủ yếu do hoạt động của con người. Hiểu rõ
            các mối đe dọa này là bước đầu tiên để bảo vệ chúng.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {threats.map((threat) => (
            <div
              key={threat.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-64">
                <Image src={threat.image || "/placeholder.svg"} alt={threat.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    {threat.icon}
                  </div>
                  <h3 className="text-xl font-bold">{threat.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{threat.description}</p>
                <Button asChild variant="outline">
                  <Link href={`/conservation/threats/${threat.id}`}>Tìm hiểu thêm</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Conservation Methods Section */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Các biện pháp bảo tồn</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Nhiều biện pháp bảo tồn đang được thực hiện để bảo vệ động vật hoang dã và môi trường sống của chúng. Mỗi
            biện pháp đều đóng vai trò quan trọng trong nỗ lực bảo tồn tổng thể.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {conservationMethods.map((method) => (
            <Card key={method.id} className="hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src={method.image || "/placeholder.svg"}
                  alt={method.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>{method.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{method.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/conservation/${method.id}`}>Tìm hiểu thêm</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Success Stories */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Câu chuyện thành công</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Mặc dù còn nhiều thách thức, nhưng đã có nhiều câu chuyện thành công trong bảo tồn động vật hoang dã. Những
            câu chuyện này mang lại hy vọng và động lực cho công tác bảo tồn.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="relative h-full min-h-[300px]">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Câu chuyện thành công"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">Phục hồi quần thể hổ ở Ấn Độ</h3>
              <p className="text-gray-600 mb-4">
                Ấn Độ đã thành công trong việc tăng số lượng hổ hoang dã từ khoảng 1,400 cá thể vào năm 2006 lên hơn
                3,000 cá thể vào năm 2022. Đây là kết quả của các nỗ lực bảo tồn toàn diện, bao gồm thành lập các khu
                bảo tồn, chống săn trộm và giáo dục cộng đồng.
              </p>
              <p className="text-gray-600 mb-6">
                Dự án Hổ của Ấn Độ là một trong những chương trình bảo tồn loài đơn lẻ thành công nhất thế giới, chứng
                minh rằng với cam kết và nguồn lực phù hợp, chúng ta có thể đảo ngược xu hướng suy giảm của các loài bị
                đe dọa.
              </p>
              <Button asChild>
                <Link href="/conservation/success-stories">Xem thêm câu chuyện thành công</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Organizations */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Tổ chức bảo tồn</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Nhiều tổ chức trên toàn thế giới đang nỗ lực bảo tồn động vật hoang dã. Tìm hiểu về công việc của họ và cách
            bạn có thể hỗ trợ.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {organizations.map((org) => (
            <div
              key={org.id}
              className="bg-white rounded-lg shadow-md p-6 flex gap-4 hover:shadow-lg transition-shadow"
            >
              <div className="flex-shrink-0">
                <Image
                  src={org.logo || "/placeholder.svg"}
                  alt={org.name}
                  width={80}
                  height={80}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{org.name}</h3>
                <p className="text-gray-600 mb-4">{org.description}</p>
                <Button asChild variant="outline" size="sm">
                  <a href={org.website} target="_blank" rel="noopener noreferrer">
                    Truy cập trang web
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button asChild variant="outline">
            <Link href="/conservation/organizations">Xem tất cả tổ chức bảo tồn</Link>
          </Button>
        </div>
      </div>

      {/* Take Action */}
      <div className="bg-primary-50 rounded-xl p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Bạn có thể làm gì để giúp đỡ?</h2>
            <p className="text-gray-700 mb-6">
              Mỗi người đều có thể đóng góp vào công tác bảo tồn động vật hoang dã thông qua những hành động đơn giản
              hàng ngày. Từ việc ủng hộ các tổ chức bảo tồn đến thay đổi thói quen tiêu dùng, mọi hành động đều quan
              trọng.
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
                <span>Ủng hộ các tổ chức bảo tồn động vật hoang dã</span>
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
                <span>Không mua các sản phẩm làm từ động vật hoang dã</span>
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
                <span>Giảm thiểu tác động đến môi trường thông qua lối sống bền vững</span>
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
                <span>Nâng cao nhận thức về bảo tồn động vật hoang dã</span>
              </li>
            </ul>
            <Button asChild size="lg">
              <Link href="/conservation/take-action">Hành động ngay</Link>
            </Button>
          </div>
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
            <Image src="/placeholder.svg?height=400&width=600" alt="Hành động bảo tồn" fill className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}

