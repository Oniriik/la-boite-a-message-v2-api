'use strict';

/**
 * banned service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::banned.banned');
