import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getRelatedAnimals } from "@/lib/data"

interface RelatedAnimalsProps {
  currentAnimalId: number
  limit?: number
}

export default function RelatedAnimals({ currentAnimalId, limit = 4 }: RelatedAnimalsProps) {
  const relatedAnimals = getRelatedAnimals(currentAnimalId, limit)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {relatedAnimals.map((animal) => (
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
                <CardTitle className="text-lg">{animal.name}</CardTitle>
                <p className="text-sm italic text-gray-500">{animal.scientificName}</p>
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
                className="text-xs"
              >
                {animal.status}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 line-clamp-2">{animal.description}</p>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href={`/animals/${animal.id}`}>Tìm hiểu thêm</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

