const listLink = document.getElementById('list-link');

function checkWidth() {
    if (window.matchMedia('(max-width: 990px)').matches) {
        listLink.setAttribute("href", "mobile-cards.html");
        listLink.classList.add("main__a--mobile");
    } else {
        listLink.setAttribute("href", "scheme.html");
        listLink.classList.remove("main__a--mobile");
    }
}

document.addEventListener("DOMContentLoaded", function (event) {
    checkWidth();
});

window.addEventListener("resize", function () {
    checkWidth();
}, true);