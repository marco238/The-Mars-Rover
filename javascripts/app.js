// Rover Object Goes Here
// ======================
var bot = {
  direction : "N",
  x : 0,
  y : 0,
  travelLog : new Array(new Array(0,0))
}
// ======================
function turnLeft(rover){
  switch (rover.direction) {
    case "N":
      bot.direction = "W";
      break;
    case "W":
      bot.direction = "S";
      break;
    case "S":
      bot.direction = "E";
      break;
    case "E":
      bot.direction = "N";
      break;
    default:

  }
  console.log("turnLeft was called!");
}

function turnRight(rover){
  switch (rover.direction) {
    case "N":
      bot.direction = "E";
      break;
    case "E":
      bot.direction = "S";
      break;
    case "S":
      bot.direction = "W";
      break;
    case "W":
      bot.direction = "N";
      break;
    default:

  }
  console.log("turnRight was called!");
}

function moveForward(rover){
  switch (rover.direction) {
    case "N":
      if(bot.y != 0) bot.y--;
      break;
    case "E":
      if(bot.x != 9) bot.x++;
      break;
    case "S":
      if(bot.y != 9) bot.y++;
      break;
    case "W":
      if(bot.x != 0) bot.x--;
      break;
    default:

  }
  console.log("moveForward was called")
  console.log(bot.x + "," + bot.y);
  bot.travelLog.push([bot.x,bot.y]);
}

function moveBackward(rover){
  switch (rover.direction) {
    case "N":
      if(bot.y != 9) bot.y++;
      break;
    case "E":
      if(bot.x != 0) bot.x--;
      break;
    case "S":
      if(bot.y != 0) bot.y--;
      break;
    case "W":
      if(bot.x != 9) bot.x++;
      break;
    default:

  }
  console.log("moveBackward was called");
  console.log(bot.x + "," + bot.y);
  bot.travelLog.push([bot.x,bot.y]);
}

function commands(string){
  for (var i = 0; i < string.length; i++) {
    switch (string[i]) {
      case "l":
        turnLeft(bot);
        break;
      case "r":
        turnRight(bot);
        break;
      case "f":
        moveForward(bot);
        break;
      case "b":
        moveBackward(bot);
        break;
      default:

    }
  }
}

function check_info(){
  var com = document.getElementById('cmds').value;
  var check = 0;
  for (var i = 0; i < com.length; i++) {
    if(com[i]!='l' && com[i]!='r' && com[i]!='b' && com[i]!='f')
      check++;
  }

  if (com == "undefined")
  {
    alert("Write some commands. Ex: 'rfrblf'");
  } else if (check > 0) alert("Wrong commands");
          else {
            commands(com);
            console.log(bot.travelLog);
          }
}
