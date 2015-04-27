var Donation = BaseModel.extend({
  urlRoot: "/api/donation",
  defaults: {
    "name" : null,
    "amount" : 0,
    "creditCard" : null,
    "date": Date.now()
  },
  initialize: function() {

  }
});
