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
    if ((profileClickCount % 2) === 0) {
        profilePannel.style.display = "none";
    } else {
        profilePannel.style.display = "flex"
    }
}

let hamClickCount = 0;
const showFullNav = () => {
    hamClickCount++;
    const colNavContainer = document.getElementById("col-nav-cont");
    let colNavItemCont = document.querySelectorAll(".col-nav-item");
    const colNavTxt = document.querySelectorAll(".col-nav-txt");
    if ((hamClickCount % 2) !== 0) {
        colNavContainer.style.width = "fit-content";
        colNavItemCont.forEach((element) => {
            if (element.hasAttribute("onmouseenter") && element.hasAttribute("onmouseleave")) {
                element.removeAttribute("onmouseenter");
                element.removeAttribute("onmouseleave");
                console.log("Attributes Removed Successfully");
            } else {
                console.log("Attributes could not removed");

            }
        })

        colNavTxt.forEach((text) => {
            text.style.display = "flex";
            text.classList.add("flex-start-txt")
        })
    } else {
        colNavItemCont.forEach((element) => {
            if (!element.hasAttribute("onmouseenter") && !element.hasAttribute("onmouseleave")) {
                element.setAttribute("onmouseenter", "colNavItemEnter(this)");
                element.setAttribute("onmouseleave", "colNavItemLeave(this)");
                console.log("Attributes Set Successfully");
            } else {
                console.log("Attributes could not settled");

            }
            colNavTxt.forEach((text) => {
                text.style.display = "none";
                text.classList.remove("flex-start-txt");
                text.classList.add("col-hidden-txt");
            })
        })
        for (let text of colNavTxt) {
            text.classList.remove("col-hidden-txt");
            text.classList.add("col-nav-txt");
        }
        colNavContainer.style.width = "40px";
    }
}

const colNavItemEnter = (element) => {
    const colText = element.childNodes[3];
    colText.style.display = "flex";
    element.classList.add("col-nav-item-ext-class");
    element.classList.add("col-nav-item-border");

}

const colNavItemLeave = (element) => {
    const colText = element.childNodes[3];
    colText.style.display = "none";
    element.classList.remove("col-nav-item-ext-class");
    element.classList.remove("col-nav-item-border");
}

let mobClickCounter = 0;
const showmobNav = () => {
    mobClickCounter++;
    const colNavContainer = document.getElementById("col-nav-cont");
    const colNavTxt = document.querySelectorAll(".col-nav-txt");
    colNavTxt.forEach((text) => {
        text.style.display = "flex";
        text.classList.length = 0;
        text.classList.add("mobile-nav-txt");
    })
    if ((mobClickCounter % 2) !== 0) {
        colNavContainer.style.display = "flex";
        colNavContainer.classList.add("slide_in_left");
        colNavContainer.style.width = "fit-content"
    } else {
        colNavContainer.style.display = "none"
    }
}