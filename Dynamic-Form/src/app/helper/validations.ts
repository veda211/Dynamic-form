import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function customEmailValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(control.value)) {
        return { invalidEmail: true };
      }
      return null;  
    };
    
}
export function customMobileValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const mobilePattern = /^[0-9]{10}$/;
  
      if (control.value && !mobilePattern.test(control.value)) {
        return { invalidMobile: true };
      }
      return null;
    };
  }