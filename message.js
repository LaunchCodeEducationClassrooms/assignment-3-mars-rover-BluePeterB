class Message {
   constructor(name, commands) {
     this.name = name;
     if (!name) {
       throw Error('Message name required.');
    }
     this.commands = commands;
   }
}

module.exports = Message;

/*
class Command {
   constructor(commandType, value) {
     this.commandType = commandType;
     if (!commandType) {
       throw Error("Command type required.");
    }
     this.value = value;
   }
 
 }

 
 module.exports = Command;
*/