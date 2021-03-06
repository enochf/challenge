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
    answerDispatch(floor) {
        // answer the call for an elevator
        // 1. creates a variable called "trip" wtih a new trip pushed to the this.log array
        // 2. determines if the floor is above or below this.curFloor
        // 3. this.direction is set to up or down based on the determination above
        // 4. begins changing this.curFloor by increments of 1 at 1 second intervals until it equals the floor called
        // 5. calls this.report(trip, this.curFloor) at each this.curFloor change
        // 6. once this.curFloor = floor then the following occurs:
        //      a. this.moving is set to false
        //      b. this.direction is set to null
        //      c. this.openDoor(dispatch = true) is called
    }
    openDoor(dispatch) {
        // opens the door
        // 1. the controller.buttons[this.curFloor].reset() is called in order to turn off button
        // 2. if dispatch = true then:
        //      a. finds a random number between 1 and (building.floors) that does not match this.curFloor
        //      b. calls this.closeDoor(random selected number) in order to send the elevator to that particular floor 
        // 3. else
        //      a. call this.closeDoor()
    }
    closeDoor(floor) {
        // closes the door
        // 1. if floor does not equal null
        //      a. sets this.moving = true
        //      b. determines if the floor is above or below this.curFloor
        //      c. sets this.direction to up or down depending on determination
        //      d. begins changing this.curFloor by increments of 1 at 1 second intervals until it equals the floor selected
        //      e. sets this.moving = false
        //      f. sets this.direction = null
        //      g. calls this.openDoor(dispatch = false)
        // 2. else
        //      a. counts the number of trip in this.log[] to see if it is greater than 99
        //      b. if it is then it updates this.inService = false
    }
    // floorRequest() {
    //     // indicates which floor the elevator need to go to once the door closes
    // }
    report(trip, floor) {
        // reports when elevator opens and closes door
        // 1. pushes the timestamp and floor to this.log[trip]
    }
}

// method by which elevators are called
class Button {
    constructor() {
        this.floor = null; // indecates which floor the button is assigned to
        this.pushed = false; // indicates if the button has been pushed and is active or if it is inactive
    }
    pushButton() {
        // calls the closest elecator and sets pushed status to true
        // 1. sets this.pushed = true
        // 2. calls controller.findElevator(this.floor) to get the closest elevator to respond
    }
    reset() {
        // resets button to inactive mode
        // 1. sets this.pushed = false
    }
}

// controls the calling of elevators
var controller {
    init: function() {
        // initiates the elevator simulation
        // 1. runs a for loop with the amount of elevators indicated in building.elevators
        // 2. craetes a new Elveator object for each loop and pushes it to the controller.elevators[] array
        // 3. creates a new Button object for each loop
        // 4. calls the controller.randomCaller() function to call the first elevator
    },
    elevators: [], // houses all of the Elevator objects once they're created by the controller.init() function and they're current position
    buttons: [], // houses all of the Button objects once they're created by the controller.init() 
    randomCaller: function() {
        // finds a random floor based on the number of floors indicated the building.foors object
        // 1. finds a random number between 1 and (building.floors)
        // 2. calls the elevator using controller.buttons[(random number)].pushButton() function
        // 3. generates a random time between 1 and 10 seconds
        // 4. calls itself at this.randomCaller() in order to call another elevator and continue the simulation
    },
    findElevator: function(floor) {
        // searches for the closest elevator based on their position, movement and service level
        // 1. loops through the inService elevators to see which ones are moving and if they're going to pass the floor called
        //      a. if match is found then it calls this.dispatch(elev, floor)
        // 2. if no moving elevators are found then it finds the closest stopped elvator
        //      a. once a match is found it calls this.dispatch(elev, floor)
        // 3. if there are no more elevators in service then the simulation is over !!!!!!!!
    },
    dispatch: function(elev, floor) {
        // dispatches the designated elevator to the call floor
        // 1. calls this.elevators[elev].answerDispatch(floor) to send elevator
    }
}

$(document).ready(function() {

    controller.init();

});