document.addEventListener("DOMContentLoaded", function() {
    var animation1 = lottie.loadAnimation({
        container: document.getElementById('lottie1'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'top.json' // Update this path
    });

    var animation2 = lottie.loadAnimation({
        container: document.getElementById('lottie2'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'bottom.json' // Update this path
    });

    document.getElementById('container').addEventListener('click', function() {
        animation2.play();
        animation1.play();
    });
});
