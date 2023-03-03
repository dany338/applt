export const validateAuth = (values: any) => {
  let errors = {};
  validateEmail(values.email, errors);
  validatePassword(values.password, errors);

  return errors;
};

export const validateCompany = (values: any) => {
  let errors = {};
  validateName(values.name, errors);
  validateNit(values.nit, errors);
  validateAddress(values.address, errors);
  validatePhone(values.phone, errors);

  return errors;
}

const validateEmail = (email: any, errors: any) => {
  if (!email) {
    errors.email = 'The email is required';
  } else {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      errors.email = 'The email is not valid';
    }
  }
};

const validatePassword = (password: any, errors: any) => {
  if (!password) {
    errors.password = 'The password is required';
  } else {
    if (password.length < 8) {
      errors.password = 'The password must be at least 8 characters';
    }
  }
};

const validateName = (name: any, errors: any) => {
  if (!name) {
    errors.name = 'The name is required';
  }
};

const validateNit = (nit: any, errors: any) => {
  if (!nit) {
    errors.nit = 'The nit is required';
  }
};

const validateAddress = (address: any, errors: any) => {
  if (!address) {
    errors.address = 'The address is required';
  } else if (address.length > 30) {
    errors.address = 'The address must be at most 30 characters';
  }
};

const validatePhone = (phone: any, errors: any) => {
  if (!phone) {
    errors.phone = 'The phone is required';
  }
};