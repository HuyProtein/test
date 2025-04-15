// Wildlife Chatbot - Main functionality
document.addEventListener("DOMContentLoaded", () => {
  // Create chat elements if they don't exist
  if (!document.getElementById("wildlife-chat")) {
    createChatElements()
  }

  // Chat elements
  const chatButton = document.getElementById("chat-button")
  const chatWindow = document.getElementById("chat-window")
  const minimizeChat = document.getElementById("minimize-chat")
  const closeChat = document.getElementById("close-chat")
  const userInput = document.getElementById("user-input")
  const sendMessage = document.getElementById("send-message")
  const chatMessages = document.getElementById("chat-messages")

  // Toggle chat window
  chatButton.addEventListener("click", () => {
    if (chatWindow.classList.contains("minimized")) {
      chatWindow.classList.remove("minimized")
    } else {
      chatWindow.classList.toggle("open")
    }
  })

  // Minimize chat window
  minimizeChat.addEventListener("click", (e) => {
    e.stopPropagation()
    chatWindow.classList.add("minimized")
  })

  // Close chat window
  closeChat.addEventListener("click", (e) => {
    e.stopPropagation()
    chatWindow.classList.remove("open")
  })

  // Send message on button click
  sendMessage.addEventListener("click", () => {
    sendUserMessage()
  })

  // Send message on Enter key
  userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      sendUserMessage()
    }
  })

  // Add initial welcome message
  setTimeout(() => {
    addMessage(
      "Xin chào! Tôi là WildBot, trợ lý ảo về động vật hoang dã. Bạn có thể hỏi tôi về bất kỳ loài động vật hoang dã nào!",
      "bot",
    )
  }, 1000)

  function sendUserMessage() {
    const message = userInput.value.trim()
    if (message === "") return

    // Add user message to chat
    addMessage(message, "user")

    // Clear input
    userInput.value = ""

    // Show typing indicator
    showTypingIndicator()

    // Simulate bot response after a short delay
    setTimeout(
      () => {
        // Hide typing indicator
        hideTypingIndicator()

        // Get bot response
        const botResponse = getBotResponse(message)

        // Add bot response to chat
        addMessage(botResponse, "bot")

        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight
      },
      1000 + Math.random() * 1000,
    ) // Random delay between 1-2 seconds

    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight
  }

  function addMessage(text, sender) {
    const messageDiv = document.createElement("div")
    messageDiv.className = `message ${sender}-message`

    const messageContent = document.createElement("div")
    messageContent.className = "message-content"
    messageContent.textContent = text

    messageDiv.appendChild(messageContent)
    chatMessages.appendChild(messageDiv)
  }

  function showTypingIndicator() {
    const typingDiv = document.createElement("div")
    typingDiv.className = "message bot-message typing-indicator"
    typingDiv.id = "typing-indicator"

    const typingContent = document.createElement("div")
    typingContent.className = "message-content"

    const dots = document.createElement("div")
    dots.className = "typing-dots"
    for (let i = 0; i < 3; i++) {
      const dot = document.createElement("span")
      dot.className = "dot"
      dots.appendChild(dot)
    }

    typingContent.appendChild(dots)
    typingDiv.appendChild(typingContent)
    chatMessages.appendChild(typingDiv)

    chatMessages.scrollTop = chatMessages.scrollHeight
  }

  function hideTypingIndicator() {
    const typingIndicator = document.getElementById("typing-indicator")
    if (typingIndicator) {
      typingIndicator.remove()
    }
  }

  function getBotResponse(message) {
    // Convert message to lowercase for easier matching
    const lowerCaseMessage = message.toLowerCase()

    // Animal information database
    const animalInfo = {
      hổ: "Hổ là loài mèo lớn thuộc họ Mèo. Chúng là một trong những loài động vật có vú lớn nhất còn tồn tại trong họ Mèo, và được biết đến với các sọc màu cam và đen trên bộ lông màu vàng cam đến nâu đỏ. Hiện nay, hổ đang bị đe dọa nghiêm trọng do săn bắt trái phép và mất môi trường sống.",
      voi: "Voi là động vật có vú lớn nhất sống trên cạn thuộc họ Voi. Có hai loài voi hiện đại: voi châu Phi và voi châu Á. Voi được biết đến với chiếc vòi dài, ngà và tai to. Chúng đang đối mặt với nguy cơ tuyệt chủng do săn trộm lấy ngà và mất môi trường sống.",
      "sư tử":
        'Sư tử là loài mèo lớn thuộc họ Mèo và là một trong những loài thú săn mồi lớn nhất trên cạn. Sư tử đực có bờm lớn đặc trưng. Chúng sống theo đàn, chủ yếu ở châu Phi và một phần nhỏ ở Ấn Độ. Sư tử được biết đến là "vua của muôn loài".',
      gấu: "Gấu là động vật có vú thuộc họ Gấu, với 8 loài hiện đại. Chúng có thân hình to lớn, chân ngắn, đuôi ngắn, tai tròn và mõm dài. Gấu là động vật ăn tạp, sống ở nhiều môi trường khác nhau từ rừng nhiệt đới đến vùng Bắc Cực.",
      "cá voi":
        "Cá voi là động vật có vú sống dưới nước thuộc bộ Cá voi. Chúng là những sinh vật lớn nhất trên Trái Đất, với cá voi xanh có thể dài tới 30m và nặng 180 tấn. Cá voi có hệ thống định vị bằng âm thanh phức tạp và nhiều loài có khả năng giao tiếp phức tạp.",
      khỉ: "Khỉ là động vật linh trưởng không phải người thuộc nhóm Simiiformes. Chúng có kích thước và hình dáng đa dạng, sống chủ yếu ở rừng nhiệt đới. Khỉ có trí thông minh cao, có thể sử dụng công cụ và có cấu trúc xã hội phức tạp.",
      "cá sấu":
        "Cá sấu là bò sát lớn sống ở vùng nhiệt đới thuộc họ Cá sấu. Chúng là những sinh vật săn mồi đỉnh cao, với hàm răng mạnh mẽ và khả năng bơi nhanh. Cá sấu đã tồn tại từ thời khủng long và có thể sống rất lâu, một số loài sống tới 70-100 năm.",
      rắn: "Rắn là bò sát không chân thuộc phân bộ Serpentes. Có hơn 3000 loài rắn trên thế giới, sống ở hầu hết các môi trường trừ vùng cực. Một số loài rắn có nọc độc nguy hiểm, trong khi nhiều loài khác không độc và bắt mồi bằng cách siết chặt.",
      chim: "Chim là động vật có xương sống, đặc trưng bởi lông vũ, mỏ không răng, và khả năng đẻ trứng có vỏ cứng. Hầu hết các loài chim có khả năng bay. Hiện có khoảng 10,000 loài chim được biết đến, phân bố ở hầu hết các môi trường sống trên Trái Đất.",
      cá: "Cá là nhóm động vật có xương sống sống dưới nước, đặc trưng bởi mang để hô hấp, vây để di chuyển, và thường có vảy bao phủ cơ thể. Hiện có khoảng 33,000 loài cá được biết đến, phân bố ở hầu hết các môi trường nước trên Trái Đất.",
    }

    // Check for greetings
    if (
      lowerCaseMessage.includes("xin chào") ||
      lowerCaseMessage.includes("hello") ||
      lowerCaseMessage.includes("hi") ||
      lowerCaseMessage.includes("chào")
    ) {
      return "Xin chào! Tôi có thể giúp gì cho bạn về động vật hoang dã?"
    }

    // Check for animal information requests
    for (const animal in animalInfo) {
      if (lowerCaseMessage.includes(animal)) {
        return animalInfo[animal]
      }
    }

    // Check for conservation questions
    if (lowerCaseMessage.includes("bảo tồn") || lowerCaseMessage.includes("conservation")) {
      return "Bảo tồn động vật hoang dã bao gồm các nỗ lực bảo vệ các loài động vật và môi trường sống của chúng. Các biện pháp bảo tồn chính bao gồm thành lập các khu bảo tồn, luật pháp bảo vệ, giáo dục cộng đồng, và các chương trình nhân giống để bảo tồn."
    }

    // Check for habitat questions
    if (lowerCaseMessage.includes("môi trường sống") || lowerCaseMessage.includes("habitat")) {
      return "Môi trường sống là nơi sinh sống tự nhiên của động vật hoang dã, cung cấp thức ăn, nước uống, nơi trú ẩn và không gian sinh sản. Các môi trường sống chính bao gồm rừng, đồng cỏ, sa mạc, núi, đầm lầy, sông, hồ và đại dương. Bảo vệ môi trường sống là yếu tố quan trọng trong bảo tồn động vật hoang dã."
    }

    // Check for endangered species questions
    if (lowerCaseMessage.includes("nguy cấp") || lowerCaseMessage.includes("endangered")) {
      return "Loài nguy cấp là những loài động vật hoặc thực vật đang đối mặt với nguy cơ tuyệt chủng cao. Theo IUCN, hiện có hơn 41,000 loài đang bị đe dọa, chiếm 28% tổng số loài được đánh giá. Nguyên nhân chính dẫn đến tình trạng này là mất môi trường sống, săn bắt trái phép, ô nhiễm và biến đổi khí hậu."
    }

    // Default response
    return "Cảm ơn câu hỏi của bạn. Tôi đang học hỏi thêm về chủ đề này. Bạn có thể hỏi tôi về các loài động vật cụ thể như hổ, voi, sư tử, gấu, cá voi, khỉ, cá sấu, rắn, chim, cá, hoặc về bảo tồn và môi trường sống của động vật hoang dã."
  }

  // Function to create chat elements
  function createChatElements() {
    // Create chat button
    const chatButton = document.createElement("div")
    chatButton.id = "chat-button"
    chatButton.className = "chat-button"
    chatButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            <span class="chat-label">Hỏi về động vật</span>
        `

    // Create chat window
    const chatWindow = document.createElement("div")
    chatWindow.id = "chat-window"
    chatWindow.className = "chat-window"
    chatWindow.innerHTML = `
            <div class="chat-header">
                <div class="chat-avatar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 2l1.76 5.42h5.7l-4.61 3.36 1.76 5.42-4.61-3.36-4.61 3.36 1.76-5.42L4.54 7.42h5.7z"></path>
                    </svg>
                </div>
                <div class="chat-title">WildBot - Trợ lý động vật hoang dã</div>
                <div class="chat-actions">
                    <button id="minimize-chat" class="minimize-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                    </button>
                    <button id="close-chat" class="close-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
            </div>
            <div id="chat-messages" class="chat-messages"></div>
            <div class="chat-input">
                <input type="text" id="user-input" class="message-input" placeholder="Hỏi về động vật hoang dã...">
                <button id="send-message" class="send-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                </button>
            </div>
        `

    // Create chat container
    const chatContainer = document.createElement("div")
    chatContainer.id = "wildlife-chat"
    chatContainer.className = "chat-bot"
    chatContainer.appendChild(chatButton)
    chatContainer.appendChild(chatWindow)

    // Add to body
    document.body.appendChild(chatContainer)
  }
})
