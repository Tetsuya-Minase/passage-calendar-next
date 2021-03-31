import React, { useEffect, useState } from 'react';

import { firebase, FirebaseState } from './Firebase';
import { useRecoilState } from 'recoil';
import { Nullable } from '../../../../types/util';

const useFirebaseAuth = (): {initialized: boolean, userId: Nullable<string>, userName: Nullable<string>} => {
  const [initialized, setInitialized] = useState(false);
  const [firebaseState, setFirebaseState] = useRecoilState<FirebaseState>(FirebaseState);
  useEffect(() => {
    try {
      firebase.auth().onAuthStateChanged(async user => {
        setInitialized(true);
        setFirebaseState({ userId: user?.uid ?? null, userName: user?.displayName ?? null });
      });
    } catch (e) {
      console.error('auth error: ', e);
    }
  }, []);
  return { initialized, userId: firebaseState.userId, userName: firebaseState.userName};
};

interface FirebaseAuthProps {
  readonly NotSignedIn: React.FC;
  readonly Loading: React.FC;
}

export const FirebaseAuth: React.FC<FirebaseAuthProps> = (
  {
    NotSignedIn,
    Loading
  }
): JSX.Element | null => {
  const { initialized, userId, userName } = useFirebaseAuth();
  if (!initialized) {
    return <Loading/>;
  } else if (!userId) {
    return <NotSignedIn/>;
  } else {
    return null;
  }
};

export const signInWithRedirect = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithRedirect(provider);
};

export const signOut = () => {
  return firebase.auth().signOut();
};
