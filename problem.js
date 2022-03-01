// Problem 1
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function sumIt(list) {
    let keys = Object.keys(list);
    let total = 0;
    for (let i = 0; i < keys.length; i++) {
        total += salaries[keys[i]];
    }

    return total;
}

console.log(sumIt(salaries));


// Problem 2
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(object) {
    let keys = Object.keys(object);
    for (let i = 0; i < keys.length; i++) {
        if (typeof(object[keys[i]]) == "number") object[keys[i]] *= 2;
    }
}

multiplyNumeric(menu);

console.log(menu);


// Problem 3
function checkEmailId(str) {
    let posAt = str.indexOf('@');
    let posDot = str.indexOf('.');

    return (posAt !== -1 && posDot !== -1 && posAt < posDot && posDot - posAt > 1);
}


// Problem 4
function truncate(str, maxlength) {
    if (str.length > maxlength) {
        str = str.replace(str.slice(maxlength - 1), "...");
    }

    return str;
}


// Problem 5
let arr = ["James", "Brennie"];
console.log(arr);
arr.push("Robert");
console.log(arr);
arr[parseInt(arr.length / 2)] = "Calvin";
console.log(arr);
_ = arr.shift();
console.log(arr);
arr.unshift("Regal");
arr.unshift("Rose");
console.log(arr);