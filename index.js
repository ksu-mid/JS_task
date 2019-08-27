1.
function findItem(n) {
    let i = Math.pow(5, 0.5);
    let num1 = (1 + i) / 2;
    let num2 = (1 - i) / 2;
    let result = Math.round((Math.pow(num1, n) - Math.pow(num2, n)) / i);
    return result;
}
alert(findItem(12));

2.
let m = 23;
let n;
function nValue(m) {
    if (m > 50) {
        n = "большое";
    } else {
        n = "маленькое";
    }
    alert(n);
}
nValue(m);

3.
let i = 45;
while (i >= 45 && i <= 670) {
    if (i % 10 == 0) {
        console.log(i);
    }
    i++;
}

4.
for (let i = 0; i < 10; i++) {
    document.write('<img src="..." alt="..."/>');
}

5.
let size = 120;
let unit = "Кб";

function calculateSize(unit) {
    switch (unit) {
        case "Кб":
            size *= 1024
            alert(size)
            break;
        case "Мб":
            size *= 1024 ** 2
            alert(size)
            break;
        case "Гб":
            size *= 1024 ** 3
            alert(size)
            break;
        default:
            alert("Неизвестная единица измерения!")
    }
}

6.
function hello2(name = "гость") {
    alert(`Привет, ${name}`)
}

7.
function repeat(str = "", n = 2) {
    let new_str = str.repeat(n)
    return new_str
}

8.
function avg() {
    let sum = 0
    for (let i = 0; i < arguments[i]; i++) {
        sum += arguments[i]
    }
    return sum == 0 ? sum : sum / arguments.length
}

9.
function words(n = 0) {
    let str = n.toString()
    let arr = str.split('')
    let reverse = arr.reverse()
    let end = reverse[0]
    if (reverse.length > 1) {
        let end2 = reverse[0].toString() + reverse[1].toString()
        if (end == 0) {
            alert(`${n} товаров`)
        } else if (end >= 2 && end <= 4 && end2 != 21 && end2 != 31 && end2 != 41) {
            alert(`${n} товара`)
        } else if (end == 1 && end2 != 11) {
            alert(`${n} товар`)
        } else {
            alert(`${n} товаров`)
        }
    } else if (end == 0) {
        alert(`${n} товаров`)
    } else if (end >= 2 && end <= 4) {
        alert(`${n} товара`)
    } else if (end == 1) {
        alert(`${n} товар`)
    } else {
        alert(`${n} товаров`)
    }
}

10.
// let d1 = [45, 78, 10, 3]
// d1[7] = 100
// console.log(d1, d1[6], d1[7])

11.
// d3 = [45, 78, 10, 3]
// d3[7] = 100
// let sum3 = d3.reduce(function (acc, cur) {
//     return acc + cur
// })
// console.log(sum3)

12.
let d4 = [45, 78, 10, 3]
function my(a, b) {
    return b - a
}
console.log(d4.sort(my))
