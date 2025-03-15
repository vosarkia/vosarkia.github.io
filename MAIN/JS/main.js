// Add event listeners for button clicks to toggle menu visibility
document.getElementById("government-btn").addEventListener("click", function() {
    toggleMenu("government-menu");
});
document.getElementById("departments-btn").addEventListener("click", function() {
    toggleMenu("departments-menu");
});
document.getElementById("constitution-btn").addEventListener("click", function() {
    toggleMenu("constitution-menu");
});

// Function to toggle menu visibility
function toggleMenu(menuId) {
    // Close all menus
    const allMenus = document.querySelectorAll(".menu-dropdown");
    allMenus.forEach(menu => {
        if (menu.id !== menuId) {
            menu.style.display = "none";
        }
    });

    // Toggle the clicked menu
    const menu = document.getElementById(menuId);
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}
