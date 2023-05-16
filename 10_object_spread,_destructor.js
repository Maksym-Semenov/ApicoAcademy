// Робота з об'єктами. Конструктор з властивостями
let ninja = {
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

ninja = 8;
console.log(ninja);
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

let a = 10;
const things = [1.35, a * 1.35]
for(let thing of things){
    console.log(thing);
}

// Спред оператор <...>
const a1 = [1, 2, 3, 4];
console.log(a1);
const b = [0, ...a1, 5, 6];
console.log(b);

const name = [...`Stepan`];
console.log(name);

const hero = {
    level: `great`,
    type: `assasin`,
};

const organization = {
    clan: `Skila`,
    origin: `Tokio`,
};

const pirate = {
    ...hero,
    ...organization,
};

console.log(pirate.clan);
console.log(pirate.level);
console.log(pirate);

// Деструктуризація

const { level, type} = pirate;

console.log(level);
console.log(type);

const { clan, ...rest} = pirate;
console.log(clan);
console.log(rest);
