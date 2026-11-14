const currentyear = new Date().getFullYear();
const year = document.getElementById("currentyear");
year.textContent = currentyear

const lastdate = document.getElementById("lastModified")
const lastmodified = document.lastModified
lastdate.textContent = lastmodified

const temperature = 27;
const wind = 10;
const windChillElement = document.getElementById("windchill");
function calculateWindChill(temperature, wind) {
    return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temperature * Math.pow(wind, 0.16);
}
if (temperature <= 10 && wind > 4.8) { 
    const windChillResult = calculateWindChill(temperature, wind);
    windChillElement.textContent = windChillResult.toFixed(2) + "°C";
}
else {
    windChillElement.textContent = "N/A";
}

    