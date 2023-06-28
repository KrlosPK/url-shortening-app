import {
  Component,
  EventEmitter,
  Output,
  OnChanges,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Url } from '../../interfaces/url.interface';
import { UrlService } from '../../services/url.service';

@Component({
  selector: 'url-shortener-form',
  templateUrl: './form.component.html',
  styles: [],
})
export class FormComponent {
  @ViewChild('urlInputRef', { static: false })
  public urlInput!: ElementRef;
  @Output()
  public shortenUrl = new EventEmitter<Url>();

  public shortenerForm: FormGroup = this.fb.group({
    url: [
      '',
      [
        Validators.required,
        Validators.pattern(
          /^(http|https):\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?$/
        ),
      ],
    ],
  });

  constructor(private fb: FormBuilder, private urlService: UrlService) {}

  convertToShortUrl(url: string) {
    return this.urlService.shortenUrl(url).subscribe((url) => {
      this.shortenUrl.emit({
        url: url.result.original_link,
        buttonText: 'Copy',
        shortLink: url.result.short_link2,
      });
    });
  }

  getFieldError(field: string): string | null {
    if (!this.shortenerForm.controls[field]) return null;

    const errors = this.shortenerForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      if (key === 'required') return 'Please add a link';
      if (key === 'pattern') return 'Url is Invalid';
    }

    return null;
  }

  isValidField(field: string): boolean | null {
    return (
      this.shortenerForm.controls[field].errors &&
      this.shortenerForm.controls[field].touched
    );
  }

  onShortenUrl(): void {
    if (this.shortenerForm.invalid) {
      this.urlInput.nativeElement.focus();
      this.shortenerForm.markAllAsTouched();
      return;
    }

    this.convertToShortUrl(this.shortenerForm.controls['url'].value);

    this.shortenerForm.reset();
  }
}
