### a) Responsabilidade do `package.json`

O `package.json` é um arquivo fundamental em projetos Node.js e Angular. Ele define metadados do projeto, como nome, versão, autor, e é crucial para gerenciar as dependências do projeto. Lista todas as bibliotecas necessárias para o projeto funcionar e permite a execução de scripts definidos para tarefas como testes, builds e deploys.

### b) Responsabilidade do `angular.json`

O `angular.json` é um arquivo de configuração específico do Angular. Ele contém configurações e padrões para projetos e suas respectivas aplicações e bibliotecas, incluindo detalhes sobre build, servidores de desenvolvimento, testes e mais.

### c) Finalidade da Tag `<router-outlet>`

A tag `<router-outlet></router-outlet>` é usada no Angular para marcar o local no template onde o componente correspondente à rota ativa deve ser exibido. Ela é essencial para o sistema de roteamento do Angular.

### d) Diferença entre Eager-load e Lazy-load nas Rotas

- **Declaração 1 (Eager-load)**: O componente `EntryFormComponent` é carregado imediatamente com o módulo principal.
- **Declaração 2 (Lazy-load)**: O módulo `EntriesModule` é carregado apenas quando a rota 'entries' é acessada, o que melhora o desempenho inicial da aplicação.

### e) Importância da Componentização

A componentização permite reusar código, facilita a manutenção e melhora a organização do projeto. Cada componente encapsula sua própria lógica, estilo e template, tornando o desenvolvimento mais modular e escalável.

### f) Componentes Reaproveitáveis Criados

- `DigimonListComponent`: Exibe a lista de Digimons.
- `DigimonDetailComponent`: Mostra detalhes de um Digimon específico.
- `SearchComponent`: Permite filtrar Digimons por nome ou nível.
- `ModalComponent`: Componente genérico para modais.

### g) Funcionalidade do `@Input() items`

No `bread-crumb.component.ts`, `@Input() items: Array<BreadCrumbItem> = [];` permite que o componente receba uma lista de itens de navegação (breadcrumbs), definidos pelo componente pai, para exibição.

### h) Finalidade da Anotação `@Output()`

A anotação `@Output()` é usada para criar eventos customizados que podem ser emitidos pelo componente e capturados pelos componentes pais. É essencial para a comunicação de dados do filho para o pai.

### i) Requisitos dos Níveis: core, pages e shared

- **Core**: Contém serviços essenciais e singulares, como autenticação e interceptores HTTP.
- **Pages**: Abriga os componentes relacionados às páginas específicas da aplicação.
- **Shared**: Inclui módulos, componentes, pipes e diretivas que são compartilhados entre diferentes partes do aplicativo.

### j) Papel do Arquivo `in-memory-database.ts`

Este arquivo simula um backend, fornecendo um banco de dados em memória para o desenvolvimento e teste. Permite simular operações CRUD sem necessidade de um servidor backend real.

### k) Métodos e Propriedades do `FormBuilder`

- `group`: Cria um novo `FormGroup`.
- `control`: Cria um novo `FormControl`.
- `array`: Cria um novo `FormArray`.
- `patchValue`: Atualiza parcialmente os valores do formulário.
- `reset`: Reseta os valores do formulário.
- Propriedades: `value`, `valid`, `invalid`, `pristine`, `dirty`, etc.

### l) Funcionamento da Sentença `if (this.currentAction == "edit")`

Essa sentença verifica se a ação atual é "edit". Se for, carrega um `Lancamento` pelo ID e preenche o formulário com seus dados. É uma lógica comum em formulários de edição.

### m) `export class EntryFormComponent extends BaseResourceFormComponent<Entry>`

Esta linha refere-se à **herança**. `EntryFormComponent` estende `BaseResourceFormComponent`, herdando suas propried

ades e métodos.

### n) `ngOnInit() { this.loadCategories(); super.ngOnInit(); }`

Esta linha também exemplifica **herança**, onde `ngOnInit` de `EntryFormComponent` chama um método próprio e depois o método `ngOnInit` da classe base.

### o) `@NgModule({ providers: [ EntryService ] })`

Esta linha refere-se à **injeção de dependências**. Ela registra `EntryService` como um provedor no módulo, permitindo que ele seja injetado e usado em outros componentes e serviços.
