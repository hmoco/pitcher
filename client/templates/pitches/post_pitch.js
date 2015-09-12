Template.body.events({
  "submit .new-pitch": function (event) {
    event.preventDefault();

    var title = event.target.title.value;
    var description = event.target.description.value;

    Pitch.insert({
      claimed_by: '',
      pitched_by: Meteor.user(),
      title: title,
      description: description,
    });
    if (Meteor.user().shitcoins){
      Meteor.users.update(Meteor.userId(), {$set: {shitcoins: Meteor.user().shitcoins + 10}})
    } else {
      Meteor.users.update(Meteor.userId(), {$set: {shitcoins: 10}})
    }
    event.target.title.value = "";
    event.target.description.value = "";
  }
});

