# Trasmissor de Arquivos Caixa

## Visão Geral

Este projeto tem como objetivo desenvolver uma solução robusta e escalável para a transmissão automática de arquivos. Os usuários podem escolher um diretório para monitorar, e quando um arquivo é colocado nesse diretório, o programa automaticamente o captura e o envia para a API correspondente. O objetivo central é oferecer à Caixa uma solução interna para a transmissão de arquivos, eliminando a dependência de softwares terceiros.

## Electron

O projeto foi desenvolvido utilizando o Electron, uma estrutura que oferece diversas vantagens para a criação de aplicativos desktop multiplataforma. Para obter informações detalhadas sobre o Electron, consulte a [documentação oficial do Electron](https://www.electronjs.org/pt/docs/latest/) ou acesse o [repositório no GitHub](https://github.com/electron/electron).

## Template

Este projeto foi inicializado usando o boilerplate do [Electron Vite](https://electron-vite.org/), um modelo que simplifica a configuração inicial do projeto Electron com Vite. Para detalhes específicos sobre a configuração do template, consulte a [documentação oficial](https://electron-vite.org/guide/) ou visite o [repositório no GitHub](https://github.com/alex8088/electron-vite).

```bash
npm create @quick-start/electron
```

É importante observar que os comentários presentes no código são exclusivamente os que foram incluídos por padrão. Eles fornecem uma visão geral sobre o funcionamento de algumas partes do Electron, contribuindo para uma compreensão geral do framework.

## Como Iniciar

Siga as etapas abaixo para configurar e iniciar o projeto:

1. Clone este repositório:

```bash
git clone https://seurepositorio.com/vancaixa.git
cd vancaixa
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o aplicativo:

```bash
npm run dev
```

## Padronização de Código

Com o intuito de assegurar consistência e qualidade no código, implementamos um conjunto de ferramentas de padronização. Certifique-se de configurar seu ambiente de desenvolvimento para dar suporte às seguintes ferramentas:

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)

Além disso, para garantir uma abordagem eficaz e sem sobrecarga, certas exclusões foram configuradas no processo de linting. O diretório `src/renderer/src/components/ui` foi excluído do linting, pois deve conter EXCLUSIVAMENTE componentes da biblioteca de componentes. Componentes personalizados devem ser criados em `src/renderer/src/components`.

## Estrutura de pastas de Nomeclatura de arquivos

```
📦 root
├─ 📁 main
├─ 📁 preload
├─ 📁 renderer
├─ 📄 electron.vite.config.ts
└─ 📄 package.json
```

```
├─ 📁 renderer
│  ├─ 📁 src
│  │  ├─ 📁 components
│  │  │  ├─ 📁 shadcn
└─ ├─ 📄 index.html
```

## Alias

Para facilitar a referência a caminhos específicos no projeto, foram configurados aliases. Isso simplifica a escrita e leitura do código, tornando o projeto mais legível. Os aliases configurados são:

- **@renderer**: Este alias aponta para o diretório `src/renderer/src`, facilitando a importação de componentes e recursos no código relacionado à interface do usuário.

- **@main**: Este alias direciona para o diretório `src/main/src`, simplificando a inclusão de módulos e recursos no código principal da aplicação.

Certifique-se de utilizá-los conforme necessário para melhorar a organização e a clareza do código.

## UI

Com o objetivo de aprimorar a experiência do desenvolvedor (DX) e acelerar o processo de desenvolvimento, facilitando a implementação da entrega contínua, optamos por integrar as seguintes bibliotecas de UI:

- [React](https://react.dev/reference/react)
- [Tailwind CSS](https://tailwindcss.com/)
- [ShadCui](https://ui.shadcn.com/docs) - Uma biblioteca de componentes que oferece elementos de interface trazendo o código dos componentes para o projeto, tornando-os totalmente personalizáveis.

Para garantir uma organização eficaz, todos os arquivos e diretórios relacionados à biblioteca ShadCui seguem uma convenção de nomenclatura consistente. Os componentes da biblioteca estão localizados em `/components/shadcn`, as variáveis CSS em `/styles/shadcn.css`, e os utilitários em `/utils/shadcn.ts`.

## Roteamento

Para o gerenciamento de rotas, escolhemos a biblioteca [Tanstack Router](https://tanstack.com/router/latest/docs/framework/react/overview), principalmente devido à sua integração eficiente com o TypeScript.

As rotas devem ser definidas dentro do diretório `src/renderer/src/routes`, sendo elas:

- **Home**
- **About**
- **Contact Us**

Essa estrutura de roteamento proporciona uma navegação clara e organizada dentro do aplicativo. Certifique-se de criar e configurar as páginas correspondentes para cada rota dentro desse diretório.

**Aviso**
O ambiente do electron nao suporta browser router por nao possuir um servidor, sendo assim, está sendo utilizado o hash router.

## Gerenciamento de Estados

Para o gerenciamento de estados, optamos por integrar a biblioteca [Zustand](https://github.com/pmndrs/zustand). O Zustand é uma solução leve e eficiente que simplifica o controle do estado global na aplicação React.

## Gerenciamento de Formulários

Para lidar com formulários, escolhemos uma combinação poderosa: [React Hook Form](https://react-hook-form.com/) em conjunto com [Zod](https://github.com/colinhacks/zod) para validação de esquemas. O React Hook Form oferece uma abordagem simples e eficiente para a criação de formulários React, enquanto o Zod fornece uma maneira declarativa de validar os dados do formulário com TypeScript.

## Validação de Tipos

Para garantir a validação consistente e estática dos tipos de dados, implementamos a biblioteca [Zod](https://github.com/colinhacks/zod). O Zod facilita a definição de esquemas de validação de dados, garantindo a integridade dos tipos durante o desenvolvimento.

## Banco de Dados e ORM

Para gerenciamento do banco de dados local e ORM (Object-Relational Mapping), optamos por [Drizzle](https://github.com/khalidx/drizzle). Este ORM proporciona uma integração suave com SQLite. As migrações podem ser geradas utilizando o comando:

```bash
drizzle-kit generate:sqlite
```

Esse comando foi adicionado aos scripts de desenvolvimento e build, garantindo que as migrações sejam executadas conforme necessário durante o ciclo de vida do projeto. Certifique-se de utilizar esse recurso ao criar ou modificar o esquema do banco de dados.
