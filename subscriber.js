document.addEventListener("DOMContentLoaded", function () {
    const logDiv = document.getElementById("log");

    // Function to add a received message to the log
    function addToLog(message) {
        const logEntry = document.createElement("p");
        logEntry.textContent = message;
        logDiv.appendChild(logEntry);
    }

    // Function to handle incoming messages from the server
    function handleIncomingMessage(message) {
        addToLog(`Received: ${message}`);
    }

    // Add any logic for connecting to the server and receiving messages here.
});
