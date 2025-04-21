document.addEventListener("DOMContentLoaded", function () {
  let textArea = document.getElementById("text");
  let speakButton = document.getElementById("speak-button");
  let pauseContinueButton = document.getElementById("pause-continue-button");
  let resetButton = document.getElementById("reset-button");

  let utterance = null;

  speakButton.addEventListener("click", function () {
    let text = textArea.value.trim();
    if (text === "") {
      alert("Please enter some text to speak.");
      return;
    }

    window.speechSynthesis.cancel(); // Cancel any previous speech

    utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  });

  pauseContinueButton.addEventListener("click", function () {
    if (utterance && window.speechSynthesis.speaking) {
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
        pauseContinueButton.innerText = "Pause";
      } else {
        window.speechSynthesis.pause();
        pauseContinueButton.innerText = "Continue";
      }
    }
  });

  resetButton.addEventListener("click", function () {
    window.speechSynthesis.cancel();
    utterance = null;
    pauseContinueButton.innerText = "Pause";
    textArea.value = "";
  });
});
