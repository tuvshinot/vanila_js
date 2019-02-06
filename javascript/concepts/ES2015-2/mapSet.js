class MessageBoard {
    
    /*
    In your constructor method, you should assign two properties for each object created from the MessageBoard class.
     The first should be a property called messages which is an empty Map, and the second is a property called id which 
     has a value of 1. 
    
    var m = new MessageBoard
    
    m.hasOwnProperty('messages') // true
    m.messages.constructor // function Map() { [native code] }
    m.hasOwnProperty('id') // true
    m.id // 1
    */
    
    constructor(){
        this.messages = new Map();
        this.id = 1;
    }
    
    /*
    
    Add a method called addMessage which accepts a string. The function should add a key and value to the 
    messages map with a key of whatever the value of this.id is and a value of whatever the string is that is passed to 
    the function. The function should return the object created from the class so that the method can be chained. 
    (HINT - to implement the last part, make sure to return this).
    
    var m = new MessageBoard
    m.addMessage('hello');
    m.messages.size // 1
    m.addMessage('awesome!') // m
    m.addMessage('awesome!').addMessage('nice!').addMessage('cool!') 
    */
    
    addMessage(message){

        this.messages.set(this.id, message);
        this.id++;
        return this; // this referce to class itself
    }
    
    /*
    Add a method called findMessageById which accepts a number and returns the message in the messages 
    map with the same key as the number passed to the function. If the key is not found in the messages map, 
    the function should return undefined.
    
    
    var m = new MessageBoard
    m.addMessage('hello!')
    m.addMessage('hi!')
    m.addMessage('whats up?')
    m.findMessageById(1) // 'hello!'
    m.findMessageById(2) // 'hi!'
    m.findMessageById(3) // 'whats up?'
    m.findMessageById(4) // undefined
    m.findMessageById() // undefined
    */
    
    findMessageById(findId){
        if(this.messages.has(findId)) { // has[key]
            return this.messages.get(findId);
        }
    }
    
    /*
    Add a method called findMessageByValue which accepts a string and returns the message in the messages map with the 
    same value as the string passed to the function. If the value is not found in the messages map, the function should 
    return undefined.
    
    var m = new MessageBoard
    m.addMessage('hello!')
    m.addMessage('hi!')
    m.addMessage('whats up?')
    m.findMessageByValue('hello!') // 'hello!'
    m.findMessageByValue('hi!') // 'hi!'
    m.findMessageByValue('whats up?') // 'whats up?'
    m.findMessageByValue('nothing here') // undefined
    m.findMessageByValue() // undefined
    */

    
    findMessageByValue(value){
        for (let msg of this.messages.values()) {
            if(msg === value) return msg;
        }
    }
    
    /*
    Add a method called removeMessage which accepts a number and removes a message in the messages map with a 
    key of the number passed to the function.
    
    var m = new MessageBoard
    m.addMessage('hello!')
    m.addMessage('hi!')
    m.addMessage('whats up?')
    m.removeMessage(1)
    m.removeMessage(2)
    m.messages.size // 1
    m.removeMessage() // m
    */
    
    removeMessage(...idOfMessage){
        if(idOfMessage.length === 0 ) {
            return this;
        }

        for (let i = 0; i < idOfMessage.length; i++) {
            if(this.messages.has(idOfMessage[i])) {
                this.messages.delete(idOfMessage[i]);
            }            
        }
    }
    
    /*
    Add a method called numberOfMessages which returns the number of keys in the messages map
    
    var m = new MessageBoard
    m.addMessage('hello!')
    m.addMessage('hi!')
    m.addMessage('whats up?')
    m.numberOfMessages() // 3
    */
    
    numberOfMessages(){
        return this.messages.size;
    }
    
    /*
    Add a method called messagesToArray which returns an array of all of the values in the messages map
    
    var m = new MessageBoard
    m.addMessage('hello!')
    m.addMessage('hi!')
    m.addMessage('whats up?')
    m.messagesToArray() // ['hello!', 'hi!', 'whats up?'])
    */
    
    messagesToArray(){
        return Array.from(this.messages.values());
        // return Array.prototype.slice.call(this.messages.values());
    }
}