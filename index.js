//CodeWars Challenge
const highAndLow = (numbers) => {
	const numArr = numbers.split(' ').map((num) => Number(num));
	return `${Math.max(...numArr)} ${Math.min(...numArr)}`;
};
// highAndLow('1 2 -3 4 5');
