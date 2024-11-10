// validation.js

function validate({ email, password }) {
    let valid = true;
    let errors = {};
  
    if (!email) {
      errors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email address is invalid';
      valid = false;
    }
  
    if (!password) {
      errors.password = 'Password is required';
      valid = false;
    }
  
    return { valid, errors };
  }
  
  export { validate };