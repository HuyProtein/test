"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Search, Filter } from "lucide-react"

// Dữ liệu mẫu cho thư viện ảnh
const galleryImages = [
  {
    id: 1,
    title: "Hổ Đông Dương trong rừng nhiệt đới",
    description: "Hổ Đông Dương đang rình mồi trong khu rừng nhiệt đới Việt Nam",
    image: "/placeholder.svg?height=600&width=800",
    thumbnail: "/placeholder.svg?height=300&width=400",
    category: "mammals",
    tags: ["hổ", "rừng nhiệt đới", "việt nam", "động vật có vú"],
    photographer: "Nguyễn Văn A",
    location: "Vườn Quốc gia Cát Tiên, Việt Nam",
    date: "2023-05-15",
  },
  {
    id: 2,
    title: "Voi châu Á và con non",
    description: "Một con voi châu Á mẹ và con non đang tắm tại một con sông ở Thái Lan",
    image: "/placeholder.svg?height=600&width=800",
    thumbnail: "/placeholder.svg?height=300&width=400",
    category: "mammals",
    tags: ["voi", "sông", "thái lan", "động vật có vú"],
    photographer: "Trần Thị B",
    location: "Công viên Quốc gia Khao Yai, Thái Lan",
    date: "2023-06-22",
  },
  {
    id: 3,
    title: "Đại bàng đầu trắng đang săn mồi",
    description: "Đại bàng đầu trắng đang săn cá trên một hồ nước ở Bắc Mỹ",
    image: "/placeholder.svg?height=600&width=800",
    thumbnail: "/placeholder.svg?height=300&width=400",
    category: "birds",
    tags: ["đại bàng", "hồ", "bắc mỹ", "chim"],
    photographer: "John Smith",
    location: "Hồ Michigan, Hoa Kỳ",
    date: "2023-04-10",
  },
  {
    id: 4,
    title: "Cá heo mũi chai nhảy lên khỏi mặt nước",
    description: "Một đàn cá heo mũi chai đang nhảy lên khỏi mặt nước gần bờ biển",
    image: "/placeholder.svg?height=600&width=800",
    thumbnail: "/placeholder.svg?height=300&width=400",
    category: "mammals",
    tags: ["cá heo", "biển", "động vật có vú"],
    photographer: "Maria Rodriguez",
    location: "Vịnh Hạ Long, Việt Nam",
    date: "2023-07-05",
  },
  {
    id: 5,
    title: "Tê giác Java trong rừng nhiệt đới",
    description: "Một con tê giác Java quý hiếm đang kiếm ăn trong khu rừng nhiệt đới Indonesia",
    image: "/placeholder.svg?height=600&width=800",
    thumbnail: "/placeholder.svg?height=300&width=400",
    category: "mammals",
    tags: ["tê giác", "rừng nhiệt đới", "indonesia", "động vật có vú"],
    photographer: "Ahmad Fauzi",
    location: "Công viên Quốc gia Ujung Kulon, Indonesia",
    date: "2023-03-18",
  },
  {
    id: 6,
    title: "Gấu trúc lớn đang ăn tre",
    description: "Gấu trúc lớn đang thưởng thức bữa ăn với tre tại một khu bảo tồn ở Trung Quốc",
    image: "/placeholder.svg?height=600&width=800",
    thumbnail: "/placeholder.svg?height=300&width=400",
    category: "mammals",
    tags: ["gấu trúc", "tre", "trung quốc", "động vật có vú"],
    photographer: "Li Wei",
    location: "Khu Bảo tồn Wolong, Trung Quốc",
    date: "2023-02-28",
  },
  {
    id: 7,
    title: "Rắn hổ mang chúa",
    description: "Rắn hổ mang chúa đang phô diễn mào cổ đặc trưng trong rừng nhiệt đới",
    image: "/placeholder.svg?height=600&width=800",
    thumbnail: "/placeholder.svg?height=300&width=400",
    category: "reptiles",
    tags: ["rắn", "rừng nhiệt đới", "bò sát"],
    photographer: "Phạm Văn C",
    location: "Vườn Quốc gia Cúc Phương, Việt Nam",
    date: "2023-08-12",
  },
  {
    id: 8,
    title: "Ếch xanh mắt đỏ",
    description: "Ếch xanh mắt đỏ đang nghỉ ngơi trên một chiếc lá trong rừng mưa Costa Rica",
    image: "/placeholder.svg?height=600&width=800",
    thumbnail: "/placeholder.svg?height=300&width=400",
    category: "amphibians",
    tags: ["ếch", "rừng mưa", "costa rica", "lưỡng cư"],
    photographer: "Carlos Mendez",
    location: "Rừng mưa Monteverde, Costa Rica",
    date: "2023-01-15",
  },
  {
    id: 9,
    title: "Cá mập trắng lớn",
    description: "Cá mập trắng lớn đang bơi trong vùng biển xanh sâu thẳm",
    image: "/placeholder.svg?height=600&width=800",
    thumbnail: "/placeholder.svg?height=300&width=400",
    category: "fish",
    tags: ["cá mập", "biển", "cá"],
    photographer: "David Brown",
    location: "Đại dương Nam Phi",
    date: "2023-09-05",
  },
  {
    id: 10,
    title: "Bướm Morpho xanh",
    description: "Bướm Morpho xanh với đôi cánh lấp lánh đang đậu trên một bông hoa",
    image: "/placeholder.svg?height=600&width=800",
    thumbnail: "/placeholder.svg?height=300&width=400",
    category: "insects",
    tags: ["bướm", "rừng nhiệt đới", "brazil", "côn trùng"],
    photographer: "Ana Silva",
    location: "Rừng Amazon, Brazil",
    date: "2023-07-28",
  },
  {
    id: 11,
    title: "Sư tử đực trên đồng cỏ Savanna",
    description: "Một con sư tử đực oai vệ đang đứng trên đồng cỏ Savanna trong ánh hoàng hôn",
    image: "/placeholder.svg?height=600&width=800",
    thumbnail: "/placeholder.svg?height=300&width=400",
    category: "mammals",
    tags: ["sư tử", "savanna", "châu phi", "động vật có vú"],
    photographer: "Michael Johnson",
    location: "Công viên Quốc gia Serengeti, Tanzania",
    date: "2023-05-30",
  },
  {
    id: 12,
    title: "Chim cánh cụt Hoàng đế",
    description: "Một đàn chim cánh cụt Hoàng đế đang tụ tập trên băng ở Nam Cực",
    image: "/placeholder.svg?height=600&width=800",
    thumbnail: "/placeholder.svg?height=300&width=400",
    category: "birds",
    tags: ["chim cánh cụt", "nam cực", "băng", "chim"],
    photographer: "Sarah Wilson",
    location: "Nam Cực",
    date: "2023-02-10",
  },
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")
  const [filteredImages, setFilteredImages] = useState(galleryImages)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [selectedTags, setSelectedTags] = useState([])

  // Lọc ảnh dựa trên tìm kiếm, danh mục và thẻ
  useEffect(() => {
    let results = galleryImages

    // Lọc theo danh mục
    if (activeCategory !== "all") {
      results = results.filter((image) => image.category === activeCategory)
    }

    // Lọc theo từ khóa tìm kiếm
    if (searchTerm) {
      const searchTermLower = searchTerm.toLowerCase()
      results = results.filter(
        (image) =>
          image.title.toLowerCase().includes(searchTermLower) ||
          image.description.toLowerCase().includes(searchTermLower) ||
          image.photographer.toLowerCase().includes(searchTermLower) ||
          image.location.toLowerCase().includes(searchTermLower) ||
          image.tags.some((tag) => tag.toLowerCase().includes(searchTermLower)),
      )
    }

    // Lọc theo thẻ đã chọn
    if (selectedTags.length > 0) {
      results = results.filter((image) => selectedTags.some((tag) => image.tags.includes(tag)))
    }

    setFilteredImages(results)
  }, [searchTerm, activeCategory, selectedTags])

  // Xử lý khi nhấp vào ảnh
  const handleImageClick = (image) => {
    setSelectedImage(image)
  }

  // Xử lý khi thay đổi thẻ
  const handleTagToggle = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag))
    } else {
      setSelectedTags([...selectedTags, tag])
    }
  }

  // Lấy tất cả các thẻ duy nhất
  const allTags = [...new Set(galleryImages.flatMap((image) => image.tags))]

  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Thư viện ảnh động vật hoang dã</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Khám phá bộ sưu tập hình ảnh tuyệt đẹp về động vật hoang dã từ khắp nơi trên thế giới. Tìm kiếm theo loài, môi
          trường sống hoặc khu vực địa lý.
        </p>
      </div>

      {/* Thanh tìm kiếm và bộ lọc */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              type="text"
              placeholder="Tìm kiếm hình ảnh..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2" onClick={() => setIsFilterOpen(!isFilterOpen)}>
            <Filter size={18} />
            Bộ lọc
            {selectedTags.length > 0 && (
              <Badge variant="secondary" className="ml-2">
                {selectedTags.length}
              </Badge>
            )}
          </Button>
        </div>

        {/* Bộ lọc mở rộng */}
        {isFilterOpen && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Lọc theo thẻ</h3>
              {selectedTags.length > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => setSelectedTags([])}
                >
                  Xóa tất cả
                </Button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag, index) => (
                <Badge
                  key={index}
                  variant={selectedTags.includes(tag) ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => handleTagToggle(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        )}
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

      {/* Hiển thị kết quả */}
      {filteredImages.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Search size={48} className="mx-auto" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Không tìm thấy kết quả</h3>
          <p className="text-gray-600">
            Không tìm thấy hình ảnh nào phù hợp với tiêu chí tìm kiếm của bạn. Vui lòng thử lại với từ khóa khác.
          </p>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => {
              setSearchTerm("")
              setActiveCategory("all")
              setSelectedTags([])
            }}
          >
            Xóa bộ lọc
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => handleImageClick(image)}
            >
              <div className="aspect-square relative">
                <Image
                  src={image.thumbnail || "/placeholder.svg"}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-semibold line-clamp-2">{image.title}</h3>
                <p className="text-white/80 text-sm mt-1">{image.photographer}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Dialog hiển thị ảnh chi tiết */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-[90vw]">
          <DialogHeader>
            <DialogTitle>{selectedImage?.title}</DialogTitle>
            <DialogDescription>{selectedImage?.description}</DialogDescription>
          </DialogHeader>

          <div className="mt-4">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image src={selectedImage?.image || ""} alt={selectedImage?.title || ""} fill className="object-cover" />
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Thông tin chi tiết</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="font-medium min-w-[120px]">Nhiếp ảnh gia:</span>
                    <span>{selectedImage?.photographer}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium min-w-[120px]">Địa điểm:</span>
                    <span>{selectedImage?.location}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium min-w-[120px]">Ngày chụp:</span>
                    <span>{new Date(selectedImage?.date).toLocaleDateString("vi-VN")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium min-w-[120px]">Danh mục:</span>
                    <span className="capitalize">{selectedImage?.category}</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Thẻ</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedImage?.tags.map((tag, index) => (
                    <Badge key={index} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-between">
              <Button variant="outline" onClick={() => setSelectedImage(null)}>
                Đóng
              </Button>
              <Button>Tải xuống</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

