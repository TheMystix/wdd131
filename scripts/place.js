let temperature = 32; // °F
let windSpeed = 10;   // mph
let windChill;

document.getElementById("temperature").textContent = temperature + "°F";
document.getElementById("windspeed").textContent = windSpeed + " mph";

if (temperature <= 50 && windSpeed > 3) {
    let part1 = 35.74;
    let part2 = 0.6215 * temperature;
    let part3 = 35.75 * Math.pow(windSpeed, 0.16);
    let part4 = 0.4275 * temperature * Math.pow(windSpeed, 0.16);

    windChill = part1 + part2 - part3 + part4;
    windChill = Math.round(windChill * 10) / 10;

    document.getElementById("windchill").textContent = + windChill + "°F";
} else {
    document.getElementById("windchill").textContent = "none";
}