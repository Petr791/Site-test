document.addEventListener('DOMContentLoaded', function() {
    // Ваш скрипт
    let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    let days = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];

    let date = new Date();
    let messageTime = 'Приветствую! Сегодня: ';
    //let day01 = days[date.getDate() - 1];
    let month = months[date.getMonth()];
    let year = date.getFullYear();
    let day1 = date.getDate();
    //
    let time = document.getElementById('my-time');

    console.log(day1);

    let nowDay = date.getDay();
    let bgColor = document.getElementById('section-top');

    function myTime() {

        messageTime += day1 + ' ' + month + ' ' + year + ' года.';
        time.innerText = messageTime;
        //console.log(messageTime);
        //console.log(date);
        //nowDay = 6;
        console.log(nowDay);
    }

    function dayOfWeek() {
        if (nowDay == 0) {
            console.log('Воскресенье');
            bgColor.classList.add('bg-color1');
        } else if (nowDay == 1) {
            console.log('Понедельник');
            bgColor.classList.add('bg-color2');
        } else if (nowDay == 2) {
            console.log('Вторник');
            bgColor.classList.add('bg-color3');
        } else if (nowDay == 3) {
            console.log('Среда');
            bgColor.classList.add('bg-color4');
        } else if (nowDay == 4) {
            console.log('Четверг');
            bgColor.classList.add('bg-color5');
        } else if (nowDay == 5) {
            console.log('Пятница');
            bgColor.classList.add('bg-color6');
        } else if (nowDay == 6) {
            console.log('Суббота');
            bgColor.classList.add('bg-color7');
        } else {
            console.log('Неизвестный день недели!');
        }
    }

    function timeAll() {
        dayOfWeek();
        myTime();
    };

    timeAll();
    //let dateLocale = new Date().toLocaleDateString();
    //console.log(dateLocale);


















}, false);