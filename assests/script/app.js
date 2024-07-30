// function loader(){
//     let pre_loader=document.getElementById("preloader_html");
//     if(pre_loader.style.display === "none"){
//         pre_loader.style.display = "flex";
//         console.log("Pre Loader Loaded");
//     }else{
//         console.log("Pre Loader Failed");
//     }
// }

// Hamburger Events 
const hamburger = () => {
    let x = document.getElementById("nav_links");
    window.matchMedia(x.classList.add("slide_left"))
    if (window.matchMedia(x.style.display === "none")) {
        x.style.display = "flex";
        console.log("True")
    } else {
        console.log("False")
    }

}

const hamburger_remover = () => {
    let y = document.getElementById("nav_links");
    if (y.style.display === "flex") {
        window.matchMedia(y.style.display = "none");
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

