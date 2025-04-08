import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

export default function AnimalsPage() {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Các loài động vật hoang dã</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Khám phá sự đa dạng phong phú của thế giới động vật hoang dã, từ những loài quen thuộc đến những loài quý hiếm
          đang bị đe dọa. Tìm hiểu về đặc điểm, môi trường sống và tình trạng bảo tồn của chúng.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="w-full md:w-1/4 bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Bộ lọc</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-2">Phân loại</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="checkbox" id="mammals" className="mr-2" />
                  <label htmlFor="mammals">Động vật có vú</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="birds" className="mr-2" />
                  <label htmlFor="birds">Chim</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="reptiles" className="mr-2" />
                  <label htmlFor="reptiles">Bò sát</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="amphibians" className="mr-2" />
                  <label htmlFor="amphibians">Lưỡng cư</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="fish" className="mr-2" />
                  <label htmlFor="fish">Cá</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="insects" className="mr-2" />
                  <label htmlFor="insects">Côn trùng</label>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Tình trạng bảo tồn</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="checkbox" id="critically-endangered" className="mr-2" />
                  <label htmlFor="critically-endangered">Cực kỳ nguy cấp</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="endangered" className="mr-2" />
                  <label htmlFor="endangered">Nguy cấp</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="vulnerable" className="mr-2" />
                  <label htmlFor="vulnerable">Sắp nguy cấp</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="near-threatened" className="mr-2" />
                  <label htmlFor="near-threatened">Sắp bị đe dọa</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="least-concern" className="mr-2" />
                  <label htmlFor="least-concern">Ít lo ngại</label>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Khu vực</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="checkbox" id="asia" className="mr-2" />
                  <label htmlFor="asia">Châu Á</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="africa" className="mr-2" />
                  <label htmlFor="africa">Châu Phi</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="europe" className="mr-2" />
                  <label htmlFor="europe">Châu Âu</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="north-america" className="mr-2" />
                  <label htmlFor="north-america">Bắc Mỹ</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="south-america" className="mr-2" />
                  <label htmlFor="south-america">Nam Mỹ</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="australia" className="mr-2" />
                  <label htmlFor="australia">Châu Đại Dương</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="antarctica" className="mr-2" />
                  <label htmlFor="antarctica">Nam Cực</label>
                </div>
              </div>
            </div>

            <Button className="w-full">Áp dụng bộ lọc</Button>
          </div>
        </div>

        <div className="w-full md:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 9 }).map((_, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=300&width=400&text=Animal ${index + 1}`}
                    alt={`Động vật ${index + 1}`}
                    fill
                    className="object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Tên động vật {index + 1}</CardTitle>
                      <CardDescription className="italic">Tên khoa học</CardDescription>
                    </div>
                    <Badge
                      variant={
                        index % 5 === 0
                          ? "destructive"
                          : index % 5 === 1
                            ? "destructive"
                            : index % 5 === 2
                              ? "default"
                              : "outline"
                      }
                    >
                      {index % 5 === 0
                        ? "Cực kỳ nguy cấp"
                        : index % 5 === 1
                          ? "Nguy cấp"
                          : index % 5 === 2
                            ? "Sắp nguy cấp"
                            : "Ít lo ngại"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    Mô tả ngắn về loài động vật này, bao gồm đặc điểm nhận dạng, tập tính và môi trường sống tự nhiên
                    của chúng.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="outline" className="bg-primary-50">
                      {["Rừng nhiệt đới", "Đồng cỏ", "Đại dương", "Sa mạc", "Núi cao"][index % 5]}
                    </Badge>
                    <Badge variant="outline" className="bg-primary-50">
                      {["Châu Á", "Châu Phi", "Châu Âu", "Bắc Mỹ", "Nam Mỹ"][index % 5]}
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={`/animals/${index + 1}`}>Tìm hiểu thêm</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" disabled>
                <span className="sr-only">Trang trước</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </Button>
              <Button variant="outline" size="sm" className="bg-primary-50">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <span>...</span>
              <Button variant="outline" size="sm">
                10
              </Button>
              <Button variant="outline" size="icon">
                <span className="sr-only">Trang sau</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

