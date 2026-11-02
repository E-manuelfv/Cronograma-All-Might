# Cronograma All Might

Aplicação estática para organizar o cronograma e as missões da equipe All Might (FTC).

## Desenvolvimento

1. Instale o [Node.js](https://nodejs.org/).
2. Instale as dependências com `npm install`.
3. Execute `npm run dev` e abra o endereço mostrado no terminal.

O Vite atualiza a página automaticamente quando arquivos do projeto são salvos.

## Supabase

Para usar os dados compartilhados da equipe, copie `.env.example` para `.env` e preencha `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY` com os valores do projeto Supabase. A chave anon é pública por definição; proteja as tabelas com políticas RLS adequadas e nunca coloque uma chave `service_role` no frontend.

Sem essas variáveis, a aplicação usa os dados de demonstração locais.

## Publicação estática

Execute `npm run build`. Os arquivos prontos para publicação ficam em `dist/` e podem ser publicados em qualquer hospedagem estática. Se as variáveis do Supabase forem necessárias, configure-as antes de compilar. Para conferir a versão compilada localmente, use `npm run preview`.
