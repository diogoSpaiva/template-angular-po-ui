import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PoBreadcrumbModule, PoTableColumn, PoTableModule } from '@po-ui/ng-components';
import { JsonplaceholderService } from '../../core/service/jsonplaceholder.service';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    PoTableModule,
    PoBreadcrumbModule,
  ],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  columns: Array<PoTableColumn> = [
    { property: 'id', label: '#' },
    { property: 'title', label: 'Título' },
    { property: 'userId', label: 'Usuário' },
  ];
  items!: Array<any>;

  constructor(
    private route: ActivatedRoute,
    private transportService: JsonplaceholderService
  ) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      const userId = params.get('userId');
      this.getPosts(userId ? +userId : undefined);
    });
  }

  getPosts(userId?: number) {
    this.transportService.getPosts(userId).subscribe((resp: any) => {
      this.items = resp;
    });
  }
}
