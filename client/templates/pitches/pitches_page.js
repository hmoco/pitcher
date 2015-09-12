Template.pitches_page.helpers({
  pitch: function () {
    return Pitch.find({claimed_by: ''});
  }
});
