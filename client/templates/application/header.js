Template.header.helpers({
  allPromises: function() {
    return promisesData.length;
  },
  fullfilledPromises: function() {
    return _.where(promisesData, {progress: 'fullfilled'}).length;
  },
  notFullfilledPromises: function() {
    return _.where(promisesData, {progress: 'notfullfilled'}).length;
  },
  inProgressPromisses: function() {
    console.log('----');
    console.dir(_.where(promisesData, {progess: 'inprogress'}));
    console.log('----');
    return _.where(promisesData, {progress: 'inprogress'}).length;
  }
});

Template.header.events({
  'click .all': function(e) {
    e.preventDefault();
    $('nav li').removeClass('active');
    $('nav .all').addClass('active');
    $('#promises .promise').show();
  },
  'click .fullfilled': function(e) {
    e.preventDefault();
    $('nav li').removeClass('active');
    $('nav .fullfilled').addClass('active');
    $('#promises .promise').hide();
    $('#promises .fullfilled').show();
  },
  'click .notfullfilled': function(e) {
    e.preventDefault();
    $('nav li').removeClass('active');
    $('nav .notfullfilled').addClass('active');
    $('#promises .promise').hide();
    $('#promises .notfullfilled').show();
  },
  'click .inprogress': function(e) {
    e.preventDefault();
    $('nav li').removeClass('active');
    $('nav .inprogress').addClass('active');
    $('#promises .promise').hide();
    $('#promises .inprogress').show();
  },
});
