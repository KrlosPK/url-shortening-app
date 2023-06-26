import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'url-shortener-form',
  templateUrl: './form.component.html',
  styles: [],
})
export class FormComponent {
  public shortenerForm: FormGroup = this.fb.group({
    url: ['', Validators.required],
  });
  public isFormInvalid: string = '';

  constructor(private fb: FormBuilder) {}

  onInvalidForm(): boolean {
    if (this.shortenerForm.touched) {
      setTimeout(() => {
        this.isFormInvalid = 'red';
      }, 0);

      return this.shortenerForm.invalid;
    }
    this.isFormInvalid = 'transparent';
    return false;
  }

  onShortenUrl(): void {
    if (this.shortenerForm.invalid) {
      this.shortenerForm.markAllAsTouched();
      return;
    }

    console.log(this.shortenerForm.value);
  }
}
