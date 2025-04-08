"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Play, Pause, Volume2, VolumeX, Maximize, ChevronLeft, ChevronRight } from "lucide-react"

// Dữ liệu mẫu cho thư viện video
const videoData = [
  {
    id: 1,
    title: "Cuộc sống bí ẩn của hổ Đông Dương",
    description:
      "Khám phá cuộc sống hàng ngày của loài hổ Đông Dương quý hiếm trong môi trường tự nhiên qua video tài liệu độc đáo này.",
    thumbnail: "/placeholder.svg?height=300&width=500",
    videoUrl: "https://example.com/videos/tiger-life.mp4", // Giả định URL video
    duration: "10:25",
    category: "mammals",
    tags: ["hổ", "rừng nhiệt đới", "việt nam", "động vật có vú"],
    creator: "Wildlife Conservation Society",
    views: 12500,
    uploadDate: "2023-05-15",
  },
  {
    id: 2,
    title: "Voi châu Á: Những người khổng lồ thông minh",
    description:
      "Tìm hiểu về trí thông minh và đời sống xã hội phức tạp của voi châu Á, một trong những loài động vật thông minh nhất trên Trái Đất.",
    thumbnail: "/placeholder.svg?height=300&width=500",
    videoUrl: "https://example.com/videos/asian-elephants.mp4",
    duration: "15:40",
    category: "mammals",
    tags: ["voi", "châu á", "động vật có vú"],
    creator: "National Geographic",
    views: 18700,
    uploadDate: "2023-06-22",
  },
  {
    id: 3,
    title: "Đại bàng đầu trắng: Chúa tể bầu trời",
    description:
      "Theo dõi cuộc sống của đại bàng đầu trắng, biểu tượng quốc gia của Hoa Kỳ và một trong những loài chim săn mồi mạnh mẽ nhất.",
    thumbnail: "/placeholder.svg?height=300&width=500",
    videoUrl: "https://example.com/videos/bald-eagle.mp4",
    duration: "12:15",
    category: "birds",
    tags: ["đại bàng", "bắc mỹ", "chim"],
    creator: "Bird Conservation Alliance",
    views: 9800,
    uploadDate: "2023-04-10",
  },
  {
    id: 4,
    title: "Cá heo mũi chai: Những vũ công của đại dương",
    description:
      "Chiêm ngưỡng vẻ đẹp và sự thông minh của cá heo mũi chai khi chúng nhảy múa trong làn nước xanh của đại dương.",
    thumbnail: "/placeholder.svg?height=300&width=500",
    videoUrl: "https://example.com/videos/bottlenose-dolphins.mp4",
    duration: "08:50",
    category: "mammals",
    tags: ["cá heo", "biển", "động vật có vú"],
    creator: "Ocean Explorers",
    views: 15300,
    uploadDate: "2023-07-05",
  },
  {
    id: 5,
    title: "Tê giác Java: Cuộc chiến sinh tồn",
    description:
      "Tìm hiểu về cuộc sống khó khăn của tê giác Java, một trong những loài động vật có vú quý hiếm nhất thế giới, và nỗ lực bảo tồn chúng.",
    thumbnail: "/placeholder.svg?height=300&width=500",
    videoUrl: "https://example.com/videos/javan-rhino.mp4",
    duration: "14:30",
    category: "mammals",
    tags: ["tê giác", "indonesia", "động vật có vú"],
    creator: "WWF",
    views: 7600,
    uploadDate: "2023-03-18",
  },
  {
    id: 6,
    title: "Gấu trúc lớn: Biểu tượng bảo tồn",
    description:
      "Khám phá cuộc sống của gấu trúc lớn, biểu tượng toàn cầu của công tác bảo tồn động vật hoang dã, và những nỗ lực để bảo vệ chúng.",
    thumbnail: "/placeholder.svg?height=300&width=500",
    videoUrl: "https://example.com/videos/giant-panda.mp4",
    duration: "11:20",
    category: "mammals",
    tags: ["gấu trúc", "trung quốc", "động vật có vú"],
    creator: "China Wildlife",
    views: 21400,
    uploadDate: "2023-02-28",
  },
  {
    id: 7,
    title: "Rắn hổ mang chúa: Vua của loài rắn",
    description:
      "Tìm hiểu về rắn hổ mang chúa, loài rắn độc dài nhất thế giới, và vai trò của chúng trong hệ sinh thái.",
    thumbnail: "/placeholder.svg?height=300&width=500",
    videoUrl: "https://example.com/videos/king-cobra.mp4",
    duration: "09:45",
    category: "reptiles",
    tags: ["rắn", "châu á", "bò sát"],
    creator: "Reptile World",
    views: 8900,
    uploadDate: "2023-08-12",
  },
  {
    id: 8,
    title: "Ếch xanh mắt đỏ: Kỳ quan của rừng mưa",
    description:
      "Khám phá cuộc sống của ếch xanh mắt đỏ, một trong những loài lưỡng cư đẹp nhất và biểu tượng của rừng mưa nhiệt đới.",
    thumbnail: "/placeholder.svg?height=300&width=500",
    videoUrl: "https://example.com/videos/red-eyed-tree-frog.mp4",
    duration: "07:30",
    category: "amphibians",
    tags: ["ếch", "rừng mưa", "lưỡng cư"],
    creator: "Rainforest Alliance",
    views: 6200,
    uploadDate: "2023-01-15",
  },
]

export default function VideosPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")
  const [filteredVideos, setFilteredVideos] = useState(videoData)
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const videoRef = useRef(null)

  // Lọc video dựa trên tìm kiếm và danh mục
  useEffect(() => {
    let results = videoData

    // Lọc theo danh mục
    if (activeCategory !== "all") {
      results = results.filter((video) => video.category === activeCategory)
    }

    // Lọc theo từ khóa tìm kiếm
    if (searchTerm) {
      const searchTermLower = searchTerm.toLowerCase()
      results = results.filter(
        (video) =>
          video.title.toLowerCase().includes(searchTermLower) ||
          video.description.toLowerCase().includes(searchTermLower) ||
          video.creator.toLowerCase().includes(searchTermLower) ||
          video.tags.some((tag) => tag.toLowerCase().includes(searchTermLower)),
      )
    }

    setFilteredVideos(results)
  }, [searchTerm, activeCategory])

  // Xử lý khi nhấp vào video
  const handleVideoClick = (video) => {
    setSelectedVideo(video)
    setIsPlaying(false)
    setCurrentTime(0)

    // Trong ứng dụng thực tế, bạn sẽ tải video thực và phát nó
    // Ở đây chúng ta chỉ mô phỏng
    setTimeout(() => {
      if (videoRef.current) {
        setDuration(convertTimeStringToSeconds(video.duration))
      }
    }, 500)
  }

  // Xử lý phát/tạm dừng video
  const togglePlay = () => {
    setIsPlaying(!isPlaying)

    // Trong ứng dụng thực tế, bạn sẽ phát/tạm dừng video thực
    // videoRef.current.play() hoặc videoRef.current.pause()
  }

  // Xử lý tắt/bật âm thanh
  const toggleMute = () => {
    setIsMuted(!isMuted)

    // Trong ứng dụng thực tế, bạn sẽ tắt/bật âm thanh video thực
    // videoRef.current.muted = !videoRef.current.muted
  }

  // Xử lý khi thay đổi thời gian phát
  const handleTimeChange = (e) => {
    const newTime = Number.parseFloat(e.target.value)
    setCurrentTime(newTime)

    // Trong ứng dụng thực tế, bạn sẽ thay đổi thời gian phát của video thực
    // videoRef.current.currentTime = newTime
  }

  // Chuyển đổi chuỗi thời gian (mm:ss) thành số giây
  const convertTimeStringToSeconds = (timeString) => {
    const [minutes, seconds] = timeString.split(":").map(Number)
    return minutes * 60 + seconds
  }

  // Chuyển đổi số giây thành chuỗi thời gian (mm:ss)
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  // Xử lý chuyển đến video trước/sau
  const navigateVideo = (direction) => {
    if (!selectedVideo) return

    const currentIndex = filteredVideos.findIndex((v) => v.id === selectedVideo.id)
    let newIndex

    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredVideos.length - 1
    } else {
      newIndex = currentIndex < filteredVideos.length - 1 ? currentIndex + 1 : 0
    }

    handleVideoClick(filteredVideos[newIndex])
  }

  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Thư viện video động vật hoang dã</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Khám phá bộ sưu tập video tuyệt đẹp về động vật hoang dã từ khắp nơi trên thế giới. Tìm hiểu về cuộc sống,
          hành vi và môi trường sống của chúng.
        </p>
      </div>

      {/* Thanh tìm kiếm */}
      <div className="mb-8">
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            type="text"
            placeholder="Tìm kiếm video..."
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

      {/* Hiển thị video đã chọn */}
      {selectedVideo && (
        <div className="mb-12 bg-black rounded-lg overflow-hidden">
          <div className="relative aspect-video">
            {/* Trong ứng dụng thực tế, đây sẽ là thẻ video thực */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={selectedVideo.thumbnail || "/placeholder.svg"}
                alt={selectedVideo.title}
                fill
                className="object-cover"
              />

              {/* Overlay điều khiển video */}
              <div className="absolute inset-0 bg-black/30 flex flex-col justify-between p-4">
                <div className="flex justify-between">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-white/20"
                    onClick={() => setSelectedVideo(null)}
                  >
                    <ChevronLeft size={24} />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                    <Maximize size={24} />
                  </Button>
                </div>

                <div>
                  <div className="flex justify-center mb-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white hover:bg-white/20"
                      onClick={() => navigateVideo("prev")}
                    >
                      <ChevronLeft size={24} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white hover:bg-white/20 mx-2"
                      onClick={togglePlay}
                    >
                      {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white hover:bg-white/20"
                      onClick={() => navigateVideo("next")}
                    >
                      <ChevronRight size={24} />
                    </Button>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-white text-sm">{formatTime(currentTime)}</span>
                    <input
                      type="range"
                      min="0"
                      max={duration}
                      value={currentTime}
                      onChange={handleTimeChange}
                      className="flex-grow h-1 bg-white/30 rounded-full appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
                    />
                    <span className="text-white text-sm">{formatTime(duration)}</span>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/20" onClick={toggleMute}>
                      {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Video thực (ẩn trong demo này) */}
            <video ref={videoRef} className="hidden" src={selectedVideo.videoUrl} muted={isMuted} />
          </div>

          <div className="bg-white p-6">
            <h2 className="text-2xl font-bold mb-2">{selectedVideo.title}</h2>
            <div className="flex justify-between items-center mb-4">
              <div className="text-gray-600 text-sm">
                {new Date(selectedVideo.uploadDate).toLocaleDateString("vi-VN")} •{" "}
                {selectedVideo.views.toLocaleString()} lượt xem
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Chia sẻ
                </Button>
                <Button variant="outline" size="sm">
                  Lưu
                </Button>
              </div>
            </div>
            <p className="text-gray-700 mb-4">{selectedVideo.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedVideo.tags.map((tag, index) => (
                <Badge key={index} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                <span className="font-semibold">{selectedVideo.creator.charAt(0)}</span>
              </div>
              <div>
                <div className="font-medium">{selectedVideo.creator}</div>
                <div className="text-sm text-gray-500">Nhà sản xuất</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Danh sách video */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredVideos.map((video) => (
          <Card
            key={video.id}
            className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
            onClick={() => handleVideoClick(video)}
          >
            <div className="relative aspect-video">
              <Image src={video.thumbnail || "/placeholder.svg"} alt={video.title} fill className="object-cover" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-primary-600 ml-1"></div>
                </div>
              </div>
              <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                {video.duration}
              </div>
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg line-clamp-2">{video.title}</CardTitle>
            </CardHeader>
            <CardContent className="pb-2">
              <p className="text-sm text-gray-500">{video.creator}</p>
              <p className="text-xs text-gray-400">
                {video.views.toLocaleString()} lượt xem • {new Date(video.uploadDate).toLocaleDateString("vi-VN")}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredVideos.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Search size={48} className="mx-auto" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Không tìm thấy kết quả</h3>
          <p className="text-gray-600">
            Không tìm thấy video nào phù hợp với tiêu chí tìm kiếm của bạn. Vui lòng thử lại với từ khóa khác.
          </p>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => {
              setSearchTerm("")
              setActiveCategory("all")
            }}
          >
            Xóa bộ lọc
          </Button>
        </div>
      )}
    </div>
  )
}

