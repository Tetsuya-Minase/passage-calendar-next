import React, { useCallback, useState } from 'react';
import { InputForm } from './components/InputForm';
import { Dl } from './common/molecules/descriptionList/DescriptionList';
import { FirebaseAuth, signInWithRedirect, signOut } from './common/functions/firebase/FirebaseAuth';
import { CalendarComponent } from './components/calendar/Calendar';
import { FormStateContext, SetFormStateContext, initialState } from './common/context/FormStateContext';
import { Button } from './common/atoms/button/Button';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0.5rem 1rem;
`;

export default function Index() {
  const NotSignedIn = useCallback(() => {
    return <Button text="sign in" click={() => signInWithRedirect()} size='small'/>;
  }, []);
  const Loading = useCallback(() => {
    return <div>loading now....</div>;
  }, []);
  const [formState, setFormState] = useState(initialState);
  return (
    <Wrapper>
      {/*<FirebaseAuth NotSignedIn={NotSignedIn} Loading={Loading}>*/}
        <Button text="sign out" click={signOut} size='small'/>
        <FormStateContext.Provider value={formState}>
          <SetFormStateContext.Provider value={setFormState}>
            <InputForm/>
            <Dl/>
            <CalendarComponent/>
          </SetFormStateContext.Provider>
        </FormStateContext.Provider>
      {/*</FirebaseAuth>*/}
    </Wrapper>
  );
};
