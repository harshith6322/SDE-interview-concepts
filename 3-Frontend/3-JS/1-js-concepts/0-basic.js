console.log("----------------------------part--1----------------------");

//LINE no O TO LINE  no 317 ----PART---1----
//--------------------------------------------js-basics------------------------------

//values and variable
//three types of variables  (var , let , const )
//value is a data store in varables like ('harshith',18) this values stored in varables like let const;

var name = " harshith ";
console.log(name);
console.log(name); //output = harshith

let age = 18;
console.log(age); //output = 18

const birthYear = 2002;
console.log(birthYear); //output = 2002

//allowed not allowed-------varable names ----------------------

// var 1name = name;//syntax error---we can not start varible name with numbers
let name_1 = "bob";
console.log(name_1); //allowed
//let name&1 = 'bob';//output syntax error this  symbol is (&) not allowed
let name$2 = "bob1";
console.log(name$2); //allowed
//let new = 'bob2';
//console.log(new);// unexcepted token not allowed because (new) keyword is reserved one like( ex : functions,new,let this reserved keywords in js)

//-------------- NAMEING A VARIALE CASE--allowed and not allowed------
let _name2 = "bob3"; //allowed
let $name2 = "bob4"; //allowed
let name$1 = "bob1"; //allowed
let FirstName = "bob5"; //allowed
let PI = 3.3; //ALLOWED
// let new = 'bob2'; //not allowed
//var 1name = name; //not allowed
//let name&1 = 'bob';//not allowed
//let name-n = 'bob6';//not allowed

//-----------DATA TYPES------
//DATA TYPES THEY ARE 2 types they are 1.(OBJECTIVE) & 2.(PRIMITIVE)
// THERE ARE 7 DATE TYPES IN 2.(PRIMIYTIVE data type) THEY ARE
//1.NUMBER(1,0.9,-1),in another progamming lang they divided in to 2 types decimal,integers
//2.STRING(name)
//3.UNDEFINED(empty value),
//4.NULL(0),
//5.bigint(to store large data)(ES2020),
//6.symbol("not soo useful in js"),
//7.BOOLEAN(true,false),

//--(type of) for what data types it is
console.log(typeof true); //boolean
console.log(typeof 100); //number
console.log(typeof null); //objet-wrog-one  it is bug in typeof--!
console.log(typeof "hi"); //string
let undefi;
console.log(undefi); //undefined NO VALUE STORED IN LET

//LET KNOW MORE ABOUT VARABLES LIKE (VAR,LET,CONST)
//var is old one(ES5),and let,const are (ES6) ONE-------------------------
// were let and var can bee reassign at any point
//but const can't be reassign
let age1 = 30;
age1 = 31; //can bee reassign at any point

//const birthYear2 = 2002;
//birthYear2 = 2003;//error const can not bee reassign

//BASIC--MATHS--FOR--JS
//basic-operators-14c-----------------------------------------------
//math operators [+,-,/,2**3=8 2 the power of 3,typeof,=,'+=']
console.log(5 - 1);
console.log(10 + 1);

//assignment operators
//ex x++,x--,x**,*=
let x = 10 + 5;
x += 10; //x = x=15 + 10 =25
console.log(x); //ans=25

//comparing operators
//>,<,=>,<=
console.log(1 > 2);
console.log(5 >= 5);

//coding problem-1 ans
const p1Wt = 76;
const p1Ht = 1.69;
const p2Wt = 92;
const p2Ht = 1.95;

const bmiP1 = p1Wt / p1Ht ** 2;
const bmip2 = p2Wt / p2Ht ** 2;
console.log(bmiP1, bmip2); //op 26,24
const bmip1p2 = bmiP1 > bmip2; //op true
console.log(bmip1p2);

//strings and templates literals------------
//``
//ex
const p1Wt1 = 76;
const p1Ht1 = 1.69;
const wtHt = `my wt = ${p1Wt1}`;

console.log(wtHt);
//or
console.log(`my hight 'hi'= ${p1Ht1}`); //op--my hight 'hi' = 1.69
//or
console.log("my hight" + " = " + p1Ht); // how normal one can we write it is to hard to write

//if and else
//ex get input from user as age and tell her she is adult or not
const userAge = 19; //prompt('what is age');
const ageVerfication = userAge >= 18;
if (ageVerfication) {
  console.log("you are adult");
} else {
  console.log("you are child");
}

//19-coding challenge #2
const p1Wt2 = 76;
const p1Ht2 = 1.69;
const p2Wt2 = 92;
const p2Ht2 = 1.95;

const bmiP1_mark = p1Wt / p1Ht ** 2;
const bmip2_john = p2Wt / p2Ht ** 2;
console.log(bmiP1, bmip2); //op 26,24
const bmip1p2_markjohn = bmiP1 >= bmip2; //op true
console.log(bmip1p2);

if (bmip1p2_markjohn) {
  console.log(`mark bmi ${bmiP1_mark} ✌ higher than jhon ${bmip2_john} bmi`);
} else {
  console.log(`john bmi ${bmip2_john} higher than mark ${bmiP1_mark} bmi`);
}

//---------------(importent)--type convertions(manual change ) and coerion(automatic change)----
//converting data types to some(num to string to boolean) data type
//ex number(19) to string('19')
//the value(num = 19) from userinterface to js will be string(num = '19') by defult example
let number123 = "1991"; //1991 is string because we do not have UI(USER INTERFACE);
console.log(number123 + 9); //op--'19919' it will add like strings---output should bee op--2000

//to deal with we use type convertion by manualy using number example
let number1234 = "1991"; //becausr we do not have UI(USER INTERFACE);
console.log(Number(number1234) + 9); //op--2000num
let strigss = "hi";
console.log(Number(strigss)); //op--NAN(not a number)
console.log(typeof number123);
// const age12333 = Number(prompt("what is your age"));
// console.log(typeof age12333, age12333);

//type coerion(automatic change)
//+ sign convert num to string
//- sign conver string to num
//(/) sign convert to num
//ex
console.log("20" + "20" + 2); //op--20202-string//it add like words
console.log("20" - "20" - 10); //op--(+10)num
console.log("30" / 2); //op--15-num🤷‍♀️🤦‍♂️because it's an computer

//boolean type coerion and type convertion
//5 false values they are 0,undefined,empty('string'),null,NAN

//type convertion(manual change)
console.log(Boolean(0));
console.log(Boolean("")); //empty string
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean({}));
console.log(Boolean(1));
//exle
let money_rs = 0;
if (money_rs) {
  console.log("you have" + "1000rs" + "money");
} else {
  console.log(`you have ${money_rs} money`);
}

//equality operators ==( allow to type coerion) vs ===(strict mode do not allow type coerion(auto))
//ex
console.log(18 === "18"); //false were type coerion not work here string not convert to num
console.log(18 == "18"); //true were here type coerion work string convert to num

//boolean-logic-operators(and &&, or|| ,not!!)(t--true,f--false)
//AND --- if two values are true then it is true (t and t----t)
//if any one value gives false it will be false (f and f----f)

//OR---if one value gives true the final value also true (true---t or f---t)
//if two values false then it is false  (f or f---f)

//not t gives opp values =f
//f gives opp value =t

//ex for boolear logic
const gooddriver = true;
const lisence = false;
// console.log(goodboy && Lisence)//false
// console.log(goodboy || lisence)//true
// console.log(!lisence)//true

const hascar = true;
if (gooddriver && lisence && hascar) {
  console.log("he can drive car");
} else {
  console.log("she can not dirve car now "); //op false
}

//coding challeng no--3
// const team1dol = (96 + 108 + 89) / 3;
// const team2koa = (88 + 91 + 108) / 3;
// console.log(team1dol, team2koa);

// if (team1dol > team2koa) {
//     console.log('dol win the match');

// } else if (team2koa > team1dol) {
//     console.log('koa win the match');

// } else {
//     console.log('both win the match');
// }

const team1dol = (97 + 112 + 101) / 3;
const team2koa = (109 + 95 + 123) / 3;
console.log(team1dol, team2koa);

if (team1dol > team2koa && team1dol >= 100 && team1dol >= 2 * team2koa) {
  console.log("dol win the match");
} else if (team2koa > team1dol && team2koa >= 100 && team2koa >= 2 * team1dol) {
  console.log("koa win the match");
} else {
  console.log("both win the match");
}

//switch case in js
//ex--syntax
/* switch (varable name){
  case 'day':
  console.log('some thing');
  break;
  case 'day':
  console.log('some thing');
  break;
}*/

const day = "";

switch (day) {
  case "mondey":
    console.log("it work day");
    break;
  case "sunday":
    console.log("it is fun day");
    break;
  default:
    console.log("not working day");
}
//same using if and else if statement

if (day === "mondey") {
  console.log(" it working day");
} else if (day === "sunday") {
  console.log("fun day");
} else {
  console.log("not a working day");
}

//all about statement(;) and expresseion(``)
//statement return the action in it example----if and else
//expression can give results or output---console.log(`hi ${me}`);

// 3 + 2 is expression because it can produces a value
//1991 is expression
//true && false || true is expression

//the conditional(Ternary) Operator same as if and else operator
//short form of if and else statements
//ex
const agen = 23;
agen >= 18 ? console.log("yes your 18") : console.log("you not 18");

//in conditinal operator we declate varable like this
//but in if and else statement you delcare varable at top of if and else
const age123 = agen >= 18 ? "wine" : "water";
console.log(age123);

//but in if and else statement you delcare varable at top of if and else
//ex
let name_6;
if (agen >= 18) {
  name_6 = "wine";
} else {
  name_6 = "water";
}
console.log(name_6); //wine

//coding challenge --5
const tip = 40; //value =275,40,430
const tip1 = 15 / 100;
const tip2 = 20 / 100;
console.log(tip1, tip2);
const billing =
  tip <= 300 && tip >= 50
    ? console.log(`yor bill =${tip * tip1 + tip}`)
    : console.log(`your bill =${tip * tip2 + tip}`);

//javascript versons ES5,ES6+---------------------------
//1995 --INVENT AS MOCHA(JS) BY BRENDAN EICH IN JUST 10 DAYS
//1996 --MOCHA CHANGED NAME TO THE LIVESCRIPT AND THEN TO JAVASCRIPT
//1997 --JS HANDE OVER TO ECMA
//2009 --ES1 RELEASED
//2015 --ES6-JULY WHOLE WEB CHANGED DUE TO LARGE UPDATE
//2021 --ES2021 LAST UPDATE
//20infite -- it goes on until earth die 😂

//-------------------   LINE O TO LINE 317 ----PART---1--- THE END  -----------------------------

//----------------------------------------- part--2 ---------------------------------------------
//---------------------------------------  part--2  ---------------------------------------------
//------------------------------  LINE 330 TO LINE 676 --PART-2   -------------------------------

//using strict mode we can see hidden errors so all ways declare this mode at starting like this
("use strict"); //activated now
//this mode tell us what is error in ower code and if we give reserved keyword as varable name it tell us it is an error

//functions---a function is a piece of code were we can reuse the code again and again-------------!
//functions--reusing code
//ex
function myname() {
  console.log("harshith");
}
myname(); //op---harshith
//calling above fun to return some thing

//ex-2
function fruiteprocesser(apples, oranges) {
  console.log(apples, oranges);
  const juice = `no of apples ${apples} and no of oranges ${oranges}`;
  return juice;
}
console.log(fruiteprocesser(6, 2));

//note---return keyword kick out that juice line to use it outside of that funtion

//functions  are three types they are
//function--declarations--1
//function--expressions--2
//function--arrowfuntions--3

//1--declarations example
function age111(birthyear) {
  console.log(birthyear);
  return 2022 - birthyear;
}
const ans123 = age111(2002);
console.log(ans123);

//2--expression
const age2 = function (birthyear) {
  return 2022 - birthyear;
};
console.log(age2(2001));

//3--Arrow funtion(ES6)
const age3 = (birthyear) => 2022 - birthyear;
console.log(age3(2003));
//ex
const ageuntilretirement = (birthyear) => {
  const age4 = 2022 - birthyear;
  const retirementage = 65 - age4;
  return retirementage;
};
console.log(ageuntilretirement(2002));

//function calling another funtion
//ex
function cuttingfruites(fruite) {
  //cutting fun declared
  return fruite * 4; //fun ask to cut me to pices
}

function fruiteprocesser(apples, oranges) {
  const applescutter = cuttingfruites(apples); //now here apple ask fun to
  //call another fun at top

  const orangescutter = cuttingfruites(oranges); //same as top

  const juice = `no of apples ${applescutter} and no of oranges ${orangescutter}`;
  return juice;
}
console.log(fruiteprocesser(4, 2));

//coding challenges---1
const calcavgdol = (dol1, dol2, dol3) => {
  const team1dolavg = (dol1 + dol2 + dol3) / 3;
  return team1dolavg;
};
const avgscoret1 = calcavgdol(44, 23, 71);
console.log(avgscoret1);

const calcavgkol = (kol1, kol2, kol3) => {
  const team2kolavg = (kol1 + kol2 + kol3) / 3;
  return team2kolavg;
};
const avgscoret2 = calcavgkol(85, 54, 41);
console.log(avgscoret2);

function chickendinner(avgscoret1, avgscoret2) {
  if (avgscoret1 >= 2 * avgscoret2) {
    console.log("team1 dol won ");
  } else if (avgscoret2 >= 2 * avgscoret1) {
    console.log("team2 kol won");
  } else {
    console.log("no one won the match");
  }
}
console.log(chickendinner(46, 54));

//all about arrays----------------------------------------
//syntax we can write arrays two ways they are
const friends = ["vi", "pow", "jinxs"];
console.log(friends); //---1
const friendslist = new Array("vil", "powd", "jinxs");
console.log(friendslist); //--2

console.log(friends[0]); //to log 'vi ' to the console ,for arrays index will be 0,1,2---so on
console.log(friends[2]);

console.log(friends.length); //total no of element op--3
console.log(friends[friends.length - 1]); //it will print last element in arrays(3-1 = 2(jinxs))

//const can't change it's value but it only for primitie data types
friends[2] = "harshith"; //replace the array
console.log(friends); //we can change an arrays by pushing any another element

//arrays with alltypes
const age6 = 19;
const myself = ["harshith", age6, "student", friends];
console.log(myself);

//ex we can't do operations with arrays
const age23 = function (birthyear) {
  return 2022 - birthyear;
};
//console.log(age23([2002, 2003, 2004, 2005, 2006]));//---NaN not a number--because of we can do an array -
const years123 = [2002, 2003, 2004, 2005, 2006];
const age7 = age23(years123[0]);
const age8 = age23(years123[1]);
const age9 = age23(years123[years123.length - 1]);
console.log(age7, age8, age9); //op---will not give an array form [20,19,11]

//if you want it as array form
const age10 = [
  age23(years123[0]),
  age23(years123[1]),
  age23(years123[years123.length - 1]),
];
console.log(age10); //op--it will an array

//basic array opration (methods)---------------------------------

//adding
const friends5 = ["har", "sai", "vi", "pow"];
friends5.push("jinxs");
console.log(friends5); //adding new array element at the end
//-----------
friends5.unshift(20);
console.log(friends5); //adding new array element at first

//removing elements in array
friends5.pop(); //removes last element
console.log(friends5);

friends5.shift();
console.log(friends5); //remove first one

console.log(friends5.indexOf("har")); //tells index number
console.log(friends5.includes("har")); //boolean--true checking element is there or not

//coding --challeng---arrays
const calctip1 = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 1.5 : bill * 2;
};
const bill = [125, 555, 44];
const bill1 = calctip1(bill[0]);
const bill2 = calctip1(bill[1]);
const bill3 = calctip1(bill[2]);
console.log(bill1, bill2, bill3);
console.log([calctip1(bill[0]), calctip1(bill[1]), calctip1(bill[2])]); //output will bee in array
console.log(bill1, bill2, bill3); //not in array

//objects------------------(important)---------------------------
const myself1 = {
  FirstName1: "harshith",
  lastName1: "reddy",
  age1: 18,
  friends: ["var", "let", "const"],
}; //output-the var values are arranged in abcdef oder

console.log(myself1);
console.log(myself1.age1); //dot notation
console.log(myself1["age1"]); //bracket notation

//adding new objects to myself1 var using (dot,braket)
myself1.location = "ap";
myself1.bloodtype = "o(-neg)";
myself1["job"] = "front-end dev";
console.table(myself1);

const namekey = "Name1";
console.log(myself1["First" + namekey]);
console.log(myself1["last" + namekey]); //var names is creted here like firstname1 and it is search at object//and this ex used to say that bracket notation expects expression in it

//ex-----------------------------------------------
//  const bracketnotation = prompt("what do whant from harshith");
// console.log(bracketnotation);
// console.log(myself1[bracketnotation]);// bracketnotation an expects expression
//console.log(myself1.bracketnotation);//0p--undefined dot
//ex----------
// if(myself1[bracketnotation]){
//   console.log(myself1[bracketnotation]);

// }else{
//   console.log('plz give correct info')
// }

//ex----
console.log(
  `${myself1.FirstName1} has ${myself1.friends.length} his best friend is ${myself1.friends[0]}`
);
console.log(` ${myself1["FirstName1"]}`);

//objects methods--------------------------------------------------------
let object123 = {
  FirstName12: "harshith",
  lastName12: "reddy",
  age2: 18,
  birthyear11: 2002,
  friends: ["var", "let", "const"],

  single: true,
  age45: function (birthyear) {
    this.age1 = 2021 - this.birthyear11; //the function calling a object is called as object method
    return this.age1;
  }, //this can also used intead of---object123 or we can use object123
};
console.log(object123.age45());

console.log(object123.age2); //op--will from object123 = 18
console.log(object123.age1);
console.log(object123.age1);

//loops---------for loop----------------------------------------
for (let js = 1; js <= 3; js++) {
  console.log("hi" + js);
}

//loop though arrays
const friends12 = [
  "vi",
  "pow",
  "jinxs",
  "hi",
  ["iw", "fu", "yu"],
  19,
  true,
  "fuck",
];
const type = [];

for (let i = 0; i <= friends12.length; i++) {
  console.log(friends12[i], typeof friends12[i]);
  //filling the arrays with data types
  //type[i] = typeof friends12[i]
  //or
  type.push(typeof friends12[i]);
}
console.log(type);

//ex for looping arrays
let year10 = [2000, 2002, 2003, 2004];
let age11 = [];
for (let i = 0; i <= year10.length; i++) {
  age11.push(2021 - year10[i]);
}
console.log(age11);

//contineuing-----break in loops------------------------------------
//contineuing----------------------------

console.log("how to use continue and examples ");
for (let i = 0; i <= friends12.length; i++) {
  if (typeof friends12[i] !== "string") continue;
  {
    //continue; //this will read all string in the array
    console.log(friends12[i], typeof friends12[i]);
  }
}

//break in loops------------------------------

console.log("how to use breaking and examples ");
for (let i = 0; i <= friends12.length; i++) {
  if (typeof friends12[i] !== "string") break; //this wil read only read array that are {see output you will understand see different b/w the contineu and breaks}
  {
    console.log(friends12[i], typeof friends12[i]);
  }
}

//looping backwards and nested loops ----------------------------------!
for (let i = 3; i >= 0; i--) {
  console.log(`for loop ${i}`);
}

//while loop----------------------------------!
let i = 0;
while (i <= 3) {
  console.log(`while loop ${i}`);
  i++;
}

//ex but it is wrong

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let total = [];

const calctip12 = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 1.5 : bill * 2;
};

for (let i = 0; i <= bills.length; i++) {
  let array12 = calctip12(bills[i]);
  console.log(array12);
}

//--------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
// let promtvaalue = prompt("what is your age");
// console.log(typeof promtvaalue, promtvaalue);

// const fun = function (val) {
//   let val1 = val - 0;
//   return val1;
// };
// console.log(fun(promtvaalue));//number function
