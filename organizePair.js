const makePair = function(persons) {
  const numOfPersons = persons.length;
  const lastIdx = numOfPersons - 1;
  let pairs = [];

  for (let pairNum = 1; pairNum < numOfPersons; pairNum++) {
    pairs.push([]);
  }

  let temp = [...persons];
  if (numOfPersons % 2 === 0) {
    for (let round = 0; round < numOfPersons - 1; round++) {
      temp = temp
        .slice(0, 1)
        .concat(temp.slice(lastIdx), temp.slice(1, lastIdx));
      for (let idx = 0; idx < numOfPersons / 2; idx++) {
        pairs[round].push([temp[idx], temp[lastIdx - idx]]);
      }
    }
  } else {
    for (let round = 0; round < numOfPersons - 1; round++) {
      temp.unshift(temp.pop());
      for (let idx = 1; idx <= (numOfPersons - 1) / 2; idx++) {
        if (idx === (numOfPersons - 1) / 2) {
          pairs[round].push([temp[idx], temp[lastIdx - idx + 1], temp[0]]);
        } else {
          pairs[round].push([temp[idx], temp[lastIdx - idx + 1]]);
        }
      }
    }
  }

  return pairs;
};

const organizePairs = (nextSprintTime, seatMap, persons) => {
  if (!nextSprintTime) {
    nextSprintTime = 0;
  }

  let futureSeatMap = seatMap.map(row => {
    return [...row];
  });

  for (let i = 0; i < seatMap.length; i++) {
    for (let j = 0; j < seatMap[i].length; j++) {
      if (seatMap[i][j] !== -1) {
        let _tmp = seatMap[i][j] - nextSprintTime;
        if (_tmp < 0) {
          futureSeatMap[i][j] = _tmp + persons.length;
        } else {
          futureSeatMap[i][j] = _tmp;
        }
      }
    }
  }

  for (let i = 0; i < futureSeatMap.length; i++) {
    for (let j = 0; j < futureSeatMap[i].length; j++) {
      if (futureSeatMap[i][j] === -1) {
        futureSeatMap[i][j] = "empty";
      } else {
        futureSeatMap[i][j] = persons[futureSeatMap[i][j]];
      }
    }
  }
  // eslint-disable-next-line
  console.log(futureSeatMap);
};

module.exports = {
  makePair,
  organizePairs
};
