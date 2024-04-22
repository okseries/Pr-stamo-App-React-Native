import {useState} from 'react';

export interface FormState {
  [key: string]: string;
}

export const UseForm = (
  initialForm: FormState = {},
): {
  formState: FormState;
  onInputChange: (name: string, value: string) => void;
  onResetForm: () => void;
} => {
  const [formState, setFormState] = useState<FormState>(initialForm);

  const onInputChange = (name: string, value: string) => {
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    formState,
    onInputChange,
    onResetForm,
  };
};
