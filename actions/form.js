export const NEW_ACTION = 'new_action';
export const REGISTER = 'register';

export function newAction() {
  return {
    type: NEW_ACTION
  };
}

export function register(values) {
  console.log('action', values);
  return {
    type: REGISTER,
    data: values
  };
}
