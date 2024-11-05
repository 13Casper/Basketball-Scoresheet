let pointsHome = 0
let pointsAway = 0

function plus1Home(){
    pointsHome += 1
    document.getElementById("pointsHome").textContent = pointsHome
}
function plus1Away(){
    pointsAway += 1
    document.getElementById("pointsAway").textContent = pointsAway
}
function plus2Home(){
    pointsHome += 2
    document.getElementById("pointsHome").textContent = pointsHome
}
function plus2Away(){
    pointsAway += 2
    document.getElementById("pointsAway").textContent = pointsAway
}
function plus3Home(){
    pointsHome += 3
    document.getElementById("pointsHome").textContent = pointsHome
}
function plus3Away(){
    pointsAway += 3
    document.getElementById("pointsAway").textContent = pointsAway
}

function resetHome(){
    pointsHome = 0
    document.getElementById("pointsHome").textContent = pointsHome
}

function resetAway(){
    pointsAway = 0
    document.getElementById("pointsAway").textContent = pointsAway
}