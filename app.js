// Sound Effect Function
function playSound() {
    const sound = document.getElementById("clickSound");
    sound.currentTime = 0; 
    sound.play().catch(error => console.log("Sound autoplay blocked by browser"));
}

// Add sound to anywhere user clicks
document.addEventListener('mousedown', playSound);
document.addEventListener('touchstart', playSound);

// Splash Screen Logic (3 Seconds)
window.onload = function() {
    setTimeout(() => {
        const splash = document.getElementById("splash");
        const mainScreen = document.getElementById("main-screen");

        // Fade out splash
        splash.style.opacity = "0";

        setTimeout(() => {
            splash.style.display = "none";
            mainScreen.style.display = "block";
            
            // Fade in main screen
            setTimeout(() => {
                mainScreen.style.opacity = "1";
            }, 50);

        }, 500); // Wait for fade out animation

    }, 3000); // 3 seconds timer
};

// Checkbox Validation Logic
function checkTerms(loginType) {
    const isChecked = document.getElementById('termsCheckbox').checked;
    
    if (!isChecked) {
        alert("Please agree to the Terms of Service and Privacy Policy first!");
    } else {
        alert(loginType + " Login Initialized! (Backend work pending)");
        // Yahan par hum baad mein Firebase ka code lagayenge
    }
}
