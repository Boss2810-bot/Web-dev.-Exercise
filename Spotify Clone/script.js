console.log('Spotify Clone - Enhanced Version');

// Global variables
let currentSong = null;
let audioPlayer = new Audio();
let isPlaying = false;
let currentSongIndex = 0;
let songs = [];
let volume = 0.7;

// Get songs directly from the songs folder
function getSongs() {
    // Define the songs from the local folder
    return [
        'songs/indian-bollywood-hindi-song-background-music-294105.mp3',
        'songs/into-the-night-uk-drill-music-20928.mp3',
        'songs/lofi-background-music-309034.mp3',
        'songs/please-calm-my-mind-125566.mp3',
        'songs/sapne-bade-305719.mp3',
        'songs/sunset-in-miami-background-music-for-video-tropical-house-1-minute-308433.mp3'
    ];
}

// Format song name for display
function formatSongName(songPath) {
    const fileName = songPath.split('/').pop();
    // Remove the extension and replace hyphens with spaces
    let formattedName = fileName.replace('.mp3', '').replace(/-/g, ' ');
    
    // Capitalize first letter of each word and limit length
    formattedName = formattedName.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    
    // Truncate if too long
    return formattedName.length > 30 ? formattedName.substring(0, 27) + '...' : formattedName;
}

// Load and display songs in the library
function loadSongs() {
    songs = getSongs();
    console.log("Songs loaded:", songs);

    if (songs.length === 0) {
        console.error("No songs available.");
        return;
    }

    let songUL = document.querySelector(".library .songplaylist ul");
    if (!songUL) {
        console.error("Library song list <ul> not found!");
        return;
    }
    songUL.innerHTML = ""; // Clear previous entries

    songs.forEach((song, index) => {
        let li = document.createElement("li");
        li.innerHTML = `
            <div class="song-item">
                <span class="song-name">${formatSongName(song)}</span>
                <div class="song-controls">
                    <img src="play.svg" class="play-btn" alt="Play">
                </div>
            </div>
        `;
        li.dataset.index = index;
        li.addEventListener('click', () => playSong(index));
        songUL.appendChild(li);
    });

    // Create playlist cards dynamically
    createPlaylistCards();
}

// Create playlist cards
function createPlaylistCards() {
    const cardContainer = document.querySelector('.cardContainer');
    cardContainer.innerHTML = ''; // Clear existing cards
    
    const playlists = [
        { title: 'Happy Hits!', description: 'Hits to boost your mood and fill you with happiness', image: 'https://i.scdn.co/image/ab67706f00000002b55b6074da1d43715fc16d6d' },
        { title: 'Chill Lofi', description: 'Relax and unwind with smooth lofi beats', image: 'https://i.scdn.co/image/ab67706f00000002fe24d7084be472288cd6ee6c' },
        { title: 'Bollywood Beats', description: 'Top Hindi tracks that will make you dance', image: 'https://i.scdn.co/image/ab67706c0000da84fcb8b92f2615d3261b8eb146' },
        { title: 'House Party', description: 'Upbeat tracks perfect for your next party', image: 'https://i.scdn.co/image/ab67706f000000025f0ff9251e3cfe641160dc31' },
        { title: 'Workout Energy', description: 'High-energy tracks to power your workout', image: 'https://i.scdn.co/image/ab67706f00000002978b8a4c8ce5eca4e7355ede' },
        { title: 'Focus Flow', description: 'Instrumental tracks to help you concentrate', image: 'https://i.scdn.co/image/ab67706f00000002724554ed6bed6f051d9b0bfc' }
    ];
    
    playlists.forEach((playlist, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="play">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 20V4L19 12L5 20Z" stroke="#141834" fill="#000" stroke-width="1.5" stroke-linejoin="round" />
                </svg>
            </div>
            <img src="${playlist.image}" alt="${playlist.title}">
            <h2>${playlist.title}</h2>
            <p>${playlist.description}</p>
        `;
        card.addEventListener('click', () => {
            // Play the first song when a playlist is clicked
            playSong(index % songs.length);
        });
        cardContainer.appendChild(card);
    });
}

// Play a song by index
function playSong(index) {
    if (index < 0 || index >= songs.length) return;
    
    currentSongIndex = index;
    const songPath = songs[index];
    
    // Update audio source
    audioPlayer.src = songPath;
    audioPlayer.volume = volume;
    
    // Play the song
    audioPlayer.play()
        .then(() => {
            isPlaying = true;
            updatePlayButton();
            updateSongInfo();
        })
        .catch(error => {
            console.error("Error playing song:", error);
        });
}

// Toggle play/pause
function togglePlay() {
    if (audioPlayer.src) {
        if (isPlaying) {
            audioPlayer.pause();
        } else {
            audioPlayer.play();
        }
        isPlaying = !isPlaying;
        updatePlayButton();
    } else if (songs.length > 0) {
        // If no song is currently loaded, play the first one
        playSong(0);
    }
}

// Play next song
function playNext() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playSong(currentSongIndex);
}

// Play previous song
function playPrevious() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    playSong(currentSongIndex);
}

// Update play button icon
function updatePlayButton() {
    const playButton = document.querySelector('.songbuttons .play-pause');
    if (!playButton) return;
    
    if (isPlaying) {
        playButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                <rect x="6" y="4" width="4" height="16" rx="1" ry="1"/>
                <rect x="14" y="4" width="4" height="16" rx="1" ry="1"/>
            </svg>
        `;
    } else {
        playButton.innerHTML = `<img src="play.svg" alt="Play">`;
    }
}

// Update song information display
function updateSongInfo() {
    const songInfo = document.querySelector('.songinfo');
    if (!songInfo) return;
    
    if (audioPlayer.src) {
        const songName = formatSongName(songs[currentSongIndex]);
        songInfo.innerHTML = `
            <div class="current-song">
                <img src="music.svg" alt="Music" class="song-icon">
                <div class="song-details">
                    <div class="song-title">${songName}</div>
                    <div class="song-artist">Spotify Clone</div>
                </div>
            </div>
        `;
    } else {
        songInfo.innerHTML = `<div class="no-song">No song selected</div>`;
    }
    
    // Update progress bar
    updateProgressBar();
}

// Update progress bar
function updateProgressBar() {
    const progressBar = document.querySelector('.progress-bar');
    const progressFill = document.querySelector('.progress-fill');
    const currentTime = document.querySelector('.current-time');
    const totalTime = document.querySelector('.total-time');
    
    if (!progressBar || !progressFill || !currentTime || !totalTime) return;
    
    // Format time function
    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };
    
    // Update current time
    currentTime.textContent = formatTime(audioPlayer.currentTime);
    
    // Update total time
    if (!isNaN(audioPlayer.duration)) {
        totalTime.textContent = formatTime(audioPlayer.duration);
        
        // Update progress fill
        const percentage = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progressFill.style.width = `${percentage}%`;
    }
}

// Set up event listeners
function setupEventListeners() {
    // Play/Pause button
    const playPauseBtn = document.querySelector('.songbuttons .play-pause');
    if (playPauseBtn) {
        playPauseBtn.addEventListener('click', togglePlay);
    }
    
    // Next button
    const nextBtn = document.querySelector('.songbuttons .next-song');
    if (nextBtn) {
        nextBtn.addEventListener('click', playNext);
    }
    
    // Previous button
    const prevBtn = document.querySelector('.songbuttons .prev-song');
    if (prevBtn) {
        prevBtn.addEventListener('click', playPrevious);
    }
    
    // Progress bar click
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
        progressBar.addEventListener('click', (e) => {
            const progressBarRect = progressBar.getBoundingClientRect();
            const clickPosition = e.clientX - progressBarRect.left;
            const percentage = clickPosition / progressBarRect.width;
            
            // Set current time based on click position
            if (!isNaN(audioPlayer.duration)) {
                audioPlayer.currentTime = percentage * audioPlayer.duration;
                updateProgressBar();
            }
        });
    }
    
    // Volume control
    const volumeControl = document.querySelector('.volume-slider');
    if (volumeControl) {
        volumeControl.value = volume * 100;
        volumeControl.addEventListener('input', (e) => {
            volume = e.target.value / 100;
            audioPlayer.volume = volume;
        });
    }
    
    // Audio player events
    audioPlayer.addEventListener('timeupdate', updateProgressBar);
    audioPlayer.addEventListener('ended', playNext);
    audioPlayer.addEventListener('play', () => {
        isPlaying = true;
        updatePlayButton();
    });
    audioPlayer.addEventListener('pause', () => {
        isPlaying = false;
        updatePlayButton();
    });
}

// Initialize the application
window.addEventListener("load", () => {
    console.log("Spotify Clone Loaded!");
    loadSongs();
    updateSongInfo();
    setupEventListeners();
});
