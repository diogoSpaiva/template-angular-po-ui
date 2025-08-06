import { Component } from '@angular/core';
import { PoInfoModule, PoWidgetModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-home',
  imports: [PoWidgetModule, PoInfoModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public infoList: any = [
    {
      label: 'Node.js',
      value: 'Ambiente de execução JavaScript no lado do servidor, baseado no motor V8 do Chrome.',
      urlPath: 'https://nodejs.org/en/docs'
    },
    {
      label: 'Angular',
      value: 'Framework TypeScript para criação de aplicações web SPA robustas e escaláveis.',
      urlPath: 'https://angular.io/docs'
    },
    {
      label: 'PO-UI',
      value: 'Biblioteca de componentes para Angular, desenvolvida pela TOTVS, com foco em produtividade e design padronizado.',
      urlPath: 'https://po-ui.io/documentation'
    }
  ]

  openLink(url: string) {
    window.open(url, '_blank', 'noopener,noreferrer')
  }
}
