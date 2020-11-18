import { InputProps } from '../../atoms/input/InputTypes';

export type InputLabelProps = {
  labelText: string,
  types: InputProps['types'],
  initialValue?: string,
  placeHolder?: string,
  change?: InputProps['change']
}
