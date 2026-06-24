export const Registry = {
  status: () => ({
    name: "NERODIS",
    mode: "COGNITIVE RUNTIME",
    integrity: "STABLE"
  }),

  hello: () => "NERODIS: cognitive layer active.",

  calc: (input) => {
    try {
      const expr = input.replace("calc", "").trim();
      return Function("return " + expr)();
    } catch {
      return "ERROR: invalid expression";
    }
  }
};