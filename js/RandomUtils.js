function RandomUtils() {
}

RandomUtils.generateRandomDigits = function(count) {
	let randomNumber = '';
	for (let i = 0; i < count; i++)
		randomNumber += Math.floor(Math.random() * 10);
	return randomNumber;
}