var DonationsView = Backbone.View.extend({

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
