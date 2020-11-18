
const activeHandler = (nextSong, songs, setSongs) => {
    const newSongs = songs.map((song) => {
        if (song.id === nextSong.id) {
            return {
                ...song,
                active: true,
            };
        } else {
            return {
                ...song,
                active: false,
            };
        }
    });

    setSongs(newSongs);
}

export default activeHandler;