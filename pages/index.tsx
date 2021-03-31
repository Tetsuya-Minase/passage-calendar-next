import React from 'react';
import { InputForm } from '../src/components/InputForm';
import { Dl } from '../src/common/molecules/descriptionList/DescriptionList';
import { FirebaseAuth } from '../src/common/functions/firebase/FirebaseAuth';
import { CalendarComponent } from '../src/components/calendar/Calendar';
import styled from 'styled-components';
import { RecoilRoot } from 'recoil';
import { Loading, Login, Logout } from '../src/common/atoms/login/Login';

const Wrapper = styled.div`
  padding: 0.5rem 1rem;
`;

export default function Index() {
  return (
    <RecoilRoot>
      <Wrapper>
        <FirebaseAuth Login={Login()} Loading={Loading()} Logout={Logout()} />
        <InputForm/>
        <Dl/>
        <CalendarComponent/>
      </Wrapper>
    </RecoilRoot>
  );
};
