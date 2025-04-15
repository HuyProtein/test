/**
 * habitats.js
 * Script xử lý các chức năng liên quan đến trang môi trường sống
 */

document.addEventListener('DOMContentLoaded', function() {
    // Dữ liệu về các môi trường sống
    const habitatsData = [
        {
            id: 'rainforest',
            name: 'Rừng nhiệt đới',
            image: 'https://ktmt.vnmediacdn.com/images/2021/10/06/45-1633506738-rung-nhiet-doi.jpg',
            description: 'Rừng nhiệt đới là một trong những hệ sinh thái đa dạng nhất trên Trái Đất, chiếm chưa đến 7% diện tích bề mặt Trái Đất nhưng chứa hơn 50% các loài động thực vật trên thế giới.',
            characteristics: [
                'Lượng mưa cao (2000-10000mm mỗi năm)',
                'Nhiệt độ ổn định (20-34°C)',
                'Độ ẩm cao (77-88%)',
                'Cấu trúc nhiều tầng tán',
                'Đa dạng sinh học cực kỳ phong phú'
            ],
            locations: ['Amazon (Nam Mỹ)', 'Congo (Châu Phi)', 'Đông Nam Á', 'Úc'],
            animals: [
                {
                    name: 'Hổ',
                    scientificName: 'Panthera tigris',
                    image: 'https://via.placeholder.com/300x200',
                    status: 'Nguy cấp',
                    link: 'animals/tiger.html'
                },
                {
                    name: 'Vượn',
                    scientificName: 'Hylobatidae',
                    image: 'https://via.placeholder.com/300x200',
                    status: 'Nguy cấp',
                    link: 'animals/gibbon.html'
                },
                {
                    name: 'Đười ươi',
                    scientificName: 'Pongo',
                    image: 'https://via.placeholder.com/300x200',
                    status: 'Cực kỳ nguy cấp',
                    link: 'animals/orangutan.html'
                },
                {
                    name: 'Vẹt Macaw',
                    scientificName: 'Ara',
                    image: 'https://via.placeholder.com/300x200',
                    status: 'Sắp nguy cấp',
                    link: 'animals/macaw.html'
                }
            ],
            threats: [
                'Phá rừng để lấy gỗ và đất nông nghiệp',
                'Khai thác khoáng sản',
                'Biến đổi khí hậu',
                'Săn bắn trái phép'
            ],
            conservation: [
                'Thành lập các khu bảo tồn và vườn quốc gia',
                'Phát triển nông nghiệp bền vững',
                'Giáo dục cộng đồng về tầm quan trọng của rừng nhiệt đới',
                'Thực thi luật chống phá rừng và săn bắn trái phép'
            ],
            type: 'terrestrial',
            climate: 'tropical'
        },
        {
            id: 'savanna',
            name: 'Thảo nguyên',
            image: 'https://dulichminhanh.com.vn/wp-content/uploads/2023/05/thao-nguyen-natali-2.jpeg',
            description: 'Thảo nguyên là vùng đất rộng lớn với cỏ và cây bụi thấp, có lượng mưa vừa phải và mùa khô kéo dài. Đây là môi trường sống của nhiều loài động vật lớn nhất thế giới.',
            characteristics: [
                'Lượng mưa trung bình (500-1500mm mỗi năm)',
                'Mùa khô và mùa mưa rõ rệt',
                'Chủ yếu là cỏ và cây bụi thấp',
                'Đất màu mỡ',
                'Cháy tự nhiên định kỳ'
            ],
            locations: ['Đông Phi', 'Nam Phi', 'Úc', 'Nam Mỹ', 'Bắc Mỹ'],
            animals: [
                {
                    name: 'Sư tử',
                    scientificName: 'Panthera leo',
                    image: 'https://via.placeholder.com/300x200',
                    status: 'Sắp nguy cấp',
                    link: 'animals/lion.html'
                },
                {
                    name: 'Voi châu Phi',
                    scientificName: 'Loxodonta africana',
                    image: 'https://via.placeholder.com/300x200',
                    status: 'Nguy cấp',
                    link: 'animals/african-elephant.html'
                },
                {
                    name: 'Ngựa vằn',
                    scientificName: 'Equus quagga',
                    image: 'https://via.placeholder.com/300x200',
                    status: 'Ít quan tâm',
                    link: 'animals/zebra.html'
                },
                {
                    name: 'Hươu cao cổ',
                    scientificName: 'Giraffa camelopardalis',
                    image: 'https://via.placeholder.com/300x200',
                    status: 'Sắp nguy cấp',
                    link: 'animals/giraffe.html'
                }
            ],
            threats: [
                'Chuyển đổi đất thành đồng cỏ chăn nuôi',
                'Nông nghiệp quy mô lớn',
                'Biến đổi khí hậu',
                'Săn bắn trái phép'
            ],
            conservation: [
                'Thành lập các khu bảo tồn và vườn quốc gia',
                'Quản lý đất bền vững',
                'Phát triển du lịch sinh thái',
                'Chống săn trộm'
            ],
            type: 'terrestrial',
            climate: 'temperate'
        },
        {
            id: 'coral-reef',
            name: 'Rạn san hô',
            image: 'https://ktmt.vnmediacdn.com/stores/news_dataimages/svtt/062020/25/15/in_article/3217_Untitled.png',
            description: 'Rạn san hô là hệ sinh thái biển đa dạng nhất, thường được gọi là "rừng nhiệt đới của đại dương". Chúng chiếm chưa đến 1% đáy biển nhưng là nơi sinh sống của khoảng 25% các loài sinh vật biển.',
            characteristics: [
                'Nước trong, ấm (20-28°C)',
                'Độ mặn ổn định',
                'Ánh sáng dồi dào',
                'Dòng chảy vừa phải',
                'Cấu trúc phức tạp do san hô tạo ra'
            ],
            locations: ['Rạn san hô Great Barrier (Úc)', 'Biển Caribe', 'Ấn Độ Dương', 'Biển Đỏ', 'Tam giác san hô (Đông Nam Á)'],
            animals: [
                {
                    name: 'Cá hề',
                    scientificName: 'Amphiprioninae',
                    image: 'https://via.placeholder.com/300x200',
                    status: 'Ít quan tâm',
                    link: 'animals/clownfish.html'
                },
                {
                    name: 'Rùa biển xanh',
                    scientificName: 'Chelonia mydas',
                    image: 'https://via.placeholder.com/300x200',
                    status: 'Nguy cấp',
                    link: 'animals/green-sea-turtle.html'
                },
                {
                    name: 'Cá mập san hô',
                    scientificName: 'Triaenodon obesus',
                    image: 'https://via.placeholder.com/300x200',
                    status: 'Sắp nguy cấp',
                    link: 'animals/reef-shark.html'
                },
                {
                    name: 'Sao biển',
                    scientificName: 'Asteroidea',
                    image: 'https://via.placeholder.com/300x200',
                    status: 'Ít quan tâm',
                    link: 'animals/starfish.html'
                }
            ],
            threats: [
                'Biến đổi khí hậu và hiện tượng tẩy trắng san hô',
                'Ô nhiễm biển',
                'Đánh bắt quá mức và phương pháp đánh bắt phá hoại',
                'Phát triển ven biển',
                'Du lịch không bền vững'
            ],
            conservation: [
                'Thành lập các khu bảo tồn biển',
                'Giảm phát thải khí nhà kính',
                'Quản lý đánh bắt bền vững',
                'Phát triển du lịch sinh thái có trách nhiệm',
                'Phục hồi san hô'
            ],
            type: 'aquatic',
            climate: 'tropical'
        },
        {
            id: 'tundra',
            name: 'Thảo nguyên Bắc cực',
            image: 'https://kenh14cdn.com/2018/9/28/gettyimages-505298728-15381181812961408022359.jpg',
            description: 'Thảo nguyên Bắc cực là vùng đất lạnh giá nằm giữa rừng taiga và vùng băng vĩnh cửu. Đặc trưng bởi lớp đất đóng băng vĩnh cửu (permafrost), mùa hè ngắn và mùa đông dài, lạnh.',
            characteristics: [
                'Nhiệt độ thấp (trung bình dưới 10°C)',
                'Lượng mưa thấp (150-250mm mỗi năm)',
                'Đất đóng băng vĩnh cửu',
                'Thực vật thấp (rêu, địa y, cỏ)',
                'Mùa sinh trưởng ngắn'
            ],
            locations: ['Bắc Mỹ', 'Bắc Âu', 'Bắc Á', 'Greenland'],
            animals: [
                {
                    name: 'Gấu Bắc cực',
                    scientificName: 'Ursus maritimus',
                    image: 'https://via.placeholder.com/300x200',
                    status: 'Sắp nguy cấp',
                    link: 'animals/polar-bear.html'
                },
                {
                    name: 'Tuần lộc',
                    scientificName: 'Rangifer tarandus',
                    image: 'https://via.placeholder.com/300x200',
                    status: 'Sắp nguy cấp',
                    link: 'animals/reindeer.html'
                },
                {
                    name: 'Cáo Bắc cực',
                    scientificName: 'Vulpes lagopus',
                    image: 'https://via.placeholder.com/300x200',
                    status: 'Ít quan tâm',
                    link: 'animals/arctic-fox.html'
                },
                {
                    name: 'Chim cú tuyết',
                    scientificName: 'Bubo scandiacus',
                    image: 'https://via.placeholder.com/300x200',
                    status: 'Sắp nguy cấp',
                    link: 'animals/snowy-owl.html'
                }
            ],
            threats: [
                'Biến đổi khí hậu và tan băng',
                'Khai thác dầu khí',
                'Ô nhiễm',
                'Phát triển cơ sở hạ tầng'
            ],
            conservation: [
                'Giảm phát thải khí nhà kính',
                'Thành lập các khu bảo tồn',
                'Quản lý khai thác tài nguyên bền vững',
                'Nghiên cứu và giám sát'
            ],
            type: 'terrestrial',
            climate: 'polar'
        },
        {
            id: 'desert',
            name: 'Sa mạc',
            image: 'https://www.vista.gov.vn/vn-uploads/news/2023/8-2023/15-8-2023/0.jpg',
            description: 'Sa mạc là vùng đất khô cằn với lượng mưa rất thấp (dưới 250mm mỗi năm). Mặc dù khắc nghiệt, sa mạc vẫn là nơi sinh sống của nhiều loài động thực vật đã thích nghi với điều kiện khô hạn.',
            characteristics: [
                'Lượng mưa rất thấp (dưới 250mm mỗi năm)',
                'Nhiệt độ dao động lớn giữa ngày và đêm',
                'Độ ẩm thấp',
                'Đất cát hoặc đá',
                'Thực vật thưa thớt'
            ],
            locations: ['Sa mạc Sahara (Bắc Phi)', 'Sa mạc Gobi (Châu Á)', 'Sa mạc Atacama (Nam Mỹ)', 'Sa mạc Kalahari (Nam Phi)', 'Sa mạc Úc'],
            animals: [
                {
                    name: 'Lạc đà',
                    scientificName: 'Camelus dromedarius',
                    image: 'https://via.placeholder.com/300x200',
                    status: 'Ít quan tâm',
                    link: 'animals/camel.html'
                },
                {
                    name: 'Thằn lằn Gila',
                    scientificName: 'Heloderma suspectum',
                    image: 'https://via.placeholder.com/300x200',
                    status: 'Sắp nguy cấp',
                    link: 'animals/gila-monster.html'
                },
                {
                    name: 'Cáo sa mạc',
                    scientificName: 'Vulpes zerda',
                    image: 'https://via.placeholder.com/300x200',
                    status: 'Ít quan tâm',
                    link: 'animals/fennec-fox.html'
                },
                {
                    name: 'Rắn đuôi chuông',
                    scientificName: 'Crotalus',
                    image: 'https://via.placeholder.com/300x200',
                    status: 'Ít quan tâm',
                    link: 'animals/rattlesnake.html'
                }
            ],
            threats: [
                'Biến đổi khí hậu và sa mạc hóa',
                'Khai thác nước ngầm quá mức',
                'Khai thác khoáng sản',
                'Phát triển đô thị và du lịch'
            ],
            conservation: [
                'Quản lý tài nguyên nước bền vững',
                'Thành lập các khu bảo tồn',
                'Phát triển nông nghiệp thích ứng với sa mạc',
                'Phòng chống sa mạc hóa'
            ],
            type: 'terrestrial',
            climate: 'arid'
        },
        {
            id: 'wetland',
            name: 'Đất ngập nước',
            image: 'https://cdn.thuvienphapluat.vn/phap-luat/2022-2/PTT/15032024/he-thong-phan-loai-dat-ngap-nuoc-o-viet-n.jpg',
            description: 'Đất ngập nước là vùng đất bị ngập nước thường xuyên hoặc theo mùa, bao gồm đầm lầy, ao, hồ, sông và vùng ven biển. Chúng đóng vai trò quan trọng trong việc lọc nước, ngăn lũ lụt và là nơi sinh sống của nhiều loài.',
            characteristics: [
                'Đất bão hòa nước thường xuyên hoặc theo mùa',
                'Thực vật thủy sinh phong phú',
                'Đa dạng sinh học cao',
                'Đất giàu chất hữu cơ',
                'Khả năng lọc nước tự nhiên'
            ],
            locations: ['Đồng bằng sông Cửu Long (Việt Nam)', 'Everglades (Mỹ)', 'Pantanal (Brazil)', 'Okavango Delta (Botswana)'],
            animals: [
                {
                    name: 'Cá sấu',
                    scientificName: 'Crocodylus',
                    image: 'https://via.placeholder.com/300x200',
                    status: 'Ít quan tâm đến Nguy cấp (tùy loài)',
                    link: 'animals/crocodile.html'
                },
                {
                    name: 'Hải ly',
                    scientificName: 'Castor canadensis',
                    image: 'https://via.placeholder.com/300x200',
                    status: 'Ít quan tâm',
                    link: 'animals/beaver.html'
                },
                {
                    name: 'Cò trắng',
                    scientificName: 'Ardea alba',
                    image: 'https://via.placeholder.com/300x200',
                    status: 'Ít quan tâm',
                    link: 'animals/egret.html'
                },
                {
                    name: 'Rái cá',
                    scientificName: 'Lutrinae',
                    image: 'https://via.placeholder.com/300x200',
                    status: 'Sắp nguy cấp đến Nguy cấp (tùy loài)',
                    link: 'animals/otter.html'
                }
            ],
            threats: [
                'Phát triển đô thị và nông nghiệp',
                'Ô nhiễm nước',
                'Khai thác quá mức tài nguyên',
                'Biến đổi khí hậu và nước biển dâng',
                'Các loài xâm lấn'
            ],
            conservation: [
                'Bảo vệ và phục hồi đất ngập nước',
                'Quản lý nước bền vững',
                'Kiểm soát ô nhiễm',
                'Giáo dục cộng đồng về tầm quan trọng của đất ngập nước',
                'Thực hiện Công ước Ramsar về Đất ngập nước'
            ],
            type: 'aquatic',
            climate: 'temperate'
        }
    ];

    // Hiển thị danh sách môi trường sống
    function renderHabitatsList() {
        const habitatsListContainer = document.getElementById('habitats-list');
        if (!habitatsListContainer) return;

        habitatsListContainer.innerHTML = '';

        habitatsData.forEach(habitat => {
            const habitatCard = document.createElement('div');
            habitatCard.className = 'habitat-card';
            habitatCard.innerHTML = `
                <div class="habitat-image">
                    <img src="${habitat.image}" alt="${habitat.name}">
                </div>
                <div class="habitat-info">
                    <h3>${habitat.name}</h3>
                    <p>${habitat.description}</p>
                    <div class="habitat-locations">
                        <h4>Vị trí:</h4>
                        <ul>
                            ${habitat.locations.map(location => `<li>${location}</li>`).join('')}
                        </ul>
                    </div>
                    <a href="habitats/${habitat.id}.html" class="button outline-button">Tìm hiểu thêm</a>
                </div>
            `;
            habitatsListContainer.appendChild(habitatCard);
        });
    }

    // Hiển thị bản đồ phân bố môi trường sống
    function renderHabitatMap() {
        const mapContainer = document.getElementById('habitat-map');
        if (!mapContainer) return;

        // Giả lập hiển thị bản đồ
        mapContainer.innerHTML = `
            <div class="map-container">
                <img src="bando.png" class="world-map">
                
                <div class="map-legend">
                    <h3>Chú thích</h3>
                    <ul>
                        <li><span class="legend-color" style="background-color: #228B22;"></span> Rừng nhiệt đới</li>
                        <li><span class="legend-color" style="background-color: #DAA520;"></span> Thảo nguyên</li>
                        <li><span class="legend-color" style="background-color: #1E90FF;"></span> Rạn san hô</li>
                        <li><span class="legend-color" style="background-color: #F0F8FF;"></span> Thảo nguyên Bắc cực</li>
                        <li><span class="legend-color" style="background-color: #F4A460;"></span> Sa mạc</li>
                        <li><span class="legend-color" style="background-color: #6B8E23;"></span> Đất ngập nước</li>
                    </ul>
                </div>
            </div>
        `;
    }

    // Hiển thị bộ lọc môi trường sống
    function setupHabitatFilters() {
        const filterContainer = document.getElementById('habitat-filters');
        if (!filterContainer) return;

        // Tạo các bộ lọc
        const filters = [
            { id: 'all', label: 'Tất cả' },
            { id: 'terrestrial', label: 'Trên cạn' },
            { id: 'aquatic', label: 'Dưới nước' },
            { id: 'tropical', label: 'Nhiệt đới' },
            { id: 'temperate', label: 'Ôn đới' },
            { id: 'polar', label: 'Vùng cực' },
            { id: 'arid', label: 'Khô hạn' }
        ];

        // Hiển thị các bộ lọc
        filterContainer.innerHTML = `
            <div class="filter-buttons">
                ${filters.map(filter => `
                    <button class="filter-button ${filter.id === 'all' ? 'active' : ''}" data-filter="${filter.id}">
                        ${filter.label}
                    </button>
                `).join('')}
            </div>
        `;

        // Xử lý sự kiện khi nhấp vào bộ lọc
        const filterButtons = filterContainer.querySelectorAll('.filter-button');
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Loại bỏ lớp active từ tất cả các nút
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Thêm lớp active cho nút được nhấp
                this.classList.add('active');
                
                // Lấy giá trị bộ lọc
                const filter = this.getAttribute('data-filter');
                
                // Lọc và hiển thị môi trường sống
                filterHabitats(filter);
            });
        });
    }

    // Lọc môi trường sống theo bộ lọc
    function filterHabitats(filter) {
        const habitatsListContainer = document.getElementById('habitats-list');
        if (!habitatsListContainer) return;

        // Xác định các môi trường sống phù hợp với bộ lọc
        let filteredHabitats;
        
        if (filter === 'all') {
            filteredHabitats = habitatsData;
        } else {
            // Lọc theo loại môi trường sống hoặc khí hậu
            filteredHabitats = habitatsData.filter(h => 
                h.type === filter || h.climate === filter
            );
        }

        // Hiển thị các môi trường sống đã lọc
        habitatsListContainer.innerHTML = '';

        if (filteredHabitats.length === 0) {
            habitatsListContainer.innerHTML = '<div class="no-results">Không tìm thấy môi trường sống phù hợp với bộ lọc.</div>';
            return;
        }

        filteredHabitats.forEach(habitat => {
            const habitatCard = document.createElement('div');
            habitatCard.className = 'habitat-card';
            habitatCard.innerHTML = `
                <div class="habitat-image">
                    <img src="${habitat.image}" alt="${habitat.name}">
                </div>
                <div class="habitat-info">
                    <h3>${habitat.name}</h3>
                    <p>${habitat.description}</p>
                    <div class="habitat-locations">
                        <h4>Vị trí:</h4>
                        <ul>
                            ${habitat.locations.map(location => `<li>${location}</li>`).join('')}
                        </ul>
                    </div>
                    <a href="habitats/${habitat.id}.html" class="button outline-button">Tìm hiểu thêm</a>
                </div>
            `;
            habitatsListContainer.appendChild(habitatCard);
        });
    }

    // Hiển thị biểu đồ phân bố động vật theo môi trường sống
    function renderHabitatDistributionChart() {
        const chartContainer = document.getElementById('habitat-distribution-chart');
        if (!chartContainer) return;

        // Dữ liệu cho biểu đồ
        const chartData = {
            labels: ['Rừng nhiệt đới', 'Thảo nguyên', 'Rạn san hô', 'Thảo nguyên Bắc cực', 'Sa mạc', 'Đất ngập nước'],
            datasets: [
                {
                    label: 'Số loài động vật',
                    data: [10000, 5000, 8000, 2000, 3000, 6000],
                    backgroundColor: [
                        '#228B22', // Rừng nhiệt đới
                        '#DAA520', // Thảo nguyên
                        '#1E90FF', // Rạn san hô
                        '#F0F8FF', // Thảo nguyên Bắc cực
                        '#F4A460', // Sa mạc
                        '#6B8E23'  // Đất ngập nước
                    ]
                }
            ]
        };

        // Vẽ biểu đồ (giả lập)
        chartContainer.innerHTML = `
            <div class="chart-placeholder">
                <h3>Biểu đồ phân bố động vật theo môi trường sống</h3>
                <div class="chart-image">
                    <img src="bieudo.png" alt="Biểu đồ phân bố động vật">
                </div>
                <div class="chart-legend">
                    ${chartData.labels.map((label, index) => `
                        <div class="legend-item">
                            <span class="legend-color" style="background-color: ${chartData.datasets[0].backgroundColor[index]};"></span>
                            <span class="legend-label">${label}: ${chartData.datasets[0].data[index].toLocaleString()} loài</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // Cập nhật năm hiện tại trong footer
    function updateCurrentYear() {
        const currentYearElement = document.getElementById('current-year');
        if (currentYearElement) {
            currentYearElement.textContent = new Date().getFullYear();
        }
    }

    // Xử lý nút back-to-top
    function setupBackToTop() {
        const backToTopButton = document.getElementById('back-to-top');
        if (!backToTopButton) return;

        // Hiển thị nút khi cuộn xuống
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });

        // Cuộn lên đầu trang khi nhấp vào nút
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Xử lý menu di động
    function setupMobileMenu() {
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (!mobileMenuButton || !mobileMenu) return;

        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            mobileMenuButton.classList.toggle('active');
        });
    }

    // Khởi tạo các chức năng
    function init() {
        renderHabitatsList();
        renderHabitatMap();
        setupHabitatFilters();
        renderHabitatDistributionChart();
        updateCurrentYear();
        setupBackToTop();
        setupMobileMenu();
    }

    // Gọi hàm khởi tạo
    init();
});