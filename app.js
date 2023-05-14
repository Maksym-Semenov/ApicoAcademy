// Робота з об'єктами. Конструктор з властивостями
const ninja = {
    name: `Max`,
    karma: 200
};
console.log(ninja.name);

let ninja2 = Object.create(ninja); //Створення самочтійної копії об'єкту
ninja2.name = `Olya`;

ninja2.bag = 22; // Створення нової властивості "на льоту"
ninja.bag = 26;

console.log(ninja2.name);
console.log(ninja.name);
console.log(ninja2.bag);
console.log(ninja.bag);


// Масиви
let arr = [`qwe`, `rty`, `uio`]; //Масив з однорідними значеннями
for (let i in arr) { //in виводить індекси
    console.log(i);
}
for (let i of arr) { //of виводить значення
    console.log(i);
}

let arr2 = [1.3, `qwe`, true, undefined, ``];
for (let i in arr2) { //in виводить індекси
    console.log(i);
}
for (let i of arr2) { //of виводить значення
    console.log(i);
}