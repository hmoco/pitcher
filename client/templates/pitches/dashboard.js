Template.dashboard.events({
    "click .done": function(event) {
        event.preventDefault();
        id = this._id;
        if(Meteor.user() != null) {
            Pitch.remove(id);
        }
    }
});

Template.dashboard.helpers({
  claims: function () {
    return Pitch.find({claimed_by: Meteor.userId()});
  },
  pitches: function() {
    return Pitch.find({pitched_by: Meteor.userId()});
  }
});
