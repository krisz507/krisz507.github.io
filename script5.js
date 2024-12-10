function showRecoveryLevel() {
    const recoveryLevelDiv = document.getElementById("recovery-level");
    const recoveryStatus = document.getElementById("recovery-status");
    
    if (recoveryLevelDiv.style.display === "none") {
        recoveryLevelDiv.style.display = "block";
        recoveryStatus.textContent = "Kiváló! Pihenj tovább a maximális eredmény érdekében.";
    } else {
        recoveryLevelDiv.style.display = "none";
    }
}