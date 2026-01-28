# @dan/iut-encrypt

Module NPM de cryptage de mots de passe permettant de simplifier les appels du module encrypt fourni par Node.JS.

## Installation

```bash
npm install @dan/iut-encrypt
```

## Utilisation

```javascript
'use strict';

const Encrypt = require('@dan/iut-encrypt');

const plainTextPassword = 'motdepasse';

// Encoder un mot de passe en SHA1
const passwordSha1 = Encrypt.sha1(plainTextPassword);

// Comparer un mot de passe saisi avec le hash stocké
if (Encrypt.compareSha1('motdepassesaisit', passwordSha1)) {
    console.log('Connexion validée');
} else {
    console.log('Connexion refusée');
}
```

## API

### `sha1(plainTextPassword)`

Encode un mot de passe en SHA1.

**Paramètres:**
- `plainTextPassword` (string): Le mot de passe en clair

**Retour:**
- (string): Le hash SHA1 du mot de passe

**Exemple:**
```javascript
const hash = Encrypt.sha1('monmotdepasse');
// hash = '9c1c3d5e73f2b5d5c8e1f5b5d5c8e1f5b5d5c8e'
```

### `compareSha1(plainTextPassword, hashedPassword)`

Compare un mot de passe en clair avec son hash SHA1.

**Paramètres:**
- `plainTextPassword` (string): Le mot de passe en clair à vérifier
- `hashedPassword` (string): Le hash SHA1 à comparer

**Retour:**
- (boolean): `true` si les mots de passe correspondent, `false` sinon

**Exemple:**
```javascript
const hash = Encrypt.sha1('motdepasse');
const isValid = Encrypt.compareSha1('motdepasse', hash);
// isValid = true
```

## Architecture Modulaire

Ce module est conçu comme **évolutif** pour permettre l'ajout de nouvelles méthodes de cryptage dans le futur:

- `sha1()` - Cryptage SHA1 (actuellement implémenté)
- Futures méthodes possibles: `sha256()`, `bcrypt()`, `md5()`, etc.

## Mode Strict

Le module utilise le mode strict (`'use strict'`) qui:
- Élimine les erreurs silencieuses en les changeant en erreurs explicites
- Améliore les performances d'exécution
- Interdit les mots-clés susceptibles d'être définis dans les futures versions d'ECMAScript

## Tests

```bash
npm test
```

## Licence

ISC
