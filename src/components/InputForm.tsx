import React, { useCallback, useState } from 'react';
import { Button } from '../common/atoms/button/Button';
import { InputLabel } from '../common/molecules/InputLabel/InputLabel';
import { useDatabaseDocument } from '../common/functions/firebase/FirebaseDataBase';
import styled from 'styled-components';
import { Heading } from '../common/atoms/heading/Heading';
import { useRecoilState } from 'recoil';
import { formState } from '../common/store';

const Wrapper = styled.section`
  margin-top: 1rem;
`;

export const InputForm: React.FC = () => {
  const [value, setValue] = useState('');
  const [date, setDate] = useState('');
  const [state, setState] = useRecoilState(formState);
  const updateFormState = useCallback(() => {
    return [...state.list, { value, date }]
  }, [state, value, date]);
  const { updateFormValue } = useDatabaseDocument();
  return (
    <Wrapper>
      <Heading text="登録フォーム" level={1} position="left"/>
      <InputLabel labelText="内容: " types="text" change={(e) => setValue(e.target.value)}/>
      <InputLabel labelText="登録日: " types="date" change={(e) => setDate(e.target.value)}/>
      <Button text="登録" size="small" types="primary" position="bottom" click={() => {
        setState({ list: updateFormState() });
        updateFormValue({ list: updateFormState() });
      }}/>
    </Wrapper>
  );
}
