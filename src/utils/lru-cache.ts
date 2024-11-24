/* -------------------------------------------------------------------------------------------------
 * createLRUCache
 * -----------------------------------------------------------------------------------------------*/

function createLRUCache<K, V>(limit = 500) {
  return {
    limit,
    cache: new Map<K, V>(),
    get(key: K) {
      const value = this.cache.get(key);
      if (!value) return;
      this.cache.delete(key);
      this.cache.set(key, value);
      return value;
    },
    set(key: K, value: V) {
      this.cache.delete(key);
      if (this.cache.size === this.limit) this.cache.delete(this.cache.keys().next().value);
      this.cache.set(key, value);
    },
  };
}

/* ---------------------------------------------------------------------------------------------- */

export { createLRUCache };
