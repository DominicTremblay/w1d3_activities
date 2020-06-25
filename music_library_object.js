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
    p01: { id: 'p01', name: 'Coding Music', tracks: ['t01', 't02'] },
    p02: { id: 'p02', name: 'Other Playlist', tracks: ['t03'] },
  },
  printPlaylists: function() {
    var playlists = this.playlists;

    for (var playlistId in playlists) {
      var playlist = playlists[playlistId];
      console.log(
        playlist.id +
          ': ' +
          playlist.name +
          ' - ' +
          playlist.tracks.length +
          ' tracks'
      );
    }
  },
};

library.printTrack = function(trackId) {
  console.log(this);
};

library.protoype = function(trackId) {
  console.log(this.tracks[trackId]);
};

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function() {
  var tracks = library.tracks;
  for (var trackId in tracks) {
    printTrack(tracks[trackId]);
  }
};

var printTrack = function(track) {
  console.log(
    track.id + ':',
    track.name + ' by ' + track.artist + ' (' + track.album + ')'
  );
};

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function(playlistId) {
  var playlist = library.playlists[playlistId];
  var tracks = library.tracks;

  console.log(
    playlist.id +
      ': ' +
      playlist.name +
      ' - ' +
      playlist.tracks.length +
      ' tracks'
  );
  for (var trackId of playlist.tracks) {
    printTrack(tracks[trackId]);
  }
};

// adds an existing track to an existing playlist

var addTrackToPlaylist = function(trackId, playlistId) {
  var playlist = library.playlists[playlistId];
  playlist['tracks'].push(trackId);
};

// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

// adds a track to the library

var addTrack = function(name, artist, album) {
  var trackId = uid();
  library.tracks[trackId] = {
    id: trackId,
    name: name,
    artist: artist,
    album: album,
  };
};

// adds a playlist to the library

var addPlaylist = function(name) {
  var playlistId = uid();

  library.playlists[playlistId] = {
    id: playlistId,
    name: name,
    tracks: [],
  };
};

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {};

// printTracks();
// printPlaylist('p01');
// addTrackToPlaylist('t03', 'p01');
library.printPlaylists();
// addTrack("title", "artist", "album");
// addPlaylist("title");
// console.log(library.playlists);
