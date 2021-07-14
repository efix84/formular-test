import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function decimalsValidator(min?: number, max?: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const decimals = parseInt(control.value)
    if(max !== undefined && decimals>max){
      return {
          tooLarge: {
            value: control.value
          }
      }
    }
    if(min !== undefined && decimals<min){
      return {
          tooSmall: {
            value: control.value
          }
      }
    }
    return null
  };
}
