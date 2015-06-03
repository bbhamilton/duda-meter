Template.promisesList.helpers({
  promises: promisesData
});

Template.promisesList.events({
  'click nav .all': function(e) {
    e.preventDefault();
    $('nav li').removeClass('active');
    $('nav .all').addClass('active');
    $('#promises .promise').show();
  },
  'click nav .fullfilled': function(e) {
    e.preventDefault();
    $('nav li').removeClass('active');
    $('nav .fullfilled').addClass('active');
    $('#promises .promise').hide();
    $('#promises .fullfilled').show();
  },
  'click nav .notfullfilled': function(e) {
    e.preventDefault();
    $('nav li').removeClass('active');
    $('nav .notfullfilled').addClass('active');
    $('#promises .promise').hide();
    $('#promises .notfullfilled').show();
  },
  'click nav .inprogress': function(e) {
    e.preventDefault();
    $('nav li').removeClass('active');
    $('nav .inprogress').addClass('active');
    $('#promises .promise').hide();
    $('#promises .inprogress').show();
  },
});
