// Get the modal
var modal = document.getElementById('adminModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the cancel button
var cancelBtn = document.getElementById("cancelBtns");

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x) or the cancel button, close the modal
 cancelBtn.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// Modal popup Logout
var Logoutmodal = document.getElementById('LogoutModal');

// Get the button that opens the modal
var Logoutbtn = document.getElementById("modalLogout");

// Get the cancel button
var cancelsBtn = document.getElementById("cancels");

// When the user clicks on the button, open the modal
Logoutbtn.onclick = function() {
    Logoutmodal.style.display = "block";
}

// When the user clicks on <span> (x) or the cancel button, close the Logoutmodal
 cancelsBtn.onclick = function() {
    Logoutmodal.style.display = "none";
}

// When the user clicks anywhere outside of the Logoutmodal, close it
window.onclick = function(event) {
    if (event.target == Logoutmodal) {
        Logoutmodal.style.display = "none";
    }
}
