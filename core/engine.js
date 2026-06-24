import registry from "./registry.js";

export function execute(intent, input, context) {

    return registry.execute(intent, input, context);

}