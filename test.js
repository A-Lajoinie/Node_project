'use strict';

const Encrypt = require('./lib/index.js');

console.log('=== Test du module iut-encrypt ===\n');

const plainTextPassword = 'motdepasse';

// Test 1: Encoding SHA1
console.log('Test 1: Encoding SHA1');
const passwordSha1 = Encrypt.sha1(plainTextPassword);
console.log(`Mot de passe en clair: ${plainTextPassword}`);
console.log(`Hash SHA1: ${passwordSha1}\n`);

// Test 2: Comparaison - mot de passe correct
console.log('Test 2: Comparaison avec le bon mot de passe');
if (Encrypt.compareSha1('motdepasse', passwordSha1)) {
  console.log('✓ Connexion validée\n');
} else {
  console.log('✗ Connexion refusée\n');
}

// Test 3: Comparaison - mot de passe incorrect
console.log('Test 3: Comparaison avec un mauvais mot de passe');
if (Encrypt.compareSha1('motdepasseerreur', passwordSha1)) {
  console.log('✓ Connexion validée\n');
} else {
  console.log('✗ Connexion refusée (mot de passe incorrect)\n');
}

// Test 4: Cas limites
console.log('Test 4: Test avec des mots de passe différents');
const password1 = Encrypt.sha1('password123');
const password2 = Encrypt.sha1('password456');
console.log(`Password123 SHA1: ${password1}`);
console.log(`Password456 SHA1: ${password2}`);
console.log(`Sont-ils identiques? ${password1 === password2}\n`);

console.log('=== Tous les tests sont terminés ===');
