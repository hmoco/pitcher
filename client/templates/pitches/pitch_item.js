Template.pitch_item.events({
  "click .claim": function(event) {
    event.preventDefault();
    id = this._id;
    if(Meteor.user() != null) {
      Pitch.update(id, {$set: {claimed_by: Meteor.user()._id;}});
    }
  }
});
