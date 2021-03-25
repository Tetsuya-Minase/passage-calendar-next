import React, { useCallback, useState } from 'react';
import { InputForm } from '../src/components/InputForm';
import { Dl } from '../src/common/molecules/descriptionList/DescriptionList';
import { FirebaseAuth, signInWithRedirect, signOut } from '../src/common/functions/firebase/FirebaseAuth';
import { CalendarComponent } from '../src/components/calendar/Calendar';
import { Button } from '../src/common/atoms/button/Button';
import styled from 'styled-components';
import { RecoilRoot } from 'recoil';

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
  return (
    <RecoilRoot>
      <Wrapper>
        <FirebaseAuth NotSignedIn={NotSignedIn} Loading={Loading}>
          <Button text="sign out" click={signOut} size='small'/>
          <InputForm/>
          <Dl/>
          <CalendarComponent/>
        </FirebaseAuth>
      </Wrapper>
    </RecoilRoot>
  );
};
