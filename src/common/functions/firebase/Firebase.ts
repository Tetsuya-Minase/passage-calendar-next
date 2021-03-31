import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { Nullable } from '../../../../types/util';
import { atom, selector } from 'recoil';

const config = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(config);
}
export { firebase };

interface _FirebaseState {
  userId: Nullable<string>;
  userName: Nullable<string>;
}
export type FirebaseState = Readonly<_FirebaseState>;

export const FirebaseState = atom<FirebaseState>({
  key: 'FirebaseState',
  default: {userId: null, userName: null}
});
export const FirebaseStateUserId = selector({
  key: 'FirebaseStateUserId',
  get: ({get}) => get(FirebaseState).userId
});
