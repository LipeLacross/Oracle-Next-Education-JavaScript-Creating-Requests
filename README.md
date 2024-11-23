## 🌐 [English Version of README](README_EN.md)

# AluraPlay

Uma aplicação web para gerenciar vídeos, com funcionalidades de busca, envio e exibição em uma interface estilizada e responsiva. Ideal para organizar e consumir vídeos de maneira prática.

## 🔨 Funcionalidades do Projeto

- **Listar Vídeos**: Exibe uma lista dinâmica de vídeos disponíveis.
- **Buscar Vídeos**: Permite ao usuário buscar vídeos pelo título.
- **Cadastrar Vídeos**: Usuários podem adicionar novos vídeos à lista, preenchendo um formulário simples.
- **Mensagens Informativas**:
    - "Vídeo cadastrado com sucesso!" ao finalizar um envio.
    - "Não existem vídeos com esse termo" caso uma busca não encontre resultados.
- **Interface Responsiva**: Layout adaptado para dispositivos móveis e desktop.

### Exemplo Visual do Projeto

![Imagem do Projeto](https://via.placeholder.com/800x400.png?text=Exemplo+Visual+do+Projeto)

## ✔️ Técnicas e Tecnologias Utilizadas

- **HTML5**: Estruturação semântica das páginas.
- **CSS3**:
    - Reset de estilos para uniformização.
    - Flexbox e Grid para layouts.
    - Estilização modularizada.
- **JavaScript (ES6)**:
    - Manipulação do DOM.
    - Consumo de API local simulada.
- **JSON-Server**: Servidor local para simular uma API REST.
- **Node.js**: Ambiente de execução necessário para rodar o JSON-Server.

## 📁 Estrutura do Projeto

- **css/**:
    - `reset.css`: Reseta estilos padrão dos navegadores.
    - `estilos.css`: Estilos gerais do projeto.
    - `flexbox.css`: Layouts baseados em flexbox.
    - `estilos-form.css`: Estilização para formulários.
- **img/**:
    - Imagens de cabeçalho, favicon e outras.
- **js/**:
    - `conectaApi.js`: Responsável pela comunicação com a API local.
    - `mostrarVideos.js`: Renderiza a lista de vídeos na página.
    - `buscarVideo.js`: Implementa a funcionalidade de busca.
    - `criarVideo.js`: Trata o envio de vídeos através do formulário.
- **pages/**:
    - `enviar-video.html`: Página para envio de novos vídeos.
    - `envio-concluido.html`: Página de confirmação após cadastro de vídeo.
- **index.html**: Página inicial com listagem de vídeos.
- **db.json**: Simulação do banco de dados para armazenamento dos vídeos.
- **package.json** e **package-lock.json**: Arquivos de configuração para dependências Node.js.

## 🛠️ Abrir e rodar o projeto

Para iniciar o projeto localmente, siga os passos abaixo:

1. **Certifique-se de que o Node.js está instalado**:
    - O [Node.js](https://nodejs.org/) é necessário para rodar o projeto. Você pode verificar se já o tem instalado com:
      ```bash
      node -v
      ```
    - Se não estiver instalado, baixe e instale a versão recomendada.

2. **Clone o Repositório**:
    - Copie a URL do repositório e execute o comando abaixo no terminal:
      ```bash
      git clone <URL_DO_REPOSITORIO>
      ```

3. **Instale as Dependências**:
    - Navegue até o diretório do projeto:
      ```bash
      cd <NOME_DO_DIRETORIO>
      ```
    - Instale as dependências com:
      ```bash
      npm install
      ```

4. **Inicie o JSON-Server**:
    - Rode o servidor local para a API:
      ```bash
      npx json-server --watch db.json
      ```

5. **Abra o Projeto no Navegador**:
    - Abra o arquivo `index.html` no navegador para visualizar a aplicação.

## 🌐 Deploy

### Como realizar o deploy da aplicação:

1. **Hospedar os arquivos estáticos:**
    - **Vercel**:
        - Acesse [Vercel](https://vercel.com/).
        - Crie um projeto novo.
        - Conecte ao repositório do GitHub onde está o projeto.
        - Vercel automaticamente detectará os arquivos estáticos (HTML, CSS e JS) e configurará o deploy.
    - **Netlify**:
        - Acesse [Netlify](https://www.netlify.com/).
        - Arraste a pasta do projeto diretamente para a interface do Netlify ou conecte ao repositório GitHub.

2. **API (JSON-Server):**
    - O **JSON-Server** não pode ser diretamente hospedado nessas plataformas. Para isso, utilize:
        - **Render.com**:
            - Acesse [Render](https://render.com/).
            - Crie um novo serviço e selecione o repositório onde está o `db.json`.
            - Configure o comando de execução:
              ```bash
              npx json-server --watch db.json --port 8080
              ```
            - A URL gerada pelo Render será utilizada como base para o consumo da API na aplicação.

3. **Atualizar URLs na aplicação:**
    - Após hospedar o `JSON-Server`, substitua as referências `http://localhost:3000` no arquivo `conectaApi.js` pela URL do servidor hospedado (por exemplo: `https://sua-api.render.com`).

4. **Acesse sua aplicação:**
    - Após configurar os serviços, você terá dois links:
        - **Frontend:** Gerado pelo Vercel ou Netlify.
        - **Backend:** URL do JSON-Server no Render.
    - A aplicação estará completamente funcional online.
