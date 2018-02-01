'use strict';

/**
 * Rating.js controller
 *
 * @description: A set of functions called "actions" for managing `Rating`.
 */

module.exports = {

  /**
   * Retrieve rating records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    const data = await strapi.services.rating.fetchAll(ctx.query);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Retrieve a rating record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    const data = await strapi.services.rating.fetch(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Create a/an rating record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    const data = await strapi.services.rating.add(ctx.request.body);

    // Send 201 `created`
    ctx.created(data);
  },

  /**
   * Update a/an rating record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    const data = await strapi.services.rating.edit(ctx.params, ctx.request.body) ;

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Destroy a/an rating record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    const data = await strapi.services.rating.remove(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  }
};
