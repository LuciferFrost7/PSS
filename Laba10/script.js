function isDigit(s){
    let flag = false;
    if(s.length > 1){
        flag = s[0] === '-'
    }
    for(let i = 0 + flag; i < s.length; i++){
        if(! '0123456789'.includes(s[i])){
            return false;
        }
    }
    return true;
}

function click13() {
    const x = prompt('Введите X:')

    if (! isDigit(x)) {
        alert('ERROR х не число!');
        return false;
    }

    const y = prompt('Введите Y:')

    if (! isDigit(y)) {
        alert('ERROR y не число!');
        return false;
    }

    document.querySelector('.searchParam').textContent = 'Пренадлежит? -' + (x < 0 && y < 0? '✅' : '❌');
}

studentsList = {
    kiryll: {
        0: 90,
        1: 70,
        2: 70,
        3: 85
    },
    vova: {
        0: 100,
        1: 75,
        2: 60,
        3: 80
    },
    masha: {
        0: 100,
        1: 90,
        2: 100,
        3: 95
    }
}
names = ['kiryll', 'vova', 'masha'];

function isExamPoints(number){
    if (isDigit(number)){
        number = parseInt(number);
        if(0 <= number && number <= 100){
            return true;
        }
    }else{
        return false;
    }
}

function examChecker(){
    let lst;
    lst = [];
    for(let i = 0; i < 4; i++){
        const a = prompt(`Введите отметку за ${i + 1} экзамен: `)
        if(! isExamPoints(a)){
            alert('ERROR: данное значение не является отметкой за экзамен!')
            return false;
        }
        lst[i] = a;
    }
    for(let j = 0; j  < 3; j++){
        for(let i = 0; i < 4; i++){
            document.querySelector(`#${names[j]}${i + 1}`).textContent = lst[i] > studentsList[names[j]][i] ? 'больше' :
                lst[i] == studentsList[names[j]][i] ? 'равен' : 'меньше';
        }
    }
}

function numberChecker(){
    const number = prompt('Введите трёхзначное число:')
    let flag = false;
    if (number.length === 3 || number.length === 4) {
        if(number.length === 4){
            if(number[0] !== '-'){
                alert('ERROR введенно не трёхзначное число');
                return false;
            }
            flag = true;
        }
        if(isDigit(number)){
            alert(`${number[1 + flag]} ${number[1 + flag] === number[2 + flag] ? '==' : '!='} ${number[2 + flag]}`)
            return true
        }else{
            alert('ERROR введенно не число')
            return false
        }
    }
    alert('ERROR введенно не трёхзначное число');
    return false;
}

function isMayDay(day){
    if(isDigit(day)){
        day = parseInt(day);
        if(1 <= day && day <= 31){
            return true;
        }else{
            alert('ERROR такого дня в майе месяце нету!')
            return false;
        }
    }else{
        alert('ERROR введено не число!')
        return false;
    }
}

function enterDay(){
    const day = prompt('Введети номер дня в мае 2006')
    if(! isMayDay(day)){
        return false;
    }
    let nameOfDay;
    switch((parseInt(day) - 1) % 7){
        case 0:
            nameOfDay = 'понедельник';
            break;
        case 1:
            nameOfDay = 'вторник';
            break;
        case 2:
            nameOfDay = 'среда';
            break;
        case 3:
            nameOfDay = 'четверг';
            break;
        case 4:
            nameOfDay = 'пятница';
            break;
        case 5:
            nameOfDay = 'суббота';
            break;
        case 6:
            nameOfDay = 'воскресенье';
            break;
    }
    alert(`это ${nameOfDay}`)
}