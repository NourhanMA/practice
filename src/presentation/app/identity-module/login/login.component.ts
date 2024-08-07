import { Component } from '@angular/core';
import { UserLoginUseCase } from '../../../../domain/usecases/user-login.usecase';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor() {
    console.log(UserLoginUseCase);
  }
}
