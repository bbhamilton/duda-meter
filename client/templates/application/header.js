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
    return _.where(promisesData, {progress: 'inprogress'}).length;
  }
});
