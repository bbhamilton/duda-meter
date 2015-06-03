Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/',{ name: 'promisesList'});
Router.route('promise/:id', {
  name: 'promiseDetails',
  data: function() {
    return _.findWhere(promisesData, {id: parseInt(this.params.id)});
  }
});
