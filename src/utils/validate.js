export const checkValidData = (email, password, name) => {

    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    const isValidName = /([a-zA-Z0-9_\s]+)/.test(name);

    if (!isEmailValid) return "Email Id is not valid";
    if (!isPasswordValid) return "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, a special character and one number.";

    if (!isValidName) return "Improper name ";

    return null; // null means everything is right 
}