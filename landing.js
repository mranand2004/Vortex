// Get DOM elements
const loginBtn = document.getElementById('loginBtn');
const profileSection = document.getElementById('profileSection');
const profileBtn = document.getElementById('profileBtn');
const profileDropdown = document.getElementById('profileDropdown');
const logoutBtn = document.getElementById('logoutBtn');
const themeToggler = document.getElementById('themeToggler');

// Check login state on page load
document.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    updateNavbarState(isLoggedIn);
    
    // Set theme
    const isDarkMode = localStorage.getItem('themeColor') === 'dark_mode';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        themeToggler.querySelector('i').className = 'bx bx-moon';
    }
});

// Update navbar based on login state
function updateNavbarState(isLoggedIn) {
    if (isLoggedIn) {
        loginBtn.style.display = 'none';
        profileSection.style.display = 'block';
    } else {
        loginBtn.style.display = 'block';
        profileSection.style.display = 'none';
    }
}

// Toggle profile dropdown
profileBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    profileDropdown.classList.toggle('active');
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!profileSection.contains(e.target)) {
        profileDropdown.classList.remove('active');
    }
});

// Handle logout
logoutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    updateNavbarState(false);
    window.location.reload();
});

// Theme toggle functionality
themeToggler.addEventListener('click', () => {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    localStorage.setItem('themeColor', isDarkMode ? 'dark_mode' : 'light_mode');
    
    // Update icon
    const icon = themeToggler.querySelector('i');
    icon.className = isDarkMode ? 'bx bx-moon' : 'bx bx-sun';
}); 