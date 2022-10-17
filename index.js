let homePts=document.getElementById('home-pts')
let homeCount=0
let guestPts=document.getElementById('guest-pts')
let guestCount=0

function homeAddPoint() {
    homeCount+=1
    homePts.textContent=homeCount    
}

function homeAddTwoPoints() {
    homeCount+=2
    homePts.textContent=homeCount
}

function homeAddThreePoints() {
    homeCount+=3
    homePts.textContent=homeCount
}


function guestAddPoint() {
    guestCount+=1
    guestPts.textContent=guestCount    
}

function guestAddTwoPoints() {
    guestCount+=2
    guestPts.textContent=guestCount
}

function guestAddThreePoints() {
    guestCount+=3
    guestPts.textContent=guestCount
}