var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

function printFollowers() {
  for (const key in data) {
    let personObj = data[key];
    let followersHandle = listFollowersNames(personObj.follows).join(", ");
    console.log(`${personObj.name} follows ${followersHandle}`);
    let followsHandle = listFollowsNames(key);
    console.log(`${followsHandle} follows ${personObj.name}`);
    console.log("--------------");
  }
}

function getFollowers(memberId) {
  var ids = Object.keys(data);
  return ids.filter(function(id) {
    return data[id].follows.indexOf(memberId) !== -1;
  });
}

// printFollowers();
// ["f02", "f03", "f04"]
function listFollowersNames(followersIds) {
  return followersIds.map(id => {
    return data[id].name;
  });
}

function listFollowsNames(id) {
  var keys = Object.keys(data);
  return keys
    .filter(function(key) {
      // check if the id is included in the follows array
      return data[key].follows.indexOf(id) !== -1;
    })
    .map(function(id) {
      return data[id].name;
    });
}

function getMaxFollowers() {
  // get an array of followers for each member
  // Sort them by the longest array
  // Pick the first one

  var membersId = Object.keys(data);

  var idMaxFollowers = membersId
    .sort(function(idFirst, idSecond) {
      return getFollowers(idSecond).length - getFollowers(idFirst).length;
    })
    .shift();
  return idMaxFollowers;
}

function maxFollowersOver30() {
  // loop over data

  var membersId = Object.keys(data);

  list = membersId.map(function(id) {
    return {
      id: id,
      followersOver30: getFollowers(id).filter(function(id) {
        return data[id].age > 30;
      })
    };
  });

  var max = list.reduce(function(currentObj, nextObj) {
    if (nextObj.followersOver30.length > currentObj.followersOver30.length) {
      return nextObj;
    } else {
      return currentObj;
    }
  }, list[0]);

  return data[max.id].name;
}

console.log(maxFollowersOver30());

// console.log(listFollowersNames(data.f01.follows));

// console.log(listFollowsNames("f01"));

// printFollowers();
