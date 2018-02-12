'use strict';

/**
 * Coin.js controller
 *
 * @description: A set of functions called "actions" for managing `Coin`.
 */

module.exports = {

  /**
   * Retrieve coin records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    const data = await strapi.services.coin.fetchAll(ctx.query);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Retrieve a coin record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    const data = await strapi.services.coin.fetch(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Create a/an coin record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    const data = await strapi.services.coin.add(ctx.request.body);

    // Send 201 `created`
    ctx.created(data);
  },

  /**
   * Update a/an coin record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    const data = await strapi.services.coin.edit(ctx.params, ctx.request.body) ;

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Destroy a/an coin record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    const data = await strapi.services.coin.remove(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  }
};
