document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    const currentTheme = savedTheme || systemTheme;

    setTheme(currentTheme);

    themeToggle.addEventListener('click', () => {
        const newTheme = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });

    function setTheme(theme) {
        html.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

        // Update icon
        // We must re-create the icon element because Lucide replaces the <i> tag with an <svg>
        // Using 'sparkles' for dark mode to represent stars/night, 'sun' for light mode
        const iconName = theme === 'dark' ? 'sparkles' : 'sun';
        themeToggle.innerHTML = `<i data-lucide="${iconName}"></i>`;

        // Refresh icons
        if (window.lucide) {
            lucide.createIcons();
        }
    }
    // Experience Item Expansion
    const experienceItems = document.querySelectorAll('.experience-item');

    experienceItems.forEach(item => {
        item.addEventListener('click', () => {
            // Toggle current item
            item.classList.toggle('expanded');
        });
    });
});
