/**
 * Theme Switcher
 * Handles user theme selection and persistence via localStorage
 */

const THEME_STORAGE_KEY = 'selectedTheme';

const THEMES = [
    { name: 'Blue', value: 'blue-theme' },
    { name: 'Green', value: 'green-theme' },
    { name: 'Red', value: 'red-theme' },
    { name: 'Purple', value: 'purple-theme' },
    { name: 'Yellow', value: 'yellow-theme' },
    { name: 'Dark', value: 'dark-theme' }
];

/**
 * Apply theme to the body element
 */
function applyTheme(themeName) {
    // Remove all theme classes
    THEMES.forEach(theme => {
        document.body.classList.remove(theme.value);
    });
    
    // Add the new theme class
    document.body.classList.add(themeName);
    
    // Save to localStorage
    localStorage.setItem(THEME_STORAGE_KEY, themeName);
    
    // Update the select element if it exists
    const themeSelect = document.getElementById('theme-selector');
    if (themeSelect) {
        themeSelect.value = themeName;
    }
}

/**
 * Get the current or saved theme
 */
function getCurrentTheme() {
    // Check localStorage first
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme) {
        return savedTheme;
    }
    
    // Otherwise, get the current body class theme
    for (let theme of THEMES) {
        if (document.body.classList.contains(theme.value)) {
            return theme.value;
        }
    }
    
    // Fallback to first theme if none found
    return THEMES[0].value;
}

/**
 * Initialize theme switcher
 */
function initThemeSwitcher() {
    const themeSelect = document.getElementById('theme-selector');
    
    if (!themeSelect) return;
    
    // Load and apply saved theme
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme) {
        applyTheme(savedTheme);
    }
    
    // Set up change event listener
    themeSelect.addEventListener('change', (e) => {
        applyTheme(e.target.value);
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThemeSwitcher);
} else {
    initThemeSwitcher();
}
