# SPT Pro — site de apresentação

Site estático (HTML, CSS e JS puros, sem build) pronto para o GitHub Pages.

```
site/
├── index.html      # página única
├── css/style.css   # estilos (paleta do app: src/core/constants/Colors.ts)
├── js/main.js      # botão "Copiar" do e-mail
├── assets/icon.png # ícone do app (favicon / og:image)
└── .nojekyll       # publica os arquivos como estão, sem Jekyll
```

## Ver localmente

Abra `index.html` no navegador, ou rode um servidor simples:

```sh
python3 -m http.server 8000   # http://localhost:8000
```

## Publicar no GitHub Pages

1. Crie um repositório no GitHub (ex.: `sptpro-site`) e envie o conteúdo desta pasta para a raiz da branch `main`:

   ```sh
   cd site
   git init -b main
   git add .
   git commit -m "Site de apresentação do SPT Pro"
   git remote add origin git@github.com:<usuario>/sptpro-site.git
   git push -u origin main
   ```

2. No repositório: **Settings → Pages → Build and deployment**
   - Source: **Deploy from a branch**
   - Branch: **main** / pasta **/ (root)** → **Save**

3. Em 1–2 minutos o site fica em `https://<usuario>.github.io/sptpro-site/`.

Todos os caminhos são relativos, então o site funciona tanto em `<usuario>.github.io/<repo>/`
quanto em domínio próprio (Settings → Pages → Custom domain, ex.: `www.sptpro.com.br`).
