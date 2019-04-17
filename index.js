const { persons, sprints } = require("./data");
const { makePair } = require("./organizePair");

// for (let sprint in sprints) {
//   console.log(sprint);
//   organizePairs(sprints[sprint], seatMap, persons);
// }

// const nextPeer = whoIsGonnaSitNextToMe(null, null, seatMap, person2);
// console.log(nextPeer);
const pairs = makePair(persons);

for (let sprint in sprints) {
  console.log(sprint);
  console.log(pairs[sprints[sprint]]);
}
