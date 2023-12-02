function Capitalisation(capitalise) {
	this.capitalise = capitalise;
}

Capitalisation.TITLE_CASE = new Capitalisation((string) => {
	return string.substring(0, 1).toUpperCase() + string.substring(1).toLowerCase();
});
Capitalisation.LOWERCASE = new Capitalisation((string) => {
	return string.toLowerCase();
});
Capitalisation.ALTERNATING = new Capitalisation((string) => {
	let chars = string.split('');
	for (let i = 0; i < chars.length; i++)
		chars[i] = i % 2 == 0 ? chars[i].toLowerCase() : chars[i].toUpperCase();
	return chars.join('');
});
Capitalisation.RANDOM = new Capitalisation((string) => {
	return Capitalisation.VALUES_RANDOM[Math.floor(Math.random() * Capitalisation.VALUES_RANDOM.length)].capitalise(string);
});

Capitalisation.VALUES = [
	Capitalisation.TITLE_CASE,
	Capitalisation.LOWERCASE,
	Capitalisation.ALTERNATING
];

Capitalisation.VALUES_RANDOM = [];
for (let i = 0; i < Capitalisation.VALUES.length - 1; i++)
	Capitalisation.VALUES_RANDOM.push(Capitalisation.VALUES[i]);