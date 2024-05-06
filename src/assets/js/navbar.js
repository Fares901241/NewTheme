try {
    document.addEventListener('DOMContentLoaded', function() {
        let dropdownButton = document.getElementById('dropdownMenuButton');
        let dropdownMenu = document.querySelector('.dropdown-menu');
      
        dropdownButton.addEventListener('click', function(event) {
            event.stopPropagation();
            toggleDropdown();
        });
      
        document.addEventListener('click', function(event) {
            let targetElement = event.target;
            if (!dropdownButton.contains(targetElement) && !dropdownMenu.contains(targetElement)) {
                if (dropdownMenu.classList.contains('show')) {
                    toggleDropdown();
                }
            }
        });
      
        function toggleDropdown() {
            dropdownMenu.classList.toggle('show');
        }
    });    
} catch (error) {
    
}
