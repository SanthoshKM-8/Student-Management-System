import JSONSerializer from '@ember-data/serializer/json';

export default JSONSerializer.extend({
    // normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    //     payload = { "data": payload };
    //     // this._super(payload);
    //     let returnPayload = this._super(...arguments);

    //     console.log(returnPayload);
    //     return returnPayload;
    //     // return this.normalize(primaryModelClass,payload)
    // }
});
