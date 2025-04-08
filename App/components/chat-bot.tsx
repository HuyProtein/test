"use client"

import { useState, useRef, useEffect } from "react"
import { MessageSquare, X, Minus, Send } from "lucide-react"

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState([
    { text: "Xin chào! Tôi là J97. Tôi rất vui được giúp đỡ bạn tìm hiểu về động vật hoang dã!", sender: "bot" },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const messagesEndRef = useRef(null)

  // Scroll to bottom whenever messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  const toggleChat = () => {
    if (isMinimized) {
      setIsMinimized(false)
    } else {
      setIsOpen(!isOpen)
    }
  }

  const minimizeChat = (e) => {
    e.stopPropagation()
    setIsMinimized(true)
  }

  const closeChat = (e) => {
    e.stopPropagation()
    setIsOpen(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim() === "" || isTyping) return

    // Add user message
    setMessages([...messages, { text: inputValue, sender: "user" }])
    setInputValue("")

    // Simulate bot typing
    setIsTyping(true)

    // Simulate bot response after a delay
    setTimeout(() => {
      const botResponse = getBotResponse(inputValue)
      setMessages((prev) => [...prev, { text: botResponse, sender: "bot" }])
      setIsTyping(false)
    }, 1500)
  }

  // Simple response logic - in a real app, this would be more sophisticated
  const getBotResponse = (message) => {
    const lowerCaseMessage = message.toLowerCase()

    if (lowerCaseMessage.includes("xin chào") || lowerCaseMessage.includes("hello")) {
      return "Xin chào! Tôi có thể giúp gì cho bạn về động vật hoang dã?"
    } else if (lowerCaseMessage.includes("hổ") || lowerCaseMessage.includes("tiger")) {
      return "Hổ là loài mèo lớn thuộc họ Mèo. Chúng là một trong những loài động vật có vú lớn nhất còn tồn tại trong họ Mèo, và được biết đến với các sọc màu cam và đen trên bộ lông màu vàng cam đến nâu đỏ. Hiện nay, hổ đang bị đe dọa nghiêm trọng do săn bắt trái phép và mất môi trường sống."
    } else if (lowerCaseMessage.includes("voi") || lowerCaseMessage.includes("elephant")) {
      return "Voi là động vật có vú lớn nhất sống trên cạn thuộc họ Voi. Có hai loài voi hiện đại: voi châu Phi và voi châu Á. Voi được biết đến với chiếc vòi dài, ngà và tai to. Chúng đang đối mặt với nguy cơ tuyệt chủng do săn trộm lấy ngà và mất môi trường sống."
    } else if (lowerCaseMessage.includes("bảo tồn") || lowerCaseMessage.includes("conservation")) {
      return "Bảo tồn động vật hoang dã bao gồm các nỗ lực bảo vệ các loài động vật và môi trường sống của chúng. Các biện pháp bảo tồn chính bao gồm thành lập các khu bảo tồn, luật pháp bảo vệ, giáo dục cộng đồng, và các chương trình nhân giống để bảo tồn."
    } else if (lowerCaseMessage.includes("môi trường sống") || lowerCaseMessage.includes("habitat")) {
      return "Môi trường sống là nơi sinh sống tự nhiên của động vật hoang dã, cung cấp thức ăn, nước uống, nơi trú ẩn và không gian sinh sản. Các môi trường sống chính bao gồm rừng, đồng cỏ, sa mạc, núi, đầm lầy, sông, hồ và đại dương. Bảo vệ môi trường sống là yếu tố quan trọng trong bảo tồn động vật hoang dã."
    } else {
      return "Cảm ơn câu hỏi của bạn. Tôi đang học hỏi thêm về chủ đề này. Bạn có thể hỏi tôi về các loài động vật cụ thể như hổ, voi, hoặc về bảo tồn và môi trường sống của động vật hoang dã."
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Button */}
      <button
        onClick={toggleChat}
        className="bg-primary-600 hover:bg-primary-700 text-white rounded-full p-4 shadow-lg flex items-center transition-colors"
      >
        <MessageSquare size={24} />
        <span className="ml-2 hidden md:inline">Trợ lý J97</span>
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 w-80 md:w-96 bg-white rounded-lg shadow-xl overflow-hidden flex flex-col transition-all duration-300 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"} ${isMinimized ? "h-14" : "h-[500px]"}`}
      >
        {/* Chat Header */}
        <div
          className="bg-primary-600 text-white p-3 flex justify-between items-center cursor-pointer"
          onClick={() => isMinimized && setIsMinimized(false)}
        >
          <div className="flex items-center">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-2">
              <span className="text-primary-600 font-bold">J</span>
            </div>
            <span className="font-medium">Trợ lý J97</span>
          </div>
          <div className="flex items-center">
            <button onClick={minimizeChat} className="p-1 hover:bg-primary-500 rounded-full mr-1" aria-label="Thu nhỏ">
              <Minus size={18} />
            </button>
            <button onClick={closeChat} className="p-1 hover:bg-primary-500 rounded-full" aria-label="Đóng">
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
          {messages.map((message, index) => (
            <div key={index} className={`mb-4 flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.sender === "user"
                    ? "bg-primary-600 text-white rounded-br-none"
                    : "bg-white shadow-md rounded-bl-none"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start mb-4">
              <div className="bg-white shadow-md rounded-lg rounded-bl-none p-3 flex space-x-2">
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0ms" }}
                ></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "200ms" }}
                ></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "400ms" }}
                ></div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Chat Input */}
        <form onSubmit={handleSubmit} className="border-t p-3 flex items-center">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Nhập câu hỏi của bạn..."
            className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
            disabled={isTyping}
          />
          <button
            type="submit"
            className={`ml-2 bg-primary-600 text-white rounded-full p-2 ${
              inputValue.trim() === "" || isTyping ? "opacity-50 cursor-not-allowed" : "hover:bg-primary-700"
            }`}
            disabled={inputValue.trim() === "" || isTyping}
          >
            <Send size={20} />
          </button>
        </form>
      </div>
    </div>
  )
}

