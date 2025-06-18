function funcName(name) {
    return `Hello ${name}`
}

console.log(funcName('Nikita'))

const numbers = [9, 4, 12, 8, 21]

function giveArray(array) {
    for(let i = 0; i < array.length; i++) {
        if (array[i] > 10) {
            return array[i]
        }
    }
    return 'Number its not find'
}

console.log(giveArray(numbers))

function calculate(num1, num2, operator) {
    switch (operator) {
        case 'plus':
            return num1+num2
        case 'minus':
            return num1-num2
        case 'umnoj':
            return num1*num2
        case 'delet':
            if (num2 === 0) {
                return 'Ошибка! Делить на 0 нельзя'
            }
            return num1/num2
        default:
            return 'Неизвестный оператор'
    }
}

console.log(calculate(4, 0, 'delet'))
console.log(calculate(4, 2, 'delet'))
console.log(calculate(4, 5, 'umnoj'))
console.log(calculate(4, 6, 'plus'))
console.log(calculate(4, 7, 'minus'))

// ############################################################################### Сверху решение задач из урока 101 про Функции, снизу дз урок 103

const user = {
    name: 'Nikita',
    age: 21,
    isAdmin: true,
    sayHello(name) {
        console.log(`Hello ${name}`)
    }
}

user.sayHello('Nikita')


const users = [
    {
        name: 'Nikita',
        age: 21,
        isAdmin: true
    },
    {
        name: 'Artem',
        age: 23,
        isAdmin: false
    },
    {
        name: 'Vladimir',
        age: 19,
        isAdmin: false
    }
]

let simpleCount = 0;

for(let i = 0; i < users.length; i++) {
    if(users[i].isAdmin === false) {
        simpleCount++;
    }
}

console.log(simpleCount)

