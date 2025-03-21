let car = {
    make: "BMW",
    model: "6",
    year: 2021,
    color: "blue",
    carGetInfo: function(){
        return `Марка: ${this.make}\n Модель: ${this.model}\n Год выпуска: ${this.year}\n Цвет: ${this.color}\n`;
    }
}

console.log("*Машинка:\n", car.carGetInfo());
car.color = "red";
console.log("*Перекрасили:\n", car.carGetInfo());

car.model = "Mercedes"
console.log(`**Поменяли модель:\n ${car.carGetInfo()}`)