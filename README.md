# Jeff's Coffee

Site de apresentação da Jeff's Coffee, uma cafeteria autônoma em desenvolvimento.

## Desenvolvimento local

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Build estático

```bash
npm run build
```

O resultado será criado em `out/`. Durante o GitHub Actions, o Next.js configura automaticamente o `basePath` usando o nome do repositório.

## Publicação no GitHub Pages

O workflow `.github/workflows/deploy.yml` publica automaticamente cada push para a branch `main`.

Na primeira publicação, acesse **Settings → Pages** no repositório e selecione **GitHub Actions** como fonte. Também é possível executar o workflow manualmente na aba **Actions**.
