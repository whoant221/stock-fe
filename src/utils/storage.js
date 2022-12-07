//Tạo local storage
// Hàm tạ<o></o>
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

const storage = createStorage("blockchain")
const PROFILE_CLIENT = 'info_client';
const PROFILE_FIREBASE = 'info_client';

const blockChainStorage = {
    setInfoClient: (data) => storage.set(PROFILE_CLIENT, data),
    removeInfoClient: () => storage.remove(PROFILE_CLIENT),

    setInfoFirebase: (data) => storage.set(PROFILE_FIREBASE, data),
    getInfoFirebase: () => storage.get(PROFILE_FIREBASE),
    removeInfoFirebase: () => storage.remove(PROFILE_FIREBASE),

}


export default blockChainStorage;