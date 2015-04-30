var DonationEditView = Backbone.View.extend({

  // button save event
  events: {
		"click #donation-create-button": "createDonation"
	},

  bindings: {
		"#amount": "amount",
		"#creditCard": "creditCard",
		"#expiryDate": "expiryDate",
		"#cvv": "cvv",
		"#name": "name",
		"#address": "address",
		"#comments": "comments"
	},

  // save model to db
  // update collection, which should then update the collection view

	render: function() {
    var that = this;
    that.$el.html(templates["add_donation"](this.model.attributes));
		this.stickit();
    console.log("hello");
	},

	initialize: function(options) {
		this.options = options;
    console.log("edit page")

	},

  createDonation: function() {
    // create new model
    var d = new Donation({});
    // set fields
    d.set("name", $("#name").val());
    d.set("amount", $("#amount").val());
    d.set("creditCard", $("#creditCard").val());
    d.set("date", Date.now());
    // call save
    d.save(null, {
      success: function() {
        console.dir(d.attributes);
        console.dir(donations);
        donations.fetch({
          success: function() {
            console.log("fetched donations");
            appRouter.navigate("/donations", { trigger: true });
          }
        });
      }
    });

    // change route to pages

    console.log("called create donation");
    //console.dir(p.toJSON());
  },

});
