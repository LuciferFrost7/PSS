// 1. Напишите функцию getArea, которая принимает радиус круга и возвращает площадь круга (используйте формулу πr²).
function getArea($radius){
    if($radius < 0){
        console.log('Радиус не может быть отрицательным!');
        return null;
    } else{
        return Math.PI * ($radius ** 2);
    }
}

let $number1 = -100;
console.log(`Площадь ${$number1} = `, getArea($number1));

// 2. Создайте функцию isEven, которая принимает число и возвращает true, если число четное, и false в противном случае.
function isEven($number){
    return ($number % 2) === 0;
}

let $number2 = 17;
console.log(`Число ${$number2} чётное? - `, (isEven($number2) ? 'да' : "нет"));

// 3. Напишите функцию-выражение subtract, которая будет вычитать одно число из другого.
const substract = function ($first, $second){
    return $first - $second;
}

let $number3 = 580;
let $number4 = 400;
console.log(`${$number3} - ${$number4} = `, substract($number3, $number4));

// 4. Создайте стрелочную функцию double, которая принимает число и возвращает его удвоенное значение.
let double = ($number) => {
    return $number * 2;
}

let $number5 = 500;
console.log(`${$number5} * 2 =`, double($number5));

// 5. Напишите функцию operate, которая принимает числовой массив и функцию-операцию (например, сложение или умножение)
// и возвращает результат применения этой функции ко всем элементам массива.
function operate($arr, $function){
    for(let $i = 0; $i < $arr.length; $i++) $arr[$i] = $function($arr[$i]);
    return $arr;
}

function sumka($arr){
    let $sum = 0;
    for(let $i = 0; $i < $arr.length; $i++){
        $sum += $arr[$i];
    }
    return $sum;
}

function proiz($arr){
    let $p = 1;
    for(let $i = 0; $i < $arr.length; $i++){
        $p *= $arr[$i];
    }
    return $p;
}

// console.log(operate([1, 2, 3, 4, 5], double));
console.log(sumka([1,2,3,4,5]))
console.log(proiz([1,2,3,4,5]))