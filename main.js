document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const mobileMenuButton = document.getElementById("mobile-menu-button")
  const mobileMenu = document.getElementById("mobile-menu")

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("open")

      // Change menu icon
      const menuIcon = mobileMenuButton.querySelector(".menu-icon")
      if (mobileMenu.classList.contains("open")) {
        menuIcon.classList.add("open")
      } else {
        menuIcon.classList.remove("open")
      }
    })
  }

  // Tab Functionality
  const tabs = document.querySelectorAll(".tab")

  if (tabs.length > 0) {
    tabs.forEach((tab) => {
      tab.addEventListener("click", function () {
        // Remove active class from all tabs
        tabs.forEach((t) => t.classList.remove("active"))

        // Add active class to clicked tab
        this.classList.add("active")

        // Hide all tab panes
        const tabPanes = document.querySelectorAll(".tab-pane")
        tabPanes.forEach((pane) => pane.classList.remove("active"))

        // Show the corresponding tab pane
        const tabId = this.getAttribute("data-tab")
        const activePane = document.getElementById(tabId)
        if (activePane) {
          activePane.classList.add("active")
        }
      })
    })
  }

  // Back to Top Button
  const backToTopButton = document.getElementById("back-to-top")

  if (backToTopButton) {
    // Show/hide button based on scroll position
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.add("visible")
      } else {
        backToTopButton.classList.remove("visible")
      }
    })

    // Scroll to top when button is clicked
    backToTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  }

  // Chat Bot Functionality
  const chatButton = document.getElementById("chat-button")
  const chatWindow = document.getElementById("chat-window")
  const minimizeChat = document.getElementById("minimize-chat")
  const closeChat = document.getElementById("close-chat")
  const userInput = document.getElementById("user-input")
  const sendMessage = document.getElementById("send-message")
  const chatMessages = document.getElementById("chat-messages")

  if (chatButton && chatWindow) {
    // Toggle chat window
    chatButton.addEventListener("click", () => {
      if (chatWindow.classList.contains("minimized")) {
        chatWindow.classList.remove("minimized")
      } else {
        chatWindow.classList.toggle("open")
      }
    })

    // Minimize chat window
    if (minimizeChat) {
      minimizeChat.addEventListener("click", (e) => {
        e.stopPropagation()
        chatWindow.classList.add("minimized")
      })
    }

    // Close chat window
    if (closeChat) {
      closeChat.addEventListener("click", (e) => {
        e.stopPropagation()
        chatWindow.classList.remove("open")
      })
    }

    // Send message
    if (sendMessage && userInput && chatMessages) {
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

      function sendUserMessage() {
        const message = userInput.value.trim()
        if (message === "") return

        // Add user message to chat
        addMessage(message, "user")

        // Clear input
        userInput.value = ""

        // Simulate bot typing
        setTimeout(() => {
          // Get bot response
          const botResponse = getBotResponse(message)

          // Add bot response to chat
          addMessage(botResponse, "bot")

          // Scroll to bottom
          chatMessages.scrollTop = chatMessages.scrollHeight
        }, 1000)

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

      function getBotResponse(message) {
        // Simple response logic
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
    }
  }

  // Set current year in footer
  const currentYearElement = document.getElementById("current-year")
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear()
  }
})

