import chalk from 'chalk';

function isNumber($str){
    let flag = true;
    for(let $i = ($str[0] === "-"); $i < $str.length-1;$i++){
        if(!($str.length > 1)){
            return false;
        }
        if(!"01234567890".includes($str[$i])){
            return false;

        }
    }
    return true;

}
function getSmalls($start, $end, $number){
    if(!isNumber($start)) {
        console.log("Старт не число!");
    }else if(!isNumber($end)){
        console.log("Энд не число!");
    }else if(!isNumber($number)){
        console.log("number не число!");
    }
    let $lst = [];
    for(let $i =$start; $i <= $end; $i++){
        if($i < $number) {
            $lst.push($i);
        }
    }
    return $lst;
}

function arrayToPositive($arr){
    console.log('Задание №2:');
    let $arr2 = [];
    for(let $i = 0; $i < $arr.length; $i++){
        $arr2.push(Math.abs($arr[$i]));
    }
    return $arr2;
}

function arrayFindCountOfSmall(){
    console.log('Задание №3:');
    let $arr = [];
    for(let $i = 0; $i < 100; $i++){
        $arr.push((Math.round(Math.random() * 10) - Math.round(Math.random() * 10)));
    }
    const $minimal = Math.min(...$arr);
    let $count = 0;
    for(let $i = 0; $i <= $arr.length; $i++){
        if($arr[$i] === $minimal){
            $count++;
        }
    }
    let $result = '';
    for(let $i = 0; $i < $arr.length; $i++){
        if($arr[$i] === $minimal && $count > 2){
            $result += chalk.red($arr[$i]);
        }else{
            $result += chalk.grey($arr[$i]);
        }
        if($i + 1 < $arr.length){
            $result += ' ';
        }
    }
    return $result;
}

// console.log(getSmalls(1,10,5));
console.log(arrayToPositive([1, 2, -2, 3, -14, -9, 0, -0, 1, 1]))
console.log(arrayFindCountOfSmall());