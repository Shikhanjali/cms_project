var Contact = BaseModel.extend({
  urlRoot: "/api/contact",
  defaults: {
    "name" : null,
    "comments" : null,
    "email": null,
    "phoneNo": null,
    "reason": null
  },
  initialize: function() {

  }
});
