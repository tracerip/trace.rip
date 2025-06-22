let keySequence = "";
const targetSequence1 = "wowo";
const targetSequence2 = "amy";
const targetSequence3 = "love";

document.addEventListener("keydown", function(event) {
    keySequence += event.key.toLowerCase();

    if (keySequence.length > Math.max(targetSequence1.length, targetSequence2.length)) {
        keySequence = keySequence.slice(-Math.max(targetSequence1.length, targetSequence2.length));
    }
            
    if (keySequence === targetSequence1) {
        window.location.href = "./wowo";
        keySequence = "";
    }
            
    if (keySequence === targetSequence2) {
        window.location.href = "./amy";
    keySequence = "";
    }

    if (keySequence === targetSequence3) {
        window.location.href = "./love";
        keySequence = "";
    }
});