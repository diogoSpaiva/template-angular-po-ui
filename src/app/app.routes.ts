import { Routes } from '@angular/router';
import { PoPageDynamicTableComponent } from '@po-ui/ng-templates';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then(c => c.HomeComponent),
  },
  {
    path: 'usuarios',
    loadComponent: () =>
      import('./pages/users/users.component').then(c => c.UsersComponent),
  },
  {
    path: 'usuarios/novo',
    loadComponent: () =>
      import('./pages/user-form/user-form.component').then(c => c.UserFormComponent),
  },
  {
    path: 'posts',
    loadComponent: () =>
      import('./pages/posts/posts.component').then(c => c.PostsComponent),
  },
  //{
  //  path: 'posts',
  //  component: PoPageDynamicTableComponent,
  //  data: {
  //    serviceApi: 'http://localhost:3000/v1/people', // endpoint dos dados
  //    serviceMetadataApi: 'http://localhost:3000/v1/metadata', // endpoint dos metadados utilizando o método HTTP Get
  //    serviceLoadApi: 'http://localhost:3000/load-metadata' // endpoint de customizações dos metadados utilizando o método HTTP Post
  //  }
  //},
  {
    path: '**',
    redirectTo: '',
  }
];
