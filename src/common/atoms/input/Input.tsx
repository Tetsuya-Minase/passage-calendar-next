import React from 'react';
import { InputProps } from './InputTypes';
import { _Input } from './InputStyles';

export const Input = ({types, change}: InputProps) => <_Input type={types} onChange={change}/>
