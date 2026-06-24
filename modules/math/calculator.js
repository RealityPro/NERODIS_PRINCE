const CalculatorModule = {

    name: "calc",

    description: "Arithmetic capability.",

    execute(input) {

        try {

            const expression = input.replace(/^calc/i, "").trim();

            return Function(`"use strict"; return (${expression});`)();

        }

        catch {

            return "Invalid expression.";

        }

    }

};

export default CalculatorModule;