export interface FormErrorValue {
  min?: number;
  max?: number;
  actual?: number;
  requiredLength?: number;
  actualLength?: number;
  requiredPattern?: string;
  actualValue?: string;
  message?: string;
}
export interface FormError {
  key: string;
  value: FormErrorValue;
}
