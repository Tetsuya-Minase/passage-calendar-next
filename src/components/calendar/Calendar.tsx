import React, { useCallback, useEffect, useMemo } from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components';
import 'react-calendar/dist/Calendar.css';
import { useAllDocuments } from '../../common/functions/firebase/FirebaseDataBase';
import { Heading } from '../../common/atoms/heading/Heading';
import { useRecoilState } from 'recoil';
import { FormState, formState, FormValue } from '../../common/store';

const CalendarWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const CalendarComponent: React.FC = () => {
  const { document } = useAllDocuments();
  const [state, setState] = useRecoilState(formState);
  const documentValues = useMemo(() => {
    return Object.values(document || {});
  }, [document]);
  useEffect(() => {
    const initialFormState: FormState = {
      list: [...state.list, ...documentValues].reduce((list: FormValue[], formValue: FormValue) => {
        if (!list.map(item => `${item.value}${item.date}`).includes(`${formValue.value}${formValue.date}`)) {
          return [...list, formValue];
        }
        return list;
      }, [])
    };
    setState(initialFormState);
  }, [documentValues]);
  const tileContent = Object.fromEntries(state.list.map(({ date, value }) => [new Date(date).toDateString(), value]));
  const tileValue = useCallback(({ date }) => {
    const dateKey = date.toDateString();
    return tileContent[dateKey] ? <p>{tileContent[dateKey]}</p> : null;
  }, [tileContent]);
  return (
    <section>
      <Heading text="登録カレンダー" level={1} position="center"/>
      <CalendarWrapper><Calendar tileContent={tileValue} locale="ja-JP"/></CalendarWrapper>
    </section>
  );
};
