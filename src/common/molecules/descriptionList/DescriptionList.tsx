import React from 'react';
import { Heading } from '../../atoms/heading/Heading';
import { Description, DescriptionList, DescriptionTerm, Wrapper } from './DescriptionListStyles';
import { useCalculatePassage } from './DescriptionUseCase';
import { useRecoilState } from 'recoil';
import { formState } from '../../store';

export const Dl: React.FC = () => {
  const [state, ] = useRecoilState(formState);
  return (
    <section>
      <Heading text="登録データ" level={1} position="center" />
      <Wrapper>
        <div>
          <DescriptionList>
            <DescriptionTerm>内容</DescriptionTerm>
            <DescriptionTerm>登録日</DescriptionTerm>
            <DescriptionTerm>経過日数</DescriptionTerm>
          </DescriptionList>
          {state.list.map(({ value, date }) => (
            <DescriptionList key={`${value}:${date}`}>
              <Description>{value}</Description>
              <Description>{date}</Description>
              <Description>{useCalculatePassage(date)}</Description>
            </DescriptionList>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};
