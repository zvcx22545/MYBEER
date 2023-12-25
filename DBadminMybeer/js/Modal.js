document.addEventListener('DOMContentLoaded', function() {
    // Function to handle modal display
    function setupModal(modalId, openButtonId, closeButtonId) {
        var modal = document.getElementById(modalId);
        var openBtn = document.getElementById(openButtonId);
        var closeBtn = document.getElementById(closeButtonId);

        if (openBtn) {
            openBtn.onclick = function() {
                if (modal) modal.style.display = "block";
            };
        }

        if (closeBtn) {
            closeBtn.onclick = function() {
                if (modal) modal.style.display = "none";
            };
        }

        return modal;
    }

    // Setup admin modal
    var adminModal = setupModal('adminModal', 'myBtn', 'cancelBtns');
    
    // Setup logout modal
    var logoutModal = setupModal('LogoutModal', 'modalLogout', 'cancels');

    // When the user clicks anywhere outside of the modals, close them
    window.onclick = function(event) {
        if (event.target == adminModal) {
            adminModal.style.display = "none";
        } else if (event.target == logoutModal) {
            logoutModal.style.display = "none";
        }
    };

    // Logout button action
    var logoutBtn = document.getElementById("LogoutBtn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function() {
            window.location.href = "../login.html";
        });
    }
});
