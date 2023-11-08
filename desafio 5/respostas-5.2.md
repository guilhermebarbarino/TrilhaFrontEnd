## A) Sobre Componentes:

I. **O que é um componente em aplicações Angular?**

   Um componente em aplicações Angular é uma parte fundamental da estrutura da aplicação que encapsula uma parte específica da interface do usuário e a lógica relacionada a essa parte. Os componentes são reutilizáveis, autocontidos e podem ser compostos para criar interfaces de usuário complexas.

II. **Do que um componente é composto?**

   Um componente em Angular é composto por três partes principais: uma classe que contém a lógica do componente, um modelo (template) que define a estrutura HTML do componente e metadados decorados com o `@Component` que fornecem informações sobre o componente, como seu seletor, estilos e URL do modelo.

III. **Qual é o comando utilizado para criar um componente utilizando Angular CLI?**

   Para criar um componente utilizando o Angular CLI, você pode usar o seguinte comando:

   ```
   ng generate component nome-do-componente
   ```

IV. **Qual a importância da reutilização de componentes?**

   A reutilização de componentes é importante porque ajuda a manter o código limpo, modular e facilita a manutenção. Componentes reutilizáveis podem ser usados em várias partes da aplicação, economizando tempo e esforço na criação de funcionalidades semelhantes.

V. **Qual a funcionalidade do selector no exemplo abaixo?**

   No exemplo a seguir:
   
   ```typescript
   @Component({
     selector: 'app-component-overview',
   })
   ```

   O `selector` especifica o nome do elemento HTML personalizado que será usado para renderizar o componente na interface do usuário. Neste caso, o componente pode ser usado em qualquer lugar onde `<app-component-overview></app-component-overview>` seja desejado.

## VI. Sobre templateUrl e template:

Exemplo 1:
```typescript
@Component({
  selector: 'app-component',
  templateUrl: './component.component.html'
})
```

- `templateUrl`: Neste exemplo, o componente utiliza um arquivo HTML externo (component.component.html) como modelo. Isso é útil quando o modelo é extenso e complexo, pois mantém o código separado.

Exemplo 2:
```typescript
@Component({
  selector: 'app-component-overview',
  template: '<h1>Hello World!</h1>'
})
```

- `template`: Neste exemplo, o modelo é definido diretamente na forma de uma string HTML. Isso é adequado para modelos pequenos e simples.

Você deve escolher entre `templateUrl` e `template` com base na complexidade e tamanho do modelo. Modelos maiores geralmente são melhores mantidos em arquivos externos (usando `templateUrl`) para manter o código mais organizado.

## VII. Sobre styleUrls e styles:

Exemplo 1:
```typescript
@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
```

- `styleUrls`: Neste exemplo, um arquivo CSS externo (component.component.css) é associado ao componente. Isso é apropriado quando você deseja separar o estilo em um arquivo separado para reutilização e manutenção.

Exemplo 2:
```typescript
@Component({
  selector: 'app-component-overview',
  template: '<h1>Hello World!</h1>',
  styles: ['h1 { font-weight: normal; }']
})
```

- `styles`: Neste exemplo, os estilos são definidos diretamente na forma de uma matriz de strings CSS. Isso é adequado para estilos simples e específicos a um único componente.

A escolha entre `styleUrls` e `styles` depende da complexidade e reutilização dos estilos. Estilos comuns a vários componentes devem ser definidos em arquivos externos (usando `styleUrls`), enquanto estilos específicos a um único componente podem ser definidos inline (usando `styles`).



# Funcionamento das Rotas no Angular

## I. Comando para criar uma nova aplicação com rotas:
Para criar uma nova aplicação Angular com suporte a rotas, você pode utilizar o Angular CLI com o seguinte comando:
```bash
ng new minha-aplicacao-com-rotas --routing
```

## II. Comando para criar um novo módulo com rotas:
Para criar um novo módulo Angular com suporte a rotas, você pode usar o Angular CLI da seguinte forma:
```bash
ng generate module nome-do-modulo --routing
```

## III. Função do método `navigate()` da classe Router:
O método `navigate()` da classe Router é usado para navegar para uma rota específica programaticamente. Por exemplo:
```typescript
import { Router } from '@angular/router';

// Navegar para a rota '/minha-rota'
this.router.navigate(['/minha-rota']);
```

## IV. Função do método `isActive()` da classe Router:
O método `isActive()` da classe Router é usado para verificar se uma rota específica está ativa no momento. Ele retorna um booleano indicando se a rota está ativa.

## V. Função do arquivo `src/app/app-routing.module.ts`:
O arquivo `src/app/app-routing.module.ts` é responsável por definir as rotas e a configuração de roteamento da aplicação. Nele, você define as rotas, módulos e componentes relacionados ao roteamento da aplicação.

## VI. Função da tag `<router-outlet></router-outlet>`:
A tag `<router-outlet></router-outlet>` é usada como um marcador no seu template Angular onde o conteúdo da rota ativa será exibido dinamicamente. É a área onde os componentes correspondentes à rota atual serão renderizados.

## VII. Exemplo de um botão chamando uma rota através de um método em Angular:
```html
<button (click)="navegarParaMinhaRota()">Ir para Minha Rota</button>
```
```typescript
import { Router } from '@angular/router';

// ...

navegarParaMinhaRota() {
  this.router.navigate(['/minha-rota']);
}
```

## VIII. Exemplo de um botão chamando uma rota sem chamar um método em Angular:
```html
<a [routerLink]="['/outra-rota']">Ir para Outra Rota</a>
```

## IX. O que é Lazy Load? Exemplo de definição de rota em Angular utilizando Lazy Load:
Lazy Load é uma técnica que permite carregar módulos de forma assíncrona apenas quando são necessários, economizando recursos de carregamento inicial. Exemplo de definição de rota com Lazy Load:
```typescript
const routes: Routes = [
  { path: 'lazy', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule) }
];
```

## X. O que é Eager Load? Exemplo de definição de rota em Angular utilizando Eager Load:
Eager Load é o carregamento de módulos no momento em que a aplicação é inicializada. Todos os módulos são carregados imediatamente. Exemplo de definição de rota com Eager Load:
```typescript
const routes: Routes = [
  { path: 'eager', component: EagerComponent }
];
```

# Pipes em Angular

## I. Utilidade dos pipes em aplicações Angular:
Os pipes (tubos) em aplicações Angular são usados para transformar e formatar dados exibidos no template. Eles permitem que você aplique formatação e transformações a valores antes de exibi-los na interface do usuário.

## II. Os 6 pipes que fazem parte do pacote inicial do Angular:
Os 6 pipes que fazem parte do pacote inicial do Angular são:
1. **{{ expression | uppercase }}**: Transforma o texto em letras maiúsculas.
2. **{{ expression | lowercase }}**: Transforma o texto em letras minúsculas.
3. **{{ expression | currency }}**: Formata um número como uma moeda.
4. **{{ expression | date }}**: Formata uma data.
5. **{{ expression | decimal }}**: Formata um número decimal.
6. **{{ expression | percent }}**: Formata um número como uma porcentagem.

## III. Funcionalidade de cada um dos pipes citados acima e exemplos de utilização com resultados:
1. **uppercase**: Transforma o texto em letras maiúsculas.
   Exemplo:
   ```html
   {{ 'angular' | uppercase }}
   Resultado: ANGULAR
   ```

2. **lowercase**: Transforma o texto em letras minúsculas.
   Exemplo:
   ```html
   {{ 'Angular' | lowercase }}
   Resultado: angular
   ```

3. **currency**: Formata um número como uma moeda.
   Exemplo:
   ```html
   {{ 1234.56 | currency:'BRL':'symbol' }}
   Resultado: R$ 1,234.56
   ```

4. **date**: Formata uma data.
   Exemplo:
   ```html
   {{ today | date:'dd/MM/yyyy' }}
   Resultado: 07/11/2023
   ```

5. **decimal**: Formata um número decimal.
   Exemplo:
   ```html
   {{ 3.14159265359 | number:'1.2-2' }}
   Resultado: 03.14
   ```

6. **percent**: Formata um número como uma porcentagem.
   Exemplo:
   ```html
   {{ 0.75 | percent:'2.2-2' }}
   Resultado: 75.00%
   ```

## IV. Custom pipes (pipes personalizados):
Custom pipes são pipes criados pelo desenvolvedor para atender a necessidades específicas da aplicação. Eles são criados como classes TypeScript decoradas com `@Pipe` e implementando a interface `PipeTransform`. Esses pipes podem ser usados da mesma forma que os pipes embutidos, aplicando transformações personalizadas aos dados exibidos no template.

Exemplo de um custom pipe:
```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'meuPipePersonalizado'
})
export class MeuPipePersonalizado implements PipeTransform {
  transform(valor: string, parametro: string): string {
    return valor + parametro;
  }
}
```

Para usar o custom pipe no template:
```html
{{ 'Angular' | meuPipePersonalizado:' é incrível' }}
Resultado: Angular é incrível
```