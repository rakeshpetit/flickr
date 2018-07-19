export const CREATE_SESSION = 'create_session';
export const CLEAR_SESSION = 'clear_session';

export function createSession(user) {
  return {
    type: CREATE_SESSION,
    user
  };
}

export function clearSession() {
  return {
    type: CLEAR_SESSION
  };
}
