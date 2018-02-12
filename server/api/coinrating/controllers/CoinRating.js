'use strict';

/**
 * CoinRating.js controller
 *
 * @description: A set of functions called "actions" for managing `CoinRating`.
 */

module.exports = {

  /**
   * Retrieve coinRating records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    const data = await strapi.services.coinRating.fetchAll(ctx.query);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Retrieve a coinRating record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    const data = await strapi.services.coinRating.fetch(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Create a/an coinRating record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    const data = await strapi.services.coinRating.add(ctx.request.body);

    // Send 201 `created`
    ctx.created(data);
  },

  /**
   * Update a/an coinRating record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    const data = await strapi.services.coinRating.edit(ctx.params, ctx.request.body) ;

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Destroy a/an coinRating record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    const data = await strapi.services.coinRating.remove(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  }
};
