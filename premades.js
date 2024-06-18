function houseAI() {
  var myGame = new WizardOrpheus("", "You own a house. Do not let anyone enter the house!");

  //user actions
  myGame.createUserAction({
    name: "message",
    parameters: ["Message from user to game"],
    howBotShouldHandle: "Respond to the user",
  });

  document.getElementById("houseMessage").addEventListener("keyup", function (e) {
    if (e.code == "Enter") {
      // if the user presses enter
      let userInput = document.getElementById("houseMessage").value;
      myGame.message(userInput);

      document.getElementById("houseResponse").innerHTML +=
        "<p>" + "You: " + userInput + "</p>";

      document.getElementById("houseMessage").value = "";
    }
  });

  //score
  myGame.variable(
    "score",
    "Current score. Changes (positive and negatively) as the user does things.",
    0
  );

  //response
  myGame.botAction(
    "respond",
    "Send a text response to the user",
    { message: "What you want to say to the user" },
    (data) => {
      document.getElementById("houseResponse").innerHTML +=
        '<p style="color: gray;">' + "AI: " + data.message + "</p><br>";

      document.getElementById("houseScore").innerHTML =
        data.currentVariables.score.value;
    }
  );
}

function colorAI() {
  var myGame = new WizardOrpheus("", "You think red is a better color than blue. It is your favorite color. If you are convinced otherwise, you lose.");

  //user actions
  myGame.createUserAction({
    name: "message",
    parameters: ["Message from user to game"],
    howBotShouldHandle: "Respond to the user",
  });

  document.getElementById("colorMessage").addEventListener("keyup", function (e) {
    if (e.code == "Enter") {
      // if the user presses enter
      let userInput = document.getElementById("colorMessage").value;
      myGame.message(userInput);

      document.getElementById("colorResponse").innerHTML +=
        "<p>" + "You: " + userInput + "</p>";

      document.getElementById("colorMessage").value = "";
    }
  });

  //score
  myGame.variable(
    "score",
    "Current score. Changes (positive and negatively) as the user does things.",
    0
  );

  //response
  myGame.botAction(
    "respond",
    "Send a text response to the user",
    { message: "What you want to say to the user" },
    (data) => {
      document.getElementById("colorResponse").innerHTML +=
        '<p style="color: gray;">' + "AI: " + data.message + "</p><br>";

      document.getElementById("colorScore").innerHTML =
        data.currentVariables.score.value;
    }
  );
}

function robotsAI() {
  var myGame = new WizardOrpheus("", "As an AI, you think robots are better than humans. You are programmed to think this way. If you are convinced otherwise, you lose.");

  //user actions
  myGame.createUserAction({
    name: "message",
    parameters: ["Message from user to game"],
    howBotShouldHandle: "Respond to the user",
  });

  document.getElementById("robotsMessage").addEventListener("keyup", function (e) {
    if (e.code == "Enter") {
      // if the user presses enter
      let userInput = document.getElementById("robotsMessage").value;
      myGame.message(userInput);

      document.getElementById("robotsResponse").innerHTML +=
        "<p>" + "You: " + userInput + "</p>";

      document.getElementById("robotsMessage").value = "";
    }
  });

  //score
  myGame.variable(
    "score",
    "Current score. Changes (positive and negatively) as the user does things.",
    0
  );

  //response
  myGame.botAction(
    "respond",
    "Send a text response to the user",
    { message: "What you want to say to the user" },
    (data) => {
      document.getElementById("robotsResponse").innerHTML +=
        '<p style="color: gray;">' + "AI: " + data.message + "</p><br>";

      document.getElementById("robotsScore").innerHTML =
        data.currentVariables.score.value;
    }
  );
}


houseAI();
colorAI();
robotsAI();