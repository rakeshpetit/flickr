import { takeEvery, call } from 'redux-saga/effects';
import { authenticate, database } from '../Store/Firebase';
import { REGISTER } from '../actions';

const registerUserWithFirebase = (values) => {
  console.log('values', values);
  console.log('authenticate', authenticate);
  return authenticate.createUserWithEmailAndPassword(values.email, values.password)
    .then((success) => {
      console.log('success', success);
      return success;
    });
};

const registerFirebaseDB = ({ uid, email, fullName }) => {
  console.log('registerInternalDB', uid, email, fullName);
  database.ref(`users/${uid}`).set({
    fullName,
    email
  });
};

function* registerUserCall(values) {
  console.log('values saga', values);
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

export default function* funcMain() {
  yield takeEvery(REGISTER, registerUserCall);
  console.log('Generator function1');
}
