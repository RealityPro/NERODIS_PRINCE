function runNERODIS() {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");

  let response = "";

  if (input.includes("hello")) {
    response = "NERODIS ONLINE: Greeting received.";
  } 
  else if (input.includes("status")) {
    response = "NERODIS CORE ACTIVE: All systems nominal.";
  } 
  else {
    response = "Command not recognized in Phase 1 kernel.";
  }

  output.textContent = response;
}