function parse(input) {
  const cmd = input.trim().toLowerCase();

  if (cmd === "status") return { intent: "status" };
  if (cmd === "memory") return { intent: "memory" };
  if (cmd.startsWith("calc")) return { intent: "calc", payload: cmd };
  if (cmd.includes("hello") || cmd.includes("hi")) return { intent: "hello" };

  return { intent: "unknown", payload: cmd };
}