Template.pitches_page.helpers({
  pitch: function () {
    return Pitch.find({claimed_by: ''});
  },
  no_pitches: function() {
  	var pitches = Pitch.find({claimed_by: ''}).fetch().length;
  	if (pitches) {
  		return false
  	}
  	return true
  }
});
