import React, { useState } from 'react';
import styled from 'styled-components';
import { Optional } from '../../types/util';
const Wrapper = styled.section`
  margin-top: 1rem;
`;

export const InputForm: React.FC = () => {
  const [value, setValue] = useState<Optional<string>>(undefined);
  const [date, setDate] = useState<Optional<string>>(undefined);
  
}
