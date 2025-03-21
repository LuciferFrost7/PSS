function isNumber($number){
    if(!$number){
        return false;
    }
    $number = $number.toString();
    if($number.length > 0 ){
        let $flag = 0;
        if($number.length > 1){
            if($number[0] === "-"){
                $flag = 1;
            }
        }
        for(let $i = $flag; $i < $number.length;$i++) {
            if (!"0123456789".includes($number[$i])) {
                return false;
            }
        }
        return true;
    }else{
        return false;
    }
}


class Person{
    constructor($name, $age){
        if($name.length < 2){
            throw new Error("Имя не может быть короче 2 символов!");
        }else if(! (isNumber($age))) {
            throw new Error("Было передано не число!");
        }else{
            this.name = $name;
            this.age = $age;
        }
    }

    introduce(){
        console.log(`Имя : ${this.name}`);
        console.log(`Возраст : ${this.age}`);
    }
}

console.log("Первое задание: ");
aboba = new Person("Вова", 20);
aboba.introduce();


class Student extends Person{
    constructor($name, $age, $major) {
        if(!(['программист', 'повар', 'экономист', 'бухгалтер', 'коммерсант'].includes($major.toLowerCase()))){
            throw new Error("В учебном заведении не существует такой специальности!");
        }else {
            super($name, $age);
            this.major = $major;
        }
    }

    introduce() {
        super.introduce();
        console.log(`Специальность : ${this.major}`);
    }

    study(){
        let now = new Date();
        console.log(8 < now.getHours() < 15 ? `Сейчас ${this.name} учиться` : `Сейчас ${this.name} отдыхает`);
    }
}

console.log("\nВторое задание: ");
aboba2 = new Student("Миша", 21, "Программист");
aboba2.introduce()