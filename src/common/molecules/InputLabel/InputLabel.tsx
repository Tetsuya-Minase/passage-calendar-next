import React from 'react';
import { Label} from '../../atoms/label/Label';
import { Input } from '../../atoms/input/Input';
import { InputLabelProps } from './InputLabelTypes';

export const InputLabel = ({labelText, types, change, initialValue, placeHolder}: InputLabelProps) => <Label text={labelText} input={<Input types={types} change={change} initialValue={initialValue} placeHolder={placeHolder} />} />
