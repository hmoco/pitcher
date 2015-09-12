Template.sidebar.events({
  "click .open-modal-pitch": function(event) {
    event.preventDefault();
    if(Meteor.user() != null) {
      Modal.show('pitch_submit_modal');
    }    
  },
  "click .open-modal-settings": function(e) {
  	e.preventDefault();
  	if (Meteor.user() != null) {
  		Router.go('dashboard');
  	}
  }
});
