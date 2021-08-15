/*
function problem(x) {
  if (x !== "") {
    return ((x * 50) + 6);
}
else {
  if (x === "") {
    return "Error";
}
}
}

console.log(problem(""))
*/
/*
function numberToPower(number, power){
  let n = number;
  let p = power;
  let s;
  if (p === 0) {
    s = 1;
  } 
  if (p === 1) {
    s = n;  
  }
  if (p > 1) {
  for (let i = p; i > 1; (i - 1)) {
    let s = n;
    s *= n;
  }
}
return s;
}

console.log(numberToPower(10, 4));
*/

function n(x) {
  if (x === "") {
    return "Error";
} else {
  return ((x * 50) + 6);
}
}
console.log(n(10));
console.log(n(0));
console.log(n(-20));
console.log(n(""));
console.log(n("sss"));
console.log(n("  "));
console.log(n({}));
console.log(n([]));

/*
function arrayPlusArray(arr1, arr2) {
  let s1 = 0;
  for (let i = 0; i < arr1.length; ++i) {
  s1 += arr1[i];
  }
  let s2 = 0;
  for (let j = 0; j < arr2.length; ++j) {
  s2 += arr2[j];
  }
  return s1 + s2;
}
*/
/*
function n (num) {
  for (  num; num > 0; ) {
  let s = num + (num - 1);
}
return n;
}

console.log(n(1));
console.log(n(8));
*/
/*
function n(num) {
  if (num > 0) {
    return num * (-1);
  } else 
  if (num < 0) {
    return num;
 } else {
   return 0;
  }
}

console.log(n(10));
console.log(n(0));
console.log(n(-20));
*/