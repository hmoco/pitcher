Template.body.events({
  "click .claim": function(event) {
    event.preventDefault();
    id = this._id;
    if(Meteor.user() != null) {
      Pitch.update(id, {$set: {claimed_by: 'current_user'}});
    }    
  }
});
