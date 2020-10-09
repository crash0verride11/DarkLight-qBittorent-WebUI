// JavaScript Document

// Select the theme preference from localStorage
const currentTheme = localStorage.getItem("theme");
const prevDate = new Date(localStorage.getItem("themeDate"));	
let curDate = new Date();
// If themeForget is true the theme value will be ignored after a set number of hours
let themeForget = true;
// How many hours before the theme value is ignored
var themeClock = 3;
// Difference between time of last set theme preference value and current time.
var dateDif = parseInt((curDate-prevDate)/(3600*1000));
// If the current theme in localStorage is "dark"...
function themeLoad() {
	if ((dateDif <= themeClock) || themeForget == false){
		if (currentTheme == "dark") {
			// ...then use the .dark-theme class
			if (window.matchMedia('(prefers-color-scheme: dark)').matches == false) {
				document.body.classList.toggle("dark-theme");}
		}
		if (currentTheme == "light") {
			// ...then use the .dark-theme class
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				document.body.classList.toggle("light-theme");}
		}	
	}
}
// Listen for a click on the button 
function themeSwap() {
	// If the OS preferes dark-mode...
	if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
		// Remove unnecessary class if OS switches prefered theme while page is already loaded.
		if (document.body.classList.contains("dark-theme")) {document.body.classList.toggle("dark-theme");}
		// Toggle the .light-theme class on each click
		document.body.classList.toggle("light-theme");
		// Default the theme variable to dark
		let theme = "dark";
		// If the body .light-theme class was toggled on, correct the theme variable.
		if (document.body.classList.contains("light-theme")) {
			// ...then let's make the theme dark
			theme = "light";}
		// Then save the choice in localStorage
		localStorage.setItem("theme", theme);
	} else {
		// Remove unnecessary class if OS switches prefered theme while page is already loaded.
		if (document.body.classList.contains("light-theme")) {document.body.classList.toggle("light-theme");}
		// Toggle the .dark-theme class on each click
		document.body.classList.toggle("dark-theme");
		// Default the theme variable to light
		let theme = "light";
		// If the body .dark-theme class was toggled on, correct the theme variable.
		if (document.body.classList.contains("dark-theme")) {
			// ...then let's make the theme dark
			theme = "dark";}
		// Then save the choice in localStorage
		localStorage.setItem("theme", theme);}
}