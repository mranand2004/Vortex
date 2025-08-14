// Get form elements
const loginForm = document.querySelector('.login-form');
const signupForm = document.querySelector('.signup-form');
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

// Tab switching functionality
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked button and corresponding content
        button.classList.add('active');
        const tabId = button.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// Handle login form submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = loginForm.querySelector('input[type="email"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;
    
    // Here you would typically make an API call to verify credentials
    // For demo purposes, we'll just check if fields are filled
    if (email && password) {
        // Store login state (in a real app, you'd store a token)
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', email);
        
        // Redirect to home page
        window.location.href = 'index.html';
    } else {
        alert('Please fill in all fields');
    }
});

// Handle signup form submission
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = signupForm.querySelector('input[type="text"]').value;
    const email = signupForm.querySelector('input[type="email"]').value;
    const password = signupForm.querySelector('input[type="password"]').value;
    
    // Here you would typically make an API call to create account
    // For demo purposes, we'll just check if fields are filled
    if (name && email && password) {
        // Store signup state (in a real app, you'd store a token)
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userName', name);
        
        // Redirect to home page
        window.location.href = 'index.html';
    } else {
        alert('Please fill in all fields');
    }
});

// Check login state on page load
document.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
        window.location.href = 'index.html';
    }
});

// Social login button handlers
const googleBtn = document.querySelector('.social-btn.google');
const orcidBtn = document.querySelector('.social-btn.orcid');

googleBtn.addEventListener('click', () => {
    // Implement Google OAuth login
    console.log('Google login clicked');
});

orcidBtn.addEventListener('click', () => {
    // Implement ORCID login
    console.log('ORCID login clicked');
});

// Password visibility toggle (optional)
const passwordInputs = document.querySelectorAll('input[type="password"]');
passwordInputs.forEach(input => {
    const wrapper = input.parentElement;
    const toggleBtn = document.createElement('button');
    toggleBtn.type = 'button';
    toggleBtn.className = 'password-toggle';
    toggleBtn.innerHTML = '<i class="bx bx-show"></i>';
    
    wrapper.style.position = 'relative';
    toggleBtn.style.position = 'absolute';
    toggleBtn.style.right = '10px';
    toggleBtn.style.top = '50%';
    toggleBtn.style.transform = 'translateY(-50%)';
    toggleBtn.style.background = 'none';
    toggleBtn.style.border = 'none';
    toggleBtn.style.cursor = 'pointer';
    toggleBtn.style.color = '#666';
    
    wrapper.appendChild(toggleBtn);

    toggleBtn.addEventListener('click', () => {
        const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
        input.setAttribute('type', type);
        toggleBtn.innerHTML = type === 'password' ? '<i class="bx bx-show"></i>' : '<i class="bx bx-hide"></i>';
    });
}); 