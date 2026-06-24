import { Memory } from "../core/memory.js";
import { parse } from "../core/parser.js";
import { runNERODIS } from "../core/engine.js";

window.runNERODIS = function () {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");

  const result = runNERODIS(input, Memory, parse);
  output.textContent = result;
};