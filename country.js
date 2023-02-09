class Country {
    constructor(name, language, greeting, colors) {
        this.name = name;
        this.lang = language;
        this.greeting = greeting;
        this.colors = colors;
    }
}
let usa = new Country("USA", "English", "Hello World!", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["green", "white", "red"]);
let yemen = new Country("Yemen", "Arabic", "marhaban bialealam!", ["red", "white", "black"])
let botswana = new Country("Botswana", "Setswana", "Dumela!", ["lightblue", "black", "white"]);



function SwitchCountry() {
    document.getElementById("Name").style.color = "black";
    document.getElementById("Lang").style.color = "black";
    document.getElementById("Greet").style.color = "black";
    let dropDown = document.getElementById("CountryList");
    let input = dropDown.options[dropDown.selectedIndex].value;
    let country;



    if (input === "" || input === "USA") {
        country = usa;
        SetCountryColorsAndValues(country);

    }
    else if (input === "Mexico") {
        country = mexico;
        SetCountryColorsAndValues(country);
    }
    else if (input === "Yemen") {
        country = yemen;
        document.getElementById("Name").style.color = "white";
        document.getElementById("Lang").style.color = "white";
        document.getElementById("Greet").style.color = "white";

        SetCountryColorsAndValues(country);
    }
    else if (input === "Botswana") {
        country = botswana;
        SetCountryColorsAndValues(country);
    }

}

function SetCountryColorsAndValues(country) {

    let countryColor1 = document.getElementById("Color1");
    let countryColor2 = document.getElementById("Color2");
    let countryColor3 = document.getElementById("Color3");

    let countryName = document.getElementById("Name");
    let countryLanguage = document.getElementById("Lang");
    let countryGreeting = document.getElementById("Greet");

    countryColor1.style.background = country.colors[0];
    countryColor2.style.background = country.colors[1];
    countryColor3.style.background = country.colors[2];

    countryName.innerHTML = country.name;
    countryLanguage.innerHTML = country.lang;
    countryGreeting.innerHTML = country.greeting;



}