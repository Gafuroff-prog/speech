const textInput = document.getElementById("text");
const btn = document.getElementById("button");
const voiceSelect = document.getElementById("voiceSelect");

let voices = [];

function loadVoices() {
    voices = speechSynthesis.getVoices();
    voiceSelect.innerHTML = "";
    voices.forEach((voice, index) => {
        const option = document.createElement("option");
        option.value = index;
        option.textContent = `${voice.name} (${voice.lang})`;
        voiceSelect.appendChild(option);
    });
}

speechSynthesis.onvoiceschanged = loadVoices;
window.onload = loadVoices;

function speakText() {
    const text = textInput.value;
    const utterance = new SpeechSynthesisUtterance(text);
    const selectedVoice = voices[voiceSelect.value];
    if (selectedVoice) utterance.voice = selectedVoice;
    utterance.rate = 1.2;
    utterance.pitch = 0.8;
    speechSynthesis.speak(utterance);
}

btn.addEventListener("click", speakText);

