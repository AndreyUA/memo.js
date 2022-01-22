const numPlusNum = (num) => num + 10;

const memo = (memoFunc) =>
  new Proxy(memoFunc, {
    cache: new Map(),
    apply(target, thisArg, argList) {
      const cacheKey = argList.toString();
      if (!this.cache.has(cacheKey)) {
        this.cache.set(cacheKey, target.apply(thisArg, argList));
        console.log("calculated data ----> ", target(argList[0]));
      } else {
        console.log("data from cache ----> ", this.cache.get(cacheKey));
      }
    },
  });

const memoPlus = memo(numPlusNum);

[10, 20, 30, 10, 20, 30].forEach((str) => memoPlus(str));
