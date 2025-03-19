document.addEventListener('DOMContentLoaded', function() {
    const anim1 = document.getElementById('anim1');
    const anim2 = document.getElementById('anim2');
    const flowers = document.querySelectorAll('.flowerAnimation');

    // ---- Flower Freeze Before Bloom ----
    flowers.forEach(flower => {
        flower.addEventListener('ready', () => {
            flower.seek(30); // Frame before bloom happens
            flower.pause();
        });
    });

    // ---- Animation switching ----
    function playAnimation1() {
        anim2.pause();
        anim2.style.opacity = '0';
        anim2.style.display = 'none';

        anim1.style.display = 'block';
        anim1.style.opacity = '1';
        anim1.seek(0);
        anim1.play();

        const anim1Duration = 3000;

        setTimeout(() => {
            playAnimation2();
        }, anim1Duration);
    }

    function playAnimation2() {
        anim1.pause();
        anim1.style.opacity = '0';
        anim1.style.display = 'none';

        anim2.style.display = 'block';
        anim2.style.opacity = '1';
        anim2.seek(0);
        anim2.play();

        const anim2Duration = 3000;

        setTimeout(() => {
            playAnimation1();
        }, anim2Duration);
    }

    // Start the loop after everything is loaded
    playAnimation1();
});
