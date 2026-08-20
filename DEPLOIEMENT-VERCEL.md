# KILLUA OFFICIAL V4 — Déploiement Vercel

## 1. Sur Termux

Décompresse le projet puis entre dans le dossier :

```bash
cd MON-PORTFOLIO
npm install
npm run dev
```

## 2. Envoyer sur GitHub

```bash
git init
git add .
git commit -m "KILLUA OFFICIAL V4"
git branch -M main
git remote add origin https://github.com/TON-UTILISATEUR/TON-REPO.git
git push -u origin main
```

Si le dépôt existe déjà :

```bash
git add .
git commit -m "feat: Vercel V4"
git push
```

## 3. Vercel

1. Ouvre Vercel.
2. Connecte ton compte GitHub.
3. Clique sur **Add New Project**.
4. Sélectionne ton dépôt KILLUA OFFICIAL.
5. Framework Preset : **Other**.
6. Build Command : laisse vide.
7. Output Directory : `public`.
8. Clique sur **Deploy**.

Le fichier `vercel.json` configure déjà les fonctions `/api/*`.

## 4. Discussions

La V4 fonctionne immédiatement sur Vercel sans Supabase.

⚠️ Important : le stockage en mémoire d'une fonction serverless Vercel n'est PAS une base de données permanente. Les messages peuvent disparaître lorsqu'une instance est recréée.

Pour une vraie communauté publique durable, la prochaine étape sera de brancher une base de données (Supabase, Neon, Firebase, etc.) à `/api/discussions`.

## 5. Ne mets jamais de mot de passe ou de clé secrète dans GitHub.

