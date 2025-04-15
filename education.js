document.addEventListener("DOMContentLoaded", () => {
  // Tab functionality for education resources
  const tabButtons = document.querySelectorAll(".tab-button")
  const tabPanes = document.querySelectorAll(".tab-pane")

  if (tabButtons.length > 0 && tabPanes.length > 0) {
    tabButtons.forEach((button) => {
      button.addEventListener("click", function () {
        // Remove active class from all buttons and panes
        tabButtons.forEach((btn) => btn.classList.remove("active"))
        tabPanes.forEach((pane) => pane.classList.remove("active"))

        // Add active class to clicked button
        this.classList.add("active")

        // Show corresponding tab pane
        const tabId = this.getAttribute("data-tab")
        document.getElementById(tabId).classList.add("active")
      })
    })
  }

  // Video play functionality
  const videoCards = document.querySelectorAll(".video-card")

  if (videoCards.length > 0) {
    videoCards.forEach((card) => {
      card.addEventListener("click", function () {
        // In a real implementation, this would open a video player
        // For now, we'll just log a message
        const videoTitle = this.querySelector("h3").textContent
        console.log(`Playing video: ${videoTitle}`)

        // You could implement a modal video player here
        // For example:
        // openVideoModal(videoTitle, videoUrl);
      })
    })
  }
})

