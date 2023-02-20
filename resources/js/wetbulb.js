const temp = Number(window.prompt("What is the current temperature?"));
const relHum = Number(window.prompt("What is the relative humidity?"));

let wetBulbTemp;

function wetBulb(temp, relHum) {
  wetBulbTemp = (temp * (Math.atan(0.152 * (relHum + 8.3136) ** (1/2))) + (Math.atan(temp + relHum)) - (Math.atan(relHum - 1.6763)) + (0.00391838 * relHum ** (3/2)) * (Math.atan(0.0231 * relHum)) - 4.686);
  return wetBulbTemp.toFixed(2);
}

document.getElementById('temp').innerHTML = temp;
document.getElementById('relHum').innerHTML = relHum;
document.getElementById('wetbulb').innerHTML = wetBulb(temp, relHum);
document.getElementById('flag').innerHTML = '<i class="fa-solid fa-flag"></i>';


if (wetBulbTemp >= 82) {
    document.getElementById("flag").style.color = 'black';
} else if (wetBulbTemp < 82 && wetBulbTemp >= 73) {
    document.getElementById("flag").style.color = 'red';
} else if (wetBulbTemp < 73 && wetBulbTemp >= 65) {
    document.getElementById("flag").style.color = 'yellow';
} else if (wetBulbTemp < 65 && wetBulbTemp >= 50) {
    document.getElementById("flag").style.color = 'green';
} else {
    document.getElementById("flag").style.color = 'white';
}

// 82+ is black flag
// 73-82 is red flag
// 65-72 is yellow flag
// <65 is green flag
// <50 is white flag