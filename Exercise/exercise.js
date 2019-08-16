let apples = 14;
console.log(apples);
const string_interpolation = `I have ${apples} apples`;
console.log(string_interpolation)


const materials = ['wood', 'metal', 'stone'];
const words = {
    elephant : "The world's largest land mammal.",
    school : 'A place of learning.',
    ice_cream : 'A delicious milk-based dessert.',
}

console.log(typeof materials)


let num = 16;
if (num > 10) {
    console.log(`${num} is greater than 10`)
} else if (num == 10) {
    console.log(`${num} is exaclty 10`)
} else {
    console.log(`${num} must be less than 10`)
}

for (let x = 0; x < 10; x++) {
    console.log('doing the same thing over and over')
}

for (let z = 5; z < 25; z++) {
    console.log(z)
}

for (let v = 0; v < 100; v++) {
    console.log(v)
}

for (let h = 3; h < 15; h++) {
    if (h > 9) {
        console.log('You can ride the rolleroaster!')
    } else {
        console.log('Too short to ride!')
    }
}


const containers = ['purse', 'wallet', 'backback']
for (let x = 0; x < containers.length; x++) {
    console.log(containers[x])
}

function helloWorld() {
    return ('Hello World!');
}
console.log(helloWorld())

function adding(num1, num2) {
    return num1 + num2
}
console.log(adding(11,25))


// def add(first_num, second_num):
//   return first_num + second_num

// amount = add(5, 7)
// print(amount)