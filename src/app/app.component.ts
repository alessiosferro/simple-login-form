import { Component } from '@angular/core';
import {LoginFormComponent} from "./components/login-form.component";

@Component({
  selector: 'app-root',
  styles: [`
    .container {
      width: 50%;
      max-width: 480px;
      margin: 30px auto 0;
    }
  `],
  template: `
    <div class="container">
      <h1>Login</h1>

      <app-login-form></app-login-form>
    </div>
  `,
  standalone: true,
  imports: [LoginFormComponent]
})
export class AppComponent {
}
