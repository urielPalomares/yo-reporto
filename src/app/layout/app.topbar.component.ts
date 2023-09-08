import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
    providers: [MessageService],
})
export class AppTopBarComponent {

    items!: MenuItem[];

    public get username() {
        return this.authService.getUsername();
    }

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(
        private router: Router,
        public layoutService: LayoutService,
        public authService: AuthService,
        private messageService: MessageService) {
        this.items = [
            {
                label: String(this.username),
                icon: 'pi pi-fw pi-user',
                items: [
                    {
                        label: 'Cerrar Sesion',
                        icon: 'pi pi-fw pi-power-off',
                        command: () => this.logout(),
                    }
                ]
            }
        ];
    }

    async logout() {
        await this.authService.logout();
          this.router.navigate(['/auth/login']);
    }
}
