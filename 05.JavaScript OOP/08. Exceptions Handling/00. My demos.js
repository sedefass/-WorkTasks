(function () {

    function validateUsername(username) {
        var USERNAME_MIN_CHARACTERS = 4,
            USERNAME_MAX_CHARACTERS = 30;

        if (!username || username.length < USERNAME_MIN_CHARACTERS || username.length > USERNAME_MAX_CHARACTERS) {
            var error = new TypeError('Username must be...');
            throw error;
        }

    }

    function registerUser(username, password) {
        validateUsername(username);
        //validatePassword(password);
        userRegisterSuccessful({
            username: username,
            password: password
        });
    }

    function userRegisterSuccessful(user) {
        console.log(user);
    }

} ());