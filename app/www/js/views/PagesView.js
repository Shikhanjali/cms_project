var PagesView = Backbone.View.extend({

	events: {
		"click td": "showSpecificPage"
	},

	showSpecificPage: function(e) {
		console.log("button clicked");

		if (e.target instanceof HTMLButtonElement) {
			console.log($(e.target).attr("data-model-id"));
			console.log("show specific page fired!");
			targetModel = this.collection.get($(e.target).attr("data-model-id"));

			var v = new PagesView({
				el: '#main-content',
				model: targetModel
			});
			v.render();
			}
	},

	render: function() {
		var that = this;
		this.collection.fetch({
			success: function() {
				that.$el.html(templates["pages"]({ pages: that.collection.toJSON() }))
			}
		});
	},

	initialize: function(options) {
		this.options = options;
	}

});
