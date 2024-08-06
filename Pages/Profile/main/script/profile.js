let sideClickCount = 0;

document.body.addEventListener("load", () => {

})
const showPannel = () => {
    sideClickCount++;
    const pannelCont = document.getElementById("pannel-cont");
    if ((sideClickCount % 2) === 0) {
        pannelCont.style.display = "none";
        pannelCont.classList.remove("slide_in_right");
    } else {
        pannelCont.style.display = "flex";
        pannelCont.classList.add("slide_in_right")
        console.log("View Pannel");
    }
}

let profileClickCount = 0;
const showProfilePannel = () => {
    profileClickCount++;
    const profilePannel = document.getElementById("profile-pannel");
    if((profileClickCount % 2) === 0){
        profilePannel.style.display = "none";
    }else{
        profilePannel.style.display = "flex"
    }
}