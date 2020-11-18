import React from 'react';

export type InputProps = {
  types: 'text' | 'password' | 'date',
  initialValue?: string,
  placeHolder?: string,
  change?: (event: React.ChangeEvent<HTMLInputElement>) => void
}
