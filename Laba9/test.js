function say_privet(message){
    let result = confirm('Проверим какую кнопочку вы нажали');
    alert('Вы нажали кнопку ' + (result ? "ОКЕЙ" : 'ОТМЕНА'));
}

function likeImage(){
    let result = confirm('Вам нравится изображение?');
    alert(result ? '♥' : '=^(');
}

function inputName(){
    const name = prompt('Введите имя: ')
    if (name){
        document.querySelector('.nameField').textContent = `Приветствую вас, ${name}!`;
    }else{
        alert('ERROR: Введена пустая строка!')
    }
}

function modernInputName(){
    const name = prompt('Введите своё имя: ')
    if (!name){
        alert('ERROR: Введена пустая строка!')
        return false;
    }
    const meddleName = prompt('Введите своё отчество: ')
    if (!meddleName){
        alert('ERROR: Введена пустая строка!')
        return false;
    }
    const lastName = prompt('Введите свою фамилию: ')
    if (!lastName){
        alert('ERROR: Введена пустая строка!')
        return false;
    }
    document.querySelector('.modernNameField').textContent = 'Приветствую вас, ' + `${lastName} ${name[0]}.${meddleName[0]}.!`.toUpperCase();
}