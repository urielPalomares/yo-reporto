import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UsersService } from '../../../services/users.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
    `
      :host ::ng-deep .pi-eye,
      :host ::ng-deep .pi-eye-slash {
        transform: scale(1.6);
        margin-right: 1rem;
        color: var(--primary-color) !important;
      }
    `,
  ],
  providers: [MessageService],
})
export class RegisterComponent {
  valCheck: string[] = ['remember'];

  password!: string;
  user: any = {
    name: null,
    surname: null,
    email: null,
    password: null,
  };

  constructor(
    private router: Router,
    public usersService: UsersService,
    public layoutService: LayoutService,
    private messageService: MessageService
  ) {}

  register() {
    if (!this.user.name || !this.user.surname || !this.user.email || !this.user.password) {
      return this.messageService.add({
        severity: 'warn',
        summary: 'Error',
        detail: 'Favor de completar los datos para poder continuar',
      });
    }
    this.usersService.create(this.user).subscribe(
      (response) => {
        this.usersService.signIn(response);
        this.messageService.add({
          severity: 'success',
          summary: 'Felicidades',
          detail: 'Su registro se creo correctamente',
          life: 3000,
        });
        this.router.navigate(['/dashboard']);
      },
      (err: any) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail:
            'Tu registro tuvo un problema inesperado, favor de intentar nuevamente',
        });
      }
    );
  }
}
