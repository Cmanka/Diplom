import { FieldValues } from 'react-hook-form';

export interface LoginFormValues extends FieldValues {
  email: string;
  password: string;
}
