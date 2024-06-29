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
if (document.URL.includes("jokes.html") || document.URL.includes("PremadeJokes.html")) {
    if (document.URL.includes("PremadeJokes.html")) {
        //knock knock
        var knocks = new WizardOrpheus("", "You must tell knock knock jokes. Always. Always tell your best knock knocm jokes, without fail.");
        //user actions
        knocks.createUserAction({
            name: "message",
            parameters: ["Request for a knock knock joke"],
            howBotShouldHandle: "Respond to the user with a knock knock joke",
        });

        //response
        knocks.botAction("respond", "Send a knock knock joke back to the user", { message: "What you want to say to the user" }, (data) => {
            console.log(data.message);
            document.getElementById("conversationKnock").innerHTML += '<p style="color: gray;">' + "AI: " + data.message + "</p><br>";
        });
    } else {
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
    }
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

var clickCount = 0;
var knockInput = "";
function startKnock() {
    clickCount++;
    if (clickCount == 1) {
        knockInput = "Tell me a knock-knock joke!";
        document.getElementById("btnKnock").innerHTML = "You can press Enter to send messages!";
        document.addEventListener("keyup", function (e) {
            if (e.code == "Enter") {
                // if the user presses enter
                startKnock();
            }
        });
    } else {
        knockInput = document.getElementById("knockMessage").value;
        document.getElementById("knockMessage").value = "";
    }
    console.log(knockInput);
    knocks.message(knockInput);
    document.getElementById("conversationKnock").innerHTML += "<p>" + "You: " + knockInput + "</p>";
}
