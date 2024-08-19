const profileImgCont = document.getElementById("profile-img-cont");

profileImgCont.addEventListener("mouseenter", (element) => {
    const targetElement = element.target;
    const imgMainCont = targetElement.childNodes[1];
    const overlay = imgMainCont.childNodes[3]
    const icon = overlay.childNodes[1];

    targetElement.classList.add("profile-img-cont-triggered");

    imgMainCont.classList.add("img-container-triggered");

    overlay.style.backgroundColor = "rgba(0,0,0,0.5)"

    icon.style.color = "#c6c5c4";
})


profileImgCont.addEventListener("mouseleave", (element) => {
    const targetElement = element.target;
    const imgMainCont = targetElement.childNodes[1];
    const overlay = imgMainCont.childNodes[3]
    const icon = overlay.childNodes[1];

    targetElement.classList.remove("profile-img-cont-triggered");

    imgMainCont.classList.remove("img-container-triggered");

    overlay.style.backgroundColor = "rgba(0,0,0,0)"

    icon.style.color = "#fff";
})

const getProfileImg = () => {
    const profileImgSaver = document.getElementById("profile-img-saver");
    profileImgSaver.style.display = "flex";
}

const closeProfileImgSave = () => {
    const profileImgSaver = document.getElementById("profile-img-saver");
    profileImgSaver.style.display = "none"
}


