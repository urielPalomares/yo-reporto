import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { MessageService } from 'primeng/api';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AuthService } from '../../../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `],
    providers: [MessageService],
})
export class LoginComponent {

    valCheck: string[] = ['remember'];

    password!: string;
    user: any = {
        email: "demo@example.com",
        password: "demo",
      };

    constructor(private router: Router,
        public authService: AuthService,
        public layoutService: LayoutService,
        private messageService: MessageService) { }

    login() {
        this.authService.login(this.user).subscribe(
            (response) => {
              if (!response.token) {
                this.messageService.add({
                    severity: 'warn',
                    summary: 'Error',
                    detail: 'Usuario o contraseña son incorrectos, favor de intentar nuevamente',
                  });
              }
              this.authService.signIn(response.token);
              this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
              this.router.navigate(['/dashboard']);
            },
            (err: any) => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'Usuario o contraseña son incorrectos, favor de intentar nuevamente',
                  });
            }
          );
    }
}
