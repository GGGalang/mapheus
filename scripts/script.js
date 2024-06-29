function start() {
    localStorage.setItem("prompt", document.getElementById("prompt").value);
    window.location.reload();
}

function startGame() {
    var myGame = new WizardOrpheus("", localStorage.getItem("prompt"));

    document.getElementById("confirmed").innerHTML = "Your prompt has been confirmed! You can now start chatting with the bot!";

    //user actions
    myGame.createUserAction({
        name: "message",
        parameters: ["Message from user to game"],
        howBotShouldHandle: "Respond to the user",
    });

    document.getElementById("input").addEventListener("keyup", function (e) {
        if (e.code == "Enter") {
            // if the user presses enter
            let userInput = document.getElementById("input").value;
            myGame.message(userInput);

            document.getElementById("conversation").innerHTML += "<p>" + "You: " + userInput + "</p>";

            document.getElementById("input").value = "";
        }
    });

    //score
    myGame.variable("score", "Current score. Changes (positive and negatively) as the user does things.", 0);

    //response
    myGame.botAction("respond", "Send a text response to the user", { message: "What you want to say to the user" }, (data) => {
        document.getElementById("conversation").innerHTML += '<p style="color: gray;">' + "AI: " + data.message + "</p><br>";

        document.getElementById("score").innerHTML = data.currentVariables.score.value;
    });
}
if (document.URL.includes("jokes.html")) {
    //==============================dad jokes
    console.log("Jokes");
    //dad jokes declaration
    var myGame = new WizardOrpheus("", "You must tell dad jokes. Always. Always tell your best dad jokes, without fail.");
    //user actions
    myGame.createUserAction({
        name: "message",
        parameters: ["Request for a dad joke"],
        howBotShouldHandle: "Respond to the user with a dad joke",
    });
    //response
    myGame.botAction("respond", "Send a dad joke back to the user", { message: "What you want to say to the user" }, (data) => {
        document.getElementById("conversation").innerHTML += '<p style="color: gray;">' + "AI: " + data.message + "</p><br>";
    });

    //==============================custom jokes
    var customs = new WizardOrpheus("", "You must tell jokes about what the user tells you. Tell your best jokes!");
    //user actions
    customs.createUserAction({
        name: "message",
        parameters: ["Request for a joke"],
        howBotShouldHandle: "Respond to the user with a joke about what they told you",
    });
    //response
    customs.botAction("respond", "Send a joke back to the user", { message: "What you want to say to the user" }, (data) => {
        document.getElementById("conversationCust").innerHTML += '<p style="color: gray;">' + "AI: " + data.message + "</p><br>";
    });
} else if (localStorage.getItem("prompt")) {
    startGame();
}

function startJoke() {
    var userInput = "Tell me a joke, dad!";
    console.log("Jokes");

    console.log(userInput);
    myGame.message(userInput);
    document.getElementById("conversation").innerHTML += "<p>" + "You: " + userInput + "</p>";
}

var customCount = 0;
function startCust() {
    var custInput = "";
    customCount++;
    if (customCount == 1) {
        custInput = document.getElementById("custMessage").value;
        if (custInput == "") {
            custInput = "Tell me a joke!";
        }
        document.getElementById("btnCust").innerHTML = "You can press Enter to send messages!";
        document.getElementById("custMessage").addEventListener("keyup", function (e) {
            if (e.code == "Enter") {
                // if the user presses enter
                startCust();
            }
        });
    } else {
        custInput = document.getElementById("custMessage").value;
        document.getElementById("custMessage").value = "";
    }
    console.log(custInput);
    customs.message(custInput);
    document.getElementById("conversationCust").innerHTML += "<p>" + "You: " + custInput + "</p>";
}
