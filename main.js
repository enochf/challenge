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
        this.log = []; // houses a array of objects which include timestamped records of trips, and floors passed
        this.inService = true; // indicates whether or not an elevator is in service
    }
    answerCall() {
        // answer the call for an elevator
    }
    report() {
        // reports when elevator opens and closes door
    }
    tracking() {

    }
}

var controller {
    init: function(floors, elevators) {
        // initiates the elevator simulation
    },
    elevators: [], // houses all of the elevator objects once they're created by the init() function and they're current position
    findElevator: function() {
        // searches for the closest elevator based on their position, movement and service level
    },
    call: function() {
        // calls the designated elevator to the call floor
    }
}