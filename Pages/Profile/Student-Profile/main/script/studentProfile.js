const countryOperations = [
    {
        countryName: "Afghanistan",
        nationality: "Afghan",
        countryCallCode: 93,
        avaliableOperators: []
    },
    {
        countryName: "Albania",
        nationality: "Albanian",
        countryCallCode: 355,
        avaliableOperators: []
    },
    {
        countryName: "Algeria",
        nationality: "Algerian",
        countryCallCode: 355,
        avaliableOperators: []
    },
    {
        countryName: "American Samoa",
        nationality: "American Samoan",
        countryCallCode: 684,
        avaliableOperators: []
    },
    {
        countryName: "Andorra",
        nationality: "Andorran",
        countryCallCode: 376,
        avaliableOperators: []
    },
    {
        countryName: "Angola",
        nationality: "Angolan",
        countryCallCode: 244,
        avaliableOperators: []
    },
    {
        countryName: "Anguilla",
        nationality: "Anguillan",
        countryCallCode: 1264,
        avaliableOperators: []
    },
    {
        countryName: "Antarctica (Casey Base)",
        nationality: "Antarctican",
        countryCallCode: 67212,
        avaliableOperators: []
    },
    {
        countryName: "Antarctica (Devision Station)",
        countryCallCode: 67210,
        avaliableOperators: []
    },
    {
        countryName: "Antarctica (MacQuarie Station)",
        countryCallCode: 67213,
        avaliableOperators: []
    },
    {
        countryName: "Antarctica (Mawson Station)",
        countryCallCode: 67211,
        avaliableOperators: []
    },
    {
        countryName: "Antarctica (Scott Base)",
        countryCallCode: 64240,
        avaliableOperators: []
    },
    {
        countryName: "Antigua",
        nationality: "Antiguan",
        countryCallCode: 1268,
        avaliableOperators: []
    },
    {
        countryName: "Argentina",
        nationality: "Argeninian",
        countryCallCode: 54,
        avaliableOperators: []
    },
    {
        countryName: "Armenia",
        nationality: "Armenian",
        countryCallCode: 374,
        avaliableOperators: []
    },
    {
        countryName: "Aruba",
        nationality: "Aruban",
        countryCallCode: 297,
        avaliableOperators: []
    },
    {
        countryName: "Ascension Island",
        countryCallCode: 247,
        avaliableOperators: []
    },
    {
        countryName: "Australia",
        nationality: "Australian",
        countryCallCode: 61,
        avaliableOperators: []
    },
    {
        countryName: "Austria",
        nationality: "Austrian",
        countryCallCode: 43,
        avaliableOperators: []
    },
    {
        countryName: "Austria (Vienna)",
        countryCallCode: 444,
        avaliableOperators: []
    },
    {
        countryName: "Azerbaijan",
        nationality: "Azerbaijani",
        countryCallCode: 994,
        avaliableOperators: []
    }
]

const traineeCitySelect = document.getElementById("trainee-city");
const traineeCityTextInputField = document.getElementById("tranee-city-input-text");
const traineeCountrySelect = document.getElementById("trainee-country");
const traineeNationalitySelect = document.getElementById("trainee-nationality");

for (let objects of countryOperations) {
    let countryOptions = `<option value = "${objects.countryName}">${objects.countryName}</option>`
    const nationalityOptions = `<option value = "${objects.nationality}">${objects.nationality}</option>`
    if (!objects.nationality) {
        continue;
    }
    traineeCountrySelect.innerHTML += countryOptions;
    traineeNationalitySelect.innerHTML += nationalityOptions;
    
    if (objects.avaliableOperators.length === 0) {
        traineeCitySelect.style.display = "none";
        traineeCityTextInputField.style.display = "block";
    } else {
        traineeCitySelect.style.display = "block";
        traineeCityTextInputField.style.display = "none";
    }
}


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

const monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const brDateDaySelect = document.getElementById("trainee-birth-day");
const brMonthSelect = document.getElementById("trainee-birth-month");
const brYearSelect = document.getElementById("trainee-birth-year");
for (let i = 1; i < 32; ++i) {
    let days = i < 10 ? "0" + i : i;
    let selectOptions = `<option value = "${days}">
     ${days}
   </option>`
    brDateDaySelect.insertAdjacentHTML("beforeend", selectOptions);
}
for (let i = 0; i < 12; ++i) {
    let month = monthsArray[i];
    let selectOptions = `<option value = "${month}">
     ${month}
   </option>`

    brMonthSelect.insertAdjacentHTML("beforeend", selectOptions);
}

for (let i = 1930; i < 2010; ++i) {
    let year = i;
    let selectOptions = `<option value = "${year}">
     ${year}
   </option>`

    brYearSelect.insertAdjacentHTML("beforeend", selectOptions);
}