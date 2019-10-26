window.addEventListener("load", function() {
// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

   let form = document.querySelector("launchForm");
   let button = document.getElementById("formSubmit")
   form.addEventListener("submit", function(event) {
      event.preventDefault()
      let pilotnameInput = document.querySelector("input[name=pilotName]");
      let pilot = pilotnameInput.value;
      let copilotNameInput = document.querySelector("input[name=copilotname]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargomass]");
      if (pilot == "" || copilotNameInput.value == ""
       || fuelLevelInput.value == "" || cargoMassInput.value == "") {
         alert("All fields are required!");
        
         if((typeof pilotName.value) !== 'string') {
            alert("Pilot name must be a string");
            event.preventDefault();
        }
        if((typeof copilotName.value) !== 'string') {
            alert("Co-Pilot name must be a string");
            event.preventDefault();
        }
        if(isNaN(parseInt(fuelLevel.value))) {
            alert("Fuel Level must be a number");
            event.preventDefault();
        }
        if(isNaN(parseInt(cargoMass.value))) {
            alert("Cargo Weight must be a number");
            event.preventDefault();
        }
         // stop the form submission
        //  event.preventDefault();
      }
   });
});