const memory = {
  history: [],
  lastCommand: null
};

function runNERODIS() {
  const inputEl = document.getElementById("input");
  const outputEl = document.getElementById("output");

  const raw = inputEl.value.trim().toLowerCase();

  memory.lastCommand = raw;
  memory.history.push(raw);

  const response = interpret(raw);

  outputEl.textContent = response;
}

function interpret(cmd) {

  // SYSTEM STATUS
  if (cmd.includes("status")) {
    return coreStatus();
  }

  // GREETING LAYER
  if (cmd.includes("hello") || cmd.includes("hi")) {
    return "NERODIS CORE: online. cognitive layer stable.";
  }

  // MEMORY INSPECTION
  if (cmd.includes("memory")) {
    return `MEMORY DUMP:\n` + memory.history.slice(-10).join("\n");
  }

  // SIMPLE MATH ENGINE
  if (cmd.startsWith("calc")) {
    return compute(cmd);
  }

  // DEFAULT FALLBACK
  return fallback(cmd);
}

function coreStatus() {
  return `
NERODIS CORE STATUS
--------------------
Kernel: ACTIVE
Memory nodes: ${memory.history.length}
Last command: ${memory.lastCommand}
Integrity: STABLE
  `.trim();
}

function compute(cmd) {
  try {
    const expr = cmd.replace("calc", "").trim();
    const result = Function("return " + expr)();
    return `RESULT: ${result}`;
  } catch (e) {
    return "CALC ERROR: invalid expression";
  }
}

function fallback(cmd) {
  return `
UNKNOWN COMMAND

Input analyzed: "${cmd}"

Suggestion:
- try "status"
- try "memory"
- try "calc 2+2"
  `.trim();
}