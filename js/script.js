// script.js

$(function () {
    // 1. Notification Bar Animation
    $('.notification-bar').delay(3000).slideDown().delay(5000).slideUp();

    // 2. Icon Hover Effects
    // We use a generic function here to handle all icons cleaner
    $('.floating-box img').hover(
        function() {
            // Mouse Over: Switch to blue version
            var currentSrc = $(this).attr("src");
            if(currentSrc.includes('_logo.png')) {
                 $(this).attr("src", currentSrc.replace("_logo.png", "_blue.png"));
            } else if(currentSrc.includes('_icon.png')) {
                 $(this).attr("src", currentSrc.replace("_icon.png", "_blue.png"));
            }
        }, 
        function() {
            // Mouse Out: Switch back to original (logo or icon)
            var currentSrc = $(this).attr("src");
            // If it was a logo
            if(currentSrc.includes('home_blue')) {
                $(this).attr("src", "images/icons/home_logo.png");
            } else if(currentSrc.includes('email_blue')) {
                 $(this).attr("src", "images/icons/email_logo.png");
            } else {
                // For portfolio, user, download
                $(this).attr("src", currentSrc.replace("_blue.png", "_icon.png"));
            }
        }
    );
});
