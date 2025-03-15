document.querySelectorAll('.nav-bar li').forEach(function(menuItem) {
    menuItem.addEventListener('click', function(event) {
        event.preventDefault();
        console.log("Menu clicked!");  // Debugging line
        
        const dropdown = this.querySelector('.dropdown');
        if (dropdown) {
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        }
    });
});
