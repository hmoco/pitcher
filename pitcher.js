User = new Mongo.Collection('user');
Pitch = new Mongo.Collection('pitch');
 
if (Meteor.isClient) {

  Template.body.helpers({
    pitch: function () {
      return Pitch.find({claimed_by: ''});
    }
  });

  Template.body.events({
    "submit .new-pitch": function (event) {
      event.preventDefault();

      var title = event.target.title.value;
      var description = event.target.description.value;

      Pitch.insert({
        claimed_by: '',
        pitched_by: 'current_user',
        title: title,
        description: description,
      });

      event.target.title.value = "";
      event.target.description.value = "";
    },
    "click .claim": function(event) {
      event.preventDefault(); 
      id = this._id;
      Pitch.update(id, {$set: {claimed_by: 'current_user'}});
      console.log(this.claimed_by)
    }
  });
}
