let homePoints = 0
let guestPoints = 0

//Home Team Logic

let homeScore = document.getElementById("home-points")

function plusOneHome() {
    homePoints += 1
    homeScore.textContent = homePoints
}

function plusTwoHome() {
    homePoints += 2
    homeScore.textContent = homePoints
}

function plusThreeHome() {
    homePoints += 3
    homeScore.textContent = homePoints
}

//Guest Team Logic

let guestScore = document.getElementById("guest-points")

function plusOneGuest() {
    guestPoints += 1
    guestScore.textContent = guestPoints
}

function plusTwoGuest() {
    guestPoints += 2
    guestScore.textContent = guestPoints
}

function plusThreeGuest() {
    guestPoints += 3
    guestScore.textContent = guestPoints
}

// New Game 

function newBtn() {
     homePoints = 0
     guestPoints = 0
     homeScore.textContent = homePoints
     guestScore.textContent = guestPoints
}