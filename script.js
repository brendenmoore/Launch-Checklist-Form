// Write your JavaScript code here!

window.addEventListener("load", function() {
   let form = document.getElementById("launchForm");
   form.addEventListener("submit", function(event) {
      let pilot = document.getElementById("pilotName").value;
      let copilot = form.querySelector("input[name=copilotName]").value;
      let fuel = form.querySelector("input[name=fuelLevel]").value;
      let cargo = form.querySelector("input[name=cargoMass]").value;

      if (!isValidForm(pilot, copilot, fuel, cargo)) {
         event.preventDefault();
         alert("Invalid!");
      }

      let liPilotStatus = document.getElementById("pilotStatus");
      let liCopilotStatus = document.getElementById("copilotStatus");
      liPilotStatus.innerHTML = `${pilot} Ready`;
      liCopilotStatus.innerHTML = `${copilot} Ready`;




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
