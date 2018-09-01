import { takeEvery, call, put } from 'redux-saga/effects';
import { authenticate, database } from '../Store/Firebase';
import { REGISTER, LOGIN, saveImage, SAVE_IMAGE_CLOUD } from '../actions';
import { ENV as env } from '../const';

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

function* imageUploadCloudinary(image) {
  console.log('imageUploadCloudinary', image);
  const photo = {
    uri: image.uri,
    name: image.name,
    type: image.type
  };
  console.log('photo', photo);
  console.log('env', env);
  const formPhoto = new FormData();
  formPhoto.append('upload_preset', env.CLOUDINARY_PRESET);
  formPhoto.append('file', photo);
  return fetch(env.CLOUDINARY_API, {
    method: 'POST',
    body: formPhoto
  }).then(response => response.json());
  yield put(saveImage(image));
}

function* registerUserCall({ data }) {  
  console.log('values registerUserCall', data);
  try {
    // const registerData = yield call(registerUserWithFirebase, values.data);
    // console.log('registerData', registerData);
    // const { email, uid } = registerData.user;
    const { fullName } = data;    
    const imageResp = yield call(imageUploadCloudinary, data.image);
    console.log('imageResp', imageResp.secure_url);
    // yield call(registerFirebaseDB, { uid, email, fullName });
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
  yield takeEvery(SAVE_IMAGE_CLOUD, imageUploadCloudinary);
  console.log('Generator function1');
}
