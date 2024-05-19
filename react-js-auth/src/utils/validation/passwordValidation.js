export const validatePassword = (password) => {
    const minLength = /.{8,}/;
    const hasLetter = /[a-zA-Z]/;
    const hasNumber = /\d/;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
  
    if (!minLength.test(password)) {
      return 'Password must be at least 8 characters long.';
    }
    if (!hasLetter.test(password)) {
      return 'Password must contain at least one letter.';
    }
    if (!hasNumber.test(password)) {
      return 'Password must contain at least one number.';
    }
    if (!hasSpecialChar.test(password)) {
      return 'Password must contain at least one special character.';
    }
    return null;
  };