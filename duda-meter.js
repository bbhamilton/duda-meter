Counter = new Mongo.Collection('counter');

if (Meteor.isClient) {

  Template.hello.helpers({
    counter: function () {
      return Counter.findOne().value || 0;
    }
  });

  Template.hello.events({
    'click #counterUp': function () {

      counter = Counter.findOne();

      Counter.update(
        {_id: counter._id},
        {$inc: { value: 1 }}
      );
    },
    'click #counterReset': function () {

      counter = Counter.findOne();

      Counter.update(
        {_id: counter._id},
        {$set: { value: 0 }}
      );
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
