import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['filter', 'currentPage', 'sortProperties'],
  filter: '',
  sortProperties: ['internalNumber'],
  countPages: 2,
  currentPage: 1,
  itemsPerPage: 5,
  offset: 1,

  // TODO: Think about the possibility to handle the pagination in the route
  sortedFilteredPaginatedList: Ember.computed('model.@each.title', 'filter', function() {
    // Get task count
    const numberOfTasks = this.get('model').get('length');

    // Calculate the offset (which task is the first on the current page)
    const offset = (this.get('currentPage') - 1) * this.get('itemsPerPage') + 1;
    this.set('offset', offset);

    // Calculate the number of pages dependent on the number of tasks
    const countPages =  Math.ceil(numberOfTasks / this.get('itemsPerPage'));
    this.set('countPages', countPages);

    // Get the tasks
    const tasks = this.get('model');

    // Take only the tasks which lay between offset and tasks per page
    let paginatedTasks = tasks.slice(offset - 1, (offset - 1 ) + this.get('itemsPerPage'));

    // Take only the tasks which match the entry in the filter input field
    const query = this.get('filter');
    if (!!query) {
      const regexString = '(' + query.split(' ').join(')+.*(') + ')+.*';
      const regex = new RegExp(regexString, 'ig');
      paginatedTasks = paginatedTasks.filter((item) => item.get('title').match(regex));
    }

    // Sort task by set sorting property
    const paginatedFilteredSortedTasks = paginatedTasks.sortBy(this.get('sortProperties').toString());

    // Return the paginated, filtered and sorted tasks
    return paginatedFilteredSortedTasks;
  }).property('currentPage', 'filter', 'sortProperties'),

  actions: {
    // Called when user clicks table head
    sortBy: function(property) {
      this.set('sortProperties', property);
    },
    // Called when user clicks link in pagination
    pageChanged(currentPage) {
      this.set('currentPage', currentPage);
    }
  }
});