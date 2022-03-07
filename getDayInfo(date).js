const getDate = (dateString) => {
const day = dateString.substring(0,2);
const month = Number(dateString.substring(3,5)) - 1;
const year = dateString.substring(6,10);
const date = new Date(year, month, day);
const oneJan = new Date(date.getFullYear(),0,1);
const numberOfDays = Math.floor((date - oneJan) / (24 * 60 * 60 * 1000));
const result = Math.ceil(( date.getDay() + 1 + numberOfDays) / 7);
const dayWeek = date.getDay();
const days = [
'Воскресенье',
'Понедельник',
'Вторник',
'Среда',
'Четверг',
'Пятница',
'Суббота'
];
const months = [
'января',
'февраля',
'марта',
'апреля',
'мая',
'июня',
'июля',
'августа',
'сентября',
'отктября',
'ноября',
'декабря',
];
const localDayWeek = days[dayWeek];
const localMonth = months[month];
console.log(localDayWeek + ",", result + " неделя", localMonth, year + " года");
}

getDate('08.01.2022');
