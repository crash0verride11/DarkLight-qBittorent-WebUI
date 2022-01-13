let curDate = new Date();

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
        theme = "light";
    }
    // Then save the choice in localStorage
    curDate = new Date();
    localStorage.setItem("theme", theme);
    localStorage.setItem("themeDate", curDate);
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
        theme = "dark";
    }
    // Then save the choice in localStorage
    curDate = new Date();
    localStorage.setItem("theme", theme);
    localStorage.setItem("themeDate", curDate);
}  
}


/* window.onload = (event) => {
    
    document.getElementById('downloadButton').onclick = function() {
        setTimeout(function(){
        var bodies = document.getElementById('downloadPage')
        document.bodies[1].classList.toggle("light-theme");
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            if (document.body.classList.contains("dark-theme")) {document.body.classList.toggle("dark-theme");}
            document.bodies.classList.toggle("light-theme");
        } else {
            if (document.body.classList.contains("light-theme")) {document.body.classList.toggle("light-theme");}
            document.body.classList.toggle("dark-theme");
        }}, 300);
    }
}*/
