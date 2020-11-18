import React from 'react';
import { LabelProps } from './LabelTypes';
import { _Label } from './LabelStyles';

export const Label = ({text, input}: LabelProps) => <_Label>{text}{input ?? null}</_Label>
