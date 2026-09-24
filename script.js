
//1
let a = 15;
let b = 25;
let c = 10;

if (a >= b && a >= c) {
    console.log(a + " is the largest");
} else if (b >= a && b >= c) {
    console.log(b + " is the largest");
} else {
    console.log(c + " is the largest");
}

//2
let num = 5;

for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}


//3
let word = "education";
let count = 0;

for (let i = 0; i < word.length; i++) {
    let char = word[i].toLowerCase();

    if (
        char === "a" ||
        char === "e" ||
        char === "i" ||
        char === "o" ||
        char === "u" 
    ) {
        count++;
    }
}

console.log("Number of vowels:", count);


//4
function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else {
        return "F";
    }
}

console.log(getGrade(95));
console.log(getGrade(82));
console.log(getGrade(74));
console.log(getGrade(60));

//5 
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

console.log("Liftoff!");