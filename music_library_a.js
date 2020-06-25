var library = {
  tracks: {
    t01: {
      id: 't01',
      name: 'Code Monkey',
      artist: 'Jonathan Coulton',
      album: 'Thing a Week Three',
    },
    t02: {
      id: 't02',
      name: 'Model View Controller',
      artist: 'James Dempsey',
      album: 'WWDC 2003',
    },
    t03: {
      id: 't03',
      name: 'Four Thirty-Three',
      artist: 'John Cage',
      album: 'Woodstock 1952',
    },
  },
  playlists: {
    p01: {
      id: 'p01',
      name: 'Coding Music',
      tracks: ['t01', 't02'],
    },
    p02: {
      id: 'p02',
      name: 'Other Playlist',
      tracks: ['t03'],
    },
  },
};

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function() {
  // assign the playlists to a var called playlists

  var playlists = library.playlists;
  // console.log('Playlists: ', playlists);

  for (var playlistId in playlists) {
    var playlist = playlists[playlistId];
    var tracks = playlist.tracks;
    console.log(
      playlistId + ': ',
      playlist.name + ' - ' + tracks.length + ' tracks'
    );
  }
};

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

// adds a track to the library

var addTrack = function(name, artist, album) {
  // Create a new track object

  var trackId = uid();

  var newTrack = {
    id: trackId,
    name: name,
    artist: artist,
    album: album,
  };

  library.tracks[trackId] = newTrack;
  // Add the newTrack object to the list of tracks

  console.log(library);
};

addTrack('Shape of you', 'Ed Sheeran', 'Divide');

// for (var trackId of tracks) {
//   console.log('TrackId: ', trackId);
//   var track = library.tracks[trackId];
//   console.log(track);
