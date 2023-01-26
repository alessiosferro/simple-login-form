import {Component, Input} from "@angular/core";
import {ControlContainer, FormsModule, NgForm} from "@angular/forms";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-input-text',
  styles: [`
    .form-group {
      display: flex;
      flex-flow: column nowrap;
      gap: 6px;

      &__label {
        font-weight: bold;
        font-size: 14px;
        text-transform: uppercase;
      }

      &__control {
        width: 100%;
        padding: 6px;
        font-size: 16px;
        border: 1px solid lightgray;

        &:focus {
          outline: none;
          box-shadow: 0 0 3px 1px rgba(dodgerblue, .8);
        }

        &--invalid {
          border-color: red;

          &:focus {
            outline: none;
            box-shadow: 0 0 3px 1px rgba(red, .8);
          }
        }
      }
    }

    .error-text {
      color: red;
    }
  `],
  template: `
    <div class="form-group">
      <label class="form-group__label"
             [for]="controlId"
      >{{ controlLabel }}</label>

      <input #control="ngModel"
             class="form-group__control"
             [class.form-group__control--invalid]="control.touched && control.invalid"
             ngModel
             [email]="controlType === 'email'"
             [id]="controlId"
             [required]="controlRequired"
             [name]="controlName"
             [minlength]="controlMinLength || null"
             [maxlength]="controlMaxLength || null"
             [type]="controlType"
      />

      <ng-container *ngIf="control.touched && control.invalid">
        <small class="error-text" *ngIf="control.errors?.['email']">Inserire un'email valida.</small>
        <small class="error-text" *ngIf="control.errors?.['required']">Campo obbligatorio.</small>
        <small class="error-text" *ngIf="control.errors?.['minlength']">È richiesta una lunghezza di {{ controlMinLength }} caratteri (attuali: {{ control.value.length }})</small>
      </ng-container>
    </div>
  `,
  standalone: true,
  imports: [FormsModule, CommonModule],
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class InputTextComponent {
  @Input() controlLabel!: string;

  @Input() controlType: 'text' | 'password' | 'email' = 'text';

  @Input() controlId!: string;

  @Input() controlName!: string;

  @Input() controlRequired = false;

  @Input() controlMinLength!: number;

  @Input() controlMaxLength!: number;

}
