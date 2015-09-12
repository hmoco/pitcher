Template.pitch_submit_modal.events({
  "submit form": function (event) {
    event.preventDefault();

    var title = event.target.title.value;
    var description = event.target.description.value;

    Pitch.insert({
      claimed_by: '',
      pitched_by: Meteor.userId(),
      title: title,
      description: description,
    });

    Modal.hide();
  }
});

