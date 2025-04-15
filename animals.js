document.addEventListener("DOMContentLoaded", () => {
    // Dữ liệu mẫu về các loài động vật
    const animalsData = [
        {
            id: 1,
            name: "Hổ Đông Dương",
            scientificName: "Panthera tigris corbetti",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbpIex9amOP9jqPzCqX9fkdZmmScR8mbJ2tw&s",
            description: "Hổ Đông Dương là một trong những loài hổ lớn nhất, sống ở các khu rừng Đông Nam Á. Hiện nay, loài này đang bị đe dọa nghiêm trọng do săn bắt trái phép và mất môi trường sống.",
            status: "Nguy cấp",
            habitat: "Rừng nhiệt đới",
            region: "Đông Nam Á",
            category: "mammals"
        },
        {
            id: 2,
            name: "Voi Châu Á",
            scientificName: "Elephas maximus",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_HwSItiBdqaLshTdHGfV4bp7hcj3gtiAQhQ&s",
            description: "Voi Châu Á là loài voi nhỏ hơn so với voi Châu Phi, có đặc điểm nhận dạng là tai nhỏ và lưng cong. Chúng đóng vai trò quan trọng trong hệ sinh thái rừng và văn hóa nhiều quốc gia Châu Á.",
            status: "Nguy cấp",
            habitat: "Rừng nhiệt đới, đồng cỏ",
            region: "Nam và Đông Nam Á",
            category: "mammals"
        },
        {
            id: 3,
            name: "Đại bàng đầu trắng",
            scientificName: "Haliaeetus leucocephalus",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLudQVJtEtkJ7Ok34DNFg4r4y7itRkUTV1Ow&s",
            description: "Đại bàng đầu trắng là biểu tượng quốc gia của Hoa Kỳ. Loài chim săn mồi này có đầu và đuôi màu trắng đặc trưng, sống gần các vùng nước và chủ yếu ăn cá.",
            status: "Ít lo ngại",
            habitat: "Vùng ven biển, hồ và sông",
            region: "Bắc Mỹ",
            category: "birds"
        },
        {
            id: 4,
            name: "Cá heo mũi chai",
            scientificName: "Tursiops truncatus",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd11ubToyq1NJ-q7WgnDKj8facVZaJ8sY_5A&s",
            description: "Cá heo mũi chai là một trong những loài cá heo thông minh nhất, nổi tiếng với khả năng học hỏi, giao tiếp phức tạp và tính cách thân thiện. Chúng sống theo đàn và có thể được tìm thấy ở hầu hết các đại dương trên thế giới.",
            status: "Ít lo ngại",
            habitat: "Đại dương, vùng biển ven bờ",
            region: "Toàn cầu",
            category: "mammals"
        },
        {
            id: 5,
            name: "Tê giác Java",
            scientificName: "Rhinoceros sondaicus",
            image: "https://static.tuoitre.vn/tto/i/s626/2011/10/27/411ttuov.jpg",
            description: "Tê giác Java là một trong những loài động vật có vú quý hiếm nhất thế giới, với chỉ khoảng 74 cá thể còn sống trong tự nhiên. Chúng có một sừng và da nhăn nheo đặc trưng.",
            status: "Cực kỳ nguy cấp",
            habitat: "Rừng nhiệt đới ẩm",
            region: "Indonesia",
            category: "mammals"
        },
        {
            id: 6,
            name: "Gấu trúc lớn",
            scientificName: "Ailuropoda melanoleuca",
            image: "https://static.tuoitre.vn/tto/i/s626/2015/01/17/CsCS3SeX.jpeg",
            description: "Gấu trúc lớn là biểu tượng toàn cầu của công tác bảo tồn động vật hoang dã. Loài này chủ yếu ăn tre và sống ở các khu rừng núi cao tại Trung Quốc.",
            status: "Sắp nguy cấp",
            habitat: "Rừng tre vùng núi cao",
            region: "Trung Quốc",
            category: "mammals"
        },
        {
            id: 7,
            name: "Rắn hổ mang chúa",
            scientificName: "Ophiophagus hannah",
            image: "https://images.kienthuc.net.vn/zoomh/800/Uploaded/quocquan/2025_01_25/vi-sao-ran-ho-mang-chua-la-chua-cua-cac-loai-ran-Hinh-8.jpg",
            description: "Rắn hổ mang chúa là loài rắn độc dài nhất thế giới, có thể dài tới 5.5 mét. Chúng sống chủ yếu ở các khu rừng nhiệt đới Đông Nam Á và Ấn Độ.",
            status: "Sắp nguy cấp",
            habitat: "Rừng nhiệt đới",
            region: "Đông Nam Á, Nam Á",
            category: "reptiles"
        },
        {
            id: 8,
            name: "Ếch xanh mắt đỏ",
            scientificName: "Agalychnis callidryas",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSsV3AuZw1SLv9rX-ghzZkPGDqQaH7OZGPSA&s",
            description: "Ếch xanh mắt đỏ là loài ếch nhỏ sống trên cây, nổi tiếng với đôi mắt đỏ rực và thân màu xanh lá cây tươi sáng. Chúng sống trong các khu rừng mưa nhiệt đới ở Trung Mỹ.",
            status: "Ít lo ngại",
            habitat: "Rừng mưa nhiệt đới",
            region: "Trung Mỹ",
            category: "amphibians"
        },
        {
            id: 9,
            name: "Cá mập trắng lớn",
            scientificName: "Carcharodon carcharias",
            image: "camap.png",
            description: "Cá mập trắng lớn là một trong những loài cá mập lớn nhất và nổi tiếng nhất. Chúng là loài săn mồi đỉnh cao trong hệ sinh thái biển và có thể được tìm thấy ở hầu hết các đại dương trên thế giới.",
            status: "Sắp nguy cấp",
            habitat: "Đại dương",
            region: "Toàn cầu",
            category: "fish"
        }
    ];

    // Render danh sách động vật
    const animalsGrid = document.getElementById("animals-grid");
    
    if (animalsGrid) {
        renderAnimals(animalsData);
    }

    // Xử lý sự kiện cho các bộ lọc
    const filterCheckboxes = document.querySelectorAll(".filter-checkbox");
    const filterApplyButton = document.querySelector(".filter-apply-button");
    
    if (filterApplyButton) {
        filterApplyButton.addEventListener("click", applyFilters);
    }

    // Hàm render danh sách động vật
    function renderAnimals(animals) {
        animalsGrid.innerHTML = "";
        
        animals.forEach(animal => {
            // Tạo class trạng thái dựa trên tình trạng bảo tồn
            let statusClass = "";
            if (animal.status === "Cực kỳ nguy cấp" || animal.status === "Nguy cấp") {
                statusClass = "status-endangered";
            } else if (animal.status === "Sắp nguy cấp") {
                statusClass = "status-vulnerable";
            } else {
                statusClass = "status-least-concern";
            }

            // Tạo thẻ HTML cho động vật
            const animalCard = document.createElement("div");
            animalCard.className = "animal-card";
            animalCard.innerHTML = `
                <div class="animal-image">
                    <img src="${animal.image}" alt="${animal.name}">
                </div>
                <div class="animal-header">
                    <div class="animal-title-row">
                        <div>
                            <h3 class="animal-title">${animal.name}</h3>
                            <div class="animal-scientific">${animal.scientificName}</div>
                        </div>
                        <span class="animal-status ${statusClass}">${animal.status}</span>
                    </div>
                </div>
                <div class="animal-content">
                    <p class="animal-description">${animal.description}</p>
                    <div class="animal-tags">
                        <span class="animal-tag">${animal.habitat}</span>
                        <span class="animal-tag">${animal.region}</span>
                    </div>
                </div>
                <div class="animal-footer">
                    <a>Tìm hiểu thêm</a>
                </div>
            `;

            animalsGrid.appendChild(animalCard);
        });
    }

    // Hàm áp dụng bộ lọc
    function applyFilters() {
        // Lấy các giá trị bộ lọc
        const selectedCategories = [];
        const selectedStatuses = [];
        const selectedRegions = [];

        // Lọc theo phân loại
        document.querySelectorAll('input[id="mammals"], input[id="birds"], input[id="reptiles"], input[id="amphibians"], input[id="fish"], input[id="insects"]').forEach(checkbox => {
            if (checkbox.checked) {
                selectedCategories.push(checkbox.id);
            }
        });

        // Lọc theo tình trạng bảo tồn
        document.querySelectorAll('input[id="critically-endangered"], input[id="endangered"], input[id="vulnerable"], input[id="near-threatened"], input[id="least-concern"]').forEach(checkbox => {
            if (checkbox.checked) {
                let status = "";
                switch (checkbox.id) {
                    case "critically-endangered":
                        status = "Cực kỳ nguy cấp";
                        break;
                    case "endangered":
                        status = "Nguy cấp";
                        break;
                    case "vulnerable":
                        status = "Sắp nguy cấp";
                        break;
                    case "near-threatened":
                        status = "Sắp bị đe dọa";
                        break;
                    case "least-concern":
                        status = "Ít lo ngại";
                        break;
                }
                selectedStatuses.push(status);
            }
        });

        // Lọc theo khu vực
        document.querySelectorAll('input[id="asia"], input[id="africa"], input[id="europe"], input[id="north-america"], input[id="south-america"], input[id="australia"], input[id="antarctica"]').forEach(checkbox => {
            if (checkbox.checked) {
                selectedRegions.push(checkbox.id);
            }
        });

        // Áp dụng bộ lọc
        let filteredAnimals = animalsData;

        if (selectedCategories.length > 0) {
            filteredAnimals = filteredAnimals.filter(animal => selectedCategories.includes(animal.category));
        }

        if (selectedStatuses.length > 0) {
            filteredAnimals = filteredAnimals.filter(animal => selectedStatuses.includes(animal.status));
        }

        if (selectedRegions.length > 0) {
            filteredAnimals = filteredAnimals.filter(animal => {
                const animalRegions = animal.region.toLowerCase();
                return selectedRegions.some(region => animalRegions.includes(region.replace("-", " ")));
            });
        }

        // Render lại danh sách động vật
        renderAnimals(filteredAnimals);
    }
});
