import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {
  PoMenuItem,
  PoMenuModule,
  PoPageModule,
} from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,

    PoMenuModule,
    PoPageModule,
    
    RouterOutlet
  ],
  template: `
    <div class="po-wrapper">
      <po-menu [p-menus]="menus"></po-menu>
      <po-page-default [p-title]="!isHome ? currentTitle : null">
        <router-outlet></router-outlet>
      </po-page-default>
    </div>
  `,
})
export class AppComponent {

  readonly menus: Array<PoMenuItem> = [
    {
      link: '/',
      label: 'Home',
      icon: 'an an-house',
      action: this.onClick.bind(this),
    },
    {
      link: 'usuarios',
      label: 'Usuários',
      icon: 'an an-user',
      action: this.onClick.bind(this),
    },
    {
      link: 'posts',
      label: 'Posts',
      icon: 'an an-database',
      action: this.onClick.bind(this),
    }
  ];
  public currentTitle: any = 'Home';
  public isHome: boolean = true;

  private onClick(evt: any) {
    this.currentTitle = evt.label;
    this.isHome = evt.label === 'Home';
  }
}
