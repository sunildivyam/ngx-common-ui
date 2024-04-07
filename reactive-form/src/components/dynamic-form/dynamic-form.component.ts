import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';
import {
  FormConfigGroup,
  FormConfigService,
  FormControlValue
} from '@annuadvent/ngx-core/helpers-forms';

@Component({
  selector: 'anu-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  providers: [FormConfigService]
})
export class DynamicFormComponent implements OnInit, OnChanges {
  @Input() value: any;
  @Input() params: FormConfigGroup;

  @Input() loading: boolean = false;

  /**
   * Save Button Label
   */
  @Input() saveBtnLabel: string = 'Save';

  /**
   * Cancel Button Label
   */
  @Input() cancelBtnLabel: string = 'Cancel';

  /**
   * Enable Save Button, if false, then a form can act as form group.
   */
  @Input() enableSaveBtn: boolean = true;

  /**
   * Enable Cancel Button, if false, then a form can act as form group.
   */
  @Input() enableCancelBtn: boolean = true;

  /**
   * Emit form value, when submit button is clicked.
   */
  @Output() actionBtnClicked = new EventEmitter<FormControlValue>();

  /**
   * Emit form value, when submit button is clicked.
   */
  @Output() submitClicked = new EventEmitter<any>();

  /**
   * Emit, when cancel button is clicked.
   */
  @Output() cancelClicked = new EventEmitter<void>();

  /**
   * Emit, when Value is changed.
   */
  @Output() changed = new EventEmitter<any>();

  /**
   * Emit, when Form Status is changed.
   */
  @Output() statusChanged = new EventEmitter<ValidationErrors>();

  /**
   * Emit, when Control Value is changed.
   */
  @Output() controlValueChanged = new EventEmitter<FormControlValue>();

  fg: FormGroup; // reactive form group (form)
  fcs = {}; // reactive form controls
  submitTried: boolean = false;

  constructor(
    private formConfigService: FormConfigService,
    private el: ElementRef
  ) {
    // Subscribe form
    this.formConfigService.form.subscribe((fg) => (this.fg = fg));

    // Subscribe controls
    this.formConfigService.controls.subscribe(
      (controls) => (this.fcs = controls)
    );

    // Subscribe form value change
    this.formConfigService.valueChanges.subscribe((value) =>
      this.changed.emit(value)
    );

    // Subscribe form status change
    this.formConfigService.statusChanges.subscribe((errors) =>
      this.statusChanged.emit(errors)
    );

    // Subscribe control value changes
    this.formConfigService.controlValueChanges.subscribe((value) =>
      this.controlValueChanged.emit(value)
    );
  }

  ngOnInit(): void {
    this.formConfigService.initForm(this.params, this.value);
  }

  ngOnChanges(changes: SimpleChanges): void {
    (changes.params && changes.value) ||
      (changes.params &&
        this.formConfigService.initForm(this.params, this.value));

    changes.value &&
      !changes.params &&
      this.formConfigService.patchValue(this.value);
  }

  public onSubmit(event: any): void {
    event.preventDefault();
    // Show all invalid fields' errors.
    this.fg.markAllAsTouched();
    this.submitTried = true;

    if (this.fg.valid) {
      this.submitClicked.emit(this.fg.getRawValue());
    } else {
      // Focus to the first errored field
      const erroredElements =
        this.el.nativeElement.querySelectorAll('form .ng-invalid');
      erroredElements &&
        erroredElements.length &&
        (erroredElements[0] as HTMLElement).focus();
    }
  }

  public onCancel(event: any): void {
    event.preventDefault();
    this.cancelClicked.emit();
  }

  public checkBoxChange(event, control) {
    event.preventDefault();
    const checked = event.target.checked;
    setTimeout(() => control.setValue(checked, { emitEvent: true }));
  }

  public checkBoxesChange(event, control) {
    // event.preventDefault();
    const checked = event.target.checked;
    const value = event.target.value;
    const controlValue = control.value || [];

    // Add value
    if (checked) {
      if (!controlValue.includes(value)) {
        controlValue.push(value);
      }
      setTimeout(() => control.setValue(controlValue, { emitEvent: true }));
    } else {
      // remove value
      setTimeout(() =>
        control.setValue(
          controlValue.filter((val) => val !== value),
          { emitEvent: true }
        )
      );
    }
  }

  public onActionBtn(event: any, key: string, control: AbstractControl): void {
    event.preventDefault();
    this.actionBtnClicked.emit({
      key,
      value: control?.value,
      control
    } as FormControlValue);
  }
}
