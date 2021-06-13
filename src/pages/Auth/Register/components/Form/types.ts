import { FieldValues } from 'react-hook-form';

export interface RegisterFormValues extends FieldValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  location: string;
  position: string;
  organization: string;
}
