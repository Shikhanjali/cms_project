
var Page = BaseModel.extend({
  urlRoot: "/api/page",
  defaults: {
    "title" : null,
    "content" : null,
    "category" : null,
    "route" : null,
    "author" : null,
    "date": Date.now()
  },
  initialize: function() {
    /*
    this.on("change:title", function() {
      console.dir(arguments);
      console.log("title in my model changed.");
    });
    */
    console.log("pages ..");
  }
});
