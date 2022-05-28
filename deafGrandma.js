function deafGrandma() {
    let cont = true;
    let goodbyes = 0;

    let userInput = prompt('HEY KID!')
    while (cont) {
        if (userInput === "") {
            userInput = prompt("WHAT!?")
        } else if (userInput == "GOODBYE!") {
            if (goodbyes === 0) {
                userInput = prompt("LEAVING SO SOON?")
                goodbyes += 1
            } else if (goodbyes === 1) {
                alert("LATER, SKATER!")
                cont = false
            }
        } else if (userInput === userInput.toUpperCase()) {
            userInput = prompt('NO, NOT SINCE 1946!')
        } else {
            userInput = prompt("SPEAK UP, KID!")
        }
    }
}

deafGrandma()