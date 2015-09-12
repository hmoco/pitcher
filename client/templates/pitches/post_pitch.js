Template.body.events({
  "submit .new-pitch": function (event) {
    event.preventDefault();

    var title = event.target.title.value;
    var description = event.target.description.value;

    Pitch.insert({
      claimed_by: '',
      pitched_by: Meteor.userId(),
      title: title,
      description: description,
    });

    event.target.title.value = "";
    event.target.description.value = "";
  }
});

