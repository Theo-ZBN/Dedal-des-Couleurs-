# Dedal des Couleurs

Site vitrine statique HTML, CSS et JavaScript de la galerie Dedal des Couleurs.

**Adresse prévue :** https://theo-zbn.github.io/Dedal-des-Couleurs/

## Contenu
- `index.html` : accueil
- `oeuvres.html` : catalogue avec filtres
- `a-propos.html` : présentation
- `inscription.html` : inscription et contact
- `css/style.css`, `js/script.js` : styles et interactions
- `images/` : logos et illustrations
- `robots.txt`, `sitemap.xml` : référencement

## Publier sur GitHub Pages
1. Sur GitHub, créer un dépôt **public** nommé `Dedal-des-Couleurs` sous le compte `Theo-ZBN`, **sans** ajouter de README ou de licence.
2. Depuis le dossier de ce projet (qui contient déjà un historique Git), exécuter :

   ```bash
   git remote add origin https://github.com/Theo-ZBN/Dedal-des-Couleurs.git
   git push -u origin main
   ```

3. Sur GitHub, aller dans **Settings → Pages → Build and deployment**, sélectionner **Deploy from a branch**, branche **main**, dossier **/(root)**, puis enregistrer.
4. Attendre la publication et visiter https://theo-zbn.github.io/Dedal-des-Couleurs/

Si le dépôt distant existe déjà et que `origin` est configuré, utiliser `git remote set-url origin https://github.com/Theo-ZBN/Dedal-des-Couleurs.git`.

## À vérifier
- Les illustrations d'œuvres et certaines informations sur la galerie sont des contenus d'exemple à remplacer par des contenus validés.
- Le formulaire d'inscription est une démonstration côté navigateur : il **n'envoie pas de données à un serveur** et n'enregistre pas les inscriptions. Pour recevoir des inscriptions, prévoir un service de formulaire ou un backend.
- Contrôler l'affichage mobile, les liens, l'accessibilité, la validation HTML/CSS et les performances après publication.
