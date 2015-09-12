Template.user_settings_modal.events({
    "click .done": function(event) {
        event.preventDefault();
        id = this._id;
        if(Meteor.user() != null) {
            Pitch.remove(id);
        }
    }
});

Template.user_settings_modal.helpers({
   claims: function () {
        return Pitch.find({claimed_by: Meteor.user()._id});
    },
    pitches: function() {
        return Pitch.find({pitched_by: Meteor.user()});
    },
    shitcoin: function() {
        return Meteor.user().shitcoins || 0
    }
});
