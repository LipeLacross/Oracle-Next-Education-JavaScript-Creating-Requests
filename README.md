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

![chrome-capture-2024-11-23](https://github.com/user-attachments/assets/b79e5b55-f9de-4856-8fb8-09184c312e15)

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
    - `conectaApi.js`: Responsável pela comunicação com a API local e remota.
    - `mostrarVideos.js`: Renderiza a lista de vídeos na página.
    - `buscarVideo.js`: Implementa a funcionalidade de busca.
    - `criarVideo.js`: Trata o envio de vídeos através do formulário.
- **pages/**:
    - `enviar-video.html`: Página para envio de novos vídeos.
    - `envio-concluido.html`: Página de confirmação após cadastro de vídeo.
- **index.html**: Página inicial com listagem de vídeos.
- **db.json**: Simulação do banco de dados para armazenamento dos vídeos.
- **server.js**: Configuração personalizada para rodar o JSON-Server com suporte a CORS.
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
    - Rode o servidor local para a API usando o arquivo `server.js`:
      ```bash
      node server.js
      ```

5. **Abra o Projeto no Navegador**:
    - Abra o arquivo `index.html` no navegador para visualizar a aplicação.

## 🌐 Deploy

### Como realizar o deploy da aplicação:

1. **Hospedar os arquivos estáticos (Frontend):**
    - **Vercel**:
        - Acesse [Vercel](https://vercel.com/).
        - Crie um projeto novo.
        - Conecte ao repositório do GitHub onde está o projeto.
        - Vercel automaticamente detectará os arquivos estáticos (HTML, CSS e JS) e configurará o deploy.
    - **Netlify**:
        - Acesse [Netlify](https://www.netlify.com/).
        - Arraste a pasta do projeto diretamente para a interface do Netlify ou conecte ao repositório GitHub.

2. **Hospedar a API (JSON-Server):**
    - Utilize o [Render.com](https://render.com/) para hospedar a API:
        - Crie um novo serviço **Web Service** e conecte ao repositório onde está o projeto.
        - Configure o comando de execução:
          ```bash
          node server.js
          ```
        - A URL gerada pelo Render será utilizada como base para o consumo da API na aplicação.

3. **Atualizar URLs no Frontend**:
    - Após hospedar a API, substitua as referências `http://localhost:3000` no arquivo `conectaApi.js` pela URL gerada pelo Render (por exemplo: `https://sua-api.render.com`).

4. **Testar a aplicação**:
    - Certifique-se de que o frontend e o backend estão funcionando corretamente juntos.
    - Teste funcionalidades como busca e envio de vídeos.
