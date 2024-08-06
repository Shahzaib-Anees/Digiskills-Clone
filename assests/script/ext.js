const loader = (loadState) => {
    const loader = document.getElementById("loader");
    const loaderIcn = document.getElementById("loader-icon");
    const loaderText = document.getElementById("loader-dynamic-text");
    loaderText.innerText = loadState;
    loaderIcn.classList.add("rotate");
    loader.style.display="flex";
}


// const skillyRobo = (pageImgUrl, parentContainerId) => {
//     const roboContainer = `<div class = robo-cont>
//        <div class="icon">
//          <i class="fa-solid fa-circle-xmark"></i>
//        </div>
//        <div class= "img-container">
//            <img src="${pageImgUrl}" alt="Robo"/>
//        </div>
//     </div>`

//     document.getElementById(`${parentContainerId}`).appendChild(roboContainer);
// }

export { loader /*, skillyRobo*/ };