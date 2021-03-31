
import { firebase, FirebaseStateUserId } from './Firebase';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { FormState, FormValue } from '../../store';
import { useRecoilValue } from 'recoil';

function useDocRef() {
  const userId = useRecoilValue(FirebaseStateUserId);
  return useMemo((): firebase.database.Reference => {
    return firebase.database().ref(`/${userId}`);
  }, [userId]);
};
function useFetchDocument<T>(ref: firebase.database.Reference) {
  const [document, setDocument] = useState<T>();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let mounted = true;
    ref.on('value', snapshot => {
      if (!mounted) {
        return;
      }
      if (snapshot && snapshot.val()) {
        setDocument(snapshot.val());
      }
      setLoaded(true);
    });
    return () => {
      ref.off();
      mounted = false;
    };
  }, [ref]);

  return { document, loaded };
}

export const useAllDocuments = () => {
  const ref = useDocRef();
  return useFetchDocument<{ [key: string]: FormValue }>(ref);
};

function useUpdateDocument<T = any>(ref: firebase.database.Reference) {
  const [pending, setPending] = useState(false);
  const timerRef = useRef<any>(undefined);
  const mountedRef = useRef<boolean>(false);
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const updateDocument = useCallback(
    (document: T) => {
      if (timerRef.current !== undefined) {
        clearTimeout(timerRef.current);
      }

      timerRef.current = setTimeout(() => {
        if (!mountedRef.current) {
          return;
        }
        setPending(true);
        ref.set(document).then(() => {
          setPending(false);
        }).catch(e => {
          console.error('update error: ', e);
        });
        timerRef.current = undefined;
      }, 500);
    },
    [ref]
  );

  return { pending, updateDocument };
}
export const useDatabaseDocument = () => {
  const ref = useDocRef();
  const { updateDocument, pending } = useUpdateDocument<{ [key: string]: FormValue }>(ref);
  const updateFormValue = useCallback(
    (registerData: FormState) => {
      const registerObject = registerData.list.reduce((result: {[key: string]: FormValue}, current, index) => {
        return {...result, ...{[index.toString()]: current}}
      }, {});
      updateDocument(registerObject);
    },
    [updateDocument]
  );

  return { pending, updateFormValue };
};
