const icon = document.getElementById("toggleTheme");
icon.addEventListener("click", () => {
    icon.classList.toggle("bi-sun");
    icon.classList.toggle("bi-moon-stars");

    const htmlElement = document.documentElement;
    htmlElement.getAttribute("data-theme") === "dark" ? htmlElement.setAttribute("data-theme", "light") : htmlElement.setAttribute("data-theme", "dark");
    
})

function showDetails(accordionItem) {
    accordionItem.addEventListener("click", () => {
        accordionItem.classList.toggle("active");
    });
};

const accordionItems = document.querySelectorAll(".accordion__item");
accordionItems.forEach((accordionItem) => {showDetails(accordionItem)});

const menuLinks = document.querySelectorAll(".menu__item");

menuLinks.forEach((item) => {
    item.addEventListener("click", () => {
        menuLinks.forEach((i) => {i.classList.remove("active")});
        item.classList.add("active");
    });
});