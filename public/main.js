let counter1 = 0
let counter2 = 0

let teamOne = 'Team 1'
let teamTwo = 'Team 2'

const main = () => {
	document.querySelector('.team1Score').textContent = 0
	document.querySelector('.team2Score').textContent = 0

	document.querySelector('.team1-update-name').textContent = 'Team 1'
	document.querySelector('.team2-update-name').textContent = 'Team 2'
}
// Add 1 to Team 1
const addOneTeamOne = () => {
	console.log('button clicked added 1')
	counter1++
	console.log('counter1 add')
	document.querySelector('.team1Score').textContent = counter1
}

// Sub 1 Team 1
const subtractTeamOne = () => {
	console.log('button clicked subtracted 1')
	counter1--
	console.log('counter1')
	document.querySelector('.team1Score').textContent = counter1
}

// Add 1 to Team 2
const addOneTeamTwo = () => {
	console.log('button clicked added 1')
	counter2++
	console.log('counter2 add')
	document.querySelector('.team2Score').textContent = counter2
}

// Sub 1 to Team 2
const subtractTeamTwo = () => {
	console.log('button clicked subtract one')
	counter2--
	console.log('counter2 add')
	document.querySelector('.team2Score').textContent = counter2
}

// Reset Counter Team 1
const resetCounter1 = () => {
	console.log('resetting counter')
	counter1 = 0
	console.log('reset counter to ' + 'counter1')
	document.querySelector('.team1Score').textContent = counter1
}

// Reset Counter Team 2
const resetCounter2 = () => {
	console.log('resetting counter')
	counter2 = 0
	console.log('reset counter to ' + 'counter2')
	document.querySelector('.team2Score').textContent = counter2
}

/* // Reset Team 1 Name
const resetTeamOneName = () => {
	teamOne = document.querySelector('.team1-update-name').value
	console.log('teamOne name change')
	document.querySelector('.new-name1').textContent = teamOne
	console.log('teamOne')
}

// Reset Team 2 Name
const resetTeamTwoName = () => {
	teamTwo = document.querySelector('.team2-update-name').value
	console.log('button clicked for name change')
	document.querySelector('.new-name2').textContent = teamTwo
	console.log('teamTwo')
} */

document.addEventListener('DOMContentLoaded', main)
//  Team 1 Score Events
document
	.querySelector('.team-1-add-1-button')
	.addEventListener('click', addOneTeamOne)

document
	.querySelector('.team-1-subtract-1-button')
	.addEventListener('click', subtractTeamOne)

// Team 2 Score Events

document
	.querySelector('.team-2-add-1-button')
	.addEventListener('click', addOneTeamTwo)

document
	.querySelector('.team-2-subtract-1-button')
	.addEventListener('click', subtractTeamTwo)

// Team 1 Update Name Events

document
	.querySelector('.update-team-1-name')
	.addEventListener('click', changeTeamOne)

// Team 2 Update Name Events

document
	.querySelector('.update-team-2-name')
	.addEventListener('click', changeTeamTwo)

// Team 1 Reset Score Button

document
	.querySelector('.team-1-reset-button')
	.addEventListener('click', resetCounter1)

// Team 2 Reset Score Button

document
	.querySelector('.team-2-reset-button')
	.addEventListener('click', resetCounter2)

/* // Team 1 Reset Name Button

document
	.querySelector('.reset-team-1-name')
	.addEventListener('click', resetTeamOneName)

// Team 2 Reset Name Button
document
	.querySelector('.reset-team-2-name')
	.addEventListener('click', resetTeamTwoName) */
