import { Component } from '@angular/core';
import { FieldType, FieldGroupTypeConfig } from '@ngx-formly/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'formly-field-custom-input',
  template: `
    <input [formControl]="fcName">

    <select [formControl]="fcProfession">
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  `,
})
export class FormlyFieldCustomInput extends FieldType<
  FieldGroupTypeConfig<any>
> {
  get fcName() {
    return this.formControl.controls['name'] as FormControl;
  }
  get fcProfession() {
    return this.formControl.controls['profession'] as FormControl;
  }
}
