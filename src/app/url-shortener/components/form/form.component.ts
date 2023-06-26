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

  constructor(private fb: FormBuilder) {}

  isValidField(field: string): boolean | null {
    return (
      this.shortenerForm.controls[field].errors &&
      this.shortenerForm.controls[field].touched
    );
  }

  onShortenUrl(): void {
    if (this.shortenerForm.invalid) {
      this.shortenerForm.markAllAsTouched();
      return;
    }

    console.log(this.shortenerForm.value);

    this.shortenerForm.reset();
  }
}
