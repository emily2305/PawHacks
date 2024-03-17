    // Define the loginUser function
    function loginUser() {
        // Redirect user to home.html
        window.location.href = "home.html";
    }

    // Add event listener to the form
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        // Prevent default form submission
        event.preventDefault();
        
        // Call the loginUser function
        loginUser();
    });