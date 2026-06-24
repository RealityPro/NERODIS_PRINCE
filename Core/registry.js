export const Registry = {
  status: () => ({
    system: "NERODIS",
    mode: "CLEAN_KERNEL",
    integrity: "STABLE"
  }),

  hello: () => "NERODIS: cognitive runtime active.",

  calc: (input) => {
    try {
      const expr = input.replace("calc", "").trim();
      return Function("return " + expr)();
    } catch {
      return "ERROR";
    }
  }
};