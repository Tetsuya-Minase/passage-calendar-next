import {differenceInDays, parseISO} from 'date-fns';
import { useMemo } from 'react';

export const useCalculatePassage = (date: string) => useMemo(() => `${differenceInDays(new Date(), parseISO(date))}`, [date]);
