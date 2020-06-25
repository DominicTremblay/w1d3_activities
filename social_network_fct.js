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

const getName = member => member.name;

const followersNames = followers => {
  const followersIds = Object.keys(followers);
  return followersIds.map(followerId => getName(followers[followerId]));
};

const filterMembers = (members, filterIds) => {
  const membersIds = Object.keys(members);
  return membersIds
    .filter(memberId => filterIds.includes(memberId))
    .map(id => members[id]);
};

const printMessages = messages => {
  messages.forEach(message => {
    console.log(message);
  });
};

const followsMessages = members => {
  const membersIds = Object.keys(members);

  return membersIds.map(memberId => {
    const currentMember = members[memberId];
    const followers = filterMembers(members, currentMember.follows);
    return `${getName(currentMember)} follows ${followersNames(followers).join(
      ", "
    )}`;
  });
};

// console.log(followersNames(filterMembers(data, data.f01.follows)));
printMessages(followsMessages(data));
