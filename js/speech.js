// Get the text area, speak button, pause/continue button, and reset button elements
let textArea = document.getElementById("text");
let speakButton = document.getElementById("speak-button");
let pauseContinueButton = document.getElementById("pause-continue-button");
let resetButton = document.getElementById("reset-button");

let utterance = null; // Variable to store the SpeechSynthesisUtterance object

// Add an event listener to the speak button
speakButton.addEventListener("click", function() {
    // Get the text from the text area
    let text = textArea.value;

    // Create a new SpeechSynthesisUtterance object
    utterance = new SpeechSynthesisUtterance();

    // Set the text of the utterance
    utterance.text = text;

    // Speak the utterance
    window.speechSynthesis.speak(utterance);
});

// Add an event listener to the pause/continue button
pauseContinueButton.addEventListener("click", function() {
    if (utterance && window.speechSynthesis.speaking) {
        if (window.speechSynthesis.paused) {
            // If speech synthesis is paused, continue speaking
            window.speechSynthesis.resume();
            pauseContinueButton.innerText = "Pause";
        } else {
            // If speech synthesis is not paused, pause speaking
            window.speechSynthesis.pause();
            pauseContinueButton.innerText = "Continue";
        }
    }
});

// Add an event listener to the reset button
resetButton.addEventListener("click", function() {
    // Stop speaking and reset the utterance
    window.speechSynthesis.cancel();
    utterance = null;
    pauseContinueButton.innerText = "Pause"; // Reset the pause/continue button text
    
    // Clear the text area
    textArea.value = ""; // This line clears the text area content
});

// Event listener for when speech synthesis is finished
window.speechSynthesis.addEventListener("end", function() {
    // Reset the pause/continue button text when speech finishes
    if (utterance) {
        pauseContinueButton.innerText = "Pause";
    }
});

// Event listener for when speech synthesis is paused
window.speechSynthesis.addEventListener("pause", function() {
    // Update the pause/continue button text when speech is paused
    if (utterance) {
        pauseContinueButton.innerText = "Continue";
    }
});

// Event listener for when speech synthesis is resumed
window.speechSynthesis.addEventListener("resume", function() {
    // Update the pause/continue button text when speech is resumed
    if (utterance) {
        pauseContinueButton.innerText = "Pause";
    }
});

