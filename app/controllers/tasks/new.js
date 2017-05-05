import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addTask: function() {
      var title = this.get('title');
      var description = this.get('description');
      var date = this.get('date');

      //Crete New task
      var newTask = this.store.createRecord('task', {
        title: title,
        description: description,
        date: new Date(date)
      });

      //Save to Database
      newTask.save();

      //clear form
      this.setProperties({
        title: '',
        description: '',
        date: ''
      });
    }
  }
});
