

function displayType(character) {
    var characterType = character.getAttribute("data-charachter-type");
    alert(characterType + " is in the " + character.innerHtml + " universe!");
}