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
