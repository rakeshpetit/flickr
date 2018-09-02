import { takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';
import { authenticate, database } from '../Store/Firebase';
import { REGISTER, LOGIN, SAVE_IMAGE_CLOUD } from '../actions';
import { ENV as env } from '../const';

const registerUserWithFirebase = values => authenticate
  .createUserWithEmailAndPassword(values.email, values.password)
  .then(success => success);

const registerFirebaseDB = ({ uid, email, fullName, profilePhotoUrl }) => {
  console.log('registerInternalDB', uid, email, fullName, profilePhotoUrl);
  database.ref(`users/${uid}`).set({
    fullName,
    email,
    profilePhotoUrl
  });
};

const loginUserWithFirebase = (values) => {
  console.log('loginUserWithFirebase', values);
  return authenticate.signInWithEmailAndPassword(values.email, values.password)
    .then(success => success);
};

function imageUploadCloudinary(image) {
  const photo = {
    uri: image.uri,
    name: image.name,
    type: image.type
  };
  const formPhoto = new FormData();
  formPhoto.append('upload_preset', env.CLOUDINARY_PRESET);
  formPhoto.append('file', photo);
  return axios.post(env.CLOUDINARY_API, formPhoto)
    .then(res => res.data)
    .catch(error => error);
}

function* registerUserCall({ data }) {
  console.log('values registerUserCall', data);
  try {
    const imageResp = yield call(imageUploadCloudinary, data.image);
    console.log('imageResp', imageResp);
    if (imageResp !== null && imageResp !== undefined) {
      const profilePhotoUrl = imageResp.secure_url;
      console.log('profilePhotoUrl', profilePhotoUrl);
      const registerData = yield call(registerUserWithFirebase, data);
      console.log('registerData', registerData);
      const { email, uid } = registerData.user;
      const { fullName } = data;
      yield call(
        registerFirebaseDB,
        {
          uid,
          email,
          fullName,
          profilePhotoUrl
        }
      );
    }
  } catch (error) {
    console.log(error);
  }
}

function* loginUser(values) {
  // console.log('values loginUser', values);
  try {
    yield call(loginUserWithFirebase, values.data);
    // console.log('loginData loginUser', loginData);
  } catch (error) {
    console.log(error);
  }
}

export default function* funcMain() {
  yield takeEvery(REGISTER, registerUserCall);
  yield takeEvery(LOGIN, loginUser);
  yield takeEvery(SAVE_IMAGE_CLOUD, imageUploadCloudinary);
}
