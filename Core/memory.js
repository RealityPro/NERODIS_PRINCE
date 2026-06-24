const Memory = {
  log: [],
  maxSize: 100,

  add(entry) {
    this.log.push({
      value: entry,
      timestamp: Date.now()
    });

    if (this.log.length > this.maxSize) {
      this.log.shift();
    }
  },

  all() {
    return this.log;
  }
};

export { Memory };