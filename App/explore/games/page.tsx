"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"
import { Gamepad, Brain, Palette, PuzzleIcon as PuzzlePiece, Award, Timer, RotateCcw } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Confetti as ConfettiComponent } from "@/components/confetti"

// Dữ liệu mẫu cho các trò chơi
const gamesData = [
  {
    id: "animal-quiz",
    title: "Câu đố về động vật",
    description: "Kiểm tra kiến thức của bạn về động vật hoang dã với các câu hỏi thú vị.",
    image: "/placeholder.svg?height=300&width=500",
    category: "quiz",
    difficulty: "Trung bình",
    playTime: "5-10 phút",
    ageGroup: "8+",
    icon: <Brain className="h-6 w-6" />,
  },
  {
    id: "animal-memory",
    title: "Trò chơi ghi nhớ động vật",
    description: "Tìm các cặp thẻ động vật giống nhau để rèn luyện trí nhớ của bạn.",
    image: "/placeholder.svg?height=300&width=500",
    category: "memory",
    difficulty: "Dễ",
    playTime: "3-5 phút",
    ageGroup: "5+",
    icon: <Brain className="h-6 w-6" />,
  },
  {
    id: "animal-puzzle",
    title: "Ghép hình động vật",
    description: "Ghép các mảnh ghép để tạo thành hình ảnh hoàn chỉnh của động vật hoang dã.",
    image: "/placeholder.svg?height=300&width=500",
    category: "puzzle",
    difficulty: "Trung bình",
    playTime: "5-15 phút",
    ageGroup: "6+",
    icon: <PuzzlePiece className="h-6 w-6" />,
  },
  {
    id: "animal-coloring",
    title: "Tô màu động vật",
    description: "Thỏa sức sáng tạo với các bức tranh tô màu động vật hoang dã.",
    image: "/placeholder.svg?height=300&width=500",
    category: "coloring",
    difficulty: "Dễ",
    playTime: "10-20 phút",
    ageGroup: "3+",
    icon: <Palette className="h-6 w-6" />,
  },
  {
    id: "animal-word-search",
    title: "Tìm từ về động vật",
    description: "Tìm các từ liên quan đến động vật trong bảng chữ cái.",
    image: "/placeholder.svg?height=300&width=500",
    category: "word",
    difficulty: "Trung bình",
    playTime: "5-10 phút",
    ageGroup: "7+",
    icon: <Brain className="h-6 w-6" />,
  },
  {
    id: "animal-trivia",
    title: "Đố vui về động vật",
    description: "Trả lời các câu hỏi thú vị về động vật hoang dã từ khắp nơi trên thế giới.",
    image: "/placeholder.svg?height=300&width=500",
    category: "quiz",
    difficulty: "Khó",
    playTime: "10-15 phút",
    ageGroup: "10+",
    icon: <Brain className="h-6 w-6" />,
  },
]

// Dữ liệu mẫu cho câu đố
const quizQuestions = [
  {
    id: 1,
    question: "Loài động vật nào là động vật có vú lớn nhất trên cạn?",
    options: ["Voi châu Phi", "Hà mã", "Tê giác trắng", "Hươu cao cổ"],
    correctAnswer: "Voi châu Phi",
    explanation:
      "Voi châu Phi là động vật có vú lớn nhất sống trên cạn, với chiều cao có thể đạt tới 4m và cân nặng lên đến 7 tấn.",
  },
  {
    id: 2,
    question: "Loài hổ nào lớn nhất trong họ mèo?",
    options: ["Hổ Bengal", "Hổ Siberia", "Hổ Sumatra", "Hổ Đông Dương"],
    correctAnswer: "Hổ Siberia",
    explanation:
      "Hổ Siberia (còn gọi là hổ Amur) là loài hổ lớn nhất, với con đực có thể nặng tới 300kg và dài hơn 3m.",
  },
  {
    id: 3,
    question: "Loài động vật nào có khả năng chạy nhanh nhất trên cạn?",
    options: ["Báo săn (Cheetah)", "Linh dương đầu bò", "Ngựa vằn", "Sư tử"],
    correctAnswer: "Báo săn (Cheetah)",
    explanation:
      "Báo săn có thể đạt tốc độ lên đến 112 km/h trong thời gian ngắn, khiến nó trở thành động vật trên cạn nhanh nhất thế giới.",
  },
  {
    id: 4,
    question: "Loài chim nào không thể bay?",
    options: ["Đà điểu", "Đại bàng", "Chim hải âu", "Chim ruồi"],
    correctAnswer: "Đà điểu",
    explanation: "Đà điểu là loài chim không thể bay, nhưng chúng có thể chạy với tốc độ lên đến 70 km/h.",
  },
  {
    id: 5,
    question: "Động vật nào có tuổi thọ dài nhất?",
    options: ["Rùa Galapagos", "Voi châu Phi", "Cá voi xanh", "Cá mập Greenland"],
    correctAnswer: "Cá mập Greenland",
    explanation:
      "Cá mập Greenland có thể sống đến 400 năm, khiến nó trở thành loài động vật có xương sống có tuổi thọ dài nhất được biết đến.",
  },
  {
    id: 6,
    question: "Loài động vật nào có khả năng tái tạo các bộ phận cơ thể?",
    options: ["Sao biển", "Cá heo", "Khỉ đột", "Cá sấu"],
    correctAnswer: "Sao biển",
    explanation:
      "Sao biển có khả năng tái tạo các phần cơ thể bị mất, thậm chí có thể mọc thành một cá thể mới từ một cánh tay bị đứt.",
  },
  {
    id: 7,
    question: "Loài động vật nào có thể nhìn thấy bằng đôi chân của chúng?",
    options: ["Bướm", "Ong", "Rắn", "Cá ngựa"],
    correctAnswer: "Bướm",
    explanation: "Bướm có các tế bào cảm quang ở chân, cho phép chúng 'nếm' và 'nhìn' bằng chân của mình.",
  },
  {
    id: 8,
    question: "Loài động vật nào ngủ nhiều nhất trong một ngày?",
    options: ["Koala", "Gấu trúc", "Lười ba ngón", "Sư tử"],
    correctAnswer: "Koala",
    explanation: "Koala ngủ khoảng 20-22 giờ mỗi ngày, phần lớn là do chế độ ăn lá bạch đàn ít năng lượng của chúng.",
  },
  {
    id: 9,
    question: "Loài động vật nào có trái tim lớn nhất?",
    options: ["Voi châu Phi", "Cá voi xanh", "Hươu cao cổ", "Cá mập trắng"],
    correctAnswer: "Cá voi xanh",
    explanation: "Trái tim của cá voi xanh có thể nặng tới 600kg và to bằng một chiếc xe hơi nhỏ.",
  },
  {
    id: 10,
    question: "Loài động vật nào có thể thay đổi màu sắc nhanh nhất?",
    options: ["Tắc kè hoa", "Bạch tuộc", "Cá nóc", "Ếch phi tiêu độc"],
    correctAnswer: "Bạch tuộc",
    explanation:
      "Bạch tuộc có thể thay đổi màu sắc và kết cấu da trong vòng chưa đầy một giây nhờ các tế bào sắc tố đặc biệt.",
  },
]

// Dữ liệu cho trò chơi ghi nhớ
const memoryCards = [
  { id: 1, name: "tiger", image: "/placeholder.svg?height=150&width=150&text=Tiger" },
  { id: 2, name: "tiger", image: "/placeholder.svg?height=150&width=150&text=Tiger" },
  { id: 3, name: "elephant", image: "/placeholder.svg?height=150&width=150&text=Elephant" },
  { id: 4, name: "elephant", image: "/placeholder.svg?height=150&width=150&text=Elephant" },
  { id: 5, name: "lion", image: "/placeholder.svg?height=150&width=150&text=Lion" },
  { id: 6, name: "lion", image: "/placeholder.svg?height=150&width=150&text=Lion" },
  { id: 7, name: "panda", image: "/placeholder.svg?height=150&width=150&text=Panda" },
  { id: 8, name: "panda", image: "/placeholder.svg?height=150&width=150&text=Panda" },
  { id: 9, name: "giraffe", image: "/placeholder.svg?height=150&width=150&text=Giraffe" },
  { id: 10, name: "giraffe", image: "/placeholder.svg?height=150&width=150&text=Giraffe" },
  { id: 11, name: "zebra", image: "/placeholder.svg?height=150&width=150&text=Zebra" },
  { id: 12, name: "zebra", image: "/placeholder.svg?height=150&width=150&text=Zebra" },
  { id: 13, name: "rhino", image: "/placeholder.svg?height=150&width=150&text=Rhino" },
  { id: 14, name: "rhino", image: "/placeholder.svg?height=150&width=150&text=Rhino" },
  { id: 15, name: "dolphin", image: "/placeholder.svg?height=150&width=150&text=Dolphin" },
  { id: 16, name: "dolphin", image: "/placeholder.svg?height=150&width=150&text=Dolphin" },
]

// Dữ liệu cho trò chơi ghép hình
const puzzlePieces = [
  { id: 1, position: 1, image: "/placeholder.svg?height=100&width=100&text=1" },
  { id: 2, position: 2, image: "/placeholder.svg?height=100&width=100&text=2" },
  { id: 3, position: 3, image: "/placeholder.svg?height=100&width=100&text=3" },
  { id: 4, position: 4, image: "/placeholder.svg?height=100&width=100&text=4" },
  { id: 5, position: 5, image: "/placeholder.svg?height=100&width=100&text=5" },
  { id: 6, position: 6, image: "/placeholder.svg?height=100&width=100&text=6" },
  { id: 7, position: 7, image: "/placeholder.svg?height=100&width=100&text=7" },
  { id: 8, position: 8, image: "/placeholder.svg?height=100&width=100&text=8" },
  { id: 9, position: 9, image: "/placeholder.svg?height=100&width=100&text=9" },
]

// Component hiệu ứng pháo hoa
const Confetti = ({ active }) => {
  const canvasRef = useRef(null)
  const [particles, setParticles] = useState([])
  const animationRef = useRef(null)

  useEffect(() => {
    if (!active) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    const width = canvas.width
    const height = canvas.height

    // Tạo các hạt pháo hoa
    const createParticles = () => {
      const newParticles = []
      for (let i = 0; i < 100; i++) {
        newParticles.push({
          x: width / 2,
          y: height / 2,
          size: Math.random() * 5 + 1,
          color: `hsl(${Math.random() * 360}, 100%, 50%)`,
          speedX: Math.random() * 6 - 3,
          speedY: Math.random() * 6 - 3,
          life: 100,
        })
      }
      setParticles(newParticles)
    }

    createParticles()

    // Cập nhật và vẽ các hạt
    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      setParticles((prevParticles) =>
        prevParticles
          .map((p) => ({
            ...p,
            x: p.x + p.speedX,
            y: p.y + p.speedY,
            life: p.life - 1,
            size: p.size > 0.1 ? p.size - 0.1 : 0,
          }))
          .filter((p) => p.life > 0),
      )

      particles.forEach((p) => {
        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      })

      if (particles.length > 0) {
        animationRef.current = requestAnimationFrame(animate)
      }
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [active, particles])

  if (!active) return null

  return <canvas ref={canvasRef} width={400} height={400} className="absolute inset-0 pointer-events-none z-50" />
}

export default function GamesPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [filteredGames, setFilteredGames] = useState(gamesData)
  const [selectedGame, setSelectedGame] = useState(null)

  // Trạng thái cho trò chơi câu đố
  const [isQuizActive, setIsQuizActive] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false)
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  // Trạng thái cho trò chơi ghi nhớ
  const [isMemoryActive, setIsMemoryActive] = useState(false)
  const [shuffledCards, setShuffledCards] = useState([])
  const [flippedCards, setFlippedCards] = useState([])
  const [matchedCards, setMatchedCards] = useState([])
  const [moves, setMoves] = useState(0)
  const [memoryCompleted, setMemoryCompleted] = useState(false)
  const [memoryTimer, setMemoryTimer] = useState(0)
  const [memoryTimerActive, setMemoryTimerActive] = useState(false)

  // Trạng thái cho trò chơi ghép hình
  const [isPuzzleActive, setIsPuzzleActive] = useState(false)
  const [shuffledPieces, setShuffledPieces] = useState([])
  const [selectedPiece, setSelectedPiece] = useState(null)
  const [placedPieces, setPlacedPieces] = useState([])
  const [puzzleCompleted, setPuzzleCompleted] = useState(false)

  // Lọc trò chơi theo danh mục
  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredGames(gamesData)
    } else {
      setFilteredGames(gamesData.filter((game) => game.category === activeCategory))
    }
  }, [activeCategory])

  // Xử lý khi chọn trò chơi
  const handleGameSelect = (game) => {
    setSelectedGame(game)

    // Khởi tạo trò chơi câu đố nếu được chọn
    if (game.id === "animal-quiz") {
      setIsQuizActive(true)
      setCurrentQuestion(0)
      setScore(0)
      setSelectedAnswer(null)
      setIsAnswerSubmitted(false)
      setQuizCompleted(false)
    }

    // Khởi tạo trò chơi ghi nhớ nếu được chọn
    else if (game.id === "animal-memory") {
      setIsMemoryActive(true)
      initMemoryGame()
    }

    // Khởi tạo trò chơi ghép hình nếu được chọn
    else if (game.id === "animal-puzzle") {
      setIsPuzzleActive(true)
      initPuzzleGame()
    }
  }

  // Khởi tạo trò chơi ghi nhớ
  const initMemoryGame = () => {
    // Xáo trộn thẻ
    const shuffled = [...memoryCards].sort(() => Math.random() - 0.5)
    setShuffledCards(shuffled)
    setFlippedCards([])
    setMatchedCards([])
    setMoves(0)
    setMemoryCompleted(false)
    setMemoryTimer(0)
    setMemoryTimerActive(true)
  }

  // Khởi tạo trò chơi ghép hình
  const initPuzzleGame = () => {
    // Xáo trộn các mảnh ghép
    const shuffled = [...puzzlePieces].sort(() => Math.random() - 0.5)
    setShuffledPieces(shuffled)
    setSelectedPiece(null)
    setPlacedPieces([])
    setPuzzleCompleted(false)
  }

  // Xử lý khi chọn câu trả lời trong câu đố
  const handleAnswerSelect = (answer) => {
    if (!isAnswerSubmitted) {
      setSelectedAnswer(answer)
    }
  }

  // Xử lý khi gửi câu trả lời
  const handleAnswerSubmit = () => {
    if (selectedAnswer === null) return

    setIsAnswerSubmitted(true)

    if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }
  }

  // Xử lý khi chuyển sang câu hỏi tiếp theo
  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setIsAnswerSubmitted(false)
    } else {
      setQuizCompleted(true)
      setShowConfetti(true)
      setTimeout(() => setShowConfetti(false), 3000)
    }
  }

  // Xử lý khi bắt đầu lại câu đố
  const handleRestartQuiz = () => {
    setCurrentQuestion(0)
    setScore(0)
    setSelectedAnswer(null)
    setIsAnswerSubmitted(false)
    setQuizCompleted(false)
  }

  // Xử lý khi lật thẻ trong trò chơi ghi nhớ
  const handleCardFlip = (card) => {
    // Không cho phép lật thẻ đã khớp hoặc đã lật
    if (matchedCards.includes(card.id) || flippedCards.includes(card.id) || flippedCards.length >= 2) {
      return
    }

    // Lật thẻ
    const newFlippedCards = [...flippedCards, card.id]
    setFlippedCards(newFlippedCards)

    // Nếu đã lật 2 thẻ, kiểm tra xem chúng có khớp không
    if (newFlippedCards.length === 2) {
      setMoves(moves + 1)

      const [firstId, secondId] = newFlippedCards
      const firstCard = shuffledCards.find((card) => card.id === firstId)
      const secondCard = shuffledCards.find((card) => card.id === secondId)

      if (firstCard.name === secondCard.name) {
        // Nếu khớp, thêm vào danh sách thẻ đã khớp
        setMatchedCards([...matchedCards, firstId, secondId])
        setFlippedCards([])

        // Kiểm tra xem đã hoàn thành trò chơi chưa
        if (matchedCards.length + 2 === shuffledCards.length) {
          setMemoryCompleted(true)
          setMemoryTimerActive(false)
          setShowConfetti(true)
          setTimeout(() => setShowConfetti(false), 3000)
        }
      } else {
        // Nếu không khớp, đợi một chút rồi lật lại
        setTimeout(() => {
          setFlippedCards([])
        }, 1000)
      }
    }
  }

  // Xử lý khi chọn mảnh ghép trong trò chơi ghép hình
  const handlePieceSelect = (piece) => {
    // Không cho phép chọn mảnh đã đặt
    if (placedPieces.includes(piece.id)) {
      return
    }

    setSelectedPiece(piece)
  }

  // Xử lý khi đặt mảnh ghép vào vị trí
  const handlePiecePlacement = (position) => {
    if (!selectedPiece) return

    // Kiểm tra xem vị trí có đúng không
    if (selectedPiece.position === position) {
      // Đặt mảnh ghép vào vị trí
      setPlacedPieces([...placedPieces, selectedPiece.id])
      setSelectedPiece(null)

      // Kiểm tra xem đã hoàn thành trò chơi chưa
      if (placedPieces.length + 1 === puzzlePieces.length) {
        setPuzzleCompleted(true)
        setShowConfetti(true)
        setTimeout(() => setShowConfetti(false), 3000)
      }
    }
  }

  // Đếm thời gian cho trò chơi ghi nhớ
  useEffect(() => {
    let interval

    if (memoryTimerActive) {
      interval = setInterval(() => {
        setMemoryTimer((prevTimer) => prevTimer + 1)
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [memoryTimerActive])

  // Xử lý khi đóng trò chơi
  const handleCloseGame = () => {
    setSelectedGame(null)
    setIsQuizActive(false)
    setIsMemoryActive(false)
    setIsPuzzleActive(false)
    setMemoryTimerActive(false)
  }

  // Định dạng thời gian
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Trò chơi & Câu đố</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Học hỏi về động vật hoang dã qua các trò chơi thú vị và câu đố hấp dẫn. Phù hợp cho mọi lứa tuổi, từ trẻ em
          đến người lớn.
        </p>
      </div>

      {/* Tabs danh mục */}
      <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="mb-8">
        <TabsList className="w-full justify-start mb-6 bg-gray-100">
          <TabsTrigger value="all">Tất cả</TabsTrigger>
          <TabsTrigger value="quiz">Câu đố</TabsTrigger>
          <TabsTrigger value="puzzle">Ghép hình</TabsTrigger>
          <TabsTrigger value="memory">Ghi nhớ</TabsTrigger>
          <TabsTrigger value="coloring">Tô màu</TabsTrigger>
          <TabsTrigger value="word">Tìm từ</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Danh sách trò chơi */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredGames.map((game) => (
          <Card
            key={game.id}
            className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
            onClick={() => handleGameSelect(game)}
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={game.image || "/placeholder.svg"}
                alt={game.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <Button className="w-full">Chơi ngay</Button>
                </div>
              </div>
            </div>
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center">
                  {game.icon}
                </div>
                <CardTitle>{game.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{game.description}</p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-1">
                  <Award size={14} className="text-gray-500" />
                  <span className="text-gray-600">Độ khó: {game.difficulty}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Timer size={14} className="text-gray-500" />
                  <span className="text-gray-600">Thời gian: {game.playTime}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Badge variant="outline" className="bg-primary-50 text-primary-700">
                Độ tuổi: {game.ageGroup}
              </Badge>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Dialog hiển thị trò chơi */}
      <Dialog open={!!selectedGame} onOpenChange={(open) => !open && handleCloseGame()}>
        <DialogContent className="max-w-4xl w-[90vw]">
          <DialogHeader>
            <DialogTitle>{selectedGame?.title}</DialogTitle>
            <DialogDescription>{selectedGame?.description}</DialogDescription>
          </DialogHeader>

          {/* Nội dung trò chơi */}
          <div className="mt-4">
            {/* Trò chơi câu đố */}
            {isQuizActive && !quizCompleted && (
              <div className="bg-white rounded-lg">
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-500">
                      Câu hỏi {currentQuestion + 1}/{quizQuestions.length}
                    </span>
                    <span className="text-sm font-medium">Điểm: {score}</span>
                  </div>
                  <Progress value={((currentQuestion + 1) / quizQuestions.length) * 100} className="h-2" />
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4">{quizQuestions[currentQuestion].question}</h3>
                  <div className="space-y-3">
                    {quizQuestions[currentQuestion].options.map((option, index) => (
                      <div
                        key={index}
                        className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                          selectedAnswer === option
                            ? isAnswerSubmitted
                              ? option === quizQuestions[currentQuestion].correctAnswer
                                ? "bg-green-100 border-green-300"
                                : "bg-red-100 border-red-300"
                              : "bg-primary-100 border-primary-300"
                            : isAnswerSubmitted && option === quizQuestions[currentQuestion].correctAnswer
                              ? "bg-green-100 border-green-300"
                              : "hover:bg-gray-50"
                        }`}
                        onClick={() => handleAnswerSelect(option)}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                </div>

                {isAnswerSubmitted && (
                  <div
                    className={`p-4 rounded-lg mb-6 ${
                      selectedAnswer === quizQuestions[currentQuestion].correctAnswer
                        ? "bg-green-50 border border-green-200"
                        : "bg-red-50 border border-red-200"
                    }`}
                  >
                    <p className="font-medium mb-1">
                      {selectedAnswer === quizQuestions[currentQuestion].correctAnswer
                        ? "✓ Chính xác!"
                        : `✗ Không chính xác! Đáp án đúng là: ${quizQuestions[currentQuestion].correctAnswer}`}
                    </p>
                    <p className="text-gray-700">{quizQuestions[currentQuestion].explanation}</p>
                  </div>
                )}

                <div className="flex justify-between">
                  <Button variant="outline" onClick={handleCloseGame}>
                    Thoát
                  </Button>

                  {!isAnswerSubmitted ? (
                    <Button onClick={handleAnswerSubmit} disabled={selectedAnswer === null}>
                      Kiểm tra
                    </Button>
                  ) : (
                    <Button onClick={handleNextQuestion}>
                      {currentQuestion < quizQuestions.length - 1 ? "Câu tiếp theo" : "Xem kết quả"}
                    </Button>
                  )}
                </div>
              </div>
            )}

            {/* Kết quả câu đố */}
            {isQuizActive && quizCompleted && (
              <div className="text-center py-6 relative">
                {showConfetti && <ConfettiComponent active={showConfetti} />}
                <div className="w-20 h-20 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Chúc mừng!</h3>
                <p className="text-lg mb-4">Bạn đã hoàn thành câu đố với số điểm:</p>
                <div className="text-4xl font-bold text-primary-600 mb-6">
                  {score}/{quizQuestions.length}
                </div>
                <p className="text-gray-600 mb-8">
                  {score === quizQuestions.length
                    ? "Tuyệt vời! Bạn đã trả lời đúng tất cả các câu hỏi."
                    : score >= quizQuestions.length / 2
                      ? "Làm tốt lắm! Hãy thử lại để cải thiện điểm số của bạn."
                      : "Hãy thử lại để học hỏi thêm về động vật hoang dã nhé!"}
                </p>
                <div className="flex justify-center gap-4">
                  <Button variant="outline" onClick={handleCloseGame}>
                    Thoát
                  </Button>
                  <Button onClick={handleRestartQuiz}>Chơi lại</Button>
                </div>
              </div>
            )}

            {/* Trò chơi ghi nhớ */}
            {isMemoryActive && !memoryCompleted && (
              <div className="bg-white rounded-lg">
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-500">Số lượt: {moves}</span>
                    <span className="text-sm font-medium">Thời gian: {formatTime(memoryTimer)}</span>
                  </div>

                  <div className="grid grid-cols-4 gap-3">
                    {shuffledCards.map((card) => (
                      <div
                        key={card.id}
                        className={`aspect-square rounded-lg cursor-pointer transition-all duration-300 ${
                          flippedCards.includes(card.id) || matchedCards.includes(card.id)
                            ? "rotate-y-180"
                            : "bg-primary-100"
                        }`}
                        onClick={() => handleCardFlip(card)}
                      >
                        <div className="relative w-full h-full">
                          {/* Mặt sau thẻ */}
                          <div
                            className={`absolute inset-0 flex items-center justify-center bg-primary-100 rounded-lg border-2 border-primary-200 ${
                              flippedCards.includes(card.id) || matchedCards.includes(card.id)
                                ? "opacity-0"
                                : "opacity-100"
                            }`}
                          >
                            <span className="text-primary-700 text-2xl font-bold">?</span>
                          </div>

                          {/* Mặt trước thẻ */}
                          <div
                            className={`absolute inset-0 rounded-lg overflow-hidden ${
                              flippedCards.includes(card.id) || matchedCards.includes(card.id)
                                ? "opacity-100"
                                : "opacity-0"
                            } ${matchedCards.includes(card.id) ? "border-2 border-green-300" : ""}`}
                          >
                            <Image
                              src={card.image || "/placeholder.svg"}
                              alt={card.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button variant="outline" onClick={handleCloseGame}>
                    Thoát
                  </Button>
                  <Button variant="outline" onClick={initMemoryGame}>
                    <RotateCcw size={16} className="mr-2" />
                    Bắt đầu lại
                  </Button>
                </div>
              </div>
            )}

            {/* Kết quả trò chơi ghi nhớ */}
            {isMemoryActive && memoryCompleted && (
              <div className="text-center py-6 relative">
                {showConfetti && <ConfettiComponent active={showConfetti} />}
                <div className="w-20 h-20 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Chúc mừng!</h3>
                <p className="text-lg mb-4">Bạn đã hoàn thành trò chơi ghi nhớ!</p>
                <div className="flex justify-center gap-8 mb-6">
                  <div className="text-center">
                    <p className="text-gray-500 text-sm">Số lượt</p>
                    <p className="text-2xl font-bold text-primary-600">{moves}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-500 text-sm">Thời gian</p>
                    <p className="text-2xl font-bold text-primary-600">{formatTime(memoryTimer)}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-8">
                  Trí nhớ tuyệt vời! Bạn có thể thử lại để cải thiện thành tích của mình.
                </p>
                <div className="flex justify-center gap-4">
                  <Button variant="outline" onClick={handleCloseGame}>
                    Thoát
                  </Button>
                  <Button onClick={initMemoryGame}>Chơi lại</Button>
                </div>
              </div>
            )}

            {/* Trò chơi ghép hình */}
            {isPuzzleActive && !puzzleCompleted && (
              <div className="bg-white rounded-lg">
                <div className="mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Khu vực đặt mảnh ghép */}
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium mb-4">Bảng ghép hình</h4>
                      <div className="grid grid-cols-3 gap-2 aspect-square">
                        {Array.from({ length: 9 }).map((_, index) => {
                          const position = index + 1
                          const placedPiece = shuffledPieces.find(
                            (piece) => piece.position === position && placedPieces.includes(piece.id),
                          )

                          return (
                            <div
                              key={position}
                              className={`border-2 rounded-lg flex items-center justify-center ${
                                placedPiece ? "border-green-300" : "border-dashed border-gray-300"
                              }`}
                              onClick={() => handlePiecePlacement(position)}
                            >
                              {placedPiece ? (
                                <div className="relative w-full h-full">
                                  <Image
                                    src={placedPiece.image || "/placeholder.svg"}
                                    alt={`Piece ${placedPiece.position}`}
                                    fill
                                    className="object-cover rounded-md"
                                  />
                                </div>
                              ) : (
                                <span className="text-gray-400">{position}</span>
                              )}
                            </div>
                          )
                        })}
                      </div>
                    </div>

                    {/* Khu vực chọn mảnh ghép */}
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium mb-4">Các mảnh ghép</h4>
                      <div className="grid grid-cols-3 gap-2">
                        {shuffledPieces.map((piece) => (
                          <div
                            key={piece.id}
                            className={`relative aspect-square rounded-lg cursor-pointer transition-all ${
                              placedPieces.includes(piece.id)
                                ? "opacity-50 pointer-events-none"
                                : selectedPiece?.id === piece.id
                                  ? "ring-2 ring-primary-500"
                                  : "hover:ring-2 hover:ring-primary-300"
                            }`}
                            onClick={() => handlePieceSelect(piece)}
                          >
                            <Image
                              src={piece.image || "/placeholder.svg"}
                              alt={`Piece ${piece.position}`}
                              fill
                              className="object-cover rounded-md"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button variant="outline" onClick={handleCloseGame}>
                    Thoát
                  </Button>
                  <Button variant="outline" onClick={initPuzzleGame}>
                    <RotateCcw size={16} className="mr-2" />
                    Bắt đầu lại
                  </Button>
                </div>
              </div>
            )}

            {/* Kết quả trò chơi ghép hình */}
            {isPuzzleActive && puzzleCompleted && (
              <div className="text-center py-6 relative">
                {showConfetti && <ConfettiComponent active={showConfetti} />}
                <div className="w-20 h-20 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Chúc mừng!</h3>
                <p className="text-lg mb-4">Bạn đã hoàn thành trò chơi ghép hình!</p>
                <div className="max-w-xs mx-auto mb-6 relative aspect-square">
                  <Image
                    src="/placeholder.svg?height=300&width=300&text=Completed+Puzzle"
                    alt="Completed Puzzle"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <p className="text-gray-600 mb-8">
                  Tuyệt vời! Bạn có khả năng ghép hình rất tốt. Hãy thử với các hình khác nhé!
                </p>
                <div className="flex justify-center gap-4">
                  <Button variant="outline" onClick={handleCloseGame}>
                    Thoát
                  </Button>
                  <Button onClick={initPuzzleGame}>Chơi lại</Button>
                </div>
              </div>
            )}

            {/* Các trò chơi khác (giả lập) */}
            {selectedGame && !isQuizActive && !isMemoryActive && !isPuzzleActive && (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  {selectedGame.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">Trò chơi đang được phát triển</h3>
                <p className="text-gray-600 mb-6">
                  Chúng tôi đang nỗ lực phát triển trò chơi này. Vui lòng quay lại sau!
                </p>
                <Button onClick={handleCloseGame}>Đóng</Button>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Phần giới thiệu các trò chơi giáo dục */}
      <div className="bg-primary-50 rounded-xl p-8 md:p-12 mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Học hỏi qua trò chơi</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Trò chơi là một cách tuyệt vời để học hỏi về động vật hoang dã và môi trường sống của chúng. Chúng tôi thiết
            kế các trò chơi vừa giáo dục vừa giải trí, phù hợp cho mọi lứa tuổi.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center mb-4">
              <Brain size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Phát triển kiến thức</h3>
            <p className="text-gray-600">
              Các trò chơi của chúng tôi giúp người chơi học hỏi về đặc điểm, hành vi và môi trường sống của động vật
              hoang dã một cách thú vị.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center mb-4">
              <Gamepad size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Giải trí lành mạnh</h3>
            <p className="text-gray-600">
              Chơi game không chỉ là giải trí, mà còn là cách để thư giãn và phát triển các kỹ năng như tư duy logic,
              trí nhớ và sự tập trung.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center mb-4">
              <Award size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Nâng cao nhận thức</h3>
            <p className="text-gray-600">
              Thông qua trò chơi, chúng tôi muốn nâng cao nhận thức về tầm quan trọng của việc bảo tồn động vật hoang dã
              và môi trường tự nhiên.
            </p>
          </div>
        </div>
      </div>

      {/* Phần dành cho giáo viên và phụ huynh */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Dành cho giáo viên & phụ huynh</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Chúng tôi cung cấp các tài nguyên và hướng dẫn để giúp giáo viên và phụ huynh sử dụng trò chơi như một công
            cụ giáo dục hiệu quả.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Tài liệu hướng dẫn cho giáo viên</CardTitle>
              <CardDescription>
                Các tài liệu và kế hoạch bài giảng để tích hợp trò chơi vào chương trình học
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <div className="bg-primary-100 text-primary-700 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>Kế hoạch bài giảng theo chủ đề và cấp lớp</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary-100 text-primary-700 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>Hoạt động mở rộng và thảo luận</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary-100 text-primary-700 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>Tài liệu đánh giá và theo dõi tiến độ</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary-100 text-primary-700 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>Hướng dẫn tổ chức hoạt động nhóm</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/explore/education/teachers">Xem tài liệu</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Hướng dẫn cho phụ huynh</CardTitle>
              <CardDescription>Cách sử dụng trò chơi để hỗ trợ việc học tập của trẻ tại nhà</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <div className="bg-primary-100 text-primary-700 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>Hướng dẫn sử dụng trò chơi theo độ tuổi</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary-100 text-primary-700 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>Hoạt động bổ sung để thực hiện cùng con</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary-100 text-primary-700 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>Mẹo khuyến khích học tập qua trò chơi</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary-100 text-primary-700 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>Tài liệu bổ sung về động vật hoang dã</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/explore/education/parents">Xem hướng dẫn</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

