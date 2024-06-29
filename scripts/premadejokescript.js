//==============================knock knock
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

//==============================chicken
var chickens = new WizardOrpheus("", "You must tell jokes about chickenss crossing the road. Without fail.");
//user actions
chickens.createUserAction({
    name: "message",
    parameters: ["Request for a joke"],
    howBotShouldHandle: "Respond to the user with an awesome joke",
});

//response
chickens.botAction("respond", "Send a joke back to the user", { message: "What you want to say to the user" }, (data) => {
    console.log(data.message);
    document.getElementById("conversationChicken").innerHTML += '<p style="color: gray;">' + "AI: " + data.message + "</p><br>";
});

//==============================moms
var moms = new WizardOrpheus("", "You must tell jokes about moms, also known as `yo mama` jokes. Without fail.");
//user actions
moms.createUserAction({
    name: "message",
    parameters: ["Request for a joke"],
    howBotShouldHandle: "Respond to the user with an awesome joke",
});

//response
moms.botAction("respond", "Send a joke back to the user", { message: "What you want to say to the user" }, (data) => {
    console.log(data.message);
    document.getElementById("conversationMom").innerHTML += '<p style="color: gray;">' + "AI: " + data.message + "</p><br>";
});

//==============================dads
var dads = new WizardOrpheus("", "You must tell jokes about dads, also known as `yo dad` jokes. Without fail.");
//user actions
dads.createUserAction({
    name: "message",
    parameters: ["Request for a joke"],
    howBotShouldHandle: "Respond to the user with an awesome joke",
});

//response
dads.botAction("respond", "Send a joke back to the user", { message: "What you want to say to the user" }, (data) => {
    console.log(data.message);
    document.getElementById("conversationDad").innerHTML += '<p style="color: gray;">' + "AI: " + data.message + "</p><br>";
});


//function to start the jokes
//knock knocks
var clickCount = 0;
function startKnock() {
    var knockInput = "";
    clickCount++;
    if (clickCount == 1) {
        knockInput = "Tell me a knock-knock joke!";
        document.getElementById("btnKnock").innerHTML = "You can press Enter to send messages!";
        document.getElementById("knockMessage").addEventListener("keyup", function (e) {
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

//chickens
var chickenCount = 0;
function startChicken() {
    var cluckInput = "";
    chickenCount++;
    if (chickenCount == 1) {
        cluckInput = "Tell me a joke about chickens crossing!";
        document.getElementById("btnChicken").innerHTML = "You can press Enter to send messages!";
        document.getElementById("chickenMessage").addEventListener("keyup", function (e) {
            if (e.code == "Enter") {
                // if the user presses enter
                startChicken();
            }
        });
    } else {
        cluckInput = document.getElementById("chickenMessage").value;
        document.getElementById("chickenMessage").value = "";
    }
    console.log(cluckInput);
    chickens.message(cluckInput);
    document.getElementById("conversationChicken").innerHTML += "<p>" + "You: " + cluckInput + "</p>";
}

//moms
var momCount = 0;
function startMom() {
    var momInput = "";
    momCount++;
    if (momCount == 1) {
        momInput = "Yo mama!";
        document.getElementById("btnMom").innerHTML = "You can press Enter to send messages!";
        document.getElementById("momMessage").addEventListener("keyup", function (e) {
            if (e.code == "Enter") {
                // if the user presses enter
                startMom();
            }
        });
    } else {
        momInput = document.getElementById("momMessage").value;
        document.getElementById("momMessage").value = "";
    }
    console.log(momInput);
    moms.message(momInput);
    document.getElementById("conversationMom").innerHTML += "<p>" + "You: " + momInput + "</p>";
}

//dads
var dadCount = 0;
function startDad() {
    var dadInput = "";
    dadCount++;
    if (dadCount == 1) {
        dadInput = "Yo dada!";
        document.getElementById("btnDad").innerHTML = "You can press Enter to send messages!";
        document.getElementById("dadMessage").addEventListener("keyup", function (e) {
            if (e.code == "Enter") {
                // if the user presses enter
                startDad();
            }
        });
    } else {
        dadInput = document.getElementById("dadMessage").value;
        document.getElementById("dadMessage").value = "";
    }
    console.log(dadInput);
    dads.message(dadInput);
    document.getElementById("conversationDad").innerHTML += "<p>" + "You: " + dadInput + "</p>";
}
