//Tạo local storage
// Hàm tạo
const createStorage = (LOCAL_STORAGE_KEY) => {
    const storage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? {}
    
    return {
        get(key) {      
            return storage[key]
        },
        set(key, value) {
            storage[key] = value;
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(storage));
        },
        remove(key) {
            delete storage[key];
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(storage));
        }
    }
}

const storage = createStorage("zingmp3")

const LIBRARY_SONG = 'librarySong';
const LIBRARY_PLAYLIST = 'libraryPlaylist';

const zingStorage = {
    setLibrarySong: (data) => storage.set(LIBRARY_SONG, data),
    getLibrarySong: () => storage.get(LIBRARY_SONG),


    setLibraryPlaylist: (data) => storage.set(LIBRARY_PLAYLIST, data),
    getLibraryPlaylist: () => storage.get(LIBRARY_PLAYLIST),

}

export default zingStorage;