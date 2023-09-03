document.addEventListener("DOMContentLoaded", function () {
    const messageInput = document.getElementById("message");
    const logDiv = document.getElementById("log");
    const publishButton = document.querySelector("button");

    // Function to add a message to the log
    function addToLog(message) {
        const logEntry = document.createElement("p");
        logEntry.textContent = message;
        logDiv.appendChild(logEntry);
    }

    // Function to send a message to the server
    function publishMessage() {
        const message = messageInput.value.trim();
        if (message !== "") {
            addToLog(`Published: ${message}`);
            // Send the message to the server using an appropriate method.
            // For example, you can use Fetch API or XMLHttpRequest here.
            // Update this part to interact with your server.
            messageInput.value = "";
        }
    }

    // Event listener for the publish button
    publishButton.addEventListener("click", publishMessage);

    // Add any additional logic for interacting with your server here.
});
