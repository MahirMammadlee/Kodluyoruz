window.onload = fullTime();

const NAME = prompt();

document.querySelector("#greeting").innerHTML = `Merhaba, <strong>${NAME}!</strong> Hoş geldin!`;

var day = new Date().getDay();

switch(day){
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

var time = "";

function fullTime() {

        setInterval(() => {
            time = new Date();
            let e = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
            
            document.querySelector("#time").innerHTML = e + " " + day;
        }, 1000);
}
