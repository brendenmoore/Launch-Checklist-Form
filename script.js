// Write your JavaScript code here!

window.addEventListener("load", function() {

   loadData();

   let form = document.getElementById("launchForm");
   form.addEventListener("submit", function(event) {
      let pilot = document.getElementById("pilotName").value;
      let copilot = form.querySelector("input[name=copilotName]").value;
      let fuel = form.querySelector("input[name=fuelLevel]").value;
      let cargo = form.querySelector("input[name=cargoMass]").value;



      if (!isFormFilled(pilot, copilot, fuel, cargo)) {
         alert("Invalid Form: All Inputs are required.");
      } else if (!isValidForm(pilot, copilot, fuel, cargo)) {
         alert("Make sure to enter valid info for each field.");
      } else {
         checkRequirements(pilot, copilot, fuel, cargo);
      }

      event.preventDefault();

   });
});

function isValidForm(pilot, copilot, fuel, cargo) {
   if (isNaN(Number(fuel)) || isNaN(Number(cargo)) || !isNaN(Number(pilot)) || !isNaN(Number(copilot))) {
      return false;
   } else {
      return true;
   }
}

function isFormFilled(pilot, copilot, fuel, cargo) {
   if (pilot === "" || copilot === "" || fuel === "" || cargo === "") {
      return false;
   } else {
      return true;
   }
}

function checkRequirements(pilot, copilot, fuel, cargo) {
   let liPilotStatus = document.getElementById("pilotStatus");
   let liCopilotStatus = document.getElementById("copilotStatus");
   let divFaultyItems = document.getElementById("faultyItems");
   let h2LaunchStatus = document.getElementById("launchStatus");

   divFaultyItems.style.visibility = "visible";
   liPilotStatus.innerHTML = `${pilot} Ready`;
   liCopilotStatus.innerHTML = `${copilot} Ready`;
   let isReady = true;

   let liFuelStatus = document.getElementById("fuelStatus");
   if (fuel < 10000) {
      liFuelStatus.innerHTML = "Fuel level too low for launch.";
      isReady = false;
   } else {
      liFuelStatus.innerHTML = "Fuel level high enough for launch";
   }

   let liCargoStatus = document.getElementById("cargoStatus");
   if (cargo > 10000) {
      liCargoStatus.innerHTML = "Cargo mass too high for shuttle to take off.";
      isReady = false;
   } else {
      liCargoStatus.innerHTML = "Cargo mass low enough for launch";
   }

   if (isReady) {
      h2LaunchStatus.innerHTML = "Shuttle is ready for launch.";
      h2LaunchStatus.style.color = "green";
   } else {
      h2LaunchStatus.innerHTML = "Shuttle not ready for launch.";
      h2LaunchStatus.style.color = "red";
   }
}

function loadData() {
   fetch("https://handlers.education.launchcode.org/static/planets.json")
      .then(function(response) {
         response.json().then(function(json) {
            let randomIndex = Math.floor(Math.random() * json.length)
            let destination = json[randomIndex];
            let divMissionTarget = document.getElementById("missionTarget");
            divMissionTarget.innerHTML = `
               <h2>Mission Destination</h2>
                  <ol>
                     <li>Name: ${destination.name}</li>
                     <li>Diameter: ${destination.diameter}</li>
                     <li>Star: ${destination.star}</li>
                     <li>Distance from Earth: ${destination.distance}</li>
                     <li>Number of Moons: ${destination.moons}</li>
                  </ol>
               <img src="${destination.image}">
         `
         });
      });
}
