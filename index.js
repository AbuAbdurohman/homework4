const a = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9];

let b = 0;

for (let i = 0; i < a.length; i++) {
    b += a[i] * a[i];
}

console.log("Сумма квадратов элементов массива" , b);