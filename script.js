//  1 

compInt(20,16);
function compInt (a,b) {
    if (a>b) {
        console.log(`${a} bigger, ${b} less`)
    } else if (a<b) {
        return console.log(`${b} bigger, ${a} less`)
    } else {
        return console.log(`equal`)
    }
}

//   2

compKmFt (1,3300);
function compKmFt (km,ft) {
    let kmInFt = km * 3280.8;
    switch(true) {
        case kmInFt>ft:
            return console.log(`${ft}ft less`)
            break;
            case kmInFt<ft:
                return console.log(`${km}km less`)
                break;
            case kmInFt===ft:
                    return console.log(`equal`)
                    break;
    }
}

//   3

divider(6,1);
function divider (a,b) {
    switch(true){
        case a%b===0 && b%a===0:
            console.log(`${b} divided by ${a}`);
            return console.log(`${a}  divided by ${b}`);
        case a%b===0:
         console.log(`${a} divided by ${b}`);
         return console.log(`${b} dont divided by ${a}`);
            break;
        case b%a===0:
                console.log(`${b} divided by ${a}`);
                return console.log(`${a} dont divided by ${b}`);
                   break;
        } 
    }

//   4

evenOdd(123456);
function evenOdd (a) {
    let last = a % 10;
    switch(true) {
        case last%2===0:
            return console.log(`${a} even, last number - ${last}`);
            break;
            case last%2!==0:
                return console.log(`${a} odd, last number - ${last}`);
                break;
    }
}

 //   5

oneOrTwo(45);
function oneOrTwo (a) {
    let last = a % 10;
    let first = Math.floor((a/10)%10);
    switch(true) {
        case last<first:
            return console.log(`${first} bigger`);
            break;
        case first<last:
            return console.log(`${last} bigger`);
            break;
        default:
            return console.log(`equal`);
            break;
    }
}

//   6

myFunc(457);
function myFunc (a) {
    last = Math.floor((a/100)%10);
    mid = Math.floor((a/10)%10);
    first = Math.floor((a/1)%10);
    let sum = last+mid+first;

    sum%2===0 ? console.log(`Sum of ${a} even`) : console.log(`Sum of ${a} odd`);
    sum%5===0 ? console.log(`Sum of ${a} divided by 5`) : console.log(`Sum of ${a} dont divided by 5`);
    (last*mid*first)>100 ? console.log(`yes`) : console.log(`no`);
}

//   7

myFunc1(332);
function myFunc1 (a) {
    last = Math.floor((a/100)%10);
    mid = Math.floor((a/10)%10);
    first = Math.floor((a/1)%10);

    last===mid && mid===first ? console.log(`Same`) : console.log(`Not same`);

    last===mid ? console.log(`${last} and ${mid} same`) : 0;
    last===first ? console.log(`${last} and ${first} same`) : 0;
    first===mid ? console.log(`${first} and ${mid} same`) : 0;
}

//   8

mirrorNum(123321);
function mirrorNum(a) {
    const first = Math.floor((a/100000)%10);
    const second = Math.floor((a/10000) % 10);
    const third = Math.floor((a/1000) % 10);
    const fourth = Math.floor((a/100) % 10);
    const fifth = Math.floor((a/10) % 10);
    const sixth = Math.floor((a/1) % 10);

    first===sixth && second===fifth && third===fourth ? console.log(`${a} is mirrorNum`) : 0;
}