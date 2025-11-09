

document.addEventListener('DOMContentLoaded', () => {
	// Set the current year
	const currentYear = new Date().getFullYear();
	const yearSpan = document.getElementById('currentyear');
	if (yearSpan) {
		yearSpan.textContent = currentYear;
	}

	// Set the last modified timestamp (fall back to now if unavailable/invalid)
	const lastSpan = document.getElementById('lastmodified');
	if (lastSpan) {
		let lm = document.lastModified;
		let lmDate = lm ? new Date(lm) : new Date();
		// If parsing failed, fallback to current date
		if (isNaN(lmDate.getTime())) lmDate = new Date();
		// Format nicely (example: 11/9/2025, 2:34:12 PM)
		lastSpan.textContent = lmDate.toLocaleString();
	}
});

