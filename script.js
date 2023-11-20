document.addEventListener("DOMContentLoaded", function() {
    // Top Lottie (Plays Once)
    var animation1 = lottie.loadAnimation({
        container: document.getElementById('lottie1'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'top.json' // Update this path
    });

    // Bottom Lottie (Loops)
    var animation2 = lottie.loadAnimation({
        container: document.getElementById('lottie2'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'bottom.json' // Update this path
    });

    // Play top Lottie once when clicked and then remove the event listener
    var lottie1Container = document.getElementById('lottie1');
    var playAnimation1 = function() {
        animation1.goToAndPlay(0, true);
        audio.play(); // Play the audio
        lottie1Container.removeEventListener('click', playAnimation1);
    };
    lottie1Container.addEventListener('click', playAnimation1);

    // Play/Pause bottom Lottie on click
    document.getElementById('lottie2').addEventListener('click', function() {
        if (animation2.isPaused) {
            animation2.play();
        } else {
            animation2.pause();
        }
    });
});
