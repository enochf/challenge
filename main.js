// items to consider in challenge
//      Elevator class
//      Building
//      Controller

// building object sets default values for the rest of the challenge
var building = {
    floors: 8,
    elevators: 1,
}

// Elevator class allows for multiple elevators to be created with the same basic parameters
class Elevator {
    constructor() {
        this.curFloor = 1; // tells which floor the elevator is currntly on
        this.moving = false; // indicatates whether or not the elevator is in motion or stopped
        this.direction = null; // indicates the direction (up or down) the elevator is moving
    }
    report() {
        // reports when elevator opens and closes door
    }
    answerCall() {
        // answer the call for an elevator
    }
}