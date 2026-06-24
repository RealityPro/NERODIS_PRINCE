import { bootRuntime } from "./core/runtime.js";
import { execute } from "./core/engine.js";
import registry from "./core/registry.js";

bootRuntime();

window.runNERODIS = function () {

    const inputElement = document.getElementById("input");
    const outputElement = document.getElementById("output");

    const input = inputElement.value.trim();

    if (!input) return;

    const intent = input.split(" ")[0].toLowerCase();

    const result = execute(intent, input, {

        registry

    });

    outputElement.textContent =
        typeof result === "object"
            ? JSON.stringify(result, null, 2)
            : result;

};