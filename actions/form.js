export const NEW_ACTION = 'new_action';
export const REGISTER = 'register';
export const LOGIN = 'login';

export function newAction() {
  return {
    type: NEW_ACTION
  };
}

export function register(values) {
  console.log('register action', values);
  return {
    type: REGISTER,
    data: values
  };
}

export function login(values) {
  console.log('login action', values);
  return {
    type: LOGIN,
    data: values
  };
}
