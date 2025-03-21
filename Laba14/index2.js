let person = {
    name: "имя",
    age: 20,
    address: {
        street: "улица",
        city: "город"
    },
    getFullAdress: function(){
        return `Адрес: г. ${this.address.city}, ул. ${this.address.street}.`;
    }
}

function getPersonInformation(){
    return `Имя: ${person.name}\nВозраст: ${person.age}\n${person.getFullAdress()}`;
}

console.log(getPersonInformation());