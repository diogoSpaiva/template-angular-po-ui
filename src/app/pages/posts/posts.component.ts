import { Component, OnInit } from '@angular/core';
import { PoBreadcrumbModule, PoTableColumn, PoTableModule } from '@po-ui/ng-components';
import { JsonplaceholderService } from '../../core/service/jsonplaceholder.service';

@Component({
  selector: 'app-posts',
  imports: [
    PoTableModule,
    PoBreadcrumbModule,
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent implements OnInit {
  columns: Array<PoTableColumn> = [
    { property: 'id', label: '#' },
    { property: 'title', label: 'Título' },
  ];
  items!: Array<any>;

  constructor(private transportService: JsonplaceholderService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.transportService.getPosts().subscribe((resp: any) => {
      console.log(resp);
      this.items = resp
    });
  }
}
