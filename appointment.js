var sPhysician = this.Parameter;
console.log(JSON.stringify(this.Parameter))


function init() {
    console.log("Loading Appointment")
    //This should be doctor object
    console.log(JSON.stringify(this.Parameter))
}

function navigateToPhysicians() {
    router.goto("Physicians");
}

function navigateToLocations() {
    router.goto("Locations");
}

function navigateToMenu() {
    router.goto("Menu");
}


module.exports = {
    "init": init,
    "navigateToMenu": navigateToMenu,
    "navigateToPhysicians": navigateToPhysicians,
    "navigateToLocations": navigateToLocations,
}