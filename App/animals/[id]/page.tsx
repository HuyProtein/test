import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getAnimalData } from "@/lib/data"
import BackToTop from "@/components/back-to-top"
import RelatedAnimals from "@/components/related-animals"
import { ArrowLeft, Share2, Bookmark, Heart } from "lucide-react"

export default function AnimalDetailPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch this data from an API or database
  const animal = getAnimalData(Number.parseInt(params.id))

  if (!animal) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Không tìm thấy thông tin</h1>
        <p className="mb-8">Thông tin về loài động vật này không tồn tại hoặc đã bị xóa.</p>
        <Button asChild>
          <Link href="/animals">Quay lại danh sách động vật</Link>
        </Button>
      </div>
    )
  }

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src={animal.heroImage || "/placeholder.svg?height=800&width=1600"}
          alt={animal.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="container pb-8 md:pb-12">
            <Link
              href="/animals"
              className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" />
              Quay lại danh sách
            </Link>
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <Badge className="bg-primary-600">{animal.category}</Badge>
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
                className="text-white"
              >
                {animal.status}
              </Badge>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">{animal.name}</h1>
            <p className="text-white/80 text-lg italic mb-4">{animal.scientificName}</p>

            <div className="flex flex-wrap gap-4">
              <Button variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                <Share2 size={16} className="mr-2" />
                Chia sẻ
              </Button>
              <Button variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                <Bookmark size={16} className="mr-2" />
                Lưu
              </Button>
              <Button variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                <Heart size={16} className="mr-2" />
                Yêu thích
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="w-full justify-start mb-6 bg-gray-100">
                <TabsTrigger value="overview">Tổng quan</TabsTrigger>
                <TabsTrigger value="characteristics">Đặc điểm</TabsTrigger>
                <TabsTrigger value="habitat">Môi trường sống</TabsTrigger>
                <TabsTrigger value="behavior">Tập tính</TabsTrigger>
                <TabsTrigger value="conservation">Bảo tồn</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="animate-in fade-in-50 duration-300">
                <div className="prose prose-lg max-w-none">
                  <h2>Giới thiệu về {animal.name}</h2>
                  <p>{animal.description}</p>

                  <div className="my-8 bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Thông tin cơ bản</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <span className="font-medium min-w-[150px]">Tên khoa học:</span>
                        <span className="italic">{animal.scientificName}</span>
                      </div>
                      <div className="flex items-start">
                        <span className="font-medium min-w-[150px]">Phân loại:</span>
                        <span>{animal.category}</span>
                      </div>
                      <div className="flex items-start">
                        <span className="font-medium min-w-[150px]">Tình trạng bảo tồn:</span>
                        <span>{animal.status}</span>
                      </div>
                      <div className="flex items-start">
                        <span className="font-medium min-w-[150px]">Tuổi thọ:</span>
                        <span>{animal.lifespan}</span>
                      </div>
                      <div className="flex items-start">
                        <span className="font-medium min-w-[150px]">Kích thước:</span>
                        <span>{animal.size}</span>
                      </div>
                      <div className="flex items-start">
                        <span className="font-medium min-w-[150px]">Cân nặng:</span>
                        <span>{animal.weight}</span>
                      </div>
                      <div className="flex items-start">
                        <span className="font-medium min-w-[150px]">Môi trường sống:</span>
                        <span>{animal.habitat}</span>
                      </div>
                      <div className="flex items-start">
                        <span className="font-medium min-w-[150px]">Phân bố:</span>
                        <span>{animal.region}</span>
                      </div>
                    </div>
                  </div>

                  <h2>Đặc điểm nổi bật</h2>
                  <p>{animal.keyFeatures}</p>

                  <div className="my-8">
                    <div className="grid grid-cols-2 gap-4">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt={`${animal.name} 1`}
                        width={600}
                        height={400}
                        className="rounded-lg object-cover"
                      />
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt={`${animal.name} 2`}
                        width={600}
                        height={400}
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <p className="text-sm text-gray-500 mt-2 text-center">{animal.name} trong môi trường tự nhiên</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="characteristics" className="animate-in fade-in-50 duration-300">
                <div className="prose prose-lg max-w-none">
                  <h2>Đặc điểm của {animal.name}</h2>
                  <p>
                    {animal.name} có nhiều đặc điểm độc đáo giúp chúng thích nghi với môi trường sống tự nhiên. Từ hình
                    dáng cơ thể đến màu sắc và các đặc điểm sinh lý đều là kết quả của quá trình tiến hóa lâu dài.
                  </p>

                  <h3>Hình dáng và cấu trúc cơ thể</h3>
                  <p>
                    {animal.physicalCharacteristics ||
                      `${animal.name} có cấu trúc cơ thể được thiết kế hoàn hảo để thích nghi với môi trường sống và lối sống của chúng. 
                      Đặc điểm nổi bật bao gồm kích thước, hình dáng, màu sắc và các bộ phận đặc biệt giúp chúng sinh tồn trong tự nhiên.`}
                  </p>

                  <div className="my-8">
                    <Image
                      src="/placeholder.svg?height=400&width=800"
                      alt={`Cấu trúc cơ thể của ${animal.name}`}
                      width={800}
                      height={400}
                      className="rounded-lg object-cover"
                    />
                    <p className="text-sm text-gray-500 mt-2 text-center">Cấu trúc cơ thể của {animal.name}</p>
                  </div>

                  <h3>Giác quan</h3>
                  <p>
                    {animal.senses ||
                      `${animal.name} có hệ thống giác quan phát triển giúp chúng săn mồi, tránh kẻ thù và tương tác với môi trường xung quanh. 
                      Các giác quan như thị giác, thính giác, khứu giác và xúc giác đều được điều chỉnh để phù hợp với lối sống của chúng.`}
                  </p>

                  <h3>Khả năng thích nghi</h3>
                  <p>
                    {animal.adaptations ||
                      `${animal.name} có nhiều khả năng thích nghi đặc biệt giúp chúng tồn tại trong môi trường sống tự nhiên. 
                      Những thích nghi này có thể là về mặt sinh lý, hành vi hoặc cấu trúc, và đã phát triển qua hàng nghìn năm tiến hóa.`}
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="habitat" className="animate-in fade-in-50 duration-300">
                <div className="prose prose-lg max-w-none">
                  <h2>Môi trường sống của {animal.name}</h2>
                  <p>
                    {animal.habitatDescription ||
                      `${animal.name} sinh sống trong các môi trường ${animal.habitat}. Môi trường sống tự nhiên của chúng cung cấp tất cả những gì cần thiết cho sự sống còn: thức ăn, nước uống, nơi trú ẩn và không gian sinh sản.`}
                  </p>

                  <div className="my-8">
                    <Image
                      src="/placeholder.svg?height=400&width=800"
                      alt={`Môi trường sống của ${animal.name}`}
                      width={800}
                      height={400}
                      className="rounded-lg object-cover"
                    />
                    <p className="text-sm text-gray-500 mt-2 text-center">Môi trường sống tự nhiên của {animal.name}</p>
                  </div>

                  <h3>Phân bố địa lý</h3>
                  <p>
                    {animal.geographicDistribution ||
                      `${animal.name} phân bố chủ yếu ở ${animal.region}. Sự phân bố này bị ảnh hưởng bởi nhiều yếu tố như khí hậu, địa hình, nguồn thức ăn và sự cạnh tranh với các loài khác.`}
                  </p>

                  <h3>Vai trò sinh thái</h3>
                  <p>
                    {animal.ecologicalRole ||
                      `${animal.name} đóng vai trò quan trọng trong hệ sinh thái nơi chúng sinh sống. Chúng có thể là loài săn mồi, loài mồi, hoặc đóng góp vào quá trình phát tán hạt giống, thụ phấn hoặc phân hủy chất hữu cơ.`}
                  </p>

                  <h3>Mối đe dọa đối với môi trường sống</h3>
                  <p>
                    {animal.habitatThreats ||
                      `Môi trường sống tự nhiên của ${animal.name} đang bị đe dọa bởi nhiều yếu tố như phá rừng, đô thị hóa, ô nhiễm và biến đổi khí hậu. Sự suy giảm môi trường sống là một trong những nguyên nhân chính dẫn đến sự suy giảm số lượng của loài này.`}
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="behavior" className="animate-in fade-in-50 duration-300">
                <div className="prose prose-lg max-w-none">
                  <h2>Tập tính của {animal.name}</h2>
                  <p>
                    {animal.behaviorDescription ||
                      `${animal.name} có nhiều tập tính thú vị và phức tạp, từ cách kiếm ăn, giao tiếp đến sinh sản và chăm sóc con non. Những tập tính này giúp chúng tồn tại và phát triển trong môi trường tự nhiên.`}
                  </p>

                  <h3>Tập tính xã hội</h3>
                  <p>
                    {animal.socialBehavior ||
                      `${animal.name} có thể sống đơn độc hoặc theo nhóm tùy thuộc vào loài và môi trường sống. Cấu trúc xã hội của chúng có thể rất phức tạp, với hệ thống phân cấp và vai trò cụ thể cho từng cá thể trong nhóm.`}
                  </p>

                  <div className="my-8">
                    <Image
                      src="/placeholder.svg?height=400&width=800"
                      alt={`Tập tính của ${animal.name}`}
                      width={800}
                      height={400}
                      className="rounded-lg object-cover"
                    />
                    <p className="text-sm text-gray-500 mt-2 text-center">{animal.name} trong hoạt động tự nhiên</p>
                  </div>

                  <h3>Tập tính kiếm ăn</h3>
                  <p>
                    {animal.feedingBehavior ||
                      `${animal.name} có chiến lược kiếm ăn đặc trưng, phù hợp với loại thức ăn và môi trường sống của chúng. Điều này có thể bao gồm săn bắt, ăn thực vật, hoặc kết hợp cả hai.`}
                  </p>

                  <h3>Tập tính sinh sản</h3>
                  <p>
                    {animal.reproductiveBehavior ||
                      `Quá trình sinh sản của ${animal.name} bao gồm nhiều giai đoạn từ tìm bạn tình, giao phối, mang thai (hoặc đẻ trứng) đến chăm sóc con non. Mỗi loài có chiến lược sinh sản riêng để đảm bảo sự tồn tại của thế hệ tiếp theo.`}
                  </p>

                  <h3>Giao tiếp</h3>
                  <p>
                    {animal.communication ||
                      `${animal.name} giao tiếp với nhau thông qua nhiều phương thức như âm thanh, cử chỉ, mùi và màu sắc. Giao tiếp giúp chúng cảnh báo nguy hiểm, thu hút bạn tình, xác định lãnh thổ và duy trì cấu trúc xã hội.`}
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="conservation" className="animate-in fade-in-50 duration-300">
                <div className="prose prose-lg max-w-none">
                  <h2>Bảo tồn {animal.name}</h2>
                  <p>
                    {animal.conservationStatus ||
                      `${animal.name} hiện có tình trạng bảo tồn là "${animal.status}" theo Danh sách Đỏ của IUCN. Điều này có nghĩa là loài này đang đối mặt với nguy cơ tuyệt chủng trong tự nhiên nếu không có các biện pháp bảo vệ kịp thời.`}
                  </p>

                  <div className="my-8 bg-red-50 p-6 rounded-lg border border-red-200">
                    <h3 className="text-xl font-semibold mb-4 text-red-700">Các mối đe dọa</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      {animal.threats ? (
                        animal.threats.map((threat, index) => <li key={index}>{threat}</li>)
                      ) : (
                        <>
                          <li>Mất môi trường sống do phá rừng, đô thị hóa và phát triển nông nghiệp</li>
                          <li>Săn bắt trái phép để lấy thịt, da, ngà, sừng hoặc buôn bán làm thú cưng</li>
                          <li>Biến đổi khí hậu ảnh hưởng đến môi trường sống và nguồn thức ăn</li>
                          <li>Ô nhiễm môi trường ảnh hưởng đến sức khỏe và khả năng sinh sản</li>
                          <li>Xung đột với con người do cạnh tranh tài nguyên hoặc xâm phạm khu dân cư</li>
                        </>
                      )}
                    </ul>
                  </div>

                  <h3>Nỗ lực bảo tồn</h3>
                  <p>
                    {animal.conservationEfforts ||
                      `Nhiều tổ chức và cá nhân đang nỗ lực bảo tồn ${animal.name} thông qua các biện pháp như thành lập khu bảo tồn, nghiên cứu khoa học, giáo dục cộng đồng và thực thi luật pháp bảo vệ động vật hoang dã.`}
                  </p>

                  <div className="my-8">
                    <Image
                      src="/placeholder.svg?height=400&width=800"
                      alt={`Bảo tồn ${animal.name}`}
                      width={800}
                      height={400}
                      className="rounded-lg object-cover"
                    />
                    <p className="text-sm text-gray-500 mt-2 text-center">
                      Hoạt động bảo tồn {animal.name} trong tự nhiên
                    </p>
                  </div>

                  <h3>Làm thế nào để giúp đỡ</h3>
                  <p>Có nhiều cách để bạn có thể đóng góp vào công tác bảo tồn {animal.name}:</p>
                  <ul>
                    <li>Hỗ trợ các tổ chức bảo tồn làm việc để bảo vệ loài này và môi trường sống của chúng</li>
                    <li>Nâng cao nhận thức về tình trạng của {animal.name} và các mối đe dọa đối với chúng</li>
                    <li>
                      Không mua các sản phẩm làm từ động vật hoang dã hoặc các loài có nguồn gốc từ buôn bán trái phép
                    </li>
                    <li>Ủng hộ các chính sách và luật pháp bảo vệ động vật hoang dã và môi trường sống của chúng</li>
                    <li>Giảm thiểu tác động của bạn đến môi trường thông qua lối sống bền vững</li>
                  </ul>

                  <div className="mt-8">
                    <Button asChild>
                      <Link href="/conservation/take-action">Tìm hiểu thêm về cách bạn có thể giúp đỡ</Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Facts */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Thông tin nhanh</h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="text-gray-600">Tên khoa học:</span>
                  <span className="font-medium italic">{animal.scientificName}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Phân loại:</span>
                  <span className="font-medium">{animal.category}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Tình trạng:</span>
                  <span className="font-medium">{animal.status}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Tuổi thọ:</span>
                  <span className="font-medium">{animal.lifespan}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Môi trường sống:</span>
                  <span className="font-medium">{animal.habitat}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Phân bố:</span>
                  <span className="font-medium">{animal.region}</span>
                </li>
              </ul>
            </div>

            {/* Map */}
            <div className="bg-white border rounded-lg overflow-hidden">
              <div className="p-4 border-b">
                <h3 className="font-semibold">Phân bố địa lý</h3>
              </div>
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=300&width=400&text=Map"
                  alt="Bản đồ phân bố"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <Button asChild variant="outline" className="w-full">
                  <Link href="/explore/map">Xem bản đồ chi tiết</Link>
                </Button>
              </div>
            </div>

            {/* Gallery */}
            <div className="bg-white border rounded-lg overflow-hidden">
              <div className="p-4 border-b">
                <h3 className="font-semibold">Thư viện ảnh</h3>
              </div>
              <div className="grid grid-cols-2 gap-2 p-2">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt={animal.name}
                  width={150}
                  height={150}
                  className="rounded-md object-cover aspect-square"
                />
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt={animal.name}
                  width={150}
                  height={150}
                  className="rounded-md object-cover aspect-square"
                />
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt={animal.name}
                  width={150}
                  height={150}
                  className="rounded-md object-cover aspect-square"
                />
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt={animal.name}
                  width={150}
                  height={150}
                  className="rounded-md object-cover aspect-square"
                />
              </div>
              <div className="p-4">
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/explore/gallery?animal=${params.id}`}>Xem tất cả ảnh</Link>
                </Button>
              </div>
            </div>

            {/* Conservation Organizations */}
            <div className="bg-white border rounded-lg overflow-hidden">
              <div className="p-4 border-b">
                <h3 className="font-semibold">Tổ chức bảo tồn</h3>
              </div>
              <div className="p-4 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="font-bold text-gray-500">WWF</span>
                  </div>
                  <div>
                    <h4 className="font-medium">World Wildlife Fund</h4>
                    <Link href="https://www.worldwildlife.org/" className="text-sm text-primary-600 hover:underline">
                      Tìm hiểu thêm
                    </Link>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="font-bold text-gray-500">IUCN</span>
                  </div>
                  <div>
                    <h4 className="font-medium">International Union for Conservation of Nature</h4>
                    <Link href="https://www.iucn.org/" className="text-sm text-primary-600 hover:underline">
                      Tìm hiểu thêm
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Animals */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Các loài liên quan</h2>
          <RelatedAnimals currentAnimalId={Number.parseInt(params.id)} />
        </div>
      </div>

      <BackToTop />
    </>
  )
}

