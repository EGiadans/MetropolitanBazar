class UserProfile {
    static getName = (key) => {
        return localStorage.getItem(key);
    };

    static setName = (key,name) => {
        localStorage.setItem(key, name);
    };

    static logOut = () => {
        localStorage.clear();
    };
}

export default UserProfile;