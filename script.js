// Write your JavaScript code here!

window.addEventListener("load", function() {
   let form = document.getElementById("launchForm");
   form.addEventListener("submit", function(event) {
      let pilot = document.getElementById("pilotName").value;
      let copilot = form.querySelector("input[name=copilotName]").value;
      let fuel = form.querySelector("input[name=fuelLevel]").value;
      let cargo = form.querySelector("input[name=cargoMass]").value;



      if (!isValidForm(pilot, copilot, fuel, cargo)) {
         alert("Invalid Form!");
      } else {
         checkRequirements(pilot, copilot, fuel, cargo);
      }

      event.preventDefault();

   });
});

function isValidForm(pilot, copilot, fuel, cargo) {
   if (pilot === "" || copilot === "" || fuel === "" || cargo === "") {
      return false;
   } else if (isNaN(Number(fuel)) || isNaN(Number(cargo)) || !isNaN(Number(pilot)) || !isNaN(Number(copilot))) {
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
      liFuelStatus.innerHTML = "Not enough fuel.";
      isReady = false;
   } else {
      liFuelStatus.innerHTML = "Fuel level high enough for launch";
   }

   let liCargoStatus = document.getElementById("cargoStatus");
   if (cargo > 10000) {
      liCargoStatus.innerHTML = "Too much mass for shuttle to take off.";
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
