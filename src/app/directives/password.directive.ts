import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function passwordValidator(length: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password: string = control.value
    let errors: ValidationErrors = {}
    if(!password || password.length<length){
      errors = {
        ...errors,
        tooShort: {
          value: control.value
        }
      }
    }
    if(!/[$&+,:;=?@#|'<>.^*()%!-]/.test(password)){
      errors = {
        ...errors,
        noSpecial: {
          value: control.value
        }
      }
    }
    if(!/[a-z]/.test(password)){
      errors = {
        ...errors,
        noLowerChar: {
          value: control.value
        }
      }
    }
    if(!/[A-Z]/.test(password)){
      errors = {
        ...errors,
        noUpperChar: {
          value: control.value
        }
      }
    }
    if(!/[0-9]/.test(password)){
      errors = {
        ...errors,
        noDigit: {
          value: control.value
        }
      }
    }
    return errors === {} ? null : errors
  };
}
