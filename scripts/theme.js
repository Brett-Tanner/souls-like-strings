function currentTheme() {
	return getComputedStyle(document.documentElement).colorScheme;
}

function toggleTheme() {
	const theme = currentTheme();
	if (theme === "light") {
		document.documentElement.style.colorScheme = "dark";
	} else {
		document.documentElement.style.colorScheme = "light";
	}
}

// There's one in the desktop nav & one in mobile dialog nav
// Both are in DOM at some time so need to attach to both
const themeToggles = document.querySelectorAll(".theme-toggle");
for (const themeToggle of [...themeToggles]) {
	themeToggle.addEventListener("click", toggleTheme);
}
