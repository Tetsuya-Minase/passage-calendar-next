import {differenceInDays, parseISO} from 'date-fns';

export const useCalculatePassage = (date: string) => `${differenceInDays(new Date(), parseISO(date))}`;
