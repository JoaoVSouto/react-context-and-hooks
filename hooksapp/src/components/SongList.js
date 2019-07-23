import React, { useState } from 'react';
import uuid from 'uuid/v1';

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: 'To Live Again', id: 1 },
    { title: 'Evil Warning', id: 2 },
    { title: 'Living For The Night', id: 3 }
  ]);

  const addSong = () => {
    setSongs([...songs, { title: 'Rebel Maniac', id: uuid() }]);
  };

  return (
    <div className="song-list">
      <ul>
        {songs.map(song => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>
      <button onClick={addSong}>Add a song</button>
    </div>
  );
};

export default SongList;
