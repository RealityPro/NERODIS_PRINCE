function parse(input) {
  const cmd = input.trim().toLowerCase();

  if (cmd === "status") return "STATUS_OK";
  if (cmd === "memory") return "MEMORY_REQUEST";
  if (cmd.startsWith("calc")) return "MATH_ENGINE";
  if (cmd.includes("hello")) return "GREETING";

  return "UNKNOWN";
}