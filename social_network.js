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
    age: 35,n
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

var filterOver30 = function( data ) {
  var filteredMembers = {};
  for ( var id in data ) {
    if ( data[ id ]['age'] > 30 ) {
      filteredMembers[ id ] = data[ id ];
    }
  }
  return filteredMembers;
}

// Identify who follows the most people
var getMaxFollows = function ( data ) {
  var maxFollowsId  = null;
  var maxFollows    = 0;
  for ( var id in data ) {
    if ( data[ id ]['follows'].length > maxFollows ) {
      maxFollows = data[ id ]['follows'].length;
      maxFollowsId = id;
    }
  }
  return data[ maxFollowsId ];
}

// Identify who follows the most people over 30
var getMaxFollowsOver30 = function( data ) {
  var dataOver30 = filterOver30( data );
  return getMaxFollows( dataOver30 );
}

// console.log(getMaxFollowsOver30(data));

// console.log( getMaxFollows( data ));

var countFollowers = function( data ) {
  followersCount = {};
  for ( var id in data ) {
    for ( var followId of data[ id ].follows ) {
      followersCount[ followId ] = followersCount[ followId ] || 0;
      followersCount[ followId ] += 1
    }
  }
  return followersCount;
}

var getMaxCount = function( stats ) {
  var maxId = null;
  var maxCount = 0;

  for ( var id in stats ) {
    if ( stats[ id ] > maxCount ) {
      maxCount = stats[ id ];
      maxId = id
    }
  }
  return maxId;
}

// Identify who has the most followers
var getMaxFollowers = function( data ) {
  var followerStats = countFollowers( data );
  var maxFollowersId = getMaxCount( followerStats );  
  return data[ maxFollowersId ];
}

var filterFollowersOver30 = function( stats, data ) {
  var followersOver30 = {};
  for ( var followId in stats ) {
    if ( data[ followId ]['age'] > 30 ) {
      followersOver30[ followId ] = stats[ followId ];
    }
  }
  return followersOver30;
}

// Identify who has the most followers over 30
var getMaxFollowersOver30 = function( data ) {
  var followerStats = countFollowers( data );
  var followersOver30 = filterFollowersOver30( followerStats, data );
  var maxFollowersId = getMaxCount( followersOver30 );
  return data[ maxFollowersId ];
}


console.log(getMaxFollowersOver30(data));


// List everyone and for each of them, list the names of who they follow and who follows them




// List those who follow someone that doesn't follow them back
// List everyone and their reach (sum of # of followers and # of followers of followers)