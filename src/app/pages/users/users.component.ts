import { Component, OnInit } from '@angular/core';
import { PoBreadcrumbModule, PoTableColumn, PoTableModule } from '@po-ui/ng-components';
import { JsonplaceholderService } from '../../core/service/jsonplaceholder.service';

@Component({
  selector: 'app-users',
  imports: [
    PoTableModule,
    PoBreadcrumbModule,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
  columns: Array<PoTableColumn> = [
    { property: 'id', label: '#' },
    { property: 'name', label: 'Nome' },
    { property: 'email', label: 'E-mail' },
    { property: 'phone', label: 'Telefone' },
  ];
  items!: Array<any>;

  constructor(private transportService: JsonplaceholderService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.transportService.getUsers().subscribe((resp: any) => {
      console.log(resp);
      this.items = resp
    });
  }
}
