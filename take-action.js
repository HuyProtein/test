document.addEventListener('DOMContentLoaded', function() {
    // Tab functionality
    initTabs();
    
    // Donation amount selection
    initDonationAmounts();
    
    // Donation form handling
    initDonationForm();
    
    // Mobile menu functionality
    initMobileMenu();
    
    // Set current year in footer
    setCurrentYear();
    
    // Add scroll animations
    initScrollAnimations();
});

/**
 * Initialize tab functionality
 */
function initTabs() {
    const tabs = document.querySelectorAll('.tab');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Hide all tab panes
            tabPanes.forEach(pane => {
                pane.classList.remove('active');
                // Add fade-out animation
                pane.style.opacity = 0;
            });
            
            // Show the corresponding tab pane
            const tabId = tab.getAttribute('data-tab');
            const activePane = document.getElementById(tabId);
            activePane.classList.add('active');
            
            // Add fade-in animation
            setTimeout(() => {
                activePane.style.opacity = 1;
            }, 50);
        });
    });
}

/**
 * Initialize donation amount selection
 */
function initDonationAmounts() {
    const donationAmounts = document.querySelectorAll('.donation-amount');
    let customAmountField = null;
    
    donationAmounts.forEach(amount => {
        amount.addEventListener('click', () => {
            // Remove active class from all amounts
            donationAmounts.forEach(a => a.classList.remove('active'));
            
            // Add active class to clicked amount
            amount.classList.add('active');
            
            // Handle "Other" amount option
            if (amount.textContent.trim() === 'Khác') {
                // If custom field doesn't exist, create it
                if (!customAmountField) {
                    customAmountField = document.createElement('input');
                    customAmountField.type = 'text';
                    customAmountField.id = 'custom-amount';
                    customAmountField.placeholder = 'Nhập số tiền (VNĐ)';
                    customAmountField.className = 'custom-amount-input';
                    customAmountField.style.width = '100%';
                    customAmountField.style.padding = '12px 15px';
                    customAmountField.style.marginTop = '10px';
                    customAmountField.style.border = '1px solid var(--light-gray)';
                    customAmountField.style.borderRadius = 'var(--border-radius)';
                    
                    // Insert after donation amounts
                    const donationAmountsContainer = document.querySelector('.donation-amounts');
                    donationAmountsContainer.after(customAmountField);
                } else {
                    // Show existing field
                    customAmountField.style.display = 'block';
                }
            } else if (customAmountField) {
                // Hide custom field if another amount is selected
                customAmountField.style.display = 'none';
            }
        });
    });
}

/**
 * Initialize donation form handling
 */
function initDonationForm() {
    const donationForm = document.getElementById('donation-form');
    
    if (donationForm) {
        donationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get selected amount
            let amount = '';
            const activeAmount = document.querySelector('.donation-amount.active');
            
            if (activeAmount.textContent.trim() === 'Khác') {
                const customAmountField = document.getElementById('custom-amount');
                amount = customAmountField ? customAmountField.value : '';
            } else {
                amount = activeAmount.textContent.trim();
            }
            
            // Get selected project
            const project = document.getElementById('donation-project').value;
            
            // Validate form
            if (!amount) {
                showMessage('Vui lòng chọn hoặc nhập số tiền ủng hộ', 'error');
                return;
            }
            
            // In a real application, you would send this data to a server
            // For demo purposes, we'll just show a success message
            showMessage('Cảm ơn bạn đã ủng hộ ' + amount + ' cho dự án ' + getProjectName(project), 'success');
            
            // Reset form
            donationForm.reset();
            
            // Hide custom amount field if visible
            const customAmountField = document.getElementById('custom-amount');
            if (customAmountField) {
                customAmountField.style.display = 'none';
            }
            
            // Reset active donation amount to default
            document.querySelectorAll('.donation-amount').forEach((btn, index) => {
                btn.classList.toggle('active', index === 3); // Default to 1,000,000 VND
            });
        });
    }
}

/**
 * Get project name from value
 */
function getProjectName(projectValue) {
    const projectMap = {
        'all': 'Tất cả các dự án',
        'tiger': 'Bảo tồn hổ Đông Dương',
        'elephant': 'Bảo vệ voi châu Á',
        'marine': 'Bảo tồn sinh vật biển',
        'forest': 'Bảo vệ rừng nhiệt đới'
    };
    
    return projectMap[projectValue] || projectValue;
}

/**
 * Show message to user
 */
function showMessage(message, type) {
    // Create message element if it doesn't exist
    let messageElement = document.getElementById('message-container');
    
    if (!messageElement) {
        messageElement = document.createElement('div');
        messageElement.id = 'message-container';
        messageElement.style.position = 'fixed';
        messageElement.style.top = '20px';
        messageElement.style.right = '20px';
        messageElement.style.padding = '15px 20px';
        messageElement.style.borderRadius = 'var(--border-radius)';
        messageElement.style.boxShadow = 'var(--box-shadow)';
        messageElement.style.zIndex = '1000';
        messageElement.style.transition = 'all 0.3s ease';
        messageElement.style.opacity = '0';
        messageElement.style.transform = 'translateY(-20px)';
        document.body.appendChild(messageElement);
    }
    
    // Set message style based on type
    if (type === 'success') {
        messageElement.style.backgroundColor = '#d1fae5';
        messageElement.style.color = '#059669';
        messageElement.style.borderLeft = '4px solid #059669';
    } else if (type === 'error') {
        messageElement.style.backgroundColor = '#fee2e2';
        messageElement.style.color = '#ef4444';
        messageElement.style.borderLeft = '4px solid #ef4444';
    }
    
    // Set message content
    messageElement.textContent = message;
    
    // Show message with animation
    setTimeout(() => {
        messageElement.style.opacity = '1';
        messageElement.style.transform = 'translateY(0)';
    }, 10);
    
    // Hide message after 3 seconds
    setTimeout(() => {
        messageElement.style.opacity = '0';
        messageElement.style.transform = 'translateY(-20px)';
    }, 3000);
}

/**
 * Initialize mobile menu functionality
 */
function initMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
            
            // Toggle menu icon
            const menuIcon = mobileMenuButton.querySelector('.menu-icon');
            if (menuIcon) {
                menuIcon.classList.toggle('open');
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenuButton.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.remove('open');
                
                const menuIcon = mobileMenuButton.querySelector('.menu-icon');
                if (menuIcon) {
                    menuIcon.classList.remove('open');
                }
            }
        });
    }
}

/**
 * Set current year in footer
 */
function setCurrentYear() {
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
}

/**
 * Initialize scroll animations
 */
function initScrollAnimations() {
    // Add fade-in animation to elements when they come into view
    const animateElements = [
        '.take-action-hero',
        '.section-header',
        '.action-card',
        '.donate-section',
        '.volunteer-opportunity',
        '.advocacy-action',
        '.current-campaigns',
        '.join-us-section'
    ];
    
    // Create IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Observe elements
    animateElements.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            // Add initial styles
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            
            // Add class for animation completion
            element.addEventListener('transitionend', () => {
                element.style.transform = '';
            });
            
            // Observe element
            observer.observe(element);
        });
    });
    
    // Add animation-in class handler
    document.addEventListener('animationend', (e) => {
        if (e.target.classList.contains('animate-in')) {
            e.target.style.opacity = '1';
            e.target.style.transform = 'translateY(0)';
        }
    });
    
    // Add back-to-top button functionality
    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });
        
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

/**
 * Add custom CSS for animations
 */
function addAnimationStyles() {
    const styleElement = document.createElement('style');
    styleElement.textContent = `
        .animate-in {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        .animate-in.visible {
            opacity: 1;
            transform: translateY(0);
        }
        
        .tab-pane {
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .tab-pane.active {
            opacity: 1;
        }
        
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .menu-icon.open::before {
            transform: rotate(45deg) translate(4px, 4px);
        }
        
        .menu-icon.open::after {
            transform: rotate(-45deg) translate(4px, -4px);
        }
        
        .menu-icon.open {
            background-color: transparent;
        }
    `;
    
    document.head.appendChild(styleElement);
}

// Add animation styles when DOM is loaded
document.addEventListener('DOMContentLoaded', addAnimationStyles);