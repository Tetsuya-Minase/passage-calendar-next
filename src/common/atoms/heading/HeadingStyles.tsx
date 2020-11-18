import React from 'react';
import styled, {css} from 'styled-components';
import { HeadingProps } from './HeadingTypes';
import { Nullable } from '../../../../types/util';

const Level1 = styled.h1<Pick<HeadingProps, 'position'>>`
  font-size: 2.4rem;
  ${(position) => getPosition(position)}
`;
const Level2 = styled.h1<Pick<HeadingProps, 'position'>>`
  font-size: 2rem;
  ${(position) => getPosition(position)}
`;
const Level3 = styled.h1<Pick<HeadingProps, 'position'>>`
  font-size: 1.8rem;
  ${(position) => getPosition(position)}
`;

const getPosition = ({ position }: Pick<HeadingProps, 'position'>) => {
  switch (position) {
    case 'left':
      return css`text-align: left;`;
    case 'center':
      return css`text-align: center;`;
    case 'right':
      return css`text-align: right;`;
  }
}

export const getHeading = ({text, level, position: {position}}: { text: string, level: number, position: Pick<HeadingProps,'position'> }): Nullable<JSX.Element> => {
  switch(level) {
    case 1:
      return <Level1 position={position}>{text}</Level1>;
    case 2:
      return <Level2 position={position}>{text}</Level2>;
    case 3:
      return <Level3 position={position}>{text}</Level3>;
    default:
      return null;
  }
}
