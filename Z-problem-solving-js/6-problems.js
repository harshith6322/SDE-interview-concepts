// 1.remove duplicate in arr-----------------------------
function removeDuplicates(arr) {
  let uniqArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (uniqArr.indexOf(arr[i]) === -1) {
      uniqArr.push(arr[i]);
    }
  }
  console.log(uniqArr);
  return uniqArr;
}
removeDuplicates([1, 2, 3, 4, 5, 6, 7, 2, 5, 1, 4]);

//2. remove duplicate another way
function removeDuplicates(arr) {
  return Array.from(new Set(arr));
  //or
  return [...new Set(arr)];
}
let ans = removeDuplicates([1, 2, 3, 4, 5, 6, 6, 3, 4, 10, 2, 1, 1]);
console.log(ans);

//3. input numbers return all even num
function even(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
  return newArr;
}
even([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

//or
//this is for long number
let num = 100000990;
let lastDigit = num.toString().slice(-1);
if (
  lastDigit === "0" ||
  lastDigit === "2" ||
  lastDigit === "4" ||
  lastDigit === "6" ||
  lastDigit === "8"
) {
  console.log("Even");
}

//4. finding odd num
function odd(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
  return newArr;
}
odd([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

//5.palindrome--------------------------------
function palindrome(str) {
  console.log(str);
  let len = str.length;
  console.log(len);
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - i - 1]) {
      console.log(str[i] !== str[len - i - 1]);
      return "not palindrome";
    }
  }
  return "yes it an palindrome";
}
console.log(palindrome("madam"));

//6.factorial--------------------------
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}
console.log(factorial(4));

// another
function fac(num) {
  let ans = 1; // Start with 1 because factorial is a product of numbers =12
  for (let i = num; i > 0; i--) {
    console.log(i);
    ans *= i; // Multiply the current number to the result
  }
  return ans;
}

console.log(fac(4)); // Outputs: 120

//7.longest string-------------------------------------
function longestsen(str1) {
  let str = str1.split(" ");
  console.log(str);
  let longestStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i].length > longestStr.length) {
      longestStr = str[i];
    }
  }
  return longestStr;
}
console.log(longestsen("hi baby i love you ra no i am sigma!!!!"));

//8.big num in array | small num in array
//big-num
function bigNum(arr) {
  let bignum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > bignum) {
      bignum = arr[i];
      // console.log(arr[i])
    }
  }
  return bignum;
}
console.log(bigNum([1, 2, 3, 0, 4, 5, -6, -10, -1, 10, 100, 9]));

//small-num
function bigNum(arr) {
  let bignum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < bignum) {
      bignum = arr[i];
      // console.log(arr[i])
    }
  }
  return bignum;
}
console.log(bigNum([1, 2, 3, 0, 4, 5, -6, -10, -1, 10, 100, 9]));
