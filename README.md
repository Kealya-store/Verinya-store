# Site Verinya Store — Guide

## 1. Structure du site
```
verinya-site/
├── index.html          → page d'accueil
├── catalogue.html       → tous les produits, avec filtres par catégorie
├── produit.html          → fiche produit (couleur, taille, personnalisation)
├── commande.html         → formulaire de livraison + envoi de la commande sur WhatsApp
├── assets/
│   ├── css/style.css
│   ├── js/
│   │   ├── products.js   → la liste de tous tes produits (prix, description, image, couleurs, tailles)
│   │   ├── config.js     → ton numéro WhatsApp
│   │   ├── render.js     → affiche les produits automatiquement (catalogue + catégories)
│   │   ├── script.js     → gère les filtres du catalogue
│   │   ├── produit.js    → gère la fiche produit (couleur, taille, perso)
│   │   ├── commande.js   → récap commande + envoi WhatsApp avec les infos de livraison
│   │   └── footer.js     → affiche le vrai numéro WhatsApp dans le pied de page (à partir de config.js)
│   └── img/              → tes photos produits (à ajouter)
└── pages/
    ├── tshirts.html
    ├── polos.html
    ├── tricots.html
    ├── hoodies.html
    ├── cuisine.html
    ├── travail.html
    └── sport.html
```

## 2. À faire avant de publier

**Ton numéro WhatsApp**
Ouvre `assets/js/config.js` et remplace :
```js
whatsappNumber: "213XXXXXXXXX"
```
par ton vrai numéro (format 213 + numéro sans le 0).

**Tes photos produits**
Mets tes images dans `assets/img/` avec exactement les noms utilisés dans
`assets/js/products.js` (ex: `tshirt.jpg`, `polo.jpg`, `hoodie.jpg`...).
Sans ces images, les cartes produits afficheront une image cassée.

**Tes produits**
Pour ajouter, modifier ou supprimer un produit, tu n'as qu'un seul fichier à
toucher : `assets/js/products.js`. Toutes les pages (catalogue, catégories,
fiche produit) se mettent à jour automatiquement à partir de ce fichier.

Champs obligatoires par produit :
- `id` → identifiant unique, sans espace (ex: `"tshirt-classique"`)
- `nom`, `categorie`, `prix`, `image`, `description`

La `categorie` doit être une de : `tshirts`, `polos`, `tricots`, `hoodies`,
`cuisine`, `travail`, `sport` (sinon le produit n'apparaîtra pas sur sa page
catégorie).

## 3. Comment ça marche
- Le **catalogue** et les **pages catégories** ne contiennent aucune carte
  produit écrite en dur : elles sont générées automatiquement en JavaScript
  à partir de `products.js`.
- Cliquer sur une carte produit ouvre `produit.html?id=...` qui va chercher
  le bon produit et affiche ses infos.
- Sur la fiche produit, choisir "Produit personnalisé" fait apparaître les
  options (technique, position, texte, logo). Le bouton "Commander sur
  WhatsApp" ouvre WhatsApp avec un message pré-rempli contenant le produit,
  la version, la quantité et les options choisies.

## 4. Mettre le site en ligne (GitHub Pages)
1. Va sur **github.com**, crée un compte si besoin
2. **New repository** → nomme-le (ex: `verinya-store`) → Public → **Create repository**
3. **Add file → Upload files**, glisse tout le contenu de ce dossier
   (`index.html`, `catalogue.html`, `produit.html`, `README.md`, `assets/`, `pages/`)
4. **Commit changes**
5. **Settings → Pages** → Branch: `main` → **Save**
6. Ton site sera en ligne à :
   `https://TON-PSEUDO.github.io/verinya-store/`

## 5. Ce qu'il reste à faire de ton côté
- [ ] Ajouter ton numéro WhatsApp dans `config.js`
- [ ] Ajouter tes vraies photos dans `assets/img/`
- [ ] Relire les prix dans `products.js`
- [ ] Remplacer `hero.png` par une vraie photo/bannière sur la page d'accueil
- [ ] Publier sur GitHub Pages

