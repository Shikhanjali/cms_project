var PagesView = Backbone.View.extend({
/*
	events: {
		"click tbody": "showSpecificPage"
	},

	showSpecificPage: function(e) {
		console.log("button clicked");

		if (e.target instanceof HTMLButtonElement) {
			console.log($(e.target).attr("data-model-id"));
			console.log("show specific page fired!");
			var myPage = new Page({id: $(e.target).attr("data-model-id")});
			myPage.fetch({
			success: function() {
				that.$el.html(templates["add_page"]({ pages: that.collection.toJSON() }))
			}
		});
		}
	},*/


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
