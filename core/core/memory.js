const Memory = {
  log: [],
  maxSize: 100,

  add(entry) {
    this.log.push({
      value: entry,
      timestamp: Date.now(),
      type: classify(entry)
    });

    if (this.log.length > this.maxSize) {
      this.log.shift();
    }
  },

  all() {
    return this.log;
  }
};

function classify(text) {
  if (text.includes("calc")) return "math";
  if (text.includes("status")) return "system";
  return "general";
}

export { Memory };