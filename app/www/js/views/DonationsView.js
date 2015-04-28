var DonationsView = Backbone.View.extend({

	events: {
		"click #delete-donation": "deleteDonation"
	},

	deleteDonation: function(e){
		console.log("delete donation button clicked "+ $(e.target).attr("data-model-id"));
		var targetModelId = $(e.target).attr("data-model-id"), targetModel;
		targetModel = this.collection.get(targetModelId);
		this.collection.remove(targetModel);
		targetModel.destroy();
		// have to update the donations page to reflect the deletion
	},

	render: function() {
		var that = this;
		this.collection.fetch({
			success: function() {
				that.$el.html(templates["donations"]({ donations: that.collection.toJSON() }))
			}
		});
	},

	initialize: function(options) {
		this.options = options;
	}

});
