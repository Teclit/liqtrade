This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Simulation de Connexion avec Stockage Local

Ce projet inclut une fonctionnalité de simulation de connexion utilisateur en utilisant le stockage local du navigateur.

### Fonctionnalité de Connexion

- Lorsqu'un utilisateur tente de se connecter, les informations saisies (email et mot de passe) sont comparées à celles enregistrées dans le stockage local.
- **Cas 1 : Connexion réussie.**
    - Si les informations correspondent, une session d'authentification est créée avec un **token** et une **expiration d'une heure**.
    - L'utilisateur est redirigé vers le tableau de bord (`/user`).

- **Cas 2 : Échec de connexion.**
    - Une alerte est affichée si les identifiants sont incorrects ou si aucun utilisateur enregistré ne correspond.

### Utilisation

1. Accédez à la page de connexion via l'URL : `/auth/login`.
2. Remplissez les champs email et mot de passe.
3. Cliquez sur le bouton **Se connecter**.

- Comportement attendu :
    - Si les identifiants sont valides, vous serez redirigé vers le tableau de bord utilisateur (`/user`).
    - Sinon, une alerte indiquera que les identifiants sont incorrects.

### Comportement d'authentification

- Les données de session sont stockées dans le **stockage local** du navigateur comme suit :
    - **Session d'authentification** : `{ token: "user-authenticated", expiresAt: [timestamp] }`.

Vous pouvez vérifier ces informations dans l'**inspecteur du navigateur** sous l'onglet **Stockage local**.
