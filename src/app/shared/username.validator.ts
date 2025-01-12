import { AbstractControl } from "@angular/forms";

export function forbiddenNameValidator(control: AbstractControl) {
  const forbidden = /admin/.test(control.value);
  return forbidden ? {'forbiddenName': {value: control.value}}: null;
}