# Mavife

Site da floricultura Mavife — arranjos artesanais, buquês e decoração floral. Encomendas via WhatsApp.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Yarn 4

## Desenvolvimento

```bash
nvm use
yarn install
yarn dev
```

## WhatsApp

O número de contato fica em `src/lib/content.ts`. Links usam o formato oficial [`wa.me`](https://faq.whatsapp.com/general/chats/how-to-use-click-to-chat):

```
https://wa.me/<número_internacional>?text=<mensagem_opcional>
```

O botão flutuante abre uma nova aba para iniciar a conversa.

## Deploy

Hospedado na Vercel. `NEXT_PUBLIC_SITE_URL` pode ser definida para metadados e sitemap em produção.
