function hamburger() {
    let x = document.getElementById("nav_links");
    if (window.matchMedia(x.style.display === "none")) {
        x.style.display = "flex";
        console.log("True")
    } else {
        console.log("False")
    }

}

function hamburger_remover() {
    let y = document.getElementById("nav_links");
    if (y.style.display === "flex") {
        window.matchMedia(y.style.display = "none");
        console.log("removed")
    } else {
        console.log("False")
    }
}
