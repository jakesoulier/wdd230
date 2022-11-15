const images = document.querySelectorAll("[data-src]");

function loadImage(img) {
    const src = img.getAttribute("data-src");
    if(!src) {
        return
    }
    img.src = src;
}

const imgOptions = {
    threshold: 1,
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


const visit = document.getElementById("visit");
let visitText = "Welcome Newcomer!"
let now = new Date();
let lastVisit = window.localStorage.getItem('last-vist');
if (lastVisit != null) {
    let lastVisitTime = new Date(lastVisit);
    let timeDifference = Math.floor((present.getTime() - lastVisitTime.getTime()) / (24 * 60 * 60 * 1000));
    visitText = `You were last here ${timeDifference} days ago`
};

visit.textContent = visitText;
window.localStorage.setItem("last-visit", present.toString());