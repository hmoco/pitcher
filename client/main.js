Template.body.helpers({
  pitch: function () {
    return Pitch.find({claimed_by: ''});
  }
});
