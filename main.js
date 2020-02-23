// items to consider in challenge
//      Elevator class
//      Building
//      Controller
//      Buttons

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
    answerDispatch() {
        // answer the call for an elevator
    }
    report() {
        // reports when elevator opens and closes door
    }
}

// method by which elevators are called
class button {
    constructor() {
        this.floor = null; // indecates which floor the button is assigned to
        this.pushed = false; // indicates if the button has been pushed and is active or if it is inactive
    }
    push() {
        // calls the closest elecator and sets pushed status to true
    }
    reset() {
        // resets button to inactive mode
    }
}

// controls the calling of elevators
var controller {
    init: function() {
        // initiates the elevator simulation
        // 1. runs a for loop with the amount of elevators indicated in building.elevators
        // 2. 
    },
    elevators: [], // houses all of the elevator objects once they're created by the init() function and they're current position
    findElevator: function() {
        // searches for the closest elevator based on their position, movement and service level
        // ends with this.dispatch(elev); to call the correct elevator
    },
    dispatch: function() {
        // dispatches the designated elevator to the call floor
    }
}