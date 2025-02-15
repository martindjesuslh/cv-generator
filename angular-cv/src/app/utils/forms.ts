import type { AbstractControl, FormGroup } from '@angular/forms';

interface Data {
  obj: Record<string, string>;
  form: FormGroup;
}

type TransportDataDirection = 'obj' | 'form';

const ERROR_MESSAGES = {
  required: 'This field is required.',
  email: 'Please enter a valid email address.',
  minlength: (length: number) => `Must be at least ${length} characters long.`,
  maxlength: (length: number) => `Cannot exceed ${length} characters.`,
  min: (value: number) => `Value must be greater than or equal to ${value}.`,
  max: (value: number) => `Value must be less than or equal to ${value}.`,
  pattern: 'The entered format is invalid.',
};

export const getErrorMessage = (control: AbstractControl | null) => {
  if (!control || !control.errors || !control.touched) return null;

  if (control.errors['required']) return ERROR_MESSAGES.required;

  if (control.errors['email']) return ERROR_MESSAGES.email;

  if (control.errors['pattern']) return ERROR_MESSAGES.pattern;

  if (control.errors['minlength'])
    return ERROR_MESSAGES.minlength(control.errors['minlength']?.requiredLength);

  if (control.errors['maxlength'])
    return ERROR_MESSAGES.maxlength(control.errors['maxlength']?.requiredLength);

  if (control.errors['min']) return ERROR_MESSAGES.min(control.errors['min']?.min);

  if (control.errors['max']) return ERROR_MESSAGES.max(control.errors['max']?.max);

  return null;
};

export const dataTransferForm = (data: Data, from: TransportDataDirection) => {
  let fromTemp = { ...data.form.value };
  let objTemp = { ...data.obj };

  for (const k of Object.keys(objTemp))
    if (from === 'obj') fromTemp[k] = data.obj[k];
    else objTemp[k] = fromTemp[k];

  if (from === 'obj') {
    data.form.patchValue(fromTemp);
    data.form.updateValueAndValidity();
  }

  return objTemp;
};
