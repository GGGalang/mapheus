function start(){
  localStorage.setItem("prompt", document.getElementById("prompt").value)
  window.location.reload()
}

function startGame() {
  var myGame = new WizardOrpheus('', localStorage.getItem("prompt"));

  promptNum += 1

  document.getElementById("confirmed").innerHTML = "Your prompt has been confirmed! You can now start chatting with the bot!";

  //user actions
  myGame.createUserAction({
    name: 'message',
    parameters: ['Message from user to game'],
    howBotShouldHandle: 'Respond to the user'
  })

  document.getElementById('input').addEventListener('keyup', function(e) {
    if (e.code == 'Enter') { // if the user presses enter
      let userInput = document.getElementById('input').value
      myGame.message(userInput)

      document.getElementById('conversation').innerHTML += '<p>' + userInput + '</p>'

      document.getElementById('input').value = ''
    }
  })

  //score
  myGame.variable('score', 'Current score. Changes (positive and negatively) as the user does things.', 0)

  //response
  myGame.botAction('respond', 'Send a text response to the user', { message: 'What you want to say to the user' }, data => {
    document.getElementById('conversation').innerHTML += '<p>' + data.message + '</p>'

    document.getElementById('score').innerHTML = data.currentVariables.score.value
  })
};

if (localStorage.getItem("prompt")){
  startGame();
}