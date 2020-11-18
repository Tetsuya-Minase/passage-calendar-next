import React from 'react';
import { _Button } from './ButtonStyle';
import { ButtonProps } from './ButtonTypes';

export const Button = ({size, types, text, position, click}: ButtonProps) => <_Button size={size} types={types} position={position} onClick={click}>{text}</_Button>
