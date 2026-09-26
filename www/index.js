const form = document.querySelector("form")
const tableBody = document.getElementById("tableBody")

const inputName = document.getElementById("inputName")
const inputPrice = document.getElementById("inputPrice")
const inputQuantity = document.getElementById("inputQuantity")
const inputUnit = document.getElementById("inputUnit")
const inputAbv = document.getElementById("inputAbv")

let drinks = []
const saved = localStorage.getItem("drinks")
if (saved) drinks = JSON.parse(saved)

function saveDrinks() {
	localStorage.setItem("drinks", JSON.stringify(drinks))
}

function convertToMl(value, unit) {
	if (unit === "liters") return value * 1000
	return value
}

function calculateMlPerReal(quantity, abv, price) {
	const result = (quantity * (abv / 100)) / price
	if (!Number.isInteger(result)) return Number(result.toFixed(2))
	return result
}

function removeDrink(index) {
	drinks.splice(index, 1)
	saveDrinks()
	updateTable()
}

function createCell(value) {
	const td = document.createElement("td")
	td.innerText = value
	return td
}

function createRow(drink, index) {
	const row = document.createElement("tr")

	row.appendChild(createCell(drink.name))
	row.appendChild(createCell(`R$ ${drink.price.toFixed(2)}`))
	row.appendChild(createCell(`${drink.quantity} mL`))
	row.appendChild(createCell(`${drink.abv}%`))
	row.appendChild(createCell(`${drink.mlPerReal} mL/R$`))

	const deleteCell = document.createElement("td")
	const deleteButton = document.createElement("i")

	deleteButton.id = `delete-${index}`
	deleteButton.classList.add("icon-delete")
	deleteButton.addEventListener("click", () => removeDrink(index))

	deleteCell.appendChild(deleteButton)
	row.appendChild(deleteCell)

	return row
}

function updateTable() {
	while (tableBody.firstChild) tableBody.removeChild(tableBody.firstChild)
	drinks.forEach((drink, i) => tableBody.appendChild(createRow(drink, i)))
}

form.addEventListener("submit", (event) => {
	event.preventDefault()

	const name = inputName.value
	const price = Number(inputPrice.value)
	const abv = Number(inputAbv.value)

	const quantity = convertToMl(Number(inputQuantity.value), inputUnit.value)
	const mlPerReal = calculateMlPerReal(quantity, abv, price)

	drinks.push({ name, price, quantity, abv, mlPerReal })
	drinks.sort((a, b) => b.mlPerReal - a.mlPerReal)

	saveDrinks()
	updateTable()
	form.reset()
})

updateTable()
