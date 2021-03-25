import { atom } from 'recoil';

interface _FormValue {
  value: string,
  date: string
}
export type FormValue = Readonly<_FormValue>;

interface _FormState {
  list: FormValue[];
}
export type FormState = Readonly<_FormState>;

export const formState = atom<FormState>({
  key: 'FormState',
  default: {list: []}
});
