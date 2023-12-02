function Username(firstWord, secondWord, digits) {
	this.firstWord = firstWord;
	this.secondWord = secondWord;
	this.digits = digits;
}

Username.prototype.get = function(settings) {
	return settings.capitalisation.capitalise(this.firstWord) +	// First word
		settings.separator.get() +                             	// Separator
		settings.capitalisation.capitalise(this.secondWord) +  	// Second word
		this.digits;                                           	// Digits
}