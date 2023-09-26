# Resposta do Desafio 1

## Controle de Versionamento

**A)**

O controle de versionamento, em termos simples, é um sistema que acompanha e gerencia as mudanças feitas em arquivos ao longo do tempo.

### Vantagens do Controle de Versionamento

**B)**

- **Rastreamento de Alterações**: Você pode acompanhar todas as mudanças feitas em um arquivo, o que ajuda a entender o histórico de desenvolvimento e a identificar quando e por quem uma alteração foi feita.

- **Colaboração Eficiente**: Facilita a colaboração em equipe, permitindo que várias pessoas trabalhem no mesmo projeto ao mesmo tempo, sem se sobrescreverem mutuamente. Cada um pode fazer suas alterações em sua própria cópia e, depois, fundi-las de volta ao projeto principal.

- **Restauração de Versões Anteriores**: Se algo der errado ou se você precisar voltar a uma versão anterior de um arquivo, é fácil fazê-lo com controle de versionamento, o que ajuda na recuperação de dados e na correção de erros.

- **Branching e Merging**: Você pode criar (branches) para desenvolver recursos ou correções separadamente do código principal e, em seguida, mesclar essas alterações de volta quando estiverem prontas. Isso facilita o gerenciamento de recursos em desenvolvimento paralelo.

- **Melhor Comunicação**: O controle de versionamento ajuda a documentar o progresso do projeto. Isso melhora a comunicação entre os membros da equipe e fornece um registro das atividades realizadas.

**C)**

- **Git**: O Git é um sistema de controle de versionamento distribuído amplamente utilizado. Ele é conhecido por sua velocidade e flexibilidade, e é muito utilizado no desenvolvimento de software. O GitHub e o GitLab são serviços populares que hospedam repositórios Git e facilitam a colaboração em projetos de código aberto e privados.

- **Subversion (SVN)**: O Subversion é um sistema de controle de versionamento centralizado que mantém um único repositório central de onde os desenvolvedores podem atualizar e enviar suas alterações. Embora tenha perdido popularidade para sistemas distribuídos como o Git, ainda é usado em alguns projetos.

- **Mercurial**: O Mercurial é outro sistema de controle de versionamento distribuído semelhante ao Git. Ele é conhecido por sua simplicidade e desempenho. Embora não seja tão amplamente adotado quanto o Git, ainda é uma escolha válida para controle de versionamento de código.

# Resposta do Desafio 2

**a) Sobre HTML, responda**:

I. Cite as principais tags HTML e para que servem respectivamente. Dê exemplos de situações reais de onde são usadas.

Aqui estão algumas das principais tags HTML e suas finalidades, juntamente com exemplos de situações reais de uso:

1. **html**:
   - Finalidade: Define o início e o fim do documento HTML.
   - Exemplo: `<html> ... </html>`

2. **head**:
   - Finalidade: Contém informações sobre o documento, como título, metadados e links para folhas de estilo.
   - Exemplo: `<head> ... </head>`

3. **<title>**:
   - Finalidade: Define o título da página, que é exibido na barra de título do navegador.
   - Exemplo: `<title>Página de Exemplo</title>`

4. **body**:
   - Finalidade: Contém o conteúdo principal do documento, incluindo texto, imagens e outros elementos visíveis.
   - Exemplo: `<body> ... </body>`

5. **h1 a h6**:
   - Finalidade: Define cabeçalhos de diferentes níveis de importância.
   - Exemplo: `<h1>Título Principal</h1>`

6. **p**:
   - Finalidade: Define um parágrafo de texto.
   - Exemplo: `<p>Este é um parágrafo de exemplo.</p>`

7. **a**:
   - Finalidade: Cria um link para outra página ou recurso na web.
   - Exemplo: `<a href="https://www.exemplo.com">Visitar Exemplo</a>`

8. **img**:
   - Finalidade: Exibe uma imagem na página.
   - Exemplo: `<img src="imagem.jpg" alt="Descrição da Imagem">`

9. **ul** e **ol**:
   - Finalidade: Cria listas não ordenadas (com marcadores) e listas ordenadas (com números).
   - Exemplo:
     ```
     <ul>
       <li>Item 1</li>
       <li>Item 2</li>
     </ul>

     <ol>
       <li>Primeiro</li>
       <li>Segundo</li>
     </ol>
     ```

10. **table**:
    - Finalidade: Define uma tabela para organizar dados em linhas e colunas.
    - Exemplo:
      ```
      <table>
        <tr>
          <th>Cabeçalho 1</th>
          <th>Cabeçalho 2</th>
        </tr>
        <tr>
          <td>Dado 1</td>
          <td>Dado 2</td>
        </tr>
      </table>
      ```

11. **form**:
    - Finalidade: Cria um formulário interativo para coletar informações dos usuários.
    - Exemplo: 
      ```
      <form action="processar.php" method="post">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome">
        <input type="submit" value="Enviar">
      </form>
      ```
