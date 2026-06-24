import { Registry } from "./registry.js";

function runNERODIS(input, Memory, parse) {

  Memory.add(input);

  const { intent, payload } = parse(input);

  switch (intent) {

    case "status":
      return JSON.stringify(Registry.status(), null, 2);

    case "memory":
      return Memory.all().map(x => x.value).join("\n");

    case "hello":
      return Registry.hello();

    case "calc":
      return Registry.calc(payload);

    default:
      return `UNRESOLVED INTENT: ${intent}`;
  }
}

export { runNERODIS };