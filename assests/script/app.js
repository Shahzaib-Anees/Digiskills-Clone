// Hamburger Events 
const hamburger = () => {
    let navLinks = document.getElementById("nav_links");
    window.matchMedia(navLinks.classList.add("slide_in_left"))
    if (window.matchMedia(navLinks.style.display === "none")) {
        navLinks.style.display = "flex";
        console.log("True")
    } else {
        console.log("False")
    }

}

const hamburger_remover = () => {
    let navLinks = document.getElementById("nav_links");
    if (navLinks.style.display === "flex") {
        window.matchMedia(navLinks.style.display = "none");
        console.log("removed")
    } else {
        console.log("False")
    }
}
// Mouse Over Function for Extra Links
// function box_visibility(){
//     let box = document.getElementById("link_cart")
//     if(box.style.display === "none"){
//         box.style.display = "flex";
//         console.log("True");
//     }else{
//         console.log("Failed");
//     }
// }
