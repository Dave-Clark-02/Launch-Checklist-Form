window.addEventListener("load", function () {
   let form = document.querySelector("form");
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
      response.json().then(function (planetsArray) {
         const div = document.getElementById('missionTarget');
         const planet = planetsArray[0];
         // Add HTML that includes the JSON Data
         div.innerHTML = `
                           <h2>Mission Destination</h2>
                           <ol>
                              <li>Name: ${planet.name}</li>
                              <li>Diameter: ${planet.diameter}</li>
                              <li>Star: ${planet.star}</li>
                              <li>Distance from Earth: ${planet.distancefromEarth}</li>
                              <li>Number of Moons: ${planet.numberofMoons}</li>
                           </ol> 
                           <img src="https://solarsystem.nasa.gov/system/resources/detail_files/16278_PIA20016.jpg">
              `;
      });
   });
   init();

});

function init() {
   let form = document.getElementById("FormInfo");
   let button = document.getElementById("formSubmit")
}

function submit() {
   // Get divs.
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");
   let launchStatus = document.getElementById("launchStatus");
   let faultyItems = document.getElementById("faultyItems");

   // Set user values.
   let pilotName = document.getElementById('pilot-name').value;
   let copilotName = document.getElementById('copilot-name').value;
   let fuelLevel = document.getElementById('fuel-level').value;
   let cargoMass = document.getElementById('cargo-mass').value;

   let launchStatusCheck = true;
   if (cargoMass === "" || fuelLevel === ""
      || pilotName === "" || copilotName === "") {
      alert("all fields are required!");
   }
   if ((typeof pilotName) !== 'string') {
      alert("Pilot name must be a string");
   }
   if ((typeof copilotName) !== 'string') {
      alert("Co-Pilot name must be a string");
   }
   if (isNaN(parseInt(fuelLevel))) {
      alert("Fuel Level must be a number");
   }
   if (isNaN(parseInt(cargoMass))) {
      alert("Cargo Weight must be a number");
   }
   if (fuelLevel < 10000 && cargoMass > 10000) {
      faultyItems.style.visibility = "visible";
      launchStatusCheck = false;
      cargoStatus.innerHTML = "too much mass for the shuttle to take off"
      fuelStatus.innerHTML = "not enough fuel for the journey"
      launchStatus.innerHTML = "Shuttle not ready for launch"
      pilotStatus.innerHTML = `Pilot ${pilotName} is ready for launch`
      copilotStatus.innerHTML = `Co-pilot ${copilotName} is ready for launch`
      launchStatus.style.color = 'red';
      launchStatus.attr("id", "launchStatusInvalid");
   }
   if (fuelLevel < 10000) {
      faultyItems.style.visibility = "visible";
      launchStatusCheck = false;
      fuelStatus.innerHTML = "not enough fuel for the journey"
      launchStatus.innerHTML = "Shuttle not ready for launch"
      pilotStatus.innerHTML = `Pilot ${pilotName} is ready for launch`
      copilotStatus.innerHTML = `Co-pilot ${copilotName} is ready for launch`
      launchStatus.style.color = 'red';
      launchStatus.attr("id", "launchStatusInvalid");
   }
   if (cargoMass > 10000) {
      faultyItems.style.visibility = "visible";
      launchStatusCheck = false;
      cargoStatus.innerHTML = "too much mass for the shuttle to take off"
      launchStatus.innerHTML = "Shuttle not ready for launch"
      pilotStatus.innerHTML = `Pilot ${pilotName} is ready for launch`
      copilotStatus.innerHTML = `Co-pilot ${copilotName} is ready for launch`
      launchStatus.style.color = 'red';
      launchStatus.attr("id", "launchStatusInvalid");
   }
   if (launchStatusCheck === true) {
      launchStatus.innerHTML = "Shuttle is ready for launch"
      pilotStatus.innerHTML = `Pilot ${pilotName} is ready for launch`
      copilotStatus.innerHTML = `Co-pilot ${copilotName} is ready for launch`
      launchStatus.style.color = 'green';
      launchStatus.attr("id", "launchStatusValid");
   }
   if (fuelLevel <= 890) {
      launchStatusCheck = false;
      fuelStatus.innerHTML = "not enough fuel for the journey"
      launchStatus.innerHTML = "Shuttle not ready for launch"
      pilotStatus.innerHTML = `Pilot ${pilotName} is ready for launch`
      copilotStatus.innerHTML = `Co-pilot ${copilotName} is ready for launch`
      launchStatus.style.color = 'red';
      launchStatus.attr("id", "launchStatusInvalid");
   }
};
