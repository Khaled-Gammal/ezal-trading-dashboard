// validation.js

function validate(state) {
    let valid = true;
    let errors = {};
  
    if (!state.email) {
      errors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(state.mail)) {
      errors.email = 'Email address is invalid';
      valid = false;
    }
  
    if (!state.password) {
      errors.password = 'Password is required';
      valid = false;
    }
  
    return { valid, errors };
  }
  
  export { validate };