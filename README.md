# es6-ttl-cache

- In process cache for API serving to reduce database roundtrips
- Cache based on ES6 MAP for better performance and key/value flexibility
- Supports TTL (seconds) without ever scanning all of Map to find removal candidates
- Enforces maximum size to prevent OOM crashes, taking TTL into account
- All methods fast O(1) and synchronous, passing by reference

# Installation

npm install @axonite.io/es6-ttl-cache

# Usage

const Cache = require("@axonite.io/es6-ttl-cache");

const cache = new Cache({ maxSize: 100000, maxTTL: 300 }); // These are also the defaults

cache.set("key","value");

console.log(`from cache: ${cache.get("get")}`);
