export interface FieldConfig {
  label: string;
  placeholder?: string;
  type: 'text' | 'dropdown' | 'checkbox';
  options?: string[];
  isEditing: boolean;
}
export const FIELD_CONFIGS: { [key: string]: FieldConfig } = {
    email: { label: 'Email', placeholder: 'Enter email', type: 'text', isEditing: false },
    mobile: { label: 'Mobile Number', placeholder: 'Enter mobile number', type: 'text', isEditing: false },
    gender: {
      label: 'Gender',
      type: 'dropdown',
      options: ['Male', 'Female', 'Other'],
      isEditing: false
    },
    agreeToTerms: {
      label: 'Agree to Terms',
      type: 'checkbox',
      isEditing: false
    }
  };