const root = document.documentElement
const toggleBtn = document.getElementById("theme-toggle")

let theme = localStorage.getItem("theme")
if (!theme) theme = "dark"

root.setAttribute("data-theme", theme)
toggleBtn.className = "icon-light-mode"
if (theme === "dark") toggleBtn.className = "icon-dark-mode"

toggleBtn.addEventListener("click", () => {
	theme = "dark"
	if (root.getAttribute("data-theme") === "dark") theme = "light"

	root.setAttribute("data-theme", theme)
	localStorage.setItem("theme", theme)

	toggleBtn.className = "icon-light-mode"
	if (theme === "dark") toggleBtn.className = "icon-dark-mode"
})
