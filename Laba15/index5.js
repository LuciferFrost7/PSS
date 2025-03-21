const $week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

let $segodnya = new Date();
let $birthday = new Date(2006, 3, 18);
let $simpleMartDay = new Date(2024, 2, 6);

console.log("Текущий день недели: ", $week[$segodnya.getDay()]);
console.log("День рождения был: ", $week[$birthday.getDay()]);
console.log("6 Марта 2024 года был: ", $week[$simpleMartDay.getDay()]);