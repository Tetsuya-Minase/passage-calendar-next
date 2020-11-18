import React from 'react';

export type ButtonProps = {
  text: string,
  click?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  size?: 'small' | 'large',
  types?: 'primary' | 'error' | 'warning',
  position?: 'bottom' | 'right'
};
