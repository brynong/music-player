import activeHandler from './ActiveSong';
    
    const skipHandler = async (direction, audioRef, currentSong, isPlaying, songs, setCurrentSong, setSongs) => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        if (direction === 'skip-forward') {
            await setCurrentSong(songs[(currentIndex + 1) % songs.length])
            activeHandler(songs[(currentIndex + 1) % songs.length], songs, setSongs);
        }
        if (direction === 'skip-back') {
            if ((currentIndex - 1) % songs.length === -1) {
                await setCurrentSong(songs[songs.length - 1]);
                activeHandler(songs[songs.length - 1], songs, setSongs);
                if (isPlaying) audioRef.current.play();
                return;
            }
            await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
            activeHandler(songs[(currentIndex - 1) % songs.length], songs, setSongs);
        }
        if (isPlaying) audioRef.current.play();
    };



export default skipHandler;