import { takeEvery, call } from 'redux-saga/effects';
import { authenticate, database } from '../Store/Firebase';
import { REGISTER, LOGIN } from '../actions';

const registerUserWithFirebase = values => authenticate
  .createUserWithEmailAndPassword(values.email, values.password)
  .then(success => success);

const registerFirebaseDB = ({ uid, email, fullName }) => {
  console.log('registerInternalDB', uid, email, fullName);
  database.ref(`users/${uid}`).set({
    fullName,
    email
  });
};

const loginUserWithFirebase = (values) => {
  console.log('loginUserWithFirebase', values);
  return authenticate.signInWithEmailAndPassword(values.email, values.password)
    .then(success => success);
};

function* registerUserCall(values) {
  console.log('values registerUserCall', values);
  try {
    const registerData = yield call(registerUserWithFirebase, values.data);
    console.log('registerData', registerData);
    const { email, uid } = registerData.user;
    const { fullName } = values.data;
    yield call(registerFirebaseDB, { uid, email, fullName });
  } catch (error) {
    console.log(error);
  }
}

function* loginUser(values) {
  console.log('values loginUser', values);
  try {
    const loginData = yield call(loginUserWithFirebase, values.data);
    console.log('loginData loginUser', loginData);
  } catch (error) {
    console.log(error);
  }
}

export default function* funcMain() {
  yield takeEvery(REGISTER, registerUserCall);
  yield takeEvery(LOGIN, loginUser);
  console.log('Generator function1');
}
