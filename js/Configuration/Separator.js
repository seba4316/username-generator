function Separator(character) {
	this.character = character;
}

Separator.prototype.get = function() {
	return this.character != null ? this.character : Separator.VALUES[Math.floor(Math.random() * Separator.VALUES.length)].get();
}

Separator.HYPHEN = new Separator("-");
Separator.UNDERSCORE = new Separator("_");
Separator.NONE = new Separator("");
Separator.RANDOM = new Separator(null);

Separator.VALUES = [
	Separator.HYPHEN,
	Separator.UNDERSCORE,
	Separator.NONE
];