function setLocalStorage(key, val){
    localStorage.setItem(key, val);
}
function getLocalStorage(key){
    return localStorage.getItem(key);
}
export {setLocalStorage, getLocalStorage}