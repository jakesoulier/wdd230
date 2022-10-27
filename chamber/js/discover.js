const images = document.querySelectorAll("[data-src]");

function loadImage(img) {
    const src = img.getAttribute("data-src");
    if(!src) {
        return
    }
    img.src = src;
}

const imgOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px 100px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            // document.getElementById('landsite').style.backgroundColor = "green"
            // document.getElementsByClassName('landsite').style.animationPlayState = "paused"
            // animation-play-state: paused;
            return
        } else {
            loadImage(entry.target);
            imgObserver.unobserve(entry.target);

        }
    })
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image)
});