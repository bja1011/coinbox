'use strict';

/**
 * CoinRating.js service
 *
 * @description: A set of functions similar to controller's actions to avoid code duplication.
 */

// Public dependencies.
const _ = require('lodash');

module.exports = {

  /**
   * Promise to fetch all coinratings.
   *
   * @return {Promise}
   */

  fetchAll: (params) => {
    const convertedParams = strapi.utils.models.convertParams('coinrating', params);

    return CoinRating
      .find()
      .where(convertedParams.where)
      .sort(convertedParams.sort)
      .skip(convertedParams.start)
      .limit(convertedParams.limit)
      .populate(_.keys(_.groupBy(_.reject(strapi.models.coinRating.associations, {autoPopulate: false}), 'alias')).join(' '));
  },

  /**
   * Promise to fetch a/an coinRating.
   *
   * @return {Promise}
   */

  fetch: (params) => {
    return CoinRating
      .findOne(_.pick(params, _.keys(CoinRating.schema.paths)))
      .populate(_.keys(_.groupBy(_.reject(strapi.models.coinRating.associations, {autoPopulate: false}), 'alias')).join(' '));
  },

  /**
   * Promise to add a/an coinRating.
   *
   * @return {Promise}
   */

  add: async (values) => {
    const data = await CoinRating.create(_.omit(values, _.keys(_.groupBy(strapi.models.coinRating.associations, 'alias'))));
    await strapi.hook.mongoose.manageRelations('coinRating', _.merge(_.clone(data), { values }));
    return data;
  },

  /**
   * Promise to edit a/an coinRating.
   *
   * @return {Promise}
   */

  edit: async (params, values) => {
    // Note: The current method will return the full response of Mongo.
    // To get the updated object, you have to execute the `findOne()` method
    // or use the `findOneOrUpdate()` method with `{ new:true }` option.
    await strapi.hook.mongoose.manageRelations('coinRating', _.merge(_.clone(params), { values }));
    return CoinRating.update(params, values, { multi: true });
  },

  /**
   * Promise to remove a/an coinRating.
   *
   * @return {Promise}
   */

  remove: async params => {
    // Note: To get the full response of Mongo, use the `remove()` method
    // or add spent the parameter `{ passRawResult: true }` as second argument.
    const data = await CoinRating.findOneAndRemove(params, {})
      .populate(_.keys(_.groupBy(_.reject(strapi.models.coinRating.associations, {autoPopulate: false}), 'alias')).join(' '));

    _.forEach(CoinRating.associations, async association => {
      const search = (_.endsWith(association.nature, 'One')) ? { [association.via]: data._id } : { [association.via]: { $in: [data._id] } };
      const update = (_.endsWith(association.nature, 'One')) ? { [association.via]: null } : { $pull: { [association.via]: data._id } };

      await strapi.models[association.model || association.collection].update(
        search,
        update,
        { multi: true });
    });

    return data;
  }
};
