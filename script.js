document.addEventListener("DOMContentLoaded", function() {
    // Top Lottie (Plays Once and then Destroy)
    var animation1 = lottie.loadAnimation({
        container: document.getElementById('lottie1'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'top.json' // Update this path
    });

    var audio = document.getElementById('myAudio'); // Get the audio element

    // Bottom Lottie (Loops)
    var animation2 = lottie.loadAnimation({
        container: document.getElementById('lottie2'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'bottom.json' // Update this path
    });

    // Event listener for the top Lottie
    document.getElementById('lottie1').addEventListener('click', function() {
        animation1.goToAndPlay(0, true);
        audio.play(); // Play the audio
    });

    // Event listener for when top Lottie animation completes
    animation1.addEventListener('complete', function() {
        animation1.destroy(); // Destroy the animation
        // Audio will continue playing
    });

    // Play/Pause bottom Lottie on click
    document.getElementById('lottie2').addEventListener('click', function() {
        if (animation2.isPaused) {
            animation2.play();
        } else {
            animation2.pause();
        }
    });
});
