"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Info, X } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Dữ liệu mẫu về phân bố động vật
const animalDistributions = [
  {
    id: 1,
    name: "Hổ Đông Dương",
    scientificName: "Panthera tigris corbetti",
    category: "mammals",
    status: "Nguy cấp",
    image: "/placeholder.svg?height=200&width=300",
    regions: ["vietnam", "thailand", "cambodia", "laos", "myanmar"],
    description:
      "Hổ Đông Dương là một trong những loài hổ lớn nhất, sống ở các khu rừng Đông Nam Á. Hiện nay, loài này đang bị đe dọa nghiêm trọng do săn bắt trái phép và mất môi trường sống.",
    population: "Khoảng 350 cá thể trong tự nhiên",
    habitat: "Rừng nhiệt đới, rừng khô rụng lá theo mùa",
  },
  {
    id: 2,
    name: "Voi Châu Á",
    scientificName: "Elephas maximus",
    category: "mammals",
    status: "Nguy cấp",
    image: "/placeholder.svg?height=200&width=300",
    regions: [
      "india",
      "sri_lanka",
      "thailand",
      "vietnam",
      "malaysia",
      "indonesia",
      "cambodia",
      "laos",
      "myanmar",
      "china",
    ],
    description:
      "Voi Châu Á là loài voi nhỏ hơn so với voi Châu Phi, có đặc điểm nhận dạng là tai nhỏ và lưng cong. Chúng đóng vai trò quan trọng trong hệ sinh thái rừng và văn hóa nhiều quốc gia Châu Á.",
    population: "Khoảng 40,000-50,000 cá thể trong tự nhiên",
    habitat: "Rừng nhiệt đới, rừng khô, đồng cỏ",
  },
  {
    id: 3,
    name: "Đại bàng đầu trắng",
    scientificName: "Haliaeetus leucocephalus",
    category: "birds",
    status: "Ít lo ngại",
    image: "/placeholder.svg?height=200&width=300",
    regions: ["usa", "canada", "mexico"],
    description:
      "Đại bàng đầu trắng là biểu tượng quốc gia của Hoa Kỳ. Loài chim săn mồi này có đầu và đuôi màu trắng đặc trưng, sống gần các vùng nước và chủ yếu ăn cá.",
    population: "Khoảng 300,000 cá thể trong tự nhiên",
    habitat: "Vùng ven biển, hồ và sông",
  },
  {
    id: 4,
    name: "Cá heo mũi chai",
    scientificName: "Tursiops truncatus",
    category: "mammals",
    status: "Ít lo ngại",
    image: "/placeholder.svg?height=200&width=300",
    regions: ["global_oceans"],
    description:
      "Cá heo mũi chai là một trong những loài cá heo thông minh nhất, nổi tiếng với khả năng học hỏi, giao tiếp phức tạp và tính cách thân thiện. Chúng sống theo đàn và có thể được tìm thấy ở hầu hết các đại dương trên thế giới.",
    population: "Khoảng 600,000 cá thể trong tự nhiên",
    habitat: "Đại dương, vùng biển ven bờ",
  },
  {
    id: 5,
    name: "Tê giác Java",
    scientificName: "Rhinoceros sondaicus",
    category: "mammals",
    status: "Cực kỳ nguy cấp",
    image: "/placeholder.svg?height=200&width=300",
    regions: ["indonesia"],
    description:
      "Tê giác Java là một trong những loài động vật có vú quý hiếm nhất thế giới, với chỉ khoảng 74 cá thể còn sống trong tự nhiên. Chúng có một sừng và da nhăn nheo đặc trưng.",
    population: "Khoảng 74 cá thể trong tự nhiên",
    habitat: "Rừng nhiệt đới ẩm",
  },
  {
    id: 6,
    name: "Gấu trúc lớn",
    scientificName: "Ailuropoda melanoleuca",
    category: "mammals",
    status: "Sắp nguy cấp",
    image: "/placeholder.svg?height=200&width=300",
    regions: ["china"],
    description:
      "Gấu trúc lớn là biểu tượng toàn cầu của công tác bảo tồn động vật hoang dã. Loài này chủ yếu ăn tre và sống ở các khu rừng núi cao tại Trung Quốc.",
    population: "Khoảng 1,800 cá thể trong tự nhiên",
    habitat: "Rừng tre vùng núi cao",
  },
  {
    id: 7,
    name: "Sư tử Châu Phi",
    scientificName: "Panthera leo",
    category: "mammals",
    status: "Sắp nguy cấp",
    image: "/placeholder.svg?height=200&width=300",
    regions: ["tanzania", "kenya", "south_africa", "namibia", "botswana", "zimbabwe", "zambia", "mozambique", "angola"],
    description:
      "Sư tử là loài mèo lớn sống theo đàn, với con đực có bờm đặc trưng. Chúng là loài săn mồi đỉnh cao trong hệ sinh thái savanna, thường săn các loài móng guốc như linh dương và ngựa vằn.",
    population: "Khoảng 20,000 cá thể trong tự nhiên",
    habitat: "Đồng cỏ Savanna, rừng thưa",
  },
  {
    id: 8,
    name: "Cá mập trắng lớn",
    scientificName: "Carcharodon carcharias",
    category: "fish",
    status: "Sắp nguy cấp",
    image: "/placeholder.svg?height=200&width=300",
    regions: ["global_oceans"],
    description:
      "Cá mập trắng lớn là một trong những loài cá mập lớn nhất và nổi tiếng nhất. Chúng là loài săn mồi đỉnh cao trong hệ sinh thái biển và có thể được tìm thấy ở hầu hết các đại dương trên thế giới.",
    population: "Không xác định chính xác, ước tính vài nghìn cá thể",
    habitat: "Đại dương, vùng biển ven bờ",
  },
]

export default function MapPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")
  const [filteredAnimals, setFilteredAnimals] = useState(animalDistributions)
  const [selectedAnimal, setSelectedAnimal] = useState(null)
  const [selectedRegion, setSelectedRegion] = useState(null)
  const [hoveredRegion, setHoveredRegion] = useState(null)

  // Lọc động vật dựa trên tìm kiếm và danh mục
  useEffect(() => {
    let results = animalDistributions

    // Lọc theo danh mục
    if (activeCategory !== "all") {
      results = results.filter((animal) => animal.category === activeCategory)
    }

    // Lọc theo từ khóa tìm kiếm
    if (searchTerm) {
      const searchTermLower = searchTerm.toLowerCase()
      results = results.filter(
        (animal) =>
          animal.name.toLowerCase().includes(searchTermLower) ||
          animal.scientificName.toLowerCase().includes(searchTermLower) ||
          animal.description.toLowerCase().includes(searchTermLower),
      )
    }

    // Lọc theo khu vực đã chọn
    if (selectedRegion) {
      results = results.filter(
        (animal) =>
          animal.regions.includes(selectedRegion) ||
          (selectedRegion === "global_oceans" && animal.regions.includes("global_oceans")),
      )
    }

    setFilteredAnimals(results)
  }, [searchTerm, activeCategory, selectedRegion])

  // Xử lý khi nhấp vào động vật
  const handleAnimalClick = (animal) => {
    setSelectedAnimal(animal)
  }

  // Xử lý khi nhấp vào khu vực trên bản đồ
  const handleRegionClick = (region) => {
    if (selectedRegion === region) {
      setSelectedRegion(null)
    } else {
      setSelectedRegion(region)
    }
  }

  // Danh sách các khu vực trên bản đồ
  const regions = [
    { id: "usa", name: "Hoa Kỳ", position: { top: "30%", left: "20%" } },
    { id: "canada", name: "Canada", position: { top: "20%", left: "20%" } },
    { id: "mexico", name: "Mexico", position: { top: "40%", left: "18%" } },
    { id: "brazil", name: "Brazil", position: { top: "60%", left: "30%" } },
    { id: "south_africa", name: "Nam Phi", position: { top: "70%", left: "55%" } },
    { id: "kenya", name: "Kenya", position: { top: "55%", left: "58%" } },
    { id: "tanzania", name: "Tanzania", position: { top: "60%", left: "58%" } },
    { id: "china", name: "Trung Quốc", position: { top: "35%", left: "75%" } },
    { id: "india", name: "Ấn Độ", position: { top: "45%", left: "68%" } },
    { id: "indonesia", name: "Indonesia", position: { top: "60%", left: "80%" } },
    { id: "australia", name: "Úc", position: { top: "70%", left: "85%" } },
    { id: "vietnam", name: "Việt Nam", position: { top: "45%", left: "78%" } },
    { id: "thailand", name: "Thái Lan", position: { top: "48%", left: "75%" } },
    { id: "global_oceans", name: "Đại dương toàn cầu", position: { top: "80%", left: "50%" } },
  ]

  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Bản đồ phân bố động vật hoang dã</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Khám phá phân bố địa lý của các loài động vật hoang dã trên toàn thế giới. Tìm hiểu về môi trường sống tự
          nhiên và phạm vi phân bố của chúng.
        </p>
      </div>

      {/* Thanh tìm kiếm */}
      <div className="mb-8">
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            type="text"
            placeholder="Tìm kiếm động vật..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Tabs danh mục */}
      <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="mb-8">
        <TabsList className="w-full justify-start mb-6 bg-gray-100 overflow-x-auto flex-nowrap">
          <TabsTrigger value="all">Tất cả</TabsTrigger>
          <TabsTrigger value="mammals">Động vật có vú</TabsTrigger>
          <TabsTrigger value="birds">Chim</TabsTrigger>
          <TabsTrigger value="reptiles">Bò sát</TabsTrigger>
          <TabsTrigger value="amphibians">Lưỡng cư</TabsTrigger>
          <TabsTrigger value="fish">Cá</TabsTrigger>
          <TabsTrigger value="insects">Côn trùng</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Danh sách động vật */}
        <div className="lg:col-span-1 order-2 lg:order-1">
          <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            <h2 className="text-xl font-semibold mb-4">Danh sách động vật</h2>

            {selectedRegion && (
              <div className="flex items-center justify-between bg-primary-50 p-3 rounded-lg mb-4">
                <div className="flex items-center">
                  <Info size={18} className="text-primary-600 mr-2" />
                  <span>Đang lọc theo khu vực: {regions.find((r) => r.id === selectedRegion)?.name}</span>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setSelectedRegion(null)}>
                  <X size={16} />
                </Button>
              </div>
            )}

            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
              {filteredAnimals.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500">Không tìm thấy động vật nào phù hợp với tiêu chí tìm kiếm.</p>
                </div>
              ) : (
                filteredAnimals.map((animal) => (
                  <div
                    key={animal.id}
                    className={`flex gap-4 p-3 rounded-lg cursor-pointer transition-colors ${selectedAnimal?.id === animal.id ? "bg-primary-50" : "hover:bg-gray-50"}`}
                    onClick={() => handleAnimalClick(animal)}
                  >
                    <div className="relative w-16 h-16 flex-shrink-0 rounded-md overflow-hidden">
                      <Image src={animal.image || "/placeholder.svg"} alt={animal.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="font-medium">{animal.name}</h3>
                      <p className="text-sm text-gray-500 italic">{animal.scientificName}</p>
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
                        className="mt-1 text-xs"
                      >
                        {animal.status}
                      </Badge>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Bản đồ */}
        <div className="lg:col-span-2 order-1 lg:order-2">
          <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            <h2 className="text-xl font-semibold mb-4">Bản đồ phân bố</h2>

            <div className="relative aspect-[16/9] bg-blue-50 rounded-lg overflow-hidden">
              {/* Bản đồ thế giới */}
              <Image
                src="/placeholder.svg?height=600&width=1000&text=World Map"
                alt="Bản đồ thế giới"
                fill
                className="object-cover"
              />

              {/* Các điểm đánh dấu khu vực */}
              {regions.map((region) => (
                <div
                  key={region.id}
                  className={`absolute w-8 h-8 rounded-full -translate-x-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer transition-all ${
                    selectedRegion === region.id
                      ? "bg-primary-600 text-white scale-125"
                      : hoveredRegion === region.id
                        ? "bg-primary-200 scale-110"
                        : "bg-primary-100"
                  }`}
                  style={{
                    top: region.position.top,
                    left: region.position.left,
                    zIndex: selectedRegion === region.id || hoveredRegion === region.id ? 10 : 1,
                  }}
                  onClick={() => handleRegionClick(region.id)}
                  onMouseEnter={() => setHoveredRegion(region.id)}
                  onMouseLeave={() => setHoveredRegion(null)}
                >
                  <span className="text-xs font-medium">{region.id === "global_oceans" ? "🌊" : "📍"}</span>

                  {/* Tooltip hiển thị tên khu vực */}
                  {(hoveredRegion === region.id || selectedRegion === region.id) && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap bg-white px-2 py-1 rounded shadow-md text-sm">
                      {region.name}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white"></div>
                    </div>
                  )}
                </div>
              ))}

              {/* Hiển thị phân bố của động vật đã chọn */}
              {selectedAnimal &&
                selectedAnimal.regions.map((regionId) => {
                  const region = regions.find((r) => r.id === regionId)
                  if (!region) return null

                  return (
                    <div
                      key={`${selectedAnimal.id}-${regionId}`}
                      className="absolute w-12 h-12 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-primary-600 animate-pulse"
                      style={{
                        top: region.position.top,
                        left: region.position.left,
                        zIndex: 5,
                      }}
                    ></div>
                  )
                })}
            </div>

            <div className="mt-4 text-sm text-gray-500 text-center">
              Nhấp vào các điểm đánh dấu trên bản đồ để xem động vật trong khu vực đó. Nhấp vào một động vật để xem phân
              bố của nó trên bản đồ.
            </div>
          </div>

          {/* Thông tin chi tiết về động vật đã chọn */}
          {selectedAnimal && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold">{selectedAnimal.name}</h2>
                  <p className="text-gray-500 italic">{selectedAnimal.scientificName}</p>
                </div>
                <Badge
                  variant={
                    selectedAnimal.status === "Cực kỳ nguy cấp"
                      ? "destructive"
                      : selectedAnimal.status === "Nguy cấp"
                        ? "destructive"
                        : selectedAnimal.status === "Sắp nguy cấp"
                          ? "default"
                          : "outline"
                  }
                >
                  {selectedAnimal.status}
                </Badge>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4">
                    <Image
                      src={selectedAnimal.image || "/placeholder.svg"}
                      alt={selectedAnimal.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h3 className="font-semibold mb-2">Phân bố địa lý</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedAnimal.regions.map((regionId) => {
                      const region = regions.find((r) => r.id === regionId)
                      if (!region) return null

                      return (
                        <Badge key={regionId} variant="outline">
                          {region.name}
                        </Badge>
                      )
                    })}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Mô tả</h3>
                  <p className="text-gray-700 mb-4">{selectedAnimal.description}</p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900">Quần thể</h4>
                      <p className="text-gray-700">{selectedAnimal.population}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Môi trường sống</h4>
                      <p className="text-gray-700">{selectedAnimal.habitat}</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button asChild>
                      <Link href={`/animals/${selectedAnimal.id}`}>Tìm hiểu thêm về {selectedAnimal.name}</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

