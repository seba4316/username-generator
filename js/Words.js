function Words() {
	this.dictionary = [];
}

Words.prototype.load = function(url, ready) {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", url, false);
    xhr.send(null);

    if (xhr.status === 200) {
        let lines = xhr.responseText.split("\n");
        for (let line of lines)
            this.dictionary.push(line.trim());
        if (ready != null)
            ready();
    } else {
		alert("Could not load the words file `" + url + "`");
    }
}

Words.prototype.loadFile = function(fileName, ready) {
	this.load("words/" + fileName + ".txt", ready);
}

Words.prototype.add = function(word) {
	this.dictionary.push(word);
}

Words.prototype.random = function(settings) {
	let word = this.dictionary[Math.floor(Math.random() * this.dictionary.length)];
    return settings.capitals ? word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase() : word;
}