Template.pitch_submit_button.events({
  "click .open-modal": function(event) {
    event.preventDefault();
    id = this._id;
    if(Meteor.user() != null) {
      Modal.show('pitch_submit_modal');
    }    
  }
});
