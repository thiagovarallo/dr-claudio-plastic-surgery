# Site do Dr. Claudio Eduardo

Este projeto é o site institucional do Dr. Claudio Eduardo, cirurgião plástico em Blumenau, Santa Catarina. Ele foi criado para apresentar o trabalho do médico com clareza e acolhimento: quem chega ao site pode conhecer sua trajetória, explorar informações sobre as cirurgias, ver os locais de atendimento e encontrar um caminho simples para entrar em contato com a equipe.

O site também reúne notícias e publicações das redes sociais e pode ser acessado em português, inglês e espanhol. As informações têm caráter institucional e educativo; a avaliação individual de cada paciente acontece em consulta.

## O que você encontra no site

- **Início (`/`)**: apresentação do médico, diferenciais, história, cirurgias, unidades, hospitais e publicações.
- **Perfil profissional (`/claudio-eduardo-cirurgiao-plastico`)**: trajetória e informações sobre o Dr. Claudio.
- **Cirurgias (`/cirurgias`)**: visão geral dos procedimentos disponíveis.
- **Páginas de cada cirurgia (`/cirurgias/[slug]`)**: explicações, galeria e perguntas frequentes de cada procedimento.
- **Contato (`/contato`)**: canais de atendimento e informações para chegar à clínica.
- **API do Instagram (`/api/instagram`)**: fornece as publicações usadas no feed do site.

## Como o projeto está organizado

O site usa o App Router do Next.js. As páginas e rotas ficam em `app/`, os componentes visuais em `components/`, os textos e dados do site em `content/` e as traduções em `messages/` e `i18n/`. Imagens, logos e outros arquivos servidos diretamente pelo site ficam em `public/`.

```text
app/                 Páginas, layout, metadados e rotas de API
components/          Componentes reutilizados e seções das páginas
content/             Conteúdo do site e dados dos procedimentos
i18n/                Configuração e conteúdo traduzido
messages/            Textos da interface em português, inglês e espanhol
public/              Imagens e arquivos estáticos
```

Para atualizar informações, comece pelos arquivos de conteúdo correspondentes em `content/` ou pelas traduções em `messages/` e `i18n/`. Para alterar a estrutura ou o visual de uma seção, procure o componente correspondente em `components/` e a página em `app/`.

## Tecnologias

- [Next.js 16](https://nextjs.org/docs) com App Router
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [next-intl](https://next-intl.dev/) para internacionalização
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Motion](https://motion.dev/) para animações
- [Lucide](https://lucide.dev/) para ícones

## Começar a trabalhar no projeto

Você precisa ter uma versão recente do Node.js e o npm instalados. Na primeira vez, instale as dependências e inicie o servidor local:

```bash
npm install
npm run dev
```

Depois, abra [http://localhost:3000](http://localhost:3000) no navegador. As alterações nos arquivos são refletidas durante o desenvolvimento.

Outros comandos disponíveis:

```bash
npm run lint    # verifica problemas de código com ESLint
npm run build   # prepara uma versão de produção
npm run start   # serve a versão já compilada
```

## Idiomas

O idioma padrão é o português (`pt`); o site também oferece inglês (`en`) e espanhol (`es`). As mensagens da interface ficam em `messages/pt.json`, `messages/en.json` e `messages/es.json`. Parte do conteúdo editorial traduzido fica em `i18n/content.ts`, `i18n/content-en.json` e `i18n/content-es.json`.

Ao criar ou alterar um texto visível, confira as versões nos outros idiomas para manter a experiência consistente. A seleção de idioma é lembrada pelo cookie `NEXT_LOCALE`.

## Feed do Instagram

O feed tem alternativas automáticas e continua funcionando com publicações verificadas armazenadas no projeto caso nenhuma integração externa esteja configurada. Para atualizar as publicações automaticamente, configure **uma** das opções abaixo no ambiente do servidor:

- `INSTAGRAM_ACCESS_TOKEN`: token da Instagram Graph API.
- `BEHOLD_FEED_URL`: endereço completo de um feed JSON do Behold.
- `NEXT_PUBLIC_BEHOLD_FEED_ID`: ID de um feed do Behold; o endereço é montado automaticamente.

Sem essas variáveis, o site usa o conteúdo de reserva em `content/instagram.ts`. Nunca inclua tokens ou segredos em arquivos versionados; use as variáveis de ambiente locais ou as configurações seguras da plataforma de hospedagem.

## Publicação

O comando `npm run build` gera a versão de produção. O projeto pode ser hospedado na Vercel ou em outra plataforma compatível com Next.js. Configure nela as mesmas variáveis de ambiente necessárias para o feed do Instagram e faça a publicação pelo fluxo adotado para o repositório.

## Manutenção do conteúdo

- Procedimentos: `content/cirurgias/`.
- Dados das unidades, contato, história e redes sociais: arquivos em `content/`.
- Textos traduzidos: `messages/` e `i18n/`.
- Fotos e materiais visuais: `public/`.
- Páginas e metadados para buscadores: arquivos dentro de `app/`.

Como o site apresenta informações médicas, revise com a equipe responsável qualquer mudança em descrições de procedimentos, credenciais, endereços e canais de atendimento antes da publicação.
