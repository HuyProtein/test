// Dữ liệu mẫu về các loài động vật
// Trong ứng dụng thực tế, dữ liệu này sẽ được lấy từ API hoặc cơ sở dữ liệu

export interface Animal {
  id: number
  name: string
  scientificName: string
  category: string
  status: string
  description: string
  keyFeatures: string
  image: string
  heroImage?: string
  habitat: string
  region: string
  lifespan: string
  size: string
  weight: string
  physicalCharacteristics?: string
  senses?: string
  adaptations?: string
  habitatDescription?: string
  geographicDistribution?: string
  ecologicalRole?: string
  habitatThreats?: string
  behaviorDescription?: string
  socialBehavior?: string
  feedingBehavior?: string
  reproductiveBehavior?: string
  communication?: string
  conservationStatus?: string
  threats?: string[]
  conservationEfforts?: string
}

const animals: Animal[] = [
  {
    id: 1,
    name: "Hổ Đông Dương",
    scientificName: "Panthera tigris corbetti",
    category: "Động vật có vú",
    status: "Nguy cấp",
    description:
      "Hổ Đông Dương là một trong những loài hổ lớn nhất, sống ở các khu rừng Đông Nam Á. Hiện nay, loài này đang bị đe dọa nghiêm trọng do săn bắt trái phép và mất môi trường sống.",
    keyFeatures:
      "Hổ Đông Dương có bộ lông màu vàng cam với các sọc đen đặc trưng. Mỗi cá thể có mẫu sọc riêng biệt, giống như dấu vân tay của con người. Chúng là loài săn mồi đỉnh cao, với cơ thể khỏe mạnh, răng nanh sắc nhọn và móng vuốt mạnh mẽ.",
    image: "/placeholder.svg?height=300&width=400",
    heroImage: "/placeholder.svg?height=800&width=1600",
    habitat: "Rừng nhiệt đới",
    region: "Đông Nam Á",
    lifespan: "10-15 năm trong tự nhiên",
    size: "Dài 2.5-2.9m",
    weight: "180-250kg",
    physicalCharacteristics:
      "Hổ Đông Dương có cơ thể mạnh mẽ với bốn chân khỏe, đuôi dài và đầu to. Bộ lông màu vàng cam với các sọc đen giúp chúng ngụy trang trong môi trường rừng. Răng nanh dài và sắc nhọn, cùng với móng vuốt có thể co lại được, là vũ khí săn mồi hiệu quả.",
    socialBehavior:
      "Hổ Đông Dương là loài sống đơn độc, chỉ gặp nhau trong mùa giao phối. Mỗi cá thể có lãnh thổ riêng, được đánh dấu bằng mùi, vết cào và nước tiểu. Con đực thường có lãnh thổ lớn hơn, có thể bao gồm lãnh thổ của nhiều con cái.",
    threats: [
      "Săn bắt trái phép để lấy da, xương và các bộ phận khác cho y học cổ truyền",
      "Mất môi trường sống do phá rừng và phát triển nông nghiệp",
      "Giảm số lượng con mồi tự nhiên",
      "Xung đột với con người khi hổ tấn công gia súc hoặc người",
      "Buôn bán trái phép các bộ phận của hổ",
    ],
  },
  {
    id: 2,
    name: "Voi Châu Á",
    scientificName: "Elephas maximus",
    category: "Động vật có vú",
    status: "Nguy cấp",
    description:
      "Voi Châu Á là loài voi nhỏ hơn so với voi Châu Phi, có đặc điểm nhận dạng là tai nhỏ và lưng cong. Chúng đóng vai trò quan trọng trong hệ sinh thái rừng và văn hóa nhiều quốc gia Châu Á.",
    keyFeatures:
      "Voi Châu Á có đặc điểm nổi bật là vòi dài, tai nhỏ hơn so với voi Châu Phi, và lưng cong. Chỉ có con đực mới có ngà, và không phải con đực nào cũng có. Chúng là loài động vật có vú lớn nhất sống trên cạn ở Châu Á.",
    image: "/placeholder.svg?height=300&width=400",
    heroImage: "/placeholder.svg?height=800&width=1600",
    habitat: "Rừng nhiệt đới, đồng cỏ",
    region: "Nam và Đông Nam Á",
    lifespan: "60-70 năm",
    size: "Cao 2.5-3m tại vai",
    weight: "2500-5000kg",
  },
  {
    id: 3,
    name: "Đại bàng đầu trắng",
    scientificName: "Haliaeetus leucocephalus",
    category: "Chim",
    status: "Ít lo ngại",
    description:
      "Đại bàng đầu trắng là biểu tượng quốc gia của Hoa Kỳ. Loài chim săn mồi này có đầu và đuôi màu trắng đặc trưng, sống gần các vùng nước và chủ yếu ăn cá.",
    keyFeatures:
      "Đại bàng đầu trắng có đầu và đuôi màu trắng tương phản với cơ thể và cánh màu nâu sẫm. Mỏ, chân và mắt có màu vàng. Chúng có tầm nhìn cực kỳ sắc bén, giúp phát hiện con mồi từ xa.",
    image: "/placeholder.svg?height=300&width=400",
    heroImage: "/placeholder.svg?height=800&width=1600",
    habitat: "Vùng ven biển, hồ và sông",
    region: "Bắc Mỹ",
    lifespan: "20-30 năm trong tự nhiên",
    size: "Sải cánh 1.8-2.3m",
    weight: "3-6.3kg",
  },
  {
    id: 4,
    name: "Cá heo mũi chai",
    scientificName: "Tursiops truncatus",
    category: "Động vật có vú",
    status: "Ít lo ngại",
    description:
      "Cá heo mũi chai là một trong những loài cá heo thông minh nhất, nổi tiếng với khả năng học hỏi, giao tiếp phức tạp và tính cách thân thiện. Chúng sống theo đàn và có thể được tìm thấy ở hầu hết các đại dương trên thế giới.",
    keyFeatures:
      "Cá heo mũi chai có cơ thể thon dài màu xám, với phần bụng sáng màu hơn. Đặc điểm nổi bật là chiếc mũi ngắn giống như cái chai, từ đó có tên gọi. Chúng có bộ não lớn và phức tạp, thể hiện trí thông minh cao.",
    image: "/placeholder.svg?height=300&width=400",
    heroImage: "/placeholder.svg?height=800&width=1600",
    habitat: "Đại dương, vùng biển ven bờ",
    region: "Toàn cầu",
    lifespan: "40-60 năm",
    size: "Dài 2-4m",
    weight: "150-650kg",
  },
  {
    id: 5,
    name: "Tê giác Java",
    scientificName: "Rhinoceros sondaicus",
    category: "Động vật có vú",
    status: "Cực kỳ nguy cấp",
    description:
      "Tê giác Java là một trong những loài động vật có vú quý hiếm nhất thế giới, với chỉ khoảng 74 cá thể còn sống trong tự nhiên. Chúng có một sừng và da nhăn nheo đặc trưng.",
    keyFeatures:
      "Tê giác Java có một sừng dài khoảng 25cm, da xám với nếp gấp tạo thành mẫu giống như áo giáp. Chúng là loài tê giác nhỏ nhất trong số các loài tê giác hiện còn tồn tại.",
    image: "/placeholder.svg?height=300&width=400",
    heroImage: "/placeholder.svg?height=800&width=1600",
    habitat: "Rừng nhiệt đới ẩm",
    region: "Indonesia",
    lifespan: "30-45 năm",
    size: "Dài 3.1-3.2m",
    weight: "900-2300kg",
  },
  {
    id: 6,
    name: "Gấu trúc lớn",
    scientificName: "Ailuropoda melanoleuca",
    category: "Động vật có vú",
    status: "Sắp nguy cấp",
    description:
      "Gấu trúc lớn là biểu tượng toàn cầu của công tác bảo tồn động vật hoang dã. Loài này chủ yếu ăn tre và sống ở các khu rừng núi cao tại Trung Quốc.",
    keyFeatures:
      "Gấu trúc có bộ lông đen trắng đặc trưng, với đôi tai tròn, mũi đen và các mảng đen quanh mắt. Chúng có xương cổ tay mở rộng hoạt động như ngón tay cái, giúp cầm nắm tre dễ dàng.",
    image: "/placeholder.svg?height=300&width=400",
    heroImage: "/placeholder.svg?height=800&width=1600",
    habitat: "Rừng tre vùng núi cao",
    region: "Trung Quốc",
    lifespan: "20-30 năm trong tự nhiên",
    size: "Dài 1.2-1.8m",
    weight: "100-150kg",
  },
]

export function getAnimalData(id: number): Animal | undefined {
  return animals.find((animal) => animal.id === id)
}

export function getRelatedAnimals(currentId: number, limit = 4): Animal[] {
  return animals
    .filter((animal) => animal.id !== currentId)
    .sort(() => 0.5 - Math.random())
    .slice(0, limit)
}

export function getAllAnimals(): Animal[] {
  return animals
}

