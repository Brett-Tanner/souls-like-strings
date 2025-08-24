function currentTheme() {
	if (localStorage.getItem("theme")) return localStorage.getItem("theme");

	return getComputedStyle(document.documentElement).colorScheme;
}

function changeThemeTo(theme) {
	document.documentElement.style.colorScheme = theme;
	localStorage.setItem("theme", theme);
}

function toggleTheme() {
	const theme = currentTheme();
	theme === "light" ? changeThemeTo("dark") : changeThemeTo("light");
}

// There's one in the desktop nav & one in mobile dialog nav
// Both are in DOM at some time so need to attach to both
const themeToggles = document.querySelectorAll(".theme-toggle");
for (const themeToggle of [...themeToggles]) {
	themeToggle.addEventListener("click", toggleTheme);
}

if (localStorage.getItem("theme")) {
	changeThemeTo(localStorage.getItem("theme"));
}
