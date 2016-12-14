import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    let eventId = params.event_id;
    let eventsModel = this.modelFor('events');
    console.log("eventsModel", eventsModel)
    console.log("eventId", typeof eventId)
    console.log("eventId", typeof parseInt(eventId))
    let model = eventsModel.findBy('id', parseInt(eventId));
    console.log("model", model)
    return model;
  }
});
