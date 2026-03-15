# Déployer Lokalii sur Netlify

Ce guide vous permet de mettre votre site en ligne gratuitement sur Netlify.

---

## 1. Créer un compte Netlify

**Je ne peux pas créer le compte à votre place** : il faut votre email et un mot de passe. Suivez ces étapes :

1. Ouvrez votre navigateur et allez sur **https://www.netlify.com**
2. Cliquez sur **« Sign up »** (S’inscrire) en haut à droite.
3. Choisissez une méthode d’inscription :
   - **Email** : entrez votre adresse email et un mot de passe.
   - **GitHub** : si vous avez un compte GitHub, vous pouvez vous connecter avec (utile si vous hébergez le code sur GitHub).
   - **Google** : connexion avec un compte Google.
4. Validez l’inscription (email de confirmation si vous avez choisi « Email »).
5. Une fois connecté, vous arrivez sur le tableau de bord Netlify.

---

## 2. Déployer le site (sans Git)

Méthode la plus simple : envoyer le dossier du projet directement à Netlify.

1. Dans le tableau de bord Netlify, cliquez sur **« Add new site »** → **« Deploy manually »** (Déployer manuellement).
2. Une zone **« Drag and drop your site output folder here »** s’affiche.
3. Sur votre ordinateur, ouvrez le dossier **`Lokalii`** (celui qui contient `index.html`, `style.css`, `script.js`, le dossier `images`, `mentions-legales.html`, `politique-confidentialite.html`).
4. **Glissez-déposez ce dossier entier** dans la zone Netlify.
5. Netlify uploade les fichiers et affiche une URL du type **`https://nom-aleatoire-123.netlify.app`**.
6. Cliquez sur l’URL pour voir votre site en ligne.

---

## 3. Changer l’adresse du site (optionnel)

- Dans le tableau de bord, ouvrez votre site.
- Allez dans **« Domain settings »** (Paramètres du domaine).
- Vous pouvez :
  - **Changer le sous-domaine** : par exemple `lokalii.netlify.app` si disponible.
  - **Ajouter un nom de domaine** : si vous avez acheté un domaine (ex. `lokalii.bj`), vous pouvez le connecter.

---

## 4. Mettre à jour le site plus tard

À chaque fois que vous modifiez les fichiers (HTML, CSS, JS, images) :

1. Replongez le **même dossier Lokalii** (à jour) dans la zone **« Deploy manually »** du même site Netlify, ou
2. Si vous avez relié un dépôt **GitHub** : poussez vos changements sur GitHub ; Netlify redéploiera automatiquement.

---

## Résumé

| Étape | Action |
|-------|--------|
| 1 | Aller sur https://www.netlify.com et cliquer sur **Sign up** |
| 2 | S’inscrire avec Email, GitHub ou Google |
| 3 | **Add new site** → **Deploy manually** |
| 4 | Glisser-déposer le dossier **Lokalii** dans la zone |
| 5 | Attendre la fin du déploiement et ouvrir l’URL fournie |

Votre site Lokalii sera alors accessible partout via le lien Netlify.
