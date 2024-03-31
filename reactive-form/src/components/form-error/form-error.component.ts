import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { FormError } from '../../interfaces/form-error.interface';
import { ObjectToArrayPipe } from '@annuadvent/ngx-core/utils';

/**
 * FormError component shows one or more error messages for the form field, if it has validation errors.
 */
@Component({
  selector: 'anu-form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.scss'],
})
export class FormErrorComponent implements OnInit, OnChanges {
  @Input() errors: ValidationErrors = null;

  messages: Array<string> = [];

  constructor(private objectToArrayPipe: ObjectToArrayPipe) {}
  ngOnInit(): void {
    this.initMessages();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.initMessages();
  }

  private initMessages(): void {
    if (!this.errors) {
      this.messages = [];
    } else {
      this.messages = this.objectToArrayPipe
        .transform(this.errors)
        .map((error) => this.getMessage(error));
    }
  }

  public getMessage(err: any): string {
    const error = err as FormError;

    let msg = '';
    switch (error.key) {
      case 'min':
        msg = `required minimum value is ${error.value.min}, while entered value is ${error.value.actual}.`;
        break;
      case 'max':
        msg = `required maximum value is ${error.value.max}, while entered value is ${error.value.actual}.`;
        break;
      case 'required':
        msg = 'required.';
        break;
      case 'requiredtrue':
        msg = 'required.';
        break;
      case 'email':
        msg = 'Invalid email format.';
        break;
      case 'minlength':
        msg = `required minimum length is ${error.value.requiredLength}, while entered length is ${error.value.actualLength}.`;
        break;
      case 'maxlength':
        msg = `required maximum length is ${error.value.requiredLength}, while entered length is ${error.value.actualLength}.`;
        break;
      case 'pattern':
        msg = `required pattern is ${error.value.requiredPattern}, while entered pattern is ${error.value.actualValue}.`;
        break;
      default:
        msg = error.value.message || '';
    }

    return msg;
  }
}
