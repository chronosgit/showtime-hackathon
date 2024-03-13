const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
};

const isValidPassword = (password) => {
    // Consists of latin letters
    // Includes at least one number, uppercase letter and sign
    // 8 to 30 characters 
    const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d!@#$%^&*]{8,30}$/;
    
    return passwordRegex.test(password);
};

const isValidUsername = (username) => {
    const usernameRegex = /^[a-zA-Z]{8,15}$/;

    return usernameRegex.test(username);
};

const areSame = (a, b) => {
    return a === b;
};

export {
    isValidEmail,
    isValidPassword,
    isValidUsername,
    areSame
};