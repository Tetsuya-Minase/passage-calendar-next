import { createContext, Dispatch, SetStateAction, useContext} from 'react';

type _FormValue = {
  value: string,
  date: string
}
export type FormValue = Readonly<_FormValue>;

type _FormState = {
  list: FormValue[]
};
export type FormState = Readonly<_FormState>;

export const initialState: FormState = {
  list: []
};

export const FormStateContext = createContext<FormState>(initialState);
export const SetFormStateContext = createContext<Dispatch<SetStateAction<FormState>>>(() => {});
export const useFormStateContext = () => useContext(FormStateContext);
export const useSetFormStateContext = () => useContext(SetFormStateContext);
