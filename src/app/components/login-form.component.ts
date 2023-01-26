import {Component} from "@angular/core";
import {FormsModule, NgForm} from "@angular/forms";
import {InputTextComponent} from "./input-text.component";

@Component({
  selector: 'app-login-form',
  styles: [`
    .login-form {
      display: flex;
      flex-flow: column nowrap;
      gap: 24px;
    }
  `],
  template: `
    <form #form="ngForm" class="login-form" (ngSubmit)="submitHandler(form)">
      <app-input-text controlLabel="Email"
                      controlName="email"
                      controlType="email"
                      controlId="user-email"
                      [controlRequired]="true"
      ></app-input-text>

      <app-input-text controlLabel="Password"
                      controlName="password"
                      controlType="password"
                      controlId="user-password"
                      [controlMinLength]="5"
                      [controlMaxLength]="12"
                      [controlRequired]="true"
      ></app-input-text>

      <button>Submit</button>
    </form>
  `,
  imports: [FormsModule, InputTextComponent],
  standalone: true
})
export class LoginFormComponent {

  submitHandler(form: NgForm): void {
    if (form.invalid) return;

    console.log(form.value);
  }
}
