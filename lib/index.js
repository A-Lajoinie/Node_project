'use strict';

const crypto = require('crypto');

/**
 * Module de cryptage de mots de passe
 * Permet de simplifier les appels du module encrypt fourni par Node.JS
 */

/**
 * Encode un mot de passe en SHA1
 * @param {string} plainTextPassword - Le mot de passe en clair
 * @returns {string} Le hash SHA1 du mot de passe
 */
const sha1 = (plainTextPassword) => {
  if (typeof plainTextPassword !== 'string') {
    throw new Error('Le mot de passe doit être une chaîne de caractères');
  }

  return crypto
    .createHash('sha1')
    .update(plainTextPassword)
    .digest('hex');
};

/**
 * Compare un mot de passe en clair avec son hash SHA1
 * @param {string} plainTextPassword - Le mot de passe en clair à vérifier
 * @param {string} hashedPassword - Le hash SHA1 à comparer
 * @returns {boolean} true si les mots de passe correspondent, false sinon
 */
const compareSha1 = (plainTextPassword, hashedPassword) => {
  if (typeof plainTextPassword !== 'string') {
    throw new Error('Le mot de passe doit être une chaîne de caractères');
  }

  if (typeof hashedPassword !== 'string') {
    throw new Error('Le hash doit être une chaîne de caractères');
  }

  const computedHash = sha1(plainTextPassword);
  return computedHash === hashedPassword;
};

// Export du module
module.exports = {
  sha1,
  compareSha1
};
