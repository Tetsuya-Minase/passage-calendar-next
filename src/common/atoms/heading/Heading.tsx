import React from 'react';
import { HeadingProps } from './HeadingTypes';
import {getHeading} from './HeadingStyles';

export const Heading = ({text, level, position}: HeadingProps) => getHeading({text, level, position: {position}});
