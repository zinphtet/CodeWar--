//CodeWars Challenge
// 1 highAndLow
const highAndLow = (numbers) => {
	const numArr = numbers.split(' ').map((num) => Number(num));
	return `${Math.max(...numArr)} ${Math.min(...numArr)}`;
};
// highAndLow('1 2 -3 4 5');

// 2 Sort words according to their orders
const order = (words) => {
	if (!words.length) return '';
	const splitWords = words.split(' ');

	const filterNumChar = splitWords.map((words) =>
		words.split('').filter((char) => Number(char))
	);

	const numSort = filterNumChar
		.flat()
		.map((num) => Number(num))
		.sort();

	const sortedArr = [];
	numSort.forEach((num) => {
		const myWord = splitWords.filter((word) => word.includes(num.toString()));
		sortedArr.push(myWord);
	});
	return `${sortedArr.join(' ')}`;
};

// order('is2 Thi1s T4est 3a');
// order('4of Fo1r pe6ople g3ood th5e the2');
// order('');

//3 Acc
const accum = (string) => {
	return string
		.split('')
		.map((char, idx) => char.toLowerCase().repeat(idx + 1))
		.map((word) => word[0].toUpperCase() + word.slice(1))
		.join('-');
};
// accum('abcd');

// 4 Maskify
const maskify = (str) => {
	return str.slice(-4).padStart(str.length, '#');
};
// maskify('hello1234');

// 5 filter name with 4 chars
const friend = (friends) => {
	return friends.filter((friend) => friend.length === 4);
};

// 6 anagram

const arrWords = (str) => {
	if (!str.length) return false;
	return [...str].map((char) => char.charCodeAt(0)).sort((a, b) => a - b);
};
const anagrams = (word1, words) => {
	return words.filter((word) =>
		arrWords(word).every((char, i) => char === arrWords(word1)[i])
	);
};

// 7 find the parity outlier
const findOutlier = (integers) => {
	let myNum;
	const evenNum = integers.filter((num) => num % 2 === 0);
	const oddNum = integers.filter((num) => num % 2 !== 0);
	evenNum.length === 1 ? ([myNum] = evenNum) : ([myNum] = oddNum);
	return myNum;
};

// 8 Simple Pig Latin

const pigIt = (str) => {
	const splittedWords = str.split(' ');
	const slicedWords = splittedWords.map((word) => word.slice(1));
	return slicedWords
		.map((word, i) => {
			if (word === '' && splittedWords[i][0].charCodeAt(0) < 65)
				return splittedWords[i][0];
			return word + splittedWords[i][0] + 'ay';
		})
		.join(' ');
};
// pigIt('Pig latin is cool');
pigIt('o tempora o mores !');

//9 Who likes it?

const likes = (names) => {
	if (names.length === 0) return `no one likes this`;
	if (names.length === 1) return `${names[0]} likes this`;
	if (names.length === 2) return `${names[0]} and ${names[1]} like this`;
	if (names.length === 3)
		return `${names[0]}, ${names[1]} and  ${names[2]} like this`;

	if (names.length > 3)
		return `${names[0]}, ${names[1]} and ${names.length - 2}  others like this`;
};

//10Persistent Bugger
const mutiplyResult = (num) => {
	const numArr = num
		.toString()
		.split('')
		.map((num) => Number(num));
	const multiply = numArr.reduce((acc, num) => acc * num, 1);
	return multiply;
};

const persistence = (num) => {
	let count = 0;
	const length = num.toString().length;
	if (length === 1) return count;
	while (num.toString().length > 1) {
		++count;
		num = mutiplyResult(num);
	}
	return count;
};

persistence(39);

// function hello() {
// 	console.log(arguments);
// }
// hello(1, 2, 3, 'hello', false);

// 11 Calculating with Functions

const toFixed = (str) => {
	const result = eval(str);
	const split = result.toString().split('.');
	return Number(split[0]);
};

const zero = (val) => {
	if (!val) return 0;
	return toFixed(`0${val}`);
};
const one = (val) => {
	if (!val) return 1;
	return toFixed(`1${val}`);
};
const two = (val) => {
	if (!val) return 2;
	return toFixed(`2${val}`);
};
const three = (val) => {
	if (!val) return 3;
	return toFixed(`3${val}`);
};
const four = (val) => {
	if (!val) return 4;
	return toFixed(`4${val}`);
};
const five = (val) => {
	if (!val) return 5;
	return toFixed(`5${val}`);
};
const six = (val) => {
	if (!val) return 6;
	return toFixed(`6${val}`);
};
const seven = (val) => {
	if (!val) return 7;
	return toFixed(`7${val}`);
};
const eight = (val) => {
	if (!val) return 8;
	return toFixed(`8${val}`);
};
const nine = (val) => {
	if (!val) return 9;
	return toFixed(`9${val}`);
};

const plus = (val) => '+' + val;
const minus = (val) => '-' + val;
const times = (val) => '*' + val;
const dividedBy = (val) => '/' + val;

//12Valid Parentheses

const validParentheses = (parens) => {
	const split = parens.split('');
	let count1 = 0;
	let count2 = 0;
	if (split.length == 1) return false;
	split.forEach((par) => {
		if (par === '(') ++count1;
		if (par === ')') {
			--count1;
			if (count1 < 0) count2 = -1;
		}
	});

	if (count2 < 0 || count1 > 0) return false;
	return true;
};

//13 Chain Adding

const add = (val1) => {
	const fn = (val2) => {
		if (!val2) return val1;
		return val1 + val2;
	};
	return fn();
};

//14 String Increment

const incrementString = (str) => {
	const splitted = str.split('');
	const charArr = [];
	const numArr = [];
	splitted.forEach((char) => {
		char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57
			? numArr.push(char)
			: charArr.push(char);
	});
	if (numArr.length === 0) return charArr.join('') + 1;
	let num = Number(numArr.join('')) + 1;
	let numStr = num.toString().padStart(numArr.length, '0');
	return charArr.join('') + numStr;
};

//15 The Hashtag Generator

const generateHashtag = (str) => {
	if (!str.trim()) return false;
	const resultStr = str
		.trim()
		.split(' ')
		.filter((word) => word !== '')
		.map((word) => word[0].toUpperCase() + word.slice(1))
		.join('');
	if (resultStr.length >= 140) return false;
	return '#' + resultStr;
};

//16  sumStrings

const sumStrings = (a, b) => {
	let num1 = parseInt(a);
	let num2 = parseInt(b);
	if (!num1) num1 = 0;
	if (!num2) num2 = 0;
	return (BigInt(num1) + BigInt(num2)).toString();
};

//17 Pete , the baker

const cakes = (recipe, available) => {
	const keys = Object.keys(recipe);
	const resultArr = keys.map((item) => {
		if (!available[item]) return 0;
		return available[item] / recipe[item];
	});
	const min = Math.min(...resultArr)
		.toString()
		.split('.')[0];
	return Number(min);
};
// cakes(
// 	{ flour: 500, sugar: 200, eggs: 1 },
// 	{ flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
// );

//Scramblies

const scramble = (str1, str2) => {
	const sortedStr1 = str1.split('').sort();
	const sortedStr2 = str2.split('').sort();
	const resultArr = sortedStr2.map((char) => sortedStr1.includes(char));
	return resultArr.every((ele) => ele === true);
};

//Convert A Hex String To RGB

const hexStringToRGB = (hexString) => {
	const split = hexString.slice(1).match(/(..?)/g);
	console.log(split);
	return {
		r: parseInt(split[0], 16),
		g: parseInt(split[1], 16),
		b: parseInt(split[2], 16),
	};
};

//Move zero to the end

const findLengthArr1 = (arr) => {
	let length = 0;
	while (arr[length] !== undefined) {
		length++;
	}
	return length;
};

const removeZeros1 = (array) => {
	const arr = [...array];
	let length = findLengthArr1(arr);
	let zeroTimes = 0;
	for (let i = 0; i < length - 1; i++) {
		if (arr[i] == 0) {
			zeroTimes++;
			for (let j = i; j < length - 1; j++) {
				arr[j] = arr[j + 1];
			}
			i--;
		}
	}
	for (let i = length - zeroTimes; i < length; i++) {
		arr[i] = 0;
	}
	return arr;
};

/////////////////////////////////////////////////////////////////////

const findLengthArr = (arr) => {
	let length = 0;
	while (arr[length] !== undefined) {
		length++;
	}
	return length;
};

const removeZeros = (array) => {
	const arr = [...array];
	const length = findLengthArr(arr);
	let loopTime = 0;
	for (let i = 0; i < length; i++) {
		if (arr[i] == 0) {
			loopTime++;
		}
	}

	for (let i = 0; i < length - 1; i++) {
		if (arr[i] == 0) {
			if (arr[i + 1] != 0) {
				let temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
			} else {
				for (let j = i; j < length - 1; j++) {
					arr[j] = arr[j + 1];
				}
				i--;
			}
		}
	}
	for (let i = length - loopTime; i < length; i++) {
		arr[i] = 0;
	}
	return arr;
};

// removeZeros([1, 2, 0, 4, 5, 0, 0, 8]); //1 2 4 5 0 0 8 0
// removeZeros([1, 0, 0, 0, 0, 9, 8]);

//firstNonRepeatingLetter

const firstNonRepeatingLetter = (str) => {
	if (str.length == 1) return str;
	const split = str.split('');
	const resultArr = [];
	split.forEach((char) => {
		const arr = split.filter((fchar) =>
			char.toLowerCase() === fchar.toLowerCase() ? char : ''
		);
		if (arr.length === 1) {
			resultArr.push(arr[0]);
		}
	});
	return resultArr[0] ? resultArr[0] : '';
};
// firstNonRepeatingLetter('moonmen');

//moonmen
// const hello = [1, 2, 3];
// hello = [3, 4, 5];

//Caesar Cipher Helper

class CaesarCipher {
	constructor(num) {
		this.num = num;
	}
	encode(str) {
		if (isFinite(str)) return str;
		const split = str.split('').map((char) => char.charCodeAt(0));
		const numArr = split.map((arrNum) => {
			let finalValue;
			if (arrNum <= 90) {
				finalValue = arrNum + this.num;
				if (finalValue > 90) {
					finalValue = 64 + (arrNum + this.num - 90);
				}
			}
			if (arrNum <= 122) {
				finalValue = arrNum + this.num;
				if (finalValue > 122) {
					finalValue = 96 + (arrNum + this.num - 122);
				}
			}
			return finalValue;
		});
		return String.fromCharCode(...numArr).toUpperCase();
	}
	decode(str) {
		if (isFinite(str)) return str;
		const split = str.split('').map((char) => char.charCodeAt(0));
		const numArr = split.map((arrNum) => {
			let finalValue = arrNum - this.num;
			if (arrNum <= 90) {
				if (finalValue < 65) {
					finalValue = 90 - (64 - finalValue);
				}
			}
			if (arrNum >= 97) {
				if (finalValue < 97) {
					finalValue = 122 - (96 - finalValue);
				}
			}
			return finalValue;
		});
		return String.fromCharCode(...numArr).toUpperCase();
	}
}

const c = new CaesarCipher(5);

function CaesarCipher1(shitNum) {
	this.num = shitNum;
}
CaesarCipher1.prototype.encode = function (str) {
	if (isFinite(str)) return str;
	const split = str.split('').map((char) => char.charCodeAt(0));

	const numArr = split.map((arrNum) => {
		let finalValue;
		if (arrNum <= 90) {
			finalValue = arrNum + this.num;
			if (finalValue > 90) {
				finalValue = 64 + (arrNum + this.num - 90);
			}
		}
		if (arrNum <= 122) {
			finalValue = arrNum + this.num;
			if (finalValue > 122) {
				finalValue = 96 + (arrNum + this.num - 122);
			}
		}
		return finalValue;
	});
	return String.fromCharCode(...numArr).toUpperCase();
};
CaesarCipher1.prototype.decode = function (str) {
	if (isFinite(str)) return str;
	const split = str.split('').map((char) => char.charCodeAt(0));

	const numArr = split.map((arrNum) => {
		let finalValue = arrNum - this.num;
		if (arrNum <= 90) {
			if (finalValue < 65) {
				finalValue = 90 - (64 - finalValue);
			}
		}
		if (arrNum >= 97) {
			if (finalValue < 97) {
				finalValue = 122 - (96 - finalValue);
			}
		}
		return finalValue;
	});
	return String.fromCharCode(...numArr).toUpperCase();
};

const a = new CaesarCipher1(5);

/// humanReadable Time

const humanReadable = (input) => {
	const sec = input < 60 ? input : input % 60;
	const min = Number(((input % 3600) / 60).toString().split('.')[0]);
	const hour = Number((input / 3600).toString().split('.')[0]);
	return `${hour.toString().padStart(2, 0)}:${min
		.toString()
		.padStart(2, 0)}:${sec.toString().padStart(2, 0)}`;
};

// humanReadable(90);
// humanReadable(45296);

//JS Closure
//memory efficient

const heavyDuty = (indx) => {
	const num = [];
	for (let i = 0; i < 60000000; i++) {
		num.push(i);
	}
	const arr = new Array(10000).fill(0);
	console.log('heavy Duty');
	return arr[indx];
};

// heavyDuty(234);
// heavyDuty(343);
// heavyDuty(756);
//memory efffiecnt
const heavyDuty2 = () => {
	const num = [];
	for (let i = 0; i < 60000000; i++) {
		num.push(i);
	}
	const arr = new Array(10000).fill(0);

	return function (indx) {
		console.log('get Duty ');
		return arr[indx];
	};
};

const getDuty = heavyDuty2();

// getDuty(123);
// getDuty(900);
// getDuty(5345);

//Closure Encapsulation

const CallOnce = () => {
	let call = 0;
	return function () {
		if (call > 0) return;
		console.log('How many times you called I run once');
		call++;
	};
};

const call = CallOnce();
// call();
// call();

// lastYear Prototype method
Date.prototype.lastYear = function () {
	return this.getFullYear() - 1;
};
// console.log(new Date().lastYear());

//Overwrite the existing method
Array.prototype.map = function () {
	const arr = [];
	for (let i = 0; i < this.length; i++) {
		arr.push(this[i] + '🍩');
	}
	return [...arr];
};

//Amazon Shopping Cart
const user = {
	name: 'Mg Mg',
	active: true,
	cart: [],
	purchase: [],
};

//addToCart
const addToCart = (userObj, item) => {
	userObj.cart.push(item);
};
addToCart(user, { name: 'iPhone 14', price: 1220 });
addToCart(user, { name: 'MacBook pro', price: 2000 });
//addPercent
const addThreePercent = (userObj) => {
	userObj.cart.forEach((item) => {
		item.percent = item.price * 0.03;
	});
};
addThreePercent(user);

//buyItems
const buyItems = (userObj) => {
	userObj.purchase = [...userObj.cart];
};
buyItems(user);

//emptyCart
const emptyCart = (userObj) => {
	userObj.cart = [];
};

emptyCart(user);

//Refund
const refundItem = (userObj, reItem) => {
	userObj.purchase = userObj.purchase.filter(
		(item) => item.name !== reItem.name
	);
};

refundItem(user, { name: 'iPhone 14' });

//Closure

const closure = () => {
	let count = 3000;
	return () => count;
};

const getCount = closure();
// console.log(getCount());

//Partial Application   //Not Closure
const MultiPly = (a, b, c) => a * b * c;
const multiBy5 = MultiPly.bind(null, 5);
// multiBy5(4, 3);

//Compose and pipe
//Compose
// * make the number absoulte and multiply by 7
const compose = (f, g, h) => (data) => f(g(h(data)));
const multiply = (data) => data * 7;
const double = (data) => data * 2;
const numberAbsolute = (data) => Math.abs(data);
const makeNumberAbsoluteAndMultiplyBy7 = compose(
	multiply,
	numberAbsolute,
	double
);
const data = makeNumberAbsoluteAndMultiplyBy7(-40);
console.log(data);
