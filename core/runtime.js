import registry from "./registry.js";

import StatusModule from "../modules/system/status.js";
import HelloModule from "../modules/system/hello.js";
import CalculatorModule from "../modules/math/calculator.js";

export function bootRuntime() {

    registry.register(StatusModule);

    registry.register(HelloModule);

    registry.register(CalculatorModule);

    console.log("NERODIS Runtime Booted");

    console.log(registry.list());

}