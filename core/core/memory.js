const Memory = {
  log: [],
  maxSize: 50,

  add(entry) {
    this.log.push({
      data: entry,
      time: Date.now()
    });

    if (this.log.length > this.maxSize) {
      this.log.shift();
    }
  },

  last() {
    return this.log[this.log.length - 1];
  },

  all() {
    return this.log;
  }
};