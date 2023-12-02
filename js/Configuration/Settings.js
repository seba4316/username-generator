function Settings() {
    this.capitalisation = Capitalisation.RANDOM;
    this.separator = Separator.RANDOM;
    this.numbers = 4;
}

Settings.prototype.generate = function(adjectives, nouns) {
    return new Username(adjectives.random(this),
						nouns.random(this),
						RandomUtils.generateRandomDigits(settings.numbers));
};