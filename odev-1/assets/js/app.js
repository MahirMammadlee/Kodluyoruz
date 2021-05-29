window.onload = fullTime();

const NAME = prompt();

document.querySelector("#greeting").innerHTML = `Merhaba, <strong>${NAME.charAt(0).toUpperCase() + NAME.slice(1)}!</strong> Hoş geldin!`;

var day = new Date().getDay();

switch (day) {
    case 1:
        day = "Pazartesi";
        break;
    case 2:
        day = "Salı";
        break;
    case 3:
        day = "Çarşamba";
        break;
    case 4:
        day = "Perşembe";
        break;
    case 5:
        day = "Cuma";
        break;
    case 6:
        day = "Cumartesi";
        break;
    default:
        day = "Pazar";
}

function fullTime() {

    setInterval(() => {
        let time = new Date();

        let hour = time.getHours();
        let minute = time.getMinutes();
        let second = time.getSeconds();

        if (hour < 10) {
            hour = "0" + hour.toString();
        }

        if (minute < 10) {
            minute = "0" + minute.toString();
        }

        if (second < 10) {
            second = "0" + second.toString();
        }

        let finalTime = `${hour}:${minute}:${second}`;

        document.querySelector("#time").innerHTML = `${finalTime} ${day}`;
    }, 1000);
}
