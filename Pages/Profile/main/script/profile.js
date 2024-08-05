let clickCount = 0;
const showPannel = () => {
    clickCount++;
    const pannelCont = document.getElementById("pannel-cont");
    if ((clickCount % 2) === 0) {
        pannelCont.style.display = "none";
        pannelCont.classList.remove("slide_in_right");
    } else {
        pannelCont.style.display = "flex";
        pannelCont.classList.add("slide_in_right")
        console.log("View Pannel");
    }
}