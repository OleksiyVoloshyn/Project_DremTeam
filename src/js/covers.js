document.addEventListener('DOMContentLoaded', () => {
    const coversSect = document.querySelector('#covers');
    const marqueeRow = document.querySelectorAll('.marquee-item');

    function isViewed(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.bottom > 0 && rect.top < (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    function startAnim() {
        if (isViewed(coversSect)) {
            marqueeRow.forEach(line => {
                line.style.animationPlayState = 'running';
            });
            console.log('running');
        } else {
            marqueeRow.forEach(line => {
                line.style.animationPlayState = 'paused';
            });
            console.log('paused');
        }
    }

    marqueeRow.forEach(line => {
        line.style.animationPlayState = 'paused';
    });
    console.log('paused');

    window.addEventListener('scroll', startAnim);
    window.addEventListener('resize', startAnim);
});
