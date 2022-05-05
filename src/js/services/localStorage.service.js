export const localStorageService = {
  delete(key) {
    localStorage.removeItem(key);
  },

  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  get(key) {
    const data = localStorage.getItem(key);
    if (!data) return null;
    return JSON.parse(data);
  },

  isLoggedIn() {
    const data = localStorage.getItem("user");

    if (!data) return false;

    return JSON.parse(data);
  },
};
