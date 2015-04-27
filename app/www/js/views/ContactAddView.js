var ContactAddView = Backbone.View.extend({

  events: {
		"click #contact-create-button": "createContact"
	},

	render: function() {
		this.$el.html(templates["add_contact"]());
	},

	initialize: function(options) {
		this.options = options;
	},

  createContact: function() {
    var c = new Contact({});
    c.set("name", $("#name").val());
    c.set("email", $("#email").val());
    c.set("reason", $("#reason").val());
    c.set("phoneNo", $("#phoneNo").val());
    c.set("comments", $("#comments").val());
    c.save(null, {
      success: function() {
        console.dir(c.attributes);

            appRouter.navigate("/contacts", { trigger: true });

      }
    });

    console.log("called create contact");
  }

});
