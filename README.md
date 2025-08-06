# Projeto Angular com PO‑UI

## 📌 Pré‑requisitos

- Node.js **versão 18.19.x ou superior**
- Angular CLI (versão compatível com o projeto)
- Gerenciador de pacotes: npm ou yarn

---

## 1. Iniciar o projeto Angular

```bash
# (Opcional) Verificar versão do Node
node --version

# Instalar Angular CLI globalmente, se ainda não tiver
npm install -g @angular/cli

# Criar novo projeto Angular (ex: nome “my‑app”)
ng new my-app
# Responder “Yes” para roteamento; escolher CSS ou SCSS conforme desejo

cd my-app
```

---

## 2. Instalar e configurar o PO‑UI

```bash
# Instala os componentes principais do PO‑UI
ng add @po-ui/ng-components

# Responder “Yes” para criação do menu lateral etc.

# (Opcional) Instalar templates padrões
ng add @po-ui/ng-templates
```

---

## 3. Criar páginas base usando templates PO‑UI

```bash
# Gerar página de lista dinâmica
ng generate @po-ui/ng-templates:po-page-dynamic-table --name TablePage

# Gerar página de edição dinâmica
ng generate @po-ui/ng-templates:po-page-dynamic-edit --name EditPage
```

---

## 4. Configurar roteamento

```ts
import { TablePageComponent } from './table-page/table-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';

const routes: Routes = [
  { path: 'table', component: TablePageComponent },
  { path: 'new', component: EditPageComponent },
  { path: 'edit/:id', component: EditPageComponent },
  { path: '', redirectTo: 'table', pathMatch: 'full' }
];
```

---

## 5. Ajustar componentes e serviços

### TablePageComponent

```ts
import { PoPageDynamicTableActions, PoPageDynamicTableField } from '@po-ui/ng-templates';
import { environment } from '../environments/environment';

readonly apiService = environment.serviceUrl;

readonly actions: PoPageDynamicTableActions = {
  new: '/new',
  edit: '/edit/:id',
  remove: true,
};

readonly fields: PoPageDynamicTableField[] = [
  { property: 'id', label: 'ID', key: true },
  { property: 'nome', label: 'Nome' },
  { property: 'descricao', label: 'Descrição' }
];
```

### EditPageComponent

```ts
import { PoPageDynamicEditActions, PoPageDynamicEditField } from '@po-ui/ng-templates';
import { environment } from '../environments/environment';

readonly apiService = environment.serviceUrl;

readonly fields: PoPageDynamicEditField[] = [
  { property: 'id', label: 'ID', key: true, visible: false },
  { property: 'nome', label: 'Nome' },
  { property: 'descricao', label: 'Descrição' }
];

readonly actions: PoPageDynamicEditActions = {
  save: '/table',
  saveNew: '/new'
};
```

---

## 6. Configuração do ambiente

```ts
// src/environments/environment.ts
export const environment = {
  production: false,
  serviceUrl: 'http://localhost:3000/api/minha-entidade'
};
```

---

## 7. Executar a aplicação

```bash
# Iniciar frontend Angular
ng serve
```

Depois, acesse `http://localhost:4200` e navegue até a rota `/table`.

---

## 8. Pontos extras

- Adicionar mais componentes do PO‑UI (charts, datepickers, layouts, etc.)
- Estilização com temas personalizados
- Integração com testes unitários e end-to-end

---

## 📚 Referências

- Guia PO‑UI: https://po-ui.io/guides/getting-started