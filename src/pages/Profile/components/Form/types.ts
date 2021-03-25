import { FieldValues } from 'react-hook-form';

export interface ProfileFormValues extends FieldValues {
  firstName: string;
  lastName: string;
  file: FileList;
}
