function checkAge(age) {
    if (age >=18) {
        return true;
    } else {
        return confirm ("Do you have permission from your parents?")
    }
}

function request(){
    let artists = prompt("Request any artists you would like to hear, when you're done type ESC")
    let numbArt = 0
    while(artists != "ESC"){
        numbArt++
        artists = prompt("Request any artists you would like to hear, when you're done type ESC")
    }
    alert(`We will make sure to add these ${numbArt} new artists in the future.`)

}

let age = prompt("How old are you?")

if (checkAge(age)) {
    alert("Access granted");
    request()
} else {
    alert("Access denied")
}