Object.create; //Створення
// Ctreate object
const person0 = Object.create({});
person0.width = 33;
person0.heiht = 44;
console.log(person0);

//Create array

const array = Object.create([]);
array[0] = 0;
array[1] = 1;

console.log(array);

Object.assign; // Копіювання властивостей з одного об'єкту в інший

const person11 ={
	name: `John`,
	surname: `Doe`,
};

const person22 = Object.assign({}, person11);

person22.age = 24;

console.log(person11);
console.log(person22);

Object.keys; // Повертає масив ключів об'єкту
Object.values; // Повертає масив значень об'єкту
Object.entries; // Повертає масив масивів: ключ-значення

const person1 = {
	name: `John`,
	surname: `Doe`,
	age: 24,
}

const entries = Object.entries(person1).forEach(([key, value]) => {
	console.log(key + `: ` + value);
});

Object.freeze; // Дозволяє "заморозити" об'єкт, але тільки на "першому" рівні

const person6 = {
	name: `John`, //Можна заморозити
	surname: `Doe`, //Можна заморозити
	age: 24, //Можна заморозити
	occupation: {
		name: `programmer`, //Не можна заморозити
		exp: `2 year`, //Не можна заморозити
	}
}

Object.freeze(person6);
person6.age = 25;
console.log(person6.age);
person6.occupation.exp = `3 years`;
console.log(person6.occupation.exp);


