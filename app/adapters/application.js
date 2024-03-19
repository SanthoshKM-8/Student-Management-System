import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default JSONAPIAdapter.extend({
  host: 'https://65eeabc108706c584d9be613.mockapi.io',

  // namespace: 'api',

  // buildURL(...args) {
  //   // console.log(this._super(...args));
  //   return `${this._super(...args)}.json`;
  // }

  updateRecord(store, type, snapshot) {
    let data = this.serialize(snapshot, { includeId: true });

    const id = snapshot.id;
    const url = this.buildURL(type.modelName, id, snapshot, 'updateRecord');

    return this.ajax(url, 'PUT', { data });
  }

});
