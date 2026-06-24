function runNERODIS(input, Memory, parse) {

  Memory.add(input);

  const intent = parse(input);

  switch (intent) {

    case "STATUS_OK":
      return `
NERODIS CORE STATUS
Memory size: ${Memory.all().length}
Integrity: stable
      `.trim();

    case "MEMORY_REQUEST":
      return Memory.all()
        .map(x => x.data)
        .join("\n");

    case "GREETING":
      return "NERODIS: active cognitive layer online.";

    case "MATH_ENGINE":
      try {
        const expr = input.replace("calc", "").trim();
        return "RESULT: " + Function("return " + expr)();
      } catch {
        return "MATH ERROR";
      }

    default:
      return `UNKNOWN INTENT: ${intent}`;
  }
}