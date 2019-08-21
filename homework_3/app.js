'use strict'

let delayedOutput = (...args) => {
	let words = args[0].split(' ');
	let numbers = args.slice(1).map(v => Number(v));
	numbers = getPaddedNumbers(words, numbers);
	for(let i = 0; i< words.length; i++){
		let tm = setTimeout(() => {
			console.log(words[i])
		}, numbers[i]*1000)
	}
};

let getPaddedNumbers = (words, numbers) => {
	let wordsLength = words.length;
	let numbersLength = numbers.length;

	if(words.length > numbers.length){
		let arraydifference = wordsLength - numbersLength;

		for(let i=0;i<arraydifference; i++){
			numbers.push(numbers[numbers.length-1]);
		}
	}
    return numbers;
};

delayedOutput("fox fox fox grumpy fox", 2, 3, 4 );

