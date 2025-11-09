

document.addEventListener('DOMContentLoaded', () => {

	const currentYear = new Date().getFullYear();
	const yearSpan = document.getElementById('currentyear');
	if (yearSpan) {
		yearSpan.textContent = currentYear;
	}

	const lastSpan = document.getElementById('lastmodified');
	if (lastSpan) {
		let lm = document.lastModified;
		let lmDate = lm ? new Date(lm) : new Date();
	
		if (isNaN(lmDate.getTime())) lmDate = new Date();

		lastSpan.textContent = lmDate.toLocaleString();
	}
});

