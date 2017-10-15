import Component from '@ember/component';

export default Component.extend({

  createNewConference() {
    let conference = {
      name: "Boston Code Camp",
      description: "A free developer conference hosted twice a year"
    }
    this.get('store').createRecord('conference', conference)
  }
  
});
