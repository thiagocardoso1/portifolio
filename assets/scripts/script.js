const icon = document.getElementById("toggleTheme");
icon.addEventListener("click", () => {
    icon.classList.toggle("bi-sun");
    icon.classList.toggle("bi-moon-stars");

    const htmlElement = document.documentElement;
    htmlElement.getAttribute("data-theme") === "dark" ? htmlElement.setAttribute("data-theme", "light") : htmlElement.setAttribute("data-theme", "dark");
    
})