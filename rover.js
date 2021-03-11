class Rover {
constructor(position, mode, generatorWatts = 110) {
    this.position = position;
    this.mode = 'NORMAL';
    this.generatorWatts = generatorWatts;
    
   }  // end constructor

 /*******receiveMessage function*****
  Returns an OBJECT containing at    least two properties:
    message: the name of the original Message object.
    results: an array of results. Each element in the array is an object that corresponds to one Command in message.commands.*/ 
receiveMessage(message) {
  let name = message.name;
  let commands = message.commands;
  // commands is an array.
  
  let result = {};
  let results = [];
  //let i = 0;
  for (let i=0; i<commands.length; i++){
    
    if (commands[i].commandType ===
    'MOVE'){
        if (this.mode === 'NORMAL'){
          this.position = commands[i].value;
          result = {completed: true};
        } else if (this.mode = 'LOW_POWER'){
          result = {completed: false};
        }
    } else if (commands[i].commandType === 'STATUS_CHECK'){
      result = {completed: true, roverStatus: {mode: this.mode, generatorWatts: this.generatorWatts, position: this.position}};
    } else if(commands[i].commandType === 'MODE_CHANGE'){
      this.mode = commands[i].value;
        result = {completed: true};
    } else{
      result = {completed: false};
    }  // end commands[i] if

  results.push(result); 
      
  }  // end for

  return {message: name, results};  
  } //end function receiveMessage
  //**********************
} // end Rover class


module.exports = Rover;