
class Cache {
  constructor({ maxSize = 100000, maxTTL = 300 }) {
    this.maxSize = maxSize;
    this.maxTTL = maxTTL;
    this.ttlLog = [];
    this.cacheMap = new Map();
    setInterval(() => this.deleteByTTL(), 1000);
  }


  deleteByTTL() {
    const toDelete = this.ttlLog.shift() || [];
    toDelete.forEach(key => this.cacheMap.delete(key));
  }

  compactTTL() {
    this.ttlLog.splice(0, this.ttlLog.findIndex(e => e));
  }

  get(key) {
    this.cacheMap.get(key);
  }

  set(key, value) {
    if (this.maxSize <= this.cacheMap.size) {
      this.compactTTL();
      this.deleteByTTL();
    }

    this.cacheMap.set(key, value);

    if (this.ttlLog[this.maxTTL]) {
      this.ttlLog[this.maxTTL].push(key);
    } else {
      this.ttlLog[this.maxTTL] = [key];
    }
  }
}

module.exports = Cache;
