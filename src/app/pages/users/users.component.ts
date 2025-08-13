import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PoBreadcrumbModule, PoButtonModule, PoInfoModule, PoTableColumn, PoTableModule, PoTagModule, PoTagType } from '@po-ui/ng-components';
import { JsonplaceholderService } from '../../core/service/jsonplaceholder.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,

    PoTagModule,
    PoInfoModule,
    PoTableModule,
    PoButtonModule,
    PoBreadcrumbModule,
  ],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public columns: Array<PoTableColumn> = [
    { property: 'id', label: '#' },
    { property: 'name', label: 'Nome' },
    { property: 'email', label: 'E-mail' },
    { property: 'phone', label: 'Telefone' },
    {
      property: 'id',
      type: 'columnTemplate',
      label: 'Ações',
      sortable: false
    }
  ];

  public items: Array<any> = [];
  public isLoading = true;
  public action = 'id';

  public PoTagType = PoTagType;

  public itemsTodos: Array<any> = [];
  public usersIds: Array<number> = [];
  public columnsTodos: Array<PoTableColumn> = [
    { property: 'id', label: '#' },
    { property: 'userId', label: 'Usuário' },
    { property: 'title', label: 'Título' },
    {
      property: 'completed',
      type: 'columnTemplate',
      label: 'Status',
    }
  ];

  constructor(
    private router: Router,
    private transportService: JsonplaceholderService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.isLoading = true;
    this.transportService.getUsers().subscribe({
      next: (resp: any) => {
        this.items = resp;
        this.isLoading = false;
      },
      error: () => this.isLoading = false
    });
  }

  changeOptions(evt: any, add: boolean) {
    this.usersIds = add
      ? [...this.usersIds, evt.id]
      : this.usersIds.filter(id => id !== evt.id);
    console.log(this.usersIds);

    this.getTodos();
  }

  goToPosts(id: any) {
    this.router.navigate(
      ['posts'],
      { queryParams: { userId: id } }
    );
  }

  goToDocumentation(id: any) {
    alert(id)
    //this.router.navigate([id || '/']);
  }

  getTodos() {
    this.transportService.getTodos(this.usersIds).subscribe({
      next: (resp: any) => {
        this.itemsTodos = resp;
      }
    })
  }
}
