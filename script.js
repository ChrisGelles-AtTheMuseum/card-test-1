document.addEventListener("DOMContentLoaded", function() {
    // Top Lottie (Plays Once)
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

    // Function to play top Lottie and audio once
    var playAnimation1 = function() {
        animation1.goToAndPlay(0, true);
        audio.play(); // Play the audio
    };

    // Event listener for the top Lottie
    var lottie1Container = document.getElementById('lottie1');
    lottie1Container.addEventListener('click', function() {
        playAnimation1();
        // Remove the event listener after the first click
        lottie1Container.removeEventListener('click', playAnimation1);
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
