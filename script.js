// script.js

// Function to show and hide learning content
function showContent(moduleId) {
    const content = document.getElementById(moduleId);
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

// Function to update challenge status
function updateChallenge(challengeId) {
    const challenge = document.getElementById(challengeId);
    challenge.innerHTML = "<p>Status: Completed!</p>";
}
