import React, { useEffect, useState } from 'react';

import { firebase, FirebaseContext } from './Firebase';
import { Nullable } from '../../../../types/util';

const useFirebaseAuth = () => {
  const [initialized, setInitialized] = useState(false);
  const [userId, setUserId] = useState<Nullable<string>>(null);
  const [userName, setUserName] = useState('');
  useEffect(() => {
    try {
      firebase.auth().onAuthStateChanged(async user => {
        setInitialized(true);
        setUserId(user?.uid || null);
        setUserName(user?.displayName || '');
      });
    } catch (e) {
      console.error('auth error: ', e);
    }
  }, []);

  return { initialized, userId, userName };
};

type FirebaseAuthProps = {
  NotSignedIn: React.FC;
  Loading: React.FC;
}

export const FirebaseAuth: React.FC<FirebaseAuthProps> = (
  {
    children,
    NotSignedIn,
    Loading
  }
): JSX.Element => {
  const { initialized, userId, userName } = useFirebaseAuth();
  if (!initialized) {
    return <Loading/>;
  } else if (!userId) {
    return <NotSignedIn/>;
  } else {
    return (
      <FirebaseContext.Provider
        value={{ userId, userName }}
        children={children}
      />
    );
  }
};

export const signInWithRedirect = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithRedirect(provider);
};

export const signOut = () => {
  return firebase.auth().signOut();
};
