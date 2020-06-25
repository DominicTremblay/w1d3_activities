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

// List everyone and for each of them, list the names of who they follow and who follows them

function getFollowers(memberId) {
  var ids = Object.keys(data);
  return ids.filter(function(id) {
    return data[id].follows.indexOf(memberId) !== -1;
  })
}

function getFollowersOver30(memberId) {
  var ids = Object.keys(data);
  return ids.filter(function(id) {
    return data[id].follows.indexOf(memberId) !== -1 && data[id].age > 30;
  });
}

function printNames(memberIds) {
  var names = [];
  for (var id of memberIds) {
    names.push(data[id].name);
  }
  return names.join(", ");
}

function listEveryone(everyone) {
  for (var id in everyone) {
    var member = everyone[id];
    console.log(
      `- ${member.name} \n\tFollows: ${printNames(
        member.follows
      )} \n\tFollowed By: ${printNames(getFollowers(id))}`
    );
  }
}

function getMaxFollows() {
  var membersId = Object.keys(data);

  var idMaxFollows = membersId
    .sort(function(idFirst, idSecond) {
      return data[idSecond].follows.length - data[idFirst].follows.length;
    })
    .shift();
  return `${data[idMaxFollows].name} follows the max people (${
    data[idMaxFollows].follows.length
  })`;
}

function getMaxFollowers() {
  var membersId = Object.keys(data);
  var idMaxFollowers = membersId
    .sort(function(idFirst, idSecond) {
      return getFollowers(idSecond).length - getFollowers(idFirst).length;
    })
    .shift();
  return `${data[idMaxFollowers].name} has the most followers (${
    getFollowers(idMaxFollowers).length
  })`;
}

function getMaxFollowersOver30() {
  var membersId = Object.keys(data);
  var idMaxFollowers = membersId
    .sort(function(idFirst, idSecond) {
      return (
        getFollowersOver30(idSecond).length - getFollowersOver30(idFirst).length
      );
    })
    .shift();
  return `${data[idMaxFollowers].name} has the most followers over 30 (${
    getFollowersOver30(idMaxFollowers).length
  })`;
}

function over30(membersId) {
  return membersId.filter(function(id) {
    return data[id].age > 30;
  });
}

function getMaxFollowsOver30() {
  var membersId = Object.keys(data);

  var idMaxFollows = membersId
    .sort(function(idFirst, idSecond) {
      return (
        over30(data[idSecond].follows).length -
        over30(data[idFirst].follows).length
      );
    })
    .shift();
  return `${data[idMaxFollows].name} follows the max people over 30 (${
    over30(data[idMaxFollows].follows).length
  })`;
}

function notFollowingBack(memberId) {
  var follows = data[memberId].follows;
  var followers = getFollowers(memberId);

  return follows.filter(function(id) {
    return followers.indexOf(id) === -1;
  });
}
// console.log(getMaxFollowsOver30());
// console.log(notFollowingBack("f02"));

// Identify who follows the most people
// Identify who has the most followers
// Identify who has the most followers over 30
// Identify who follows the most people over 30
// List those who follow someone that doesn't follow them back
// List everyone and their reach (sum of # of followers and # of followers of followers)

function reach(memberId) {
  var followers = getFollowers(memberId);
  var totalFollowers = followers.length;

  for (var id of followers) {
    totalFollowers += getFollowers(id).length;
  }

  return totalFollowers;
}

function printReach() {
  for (var id in data) {
    console.log(`Reach of ${data[id].name}: ${reach(id)}`);
  }
}

printReach();
