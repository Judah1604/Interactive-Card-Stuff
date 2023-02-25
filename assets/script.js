let inputs = document.getElementsByClassName('normalInput')
let otherInputs = document.getElementsByClassName('otherInput')
let numberInputs = document.getElementsByClassName('numberInput')
let numberInputOthers = document.getElementsByClassName('numberInputOther')

let nameInput = document.querySelector("#cardNameInput")
let cardName = document.querySelector(".card-name")
let defaultCardName = cardName.textContent

let numberInput = document.querySelector("#numberInput")
let cardNumber = document.querySelector(".card-num")
let defaultCardNo = cardNumber.textContent

let cardMonth = document.querySelector(".cardMonth")
let cardYear = document.querySelector(".cardYear")
let defaultCardMonth = cardMonth.textContent
let defaultCardYear = cardYear.textContent

let cardMonthInput = document.querySelector("#month")
let cardYearInput = document.querySelector("#year")

let cardCvc = document.querySelector(".card-cvc")
let cardCvcInput = document.querySelector("#cvc")
let defaultCardCvc = cardCvc.textContent

let form = document.querySelector(".form")
let thankYou = document.querySelector(".thank-you")

let submitBtn = document.querySelector(".submitBtn")
let continueBtn = document.querySelector(".continueBtn")

function displayInput(input, output, defaultValue) {
	if (input.value == '') {
		output.innerHTML = defaultValue;
	} else if (input.value !== '') {
		output.textContent = input.value
	}
}

nameInput.addEventListener('input', function () {
	displayInput(nameInput, cardName, defaultCardName)
})

numberInput.addEventListener('input', function () {
	displayInput(numberInput, cardNumber, defaultCardNo)
})

cardMonthInput.addEventListener('input', function () {
	displayInput(cardMonthInput, cardMonth, defaultCardMonth)
})

cardYearInput.addEventListener('input', function () {
	displayInput(cardYearInput, cardYear, defaultCardYear)
})

cardCvcInput.addEventListener('input', function () {
	displayInput(cardCvcInput, cardCvc, defaultCardCvc)
})

numberInput.addEventListener('blur', function () {
	if (numberInput.value.length == 16) {
		let arrayedValue = numberInput.value.split('')
		arrayedValue.splice(4, 0, ' ')
		arrayedValue.splice(9, 0, ' ')
		arrayedValue.splice(14, 0, ' ')
		numberInput.value = arrayedValue.join('')
		cardNumber.textContent = arrayedValue.join('')
	}
})

submitBtn.addEventListener('click', () => {
	for (let input of inputs) {
		for (let otherInput of otherInputs) {
			if (input.value != '' && otherInput.value != '') {
				input.parentElement.children[3].classList.remove('active')
				otherInput.parentElement.children[2].classList.remove('active')
				thankYou.classList.add('active');
				form.classList.add('inactive');
				input.classList.remove('invalid')
				otherInput.classList.remove('invalid')
			} else if (input.value == '' && otherInput.value == '') {
				input.parentElement.children[3].classList.add('active')
				otherInput.parentElement.children[2].classList.add('active')
				input.classList.add('invalid')
				otherInput.classList.add('invalid')
			} else {
				input.parentElement.children[3].classList.remove('active')
				otherInput.parentElement.children[2].classList.remove('active')
				input.classList.remove('invalid')
				otherInput.classList.remove('invalid')
			}
		}
	}

	for (let input of numberInputs) {
		for (let otherInput of numberInputOthers) {
			if (input.value.match(/^[A-Za-z]+$/)) {
				input.parentElement.children[2].classList.add('active')
				input.classList.add('invalid')
			} else if (otherInput.value.match(/^[A-Za-z]+$/)) {
				otherInput.parentElement.children[1].classList.add('active')
				otherInput.classList.add('invalid')
			} else {
				input.parentElement.children[1].classList.remove('active')
				otherInput.parentElement.children[1].classList.remove('active')
				input.classList.remove('invalid')
				otherInput.classList.remove('invalid')
			}
		}
	}

	if (nameInput.value.match(/^[0-9]/)) {
		nameInput.parentElement.children[2].classList.add('active')
		nameInput.classList.add('invalid')
	} else {
		nameInput.parentElement.children[2].classList.remove('active')
		nameInput.classList.remove('invalid')
	}
})

continueBtn.addEventListener('click', function () {
	for (let input of inputs) {
		for (let otherInput of otherInputs) {
			input.value = ''
			otherInput.value = ''
		}
	}

	thankYou.classList.remove('active');
	form.classList.remove('inactive');
})

window.addEventListener('resize', function () {
	if (window.innerWidth = 375) {
		document.querySelector('.bg-main-desktop').setAttribute('src', 'images/bg-main-mobile.png')
	}
})

document.addEventListener('DOMContentLoaded', function () {
	if (window.innerWidth = 375) {
		document.querySelector('.bg-main-desktop').setAttribute('src', 'images/bg-main-mobile.png')
	}
})
