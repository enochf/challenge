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
    openDoor() {
        // opens the door
    }
    closeDoor() {
        // closes the door
    }
    floorRequest() {
        // indicates which floor the elevator need to go to once the door closes
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
    pushButton() {
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
        // 2. craetes a new Elveator object for each loop and pushes it to the controller.elevators[] array
        // 3. creates a new button object for each loop
        // 4. calls the controller.randomCaller() function to call the first elevator
    },
    elevators: [], // houses all of the elevator objects once they're created by the controller.init() function and they're current position
    buttons: [], // houses all of the button objects once they're created by the controller.init() 
    randomCaller: function() {
        // finds a random floor based on the number of floors indicated the building.foors object
        // 1. finds a random number between 1 and (building.floors)
        // 2. calls the elevator using controller.buttons[(random number)].pushButton() function
        // 3. generates a random time between 1 and 10 seconds
        // 4. calls itself at this.randomCaller() in order to call another elevator and continue the simulation
    },
    findElevator: function() {
        // searches for the closest elevator based on their position, movement and service level
        // ends with this.dispatch(elev); to call the correct elevator
    },
    dispatch: function() {
        // dispatches the designated elevator to the call floor
    }
}