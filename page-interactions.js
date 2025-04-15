document.addEventListener('DOMContentLoaded', function() {
  // FAQ Accordion (for contact.html)
  const faqItems = document.querySelectorAll('.faq-item');
  
  if (faqItems.length > 0) {
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      
      question.addEventListener('click', () => {
        // Close all other items
        faqItems.forEach(otherItem => {
          if (otherItem !== item && otherItem.classList.contains('active')) {
            otherItem.classList.remove('active');
          }
        });
        
        // Toggle current item
        item.classList.toggle('active');
      });
    });
  }
  
  // Tabs functionality (for take-action.html)
  const tabs = document.querySelectorAll('.tab');
  const tabPanes = document.querySelectorAll('.tab-pane');
  
  if (tabs.length > 0 && tabPanes.length > 0) {
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Remove active class from all tabs
        tabs.forEach(t => t.classList.remove('active'));
        
        // Add active class to clicked tab
        tab.classList.add('active');
        
        // Hide all tab panes
        tabPanes.forEach(pane => pane.classList.remove('active'));
        
        // Show the corresponding tab pane
        const tabId = tab.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
      });
    });
  }
  
  // Donation amount selection (for take-action.html)
  const donationAmounts = document.querySelectorAll('.donation-amount');
  
  if (donationAmounts.length > 0) {
    donationAmounts.forEach(amount => {
      amount.addEventListener('click', () => {
        // Remove active class from all amounts
        donationAmounts.forEach(a => a.classList.remove('active'));
        
        // Add active class to clicked amount
        amount.classList.add('active');
      });
    });
  }
  
  // Set current year in footer
  const currentYearElement = document.getElementById('current-year');
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }
  
  // Mobile menu functionality
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
  }
});