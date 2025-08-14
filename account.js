// Theme toggle functionality
const themeToggle = document.querySelector('.theme-toggle');
const icon = themeToggle.querySelector('i');

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme') || 'light';

// Apply saved theme on page load
document.body.classList.toggle('dark-mode', savedTheme === 'dark');
updateThemeIcon(savedTheme === 'dark');

// Theme toggle click handler
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    updateThemeIcon(isDarkMode);
});

// Update theme icon
function updateThemeIcon(isDarkMode) {
    icon.className = isDarkMode ? 'bx bx-sun' : 'bx bx-moon';
} 