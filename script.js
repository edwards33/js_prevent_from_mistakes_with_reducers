var data = ["Vote01", "Vote02", "Vote01", "Vote02"];
function reducer(accumulator, value) {
  if (accumulator[value]) {
    accumulator[value] = accumulator[value] + 1;
  } else {
    accumulator[value] = 1;
  }

  return accumulator;
}

var tally = data.reduce(reducer, {});

console.log("Vote01: ", tally.Vote01)
