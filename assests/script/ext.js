const loader = (loadState) => {
    const loaderIcn = document.getElementById("loader-icon");
    const loaderText = document.getElementById("loader-dynamic-text");
    loaderText.innerText = loadState;
    loaderIcn.classList.add("rotate");
}


export { loader };