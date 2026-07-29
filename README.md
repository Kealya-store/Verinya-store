# Site Verinya — Guide de démarrage

## 1. Ce que contient ce dossier
- `index.html` → le contenu et la structure de la page
- `style.css` → le design (couleurs, mise en page)
- `script.js` → le bouton de commande qui envoie vers WhatsApp

## 2. Personnaliser AVANT de publier
Ouvre `index.html` et remplace tout ce qui est entre crochets `[...]` par tes vraies infos :
- `[NOM DU PRODUIT]`, `[Titre accrocheur...]`, `[Prix] DA`, etc.
- Les avis clients `[Avis client]` — laisse-les vides ou supprime-les tant que tu n'as pas de vrais avis (ne jamais inventer un faux avis, ça casse la confiance si un client s'en rend compte)

Ouvre `script.js` et modifie en haut du fichier :
```js
const WHATSAPP_NUMBER = "213XXXXXXXXX";   // ton numéro, format 213 + numéro sans le 0
const PRODUCT_NAME = "[NOM DU PRODUIT]";  // le nom réel de ton produit
```

Remplace les zones `[Photo du produit ici]` par de vraies images :
- Mets tes photos dans le dossier `images/`
- Dans `index.html`, remplace le `<div class="hero-image-placeholder">...</div>` par
  `<img src="images/ton-produit.jpg" alt="[NOM DU PRODUIT]">`

## 3. Mettre le site en ligne gratuitement (GitHub Pages)

1. Va sur **github.com** et crée un compte (si pas déjà fait)
2. Clique sur **New repository**, nomme-le par exemple `kaelya-store`, coche "Public", clique **Create repository**
3. Sur la page du dépôt, clique **Add file → Upload files**, glisse les fichiers `index.html`, `style.css`, `script.js` et le dossier `images/`, puis **Commit changes**
4. Va dans **Settings → Pages**
5. Dans "Branch", choisis `main` et clique **Save**
6. Attends 1-2 minutes, ton site est en ligne à l'adresse :
   `https://TON-PSEUDO.github.io/kaelya-store/`

## 4. Plus tard (optionnel)
Une fois que tu as des ventes régulières, tu pourras acheter un vrai nom de domaine (`kaelya.com`, `.dz`, `.store`...) et le connecter à GitHub Pages dans les paramètres du dépôt (**Settings → Pages → Custom domain**).

## 5. Ce qu'il reste à faire de ton côté
- [ ] Choisir le produit
- [ ] Écrire le vrai texte (accroche, bénéfices, FAQ)
- [ ] Ajouter les vraies photos
- [ ] Mettre ton vrai numéro WhatsApp
- [ ] Publier sur GitHub Pages
