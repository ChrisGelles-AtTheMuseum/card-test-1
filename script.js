document.addEventListener("DOMContentLoaded", function() {
    // Top Lottie (Plays Once)
    var animation1 = lottie.loadAnimation({
        container: document.getElementById('lottie1'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'path_to_your_first_animation.json' // Update this path
    });

    // Bottom Lottie (Loops)
    var animation2 = lottie.loadAnimation({
        container: document.getElementById('lottie2'),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: 'path_to_your_second_animation.json' // Update this path
    });

    // Play top Lottie once when clicked
    document.getElementById('lottie1').addEventListener('click', function() {
        animation1.goToAndPlay(0, true);
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
