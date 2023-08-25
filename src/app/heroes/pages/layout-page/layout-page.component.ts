import { Component } from '@angular/core';
import { User } from 'src/app/auth/interfaces/user.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'heroes-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [],
})
export class LayoutPageComponent {
  constructor(private authService: AuthService) {}

  get user(): User | undefined {
    return this.authService.currentUser;
  }

  public sidebarItems = [
    {
      label: 'Listado',
      icon: 'label',
      to: './list',
    },
    {
      label: 'Añadir',
      icon: 'add',
      to: './new-hero',
    },
    {
      label: 'Buscar',
      icon: 'search',
      to: './search',
    },
  ];

  onLogout(): void {
    this.authService.logout();
  }
}
