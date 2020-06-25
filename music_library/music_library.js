const library = {
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
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

const printPlaylist = function(playlistId) {
  const playlistObj = library.playlists[playlistId];
  console.log(
    `${playlistObj.id}: ${playlistObj.name} - ${playlistObj.tracks.length}`,
  );
};

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function() {
  const playlists = library.playlists;

  for (let playlistId in playlists) {
    printPlaylist(playlists[playlistId].id);
  }
};

// printPlaylists();

// print a single track
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
const printTrack = function(trackId) {
  // extract the corresponding track out of the library
};

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {};

// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
  const playlist = library.playlists[playlistId];
  playlist.tracks.push(trackId);
};

addTrackToPlaylist('t01', 'p02');
console.log(library.playlists);

// adds a track to the library
const addTrack = function(name, artist, album) {
  const id = generateUid();

  const newTrack = {
    id,
    name,
    artist,
    album,
  };

  library.tracks[id] = newTrack;
};

addTrack('Shape of you', 'Ed Sheeran', 'Divide');
console.log(library.tracks);

// adds a playlist to the library
const addPlaylist = function(name) {};
// pr/intSearchResults (stretch)

// addTrack("Shape of you", "Ed", "Divide");

// printTracks();
// addPlaylist('Some Playlist');

// addTrackToPlaylist('t03', 'p01');
// printPlaylists();
// console.log(library.playlists)
