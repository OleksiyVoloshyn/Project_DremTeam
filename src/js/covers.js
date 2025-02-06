const coverSect = document.querySelector("#covers");

if (coverSect) {
    const options = {
        root: null,
        rootMargin: "100px",
        threshold: 0.5,
    };

    const obsFunc = (entries) => {
        const isVisible = entries.some(entry => entry.isIntersecting);
        if (isVisible) {
            startAnim();
        } else {
            stopAnim();
        }
    };

    function stopAnim() {
        document.querySelectorAll(".covers-img").forEach(slide => 
            slide.classList.remove("animation")
        );
    }

    function startAnim() {
        document.querySelectorAll(".covers-img").forEach(slide => 
            slide.classList.add("animation")
        );
    }

    const obs = new IntersectionObserver(obsFunc, options);
    obs.observe(coverSect);
} else {
    console.error("Element #covers not found");
}
