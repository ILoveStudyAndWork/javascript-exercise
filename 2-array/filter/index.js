function chooseMultiplesOfThree(collection) {
  // TODO 1: 在这里写实现代码
  return collection.filter(i => i % 3 === 0);
}

function chooseNoRepeatNumber(collection) {
  // TODO 2: 在这里写实现代码
  return collection.reduce(function(pre, cur) {
    if (pre.indexOf(cur) === -1) {
      pre.push(cur);
    }
    return pre;
  }, []);
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
