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

const storage = createStorage("blockchain")

const zingStorage = {}


export default zingStorage;