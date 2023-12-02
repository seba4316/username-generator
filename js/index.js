const settings = new Settings();
const adjectives = new Words();
const nouns = new Words();

let username = null;

document.getElementById("numbersAmount").innerText = settings.numbers;
document.getElementById("numbersSlider").value = settings.numbers;
document.getElementById("randomCase").checked = true;
document.getElementById("randomSeparator").checked = true;

window.addEventListener("load", () => {
	adjectives.loadFile("adjectives", () => {
		nouns.loadFile("nouns", () => {
			generate();
			document.getElementById("generateBtn").addEventListener("click", generate);
			document.getElementById("copyBtn").addEventListener("click", copyUsername);
		});
	});
});

function generate() {
	username = settings.generate(adjectives, nouns);
	display();
}

function display() {
	document.getElementById("usernameDisplay").value = username.get(settings);
}

function setCapitalisation(name) {
	settings.capitalisation = Capitalisation[name.toUpperCase()];
	display();
}

function setSeparator(name) {
	settings.separator = Separator[name.toUpperCase()];
	display();
}

function updateNumbers(slider) {
	settings.numbers = slider.value;
	if (username != undefined)
		username.digits = RandomUtils.generateRandomDigits(settings.numbers);
	document.getElementById("numbersAmount").innerText = settings.numbers;
	display();
}

/**
 * Copies the username to the clipboard.
 */
function copyUsername() {
	if (username == undefined) return;
	let target = document.createElement("textarea");
	target.setAttribute("contenteditable", true);
	target.style.position = "fixed";
	target.value = document.getElementById("usernameDisplay").value;
	
	document.body.appendChild(target);

	target.focus();
	target.select();

	target.setSelectionRange(0, target.value.length);
	document.execCommand("copy");
	document.body.removeChild(target);
}