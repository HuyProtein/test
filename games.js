// Dữ liệu trò chơi
const gamesData = [
    {
        id: 1,
        title: "Câu đố động vật",
        description: "Kiểm tra kiến thức của bạn về động vật hoang dã với bộ câu đố thú vị này.",
        image: "https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/01/9b/vt-s-1725119310-the-tro-choi-do-vui-to-la-ai-dong-vat_ver_1.jpg",
        category: "quiz",
        difficulty: "Dễ",
        ageRange: "8+",
        estimatedTime: "10 phút",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`
    },
    {
        id: 2,
        title: "Ghép hình động vật",
        description: "Ghép các mảnh hình để hoàn thành bức tranh về các loài động vật hoang dã.",
        image: "https://product.hstatic.net/200000042672/product/64392_-_ghep_hinh_10_con_vat_3b53bb91892d45038917ae57cfce9445.jpg",
        category: "puzzle",
        difficulty: "Trung bình",
        ageRange: "6+",
        estimatedTime: "15 phút",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>`
    },
    {
        id: 3,
        title: "Trò chơi ghi nhớ",
        description: "Tìm các cặp thẻ giống nhau để khám phá các loài động vật hoang dã.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHK9C-fHD_ZfqhN_4yWd32wJTs0zMN-pQ1Wg&s",
        category: "memory",
        difficulty: "Dễ",
        ageRange: "5+",
        estimatedTime: "10 phút",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>`
    },
    {
        id: 4,
        title: "Tô màu động vật",
        description: "Tô màu các loài động vật hoang dã và học hỏi về chúng.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReVOmnt4ldWeG72JvzTciLS0AKZVa5peRDcg&s",
        category: "coloring",
        difficulty: "Dễ",
        ageRange: "4+",
        estimatedTime: "20 phút",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>`
    },
    {
        id: 5,
        title: "Tìm từ động vật",
        description: "Tìm các từ liên quan đến động vật hoang dã trong bảng chữ cái.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRamhlniEm6ClCykWlxkJOe4kea_5VV7hUm6A&s",
        category: "word",
        difficulty: "Trung bình",
        ageRange: "8+",
        estimatedTime: "15 phút",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>`
    },
    {
        id: 6,
        title: "Câu đố về môi trường sống",
        description: "Kiểm tra kiến thức của bạn về môi trường sống của các loài động vật.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRje0Ni6AlkGm15npTyHTiCnlzajVUoGbKFA&s",
        category: "quiz",
        difficulty: "Khó",
        ageRange: "10+",
        estimatedTime: "15 phút",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`
    },
    {
        id: 7,
        title: "Ghép hình môi trường sống",
        description: "Ghép các mảnh hình để hoàn thành bức tranh về các môi trường sống tự nhiên.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9O-7Jze1ljeQ7sXzWGcdtdAYCTfXBjUdZ0A&s",
        category: "puzzle",
        difficulty: "Trung bình",
        ageRange: "7+",
        estimatedTime: "15 phút",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>`
    },
    {
        id: 8,
        title: "Trò chơi ghi nhớ động vật biển",
        description: "Tìm các cặp thẻ giống nhau để khám phá các loài động vật biển.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8BNY_OSqYAnwbmq7FKAxlkbjcM7UDXZQ_Qg&s",
        category: "memory",
        difficulty: "Dễ",
        ageRange: "5+",
        estimatedTime: "10 phút",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>`
    },
    {
        id: 9,
        title: "Tô màu động vật rừng",
        description: "Tô màu các loài động vật sống trong rừng và học hỏi về chúng.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdyM2WHhYALIkquF7snsUYN_ppts1QFjeP-g&s",
        category: "coloring",
        difficulty: "Dễ",
        ageRange: "4+",
        estimatedTime: "20 phút",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>`
    }
];

// Dữ liệu câu đố
const quizData = [
    {
        question: "Loài động vật nào là loài mèo lớn nhất trên thế giới?",
        options: ["Sư tử", "Hổ", "Báo", "Báo đốm"],
        correctAnswer: 1,
        explanation: "Hổ là loài mèo lớn nhất trên thế giới, với chiều dài có thể lên đến 3.3 mét và nặng hơn 300 kg."
    },
    {
        question: "Loài động vật nào có khả năng chạy nhanh nhất trên cạn?",
        options: ["Báo săn", "Ngựa vằn", "Linh dương", "Sư tử"],
        correctAnswer: 0,
        explanation: "Báo săn (Cheetah) có thể đạt tốc độ lên đến 112 km/h trong thời gian ngắn, khiến nó trở thành loài động vật chạy nhanh nhất trên cạn."
    },
    {
        question: "Loài động vật nào có tuổi thọ dài nhất?",
        options: ["Voi", "Rùa Galapagos", "Cá voi Greenland", "Đại bàng"],
        correctAnswer: 2,
        explanation: "Cá voi Greenland có thể sống đến hơn 200 năm, khiến nó trở thành một trong những loài động vật có xương sống có tuổi thọ dài nhất."
    },
    {
        question: "Loài động vật nào ngủ nhiều nhất trong một ngày?",
        options: ["Gấu trúc", "Koala", "Lười", "Mèo nhà"],
        correctAnswer: 2,
        explanation: "Lười có thể ngủ từ 15 đến 20 giờ mỗi ngày trong tự nhiên, khiến nó trở thành một trong những loài động vật ngủ nhiều nhất."
    },
    {
        question: "Loài động vật nào có khả năng nhìn xung quanh 360 độ mà không cần di chuyển đầu?",
        options: ["Cú", "Hươu cao cổ", "Tắc kè hoa", "Cá ngựa"],
        correctAnswer: 2,
        explanation: "Tắc kè hoa có thể di chuyển mắt một cách độc lập, cho phép chúng nhìn theo hai hướng khác nhau cùng một lúc và có tầm nhìn 360 độ."
    },
    {
        question: "Loài động vật nào có khả năng tái tạo các bộ phận cơ thể bị mất?",
        options: ["Thằn lằn", "Sao biển", "Cá heo", "Rắn"],
        correctAnswer: 1,
        explanation: "Sao biển có khả năng tái tạo đáng kinh ngạc, chúng có thể mọc lại toàn bộ cơ thể từ một cánh tay duy nhất trong một số trường hợp."
    },
    {
        question: "Loài động vật nào có trái tim lớn nhất?",
        options: ["Voi châu Phi", "Cá voi xanh", "Hươu cao cổ", "Hà mã"],
        correctAnswer: 1,
        explanation: "Cá voi xanh có trái tim lớn nhất trong giới động vật, nặng khoảng 180 kg và có kích thước tương đương với một chiếc xe hơi nhỏ."
    },
    {
        question: "Loài động vật nào có khả năng nhảy cao nhất so với chiều cao cơ thể?",
        options: ["Kangaroo", "Bọ chét", "Mèo nhà", "Ếch"],
        correctAnswer: 1,
        explanation: "Bọ chét có thể nhảy cao gấp 150 lần chiều cao cơ thể của chúng, tương đương với một người cao 1.8m nhảy lên tòa nhà cao 270m."
    },
    {
        question: "Loài động vật nào có khả năng nhịn ăn lâu nhất?",
        options: ["Lạc đà", "Rắn", "Cá sấu", "Gấu Bắc Cực"],
        correctAnswer: 2,
        explanation: "Cá sấu có thể nhịn ăn trong thời gian dài nhất, có thể lên đến 3 năm mà không cần thức ăn nhờ vào khả năng giảm tốc độ trao đổi chất của chúng."
    },
    {
        question: "Loài động vật nào có khả năng ngửi mùi tốt nhất?",
        options: ["Chó", "Gấu", "Cá mập", "Voi châu Phi"],
        correctAnswer: 0,
        explanation: "Chó có khả năng ngửi mùi tuyệt vời, với khoảng 300 triệu tế bào khứu giác so với khoảng 5-6 triệu ở người, giúp chúng phát hiện mùi ở nồng độ cực thấp."
    }
];

// Dữ liệu trò chơi ghi nhớ
const memoryGameData = [
    { id: 1, name: "Hổ", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBBX6svNNd54XaEXPJz74sZmiprHQKp96n5A&s" },
    { id: 2, name: "Sư tử", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJOk0K6HcyKj1Y5wKZZLnb38EaLvVMRTUeXA&s" },
    { id: 3, name: "Voi", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9sY3ifChVXHAP0munbbPrRDSA_a8_sY0Jsg&s" },
    { id: 4, name: "Hươu cao cổ", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO9mOL2SNXqDwqEI6XsLUd9VG_Ibqa-L_Lbg&s" },
    { id: 5, name: "Tê giác", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeWORnEitXOI7HJlyXoDrNZMZhqcsrTb60pQ&s" },
    { id: 6, name: "Ngựa vằn", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJAFJ2cCC3gFAubQ8mFa77Oj8KFexvUJkM0A&s" },
    { id: 7, name: "Khỉ đột", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi16dQjkAKd4lt_kbeUjMa0LZuLVcUNkIGlg&s" },
    { id: 8, name: "Gấu trúc", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_2D5Q3F9UEDgYuyf311c7eiitkrNUgaYbZg&s" }
];

// Dữ liệu trò chơi ghép hình
const puzzleGameData = {
    image: "image.png",
    pieces: [
        "1.png",
        "2.png",
        "3.png",
        "4.png",
        "5.png",
        "6.png",
        "7.png",
        "8.png",
        "9.png"
    ]
};

// Biến toàn cục
let activeCategory = "all";
let currentGame = null;
let currentQuizQuestion = 0;
let quizScore = 0;
let memoryCards = [];
let flippedCards = [];
let matchedPairs = 0;
let memoryMoves = 0;
let memoryTimer = 0;
let memoryTimerInterval = null;
let selectedPuzzlePiece = null;
let placedPuzzlePieces = 0;

// Khởi tạo trang
document.addEventListener("DOMContentLoaded", function() {
    // Hiển thị danh sách trò chơi
    renderGames();

    // Xử lý sự kiện cho các nút tab
    const tabButtons = document.querySelectorAll(".tab-button");
    tabButtons.forEach(button => {
        button.addEventListener("click", function() {
            activeCategory = this.dataset.category;
            
            // Cập nhật trạng thái active
            tabButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
            
            // Hiển thị lại danh sách trò chơi
            renderGames();
        });
    });

    // Xử lý sự kiện đóng dialog
    document.getElementById("dialog-close").addEventListener("click", closeGameDialog);

    // Đóng dialog khi click bên ngoài
    document.getElementById("game-dialog").addEventListener("click", function(event) {
        if (event.target === this) {
            closeGameDialog();
        }
    });

    // Xử lý nút back-to-top
    const backToTopButton = document.getElementById("back-to-top");
    window.addEventListener("scroll", function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add("visible");
        } else {
            backToTopButton.classList.remove("visible");
        }
    });
    
    backToTopButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Xử lý menu mobile
    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");
    
    mobileMenuButton.addEventListener("click", function() {
        mobileMenu.classList.toggle("active");
    });

    // Set current year in footer
    document.getElementById("current-year").textContent = new Date().getFullYear();
});

// Hiển thị danh sách trò chơi
function renderGames() {
    const gamesContainer = document.getElementById("games-container");
    
    // Lọc trò chơi theo danh mục
    const filteredGames = activeCategory === "all" 
        ? gamesData 
        : gamesData.filter(game => game.category === activeCategory);
    
    // Xóa nội dung cũ
    gamesContainer.innerHTML = "";
    
    // Thêm các trò chơi mới
    filteredGames.forEach(game => {
        const gameCard = document.createElement("div");
        gameCard.className = "game-card";
        gameCard.dataset.id = game.id;
        
        gameCard.innerHTML = `
            <div class="game-image">
                <img src="${game.image}" alt="${game.title}">
                <div class="game-overlay">
                    <button class="button primary-button full-width">Chơi ngay</button>
                </div>
            </div>
            <div class="game-header">
                <div class="game-title">
                    <div class="icon-circle">
                        ${game.icon}
                    </div>
                    <h3>${game.title}</h3>
                </div>
            </div>
            <div class="game-content">
                <p class="game-description">${game.description}</p>
                <div class="game-meta">
                    <div class="game-meta-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M2 12h6"></path>
                            <path d="M22 12h-6"></path>
                            <path d="M12 2v6"></path>
                            <path d="M12 22v-6"></path>
                            <path d="M20 16l-4-4 4-4"></path>
                            <path d="M4 8l4 4-4 4"></path>
                            <path d="M16 4l-4 4-4-4"></path>
                            <path d="M8 20l4-4 4 4"></path>
                        </svg>
                        <span>Độ khó: ${game.difficulty}</span>
                    </div>
                    <div class="game-meta-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                        <span>Độ tuổi: ${game.ageRange}</span>
                    </div>
                    <div class="game-meta-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        <span>Thời gian: ${game.estimatedTime}</span>
                    </div>
                </div>
            </div>
            <div class="game-footer">
                <span class="badge">${getCategoryName(game.category)}</span>
                <button class="button outline-button">Chơi ngay</button>
            </div>
        `;
        
        // Xử lý sự kiện click vào thẻ game
        gameCard.addEventListener("click", function() {
            openGameDialog(game.id);
        });
        
        gamesContainer.appendChild(gameCard);
    });
}

// Lấy tên danh mục từ mã danh mục
function getCategoryName(categoryCode) {
    const categories = {
        "quiz": "Câu đố",
        "puzzle": "Ghép hình",
        "memory": "Ghi nhớ",
        "coloring": "Tô màu",
        "word": "Tìm từ"
    };
    
    return categories[categoryCode] || categoryCode;
}

// Mở dialog trò chơi
function openGameDialog(gameId) {
    const game = gamesData.find(item => item.id === parseInt(gameId));
    if (!game) return;
    
    currentGame = game;
    
    // Cập nhật tiêu đề và mô tả
    document.getElementById("dialog-title").textContent = game.title;
    document.getElementById("dialog-description").textContent = game.description;
    
    // Xóa nội dung cũ
    const dialogBody = document.getElementById("dialog-body");
    dialogBody.innerHTML = "";
    
    // Tạo nội dung trò chơi dựa trên loại
    switch (game.category) {
        case "quiz":
            initQuizGame(dialogBody);
            break;
        case "memory":
            initMemoryGame(dialogBody);
            break;
        case "puzzle":
            initPuzzleGame(dialogBody);
            break;
        case "coloring":
            dialogBody.innerHTML = `
                <div class="coming-soon" style="text-align: center; padding: 50px;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 20px;">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    <h3>Sắp ra mắt</h3>
                    <p>Trò chơi này đang được phát triển và sẽ sớm được ra mắt. Vui lòng quay lại sau!</p>
                </div>
            `;
            break;
        case "word":
            dialogBody.innerHTML = `
                <div class="coming-soon" style="text-align: center; padding: 50px;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 20px;">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    <h3>Sắp ra mắt</h3>
                    <p>Trò chơi này đang được phát triển và sẽ sớm được ra mắt. Vui lòng quay lại sau!</p>
                </div>
            `;
            break;
    }
    
    // Hiển thị dialog
    document.getElementById("game-dialog").classList.add("open");
}

// Đóng dialog trò chơi
function closeGameDialog() {
    // Dừng timer nếu đang chạy
    if (memoryTimerInterval) {
        clearInterval(memoryTimerInterval);
        memoryTimerInterval = null;
    }
    
    // Ẩn dialog
    document.getElementById("game-dialog").classList.remove("open");
    
    // Reset biến trò chơi
    currentGame = null;
    currentQuizQuestion = 0;
    quizScore = 0;
    flippedCards = [];
    matchedPairs = 0;
    memoryMoves = 0;
    memoryTimer = 0;
    selectedPuzzlePiece = null;
    placedPuzzlePieces = 0;
}

// Khởi tạo trò chơi câu đố
function initQuizGame(container) {
    // Reset biến
    currentQuizQuestion = 0;
    quizScore = 0;
    
    // Tạo giao diện câu đố
    renderQuizQuestion(container);
}

// Hiển thị câu hỏi câu đố
function renderQuizQuestion(container) {
    if (currentQuizQuestion >= quizData.length) {
        // Hiển thị kết quả nếu đã hết câu hỏi
        renderQuizResults(container);
        return;
    }
    
    const question = quizData[currentQuizQuestion];
    
    // Tính phần trăm tiến độ
    const progressPercent = (currentQuizQuestion / quizData.length) * 100;
    
    container.innerHTML = `
        <div class="quiz-container">
            <div class="quiz-progress">
                <div class="quiz-progress-header">
                    <span>Câu hỏi ${currentQuizQuestion + 1}/${quizData.length}</span>
                    <span>Điểm: ${quizScore}</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-bar-fill" style="width: ${progressPercent}%"></div>
                </div>
            </div>
            
            <div class="quiz-question">
                ${question.question}
            </div>
            
            <div class="quiz-options">
                ${question.options.map((option, index) => `
                    <div class="quiz-option" data-index="${index}">
                        ${option}
                    </div>
                `).join("")}
            </div>
            
            <div class="quiz-feedback" style="display: none;"></div>
            
            <div class="quiz-actions">
                <button class="button outline-button" id="quiz-skip">Bỏ qua</button>
                <button class="button primary-button" id="quiz-next" style="display: none;">Câu tiếp theo</button>
            </div>
        </div>
    `;
    
    // Xử lý sự kiện click vào các lựa chọn
    const optionElements = container.querySelectorAll(".quiz-option");
    optionElements.forEach(option => {
        option.addEventListener("click", function() {
            // Nếu đã chọn đáp án, không cho chọn lại
            if (container.querySelector(".quiz-option.selected")) return;
            
            const selectedIndex = parseInt(this.dataset.index);
            const correctIndex = question.correctAnswer;
            
            // Đánh dấu lựa chọn đã chọn
            this.classList.add("selected");
            
            // Hiển thị đáp án đúng/sai
            optionElements.forEach((opt, idx) => {
                if (idx === correctIndex) {
                    opt.classList.add("correct");
                } else if (idx === selectedIndex && selectedIndex !== correctIndex) {
                    opt.classList.add("incorrect");
                }
            });
            
            // Hiển thị phản hồi
            const feedbackElement = container.querySelector(".quiz-feedback");
            if (selectedIndex === correctIndex) {
                feedbackElement.innerHTML = `
                    <div class="quiz-feedback-title">Chính xác!</div>
                    <p>${question.explanation}</p>
                `;
                feedbackElement.className = "quiz-feedback correct";
                quizScore++;
            } else {
                feedbackElement.innerHTML = `
                    <div class="quiz-feedback-title">Chưa chính xác!</div>
                    <p>${question.explanation}</p>
                `;
                feedbackElement.className = "quiz-feedback incorrect";
            }
            feedbackElement.style.display = "block";
            
            // Hiển thị nút tiếp theo
            container.querySelector("#quiz-skip").style.display = "none";
            container.querySelector("#quiz-next").style.display = "block";
        });
    });
    
    // Xử lý sự kiện nút bỏ qua
    container.querySelector("#quiz-skip").addEventListener("click", function() {
        currentQuizQuestion++;
        renderQuizQuestion(container);
    });
    
    // Xử lý sự kiện nút tiếp theo
    container.querySelector("#quiz-next").addEventListener("click", function() {
        currentQuizQuestion++;
        renderQuizQuestion(container);
    });
}

// Hiển thị kết quả câu đố
function renderQuizResults(container) {
    // Tính điểm phần trăm
    const scorePercent = Math.round((quizScore / quizData.length) * 100);
    
    // Xác định thông điệp dựa trên điểm số
    let message = "";
    if (scorePercent >= 80) {
        message = "Tuyệt vời! Bạn có kiến thức rất tốt về động vật hoang dã.";
    } else if (scorePercent >= 60) {
        message = "Khá tốt! Bạn đã có hiểu biết cơ bản về động vật hoang dã.";
    } else {
        message = "Hãy tiếp tục học hỏi! Mỗi ngày là một cơ hội để tìm hiểu thêm về động vật hoang dã.";
    }
    
    container.innerHTML = `
        <div class="quiz-results">
            <div class="results-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
            </div>
            
            <div class="results-score">${scorePercent}%</div>
            <p class="results-message">${message}</p>
            
            <div class="results-actions">
                <button class="button outline-button" id="quiz-restart">Chơi lại</button>
                <button class="button primary-button" id="quiz-close">Đóng</button>
            </div>
        </div>
    `;
    
    // Hiệu ứng confetti nếu điểm cao
    if (scorePercent >= 70) {
        startConfetti();
    }
    
    // Xử lý sự kiện nút chơi lại
    container.querySelector("#quiz-restart").addEventListener("click", function() {
        stopConfetti();
        initQuizGame(container);
    });
    
    // Xử lý sự kiện nút đóng
    container.querySelector("#quiz-close").addEventListener("click", function() {
        stopConfetti();
        closeGameDialog();
    });
}

// Khởi tạo trò chơi ghi nhớ
function initMemoryGame(container) {
    // Reset biến
    memoryCards = [];
    flippedCards = [];
    matchedPairs = 0;
    memoryMoves = 0;
    memoryTimer = 0;
    
    // Tạo bộ thẻ (mỗi loài động vật có 2 thẻ)
    const cardPairs = [...memoryGameData, ...memoryGameData];
    
    // Trộn thẻ
    memoryCards = shuffleArray(cardPairs);
    
    // Tạo giao diện trò chơi
    container.innerHTML = `
        <div class="memory-container">
            <div class="memory-stats">
                <div>Lượt đi: <span id="memory-moves">0</span></div>
                <div>Thời gian: <span id="memory-timer">00:00</span></div>
            </div>
            
            <div class="memory-grid">
                ${memoryCards.map((card, index) => `
                    <div class="memory-card" data-index="${index}">
                        <div class="memory-card-inner">
                            <div class="memory-card-front">
                                <span>?</span>
                            </div>
                            <div class="memory-card-back">
                                <img src="${card.image}" alt="${card.name}">
                            </div>
                        </div>
                    </div>
                `).join("")}
            </div>
            
            <div class="memory-actions">
                <button class="button outline-button" id="memory-restart">Chơi lại</button>
                <button class="button primary-button" id="memory-close">Đóng</button>
            </div>
        </div>
    `;
    
    // Xử lý sự kiện click vào thẻ
    const cardElements = container.querySelectorAll(".memory-card");
    cardElements.forEach(card => {
        card.addEventListener("click", function() {
            // Nếu thẻ đã được lật hoặc đã ghép đôi, không làm gì
            if (this.classList.contains("flipped") || this.classList.contains("matched")) return;
            
            // Nếu đã lật 2 thẻ, không cho lật thêm
            if (flippedCards.length === 2) return;
            
            // Bắt đầu timer nếu chưa bắt đầu
            if (!memoryTimerInterval) {
                startMemoryTimer();
            }
            
            // Lật thẻ
            const cardIndex = parseInt(this.dataset.index);
            this.classList.add("flipped");
            flippedCards.push({ element: this, index: cardIndex });
            
            // Nếu đã lật 2 thẻ, kiểm tra xem có giống nhau không
            if (flippedCards.length === 2) {
                memoryMoves++;
                document.getElementById("memory-moves").textContent = memoryMoves;
                
                const card1 = memoryCards[flippedCards[0].index];
                const card2 = memoryCards[flippedCards[1].index];
                
                if (card1.id === card2.id) {
                    // Nếu 2 thẻ giống nhau
                    flippedCards.forEach(card => {
                        card.element.classList.add("matched");
                    });
                    flippedCards = [];
                    matchedPairs++;
                    
                    // Kiểm tra xem đã hoàn thành chưa
                    if (matchedPairs === memoryGameData.length) {
                        clearInterval(memoryTimerInterval);
                        setTimeout(() => {
                            renderMemoryResults(container);
                        }, 1000);
                    }
                } else {
                    // Nếu 2 thẻ không giống nhau, lật lại sau 1 giây
                    setTimeout(() => {
                        flippedCards.forEach(card => {
                            card.element.classList.remove("flipped");
                        });
                        flippedCards = [];
                    }, 1000);
                }
            }
        });
    });
    
    // Xử lý sự kiện nút chơi lại
    container.querySelector("#memory-restart").addEventListener("click", function() {
        clearInterval(memoryTimerInterval);
        initMemoryGame(container);
    });
    
    // Xử lý sự kiện nút đóng
    container.querySelector("#memory-close").addEventListener("click", function() {
        clearInterval(memoryTimerInterval);
        closeGameDialog();
    });
}

// Bắt đầu timer cho trò chơi ghi nhớ
function startMemoryTimer() {
    const timerElement = document.getElementById("memory-timer");
    memoryTimer = 0;
    
    memoryTimerInterval = setInterval(() => {
        memoryTimer++;
        const minutes = Math.floor(memoryTimer / 60);
        const seconds = memoryTimer % 60;
        timerElement.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }, 1000);
}

// Hiển thị kết quả trò chơi ghi nhớ
function renderMemoryResults(container) {
    // Tính thời gian
    const minutes = Math.floor(memoryTimer / 60);
    const seconds = memoryTimer % 60;
    const timeString = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    
    container.innerHTML = `
        <div class="memory-results">
            <div class="results-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
            </div>
            
            <h3>Chúc mừng!</h3>
            <p>Bạn đã hoàn thành trò chơi ghi nhớ.</p>
            
            <div class="memory-stats-container">
                <div class="memory-stat">
                    <div class="memory-stat-label">Lượt đi</div>
                    <div class="memory-stat-value">${memoryMoves}</div>
                </div>
                <div class="memory-stat">
                    <div class="memory-stat-label">Thời gian</div>
                    <div class="memory-stat-value">${timeString}</div>
                </div>
            </div>
            
            <p class="results-message">Bạn có thể chơi lại để cải thiện kỷ lục của mình!</p>
            
            <div class="results-actions">
                <button class="button outline-button" id="memory-restart">Chơi lại</button>
                <button class="button primary-button" id="memory-close">Đóng</button>
            </div>
        </div>
    `;
    
    // Hiệu ứng confetti
    startConfetti();
    
    // Xử lý sự kiện nút chơi lại
    container.querySelector("#memory-restart").addEventListener("click", function() {
        stopConfetti();
        initMemoryGame(container);
    });
    
    // Xử lý sự kiện nút đóng
    container.querySelector("#memory-close").addEventListener("click", function() {
        stopConfetti();
        closeGameDialog();
    });
}

// Khởi tạo trò chơi ghép hình
function initPuzzleGame(container) {
    // Reset biến
    selectedPuzzlePiece = null;
    placedPuzzlePieces = 0;
    
    // Trộn các mảnh ghép
    const shuffledPieces = shuffleArray([...puzzleGameData.pieces]);
    
    // Tạo giao diện trò chơi
    container.innerHTML = `
        <div class="puzzle-container">
            <div class="puzzle-grid">
                <div class="puzzle-board">
                    <div class="puzzle-board-title">Bảng ghép hình</div>
                    <div class="puzzle-board-grid">
                        ${Array(9).fill().map((_, index) => `
                            <div class="puzzle-slot" data-slot="${index}"></div>
                        `).join("")}
                    </div>
                </div>
                
                <div class="puzzle-board">
                    <div class="puzzle-board-title">Các mảnh ghép</div>
                    <div class="puzzle-pieces">
                        ${shuffledPieces.map((piece, index) => `
                            <div class="puzzle-piece" data-piece="${index}">
                                <img src="${piece}" alt="Mảnh ghép ${index + 1}">
                            </div>
                        `).join("")}
                    </div>
                </div>
            </div>
            
            <div class="puzzle-actions">
                <button class="button outline-button" id="puzzle-restart">Chơi lại</button>
                <button class="button primary-button" id="puzzle-close">Đóng</button>
            </div>
        </div>
    `;
    
    // Xử lý sự kiện click vào mảnh ghép
    const pieceElements = container.querySelectorAll(".puzzle-piece");
    pieceElements.forEach(piece => {
        piece.addEventListener("click", function() {
            // Nếu mảnh đã được đặt, không làm gì
            if (this.classList.contains("placed")) return;
            
            // Bỏ chọn mảnh trước đó (nếu có)
            if (selectedPuzzlePiece) {
                selectedPuzzlePiece.classList.remove("selected");
            }
            
            // Chọn mảnh mới
            this.classList.add("selected");
            selectedPuzzlePiece = this;
        });
    });
    
    // Xử lý sự kiện click vào ô ghép
    const slotElements = container.querySelectorAll(".puzzle-slot");
    slotElements.forEach(slot => {
        slot.addEventListener("click", function() {
            // Nếu không có mảnh nào được chọn hoặc ô đã có mảnh, không làm gì
            if (!selectedPuzzlePiece || this.classList.contains("filled")) return;
            
            // Đặt mảnh vào ô
            const pieceIndex = parseInt(selectedPuzzlePiece.dataset.piece);
            this.innerHTML = `<img src="${puzzleGameData.pieces[pieceIndex]}" alt="Mảnh ghép ${pieceIndex + 1}">`;
            this.classList.add("filled");
            
            // Đánh dấu mảnh đã được đặt
            selectedPuzzlePiece.classList.add("placed");
            selectedPuzzlePiece.classList.remove("selected");
            selectedPuzzlePiece = null;
            
            // Tăng số mảnh đã đặt
            placedPuzzlePieces++;
            
            // Kiểm tra xem đã hoàn thành chưa
            if (placedPuzzlePieces === 9) {
                setTimeout(() => {
                    renderPuzzleResults(container);
                }, 1000);
            }
        });
    });
    
    // Xử lý sự kiện nút chơi lại
    container.querySelector("#puzzle-restart").addEventListener("click", function() {
        initPuzzleGame(container);
    });
    
    // Xử lý sự kiện nút đóng
    container.querySelector("#puzzle-close").addEventListener("click", function() {
        closeGameDialog();
    });
}

// Hiển thị kết quả trò chơi ghép hình
function renderPuzzleResults(container) {
    container.innerHTML = `
        <div class="puzzle-results">
            <div class="results-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
            </div>
            
            <h3>Chúc mừng!</h3>
            <p>Bạn đã hoàn thành trò chơi ghép hình.</p>
            
            <div class="puzzle-complete-image">
                <img src="${puzzleGameData.image}" alt="Hình ảnh hoàn chỉnh">
            </div>
            
            <p class="results-message">Bạn đã ghép thành công tất cả các mảnh ghép!</p>
            
            <div class="results-actions">
                <button class="button outline-button" id="puzzle-restart">Chơi lại</button>
                <button class="button primary-button" id="puzzle-close">Đóng</button>
            </div>
        </div>
    `;
    
    // Hiệu ứng confetti
    startConfetti();
    
    // Xử lý sự kiện nút chơi lại
    container.querySelector("#puzzle-restart").addEventListener("click", function() {
        stopConfetti();
        initPuzzleGame(container);
    });
    
    // Xử lý sự kiện nút đóng
    container.querySelector("#puzzle-close").addEventListener("click", function() {
        stopConfetti();
        closeGameDialog();
    });
}

// Hàm trộn mảng
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Hiệu ứng confetti
function startConfetti() {
    const canvas = document.getElementById("confetti-canvas");
    canvas.style.display = "block";
    
    const context = canvas.getContext("2d");
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    canvas.width = width;
    canvas.height = height;
    
    const pieces = [];
    const numberOfPieces = 200;
    const colors = ["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722"];
    
    for (let i = 0; i < numberOfPieces; i++) {
        pieces.push({
            x: Math.random() * width, // x-coordinate
            y: Math.random() * height, // y-coordinate
            r: Math.random() * 10 + 5, // radius
            d: Math.random() * numberOfPieces, // density
            color: colors[Math.floor(Math.random() * colors.length)],
            tilt: Math.floor(Math.random() * 10) - 10,
            tiltAngleIncrement: Math.random() * 0.07 + 0.05,
            tiltAngle: 0
        });
    }
    
    let animationFrameId;
    
    function draw() {
        context.clearRect(0, 0, width, height);
        
        pieces.forEach(piece => {
            context.beginPath();
            context.lineWidth = piece.r / 2;
            context.strokeStyle = piece.color;
            context.moveTo(piece.x + piece.tilt + (piece.r / 4), piece.y);
            context.lineTo(piece.x + piece.tilt, piece.y + piece.tilt + (piece.r / 4));
            context.stroke();
            
            piece.tiltAngle += piece.tiltAngleIncrement;
            piece.y += (Math.cos(piece.d) + 1.5) * 2;
            piece.tilt = Math.sin(piece.tiltAngle) * 15;
            
            if (piece.y > height) {
                piece.x = Math.random() * width;
                piece.y = -10;
                piece.tilt = Math.floor(Math.random() * 10) - 10;
            }
        });
        
        animationFrameId = requestAnimationFrame(draw);
    }
    
    draw();
    
    // Lưu ID của animation frame để có thể dừng lại sau
    canvas.animationFrameId = animationFrameId;
}

function stopConfetti() {
    const canvas = document.getElementById("confetti-canvas");
    if (canvas.animationFrameId) {
        cancelAnimationFrame(canvas.animationFrameId);
    }
    canvas.style.display = "none";
    
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
}