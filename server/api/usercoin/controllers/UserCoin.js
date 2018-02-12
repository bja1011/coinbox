'use strict';

/**
 * UserCoin.js controller
 *
 * @description: A set of functions called "actions" for managing `UserCoin`.
 */

module.exports = {

  /**
   * Retrieve userCoin records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    const data = await strapi.services.userCoin.fetchAll(ctx.query);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Retrieve a userCoin record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    const data = await strapi.services.userCoin.fetch(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Create a/an userCoin record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    const data = await strapi.services.userCoin.add(ctx.request.body);

    // Send 201 `created`
    ctx.created(data);
  },

  /**
   * Update a/an userCoin record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    const data = await strapi.services.userCoin.edit(ctx.params, ctx.request.body) ;

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Destroy a/an userCoin record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    const data = await strapi.services.userCoin.remove(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  }
};
