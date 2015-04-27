module.exports = function(config, mongoose) {

	  var
	    express = require("express"),
	    contactsRouter = express.Router();

	  var contactSchema = mongoose.Schema({
			name: String,
			email: String,
			phoneNo: Number,
			comments: String,
			reason: String
	  });

	  var contactModel = mongoose.model("contact", contactSchema);

	  contactsRouter.route("/contacts")
	    .get(function(req, res) {
	      var t = new contactModel(req.body.contact);
	      contactModel.find({}, function(err, contacts) {
	        if (err) {
	          console.log(err);
	          res.status(500).json(err);
	          return;
	        }
	        res.json(contacts);
	      });
	    });

	  contactsRouter.route("/contact")
	    .post(function(req, res){
	      console.dir(req.body);
	      var t = new contactModel(req.body);
	      t.save(function(err, contact) {
	        if (err) {
	          console.log(err);
	          res.status(500).json(err);
	          return;
	        }

	        res.json(contact);

	      });

	    });

	  contactsRouter.route("/contact/:contactId")
	    .get(function(req, res) {
	      var t = new contactModel(req.body.contact);
	      contactModel.findById(req.params.contactId, function(err, contact) {
	        if (err) {
	          console.log(err);
	          res.status(500).json(err);
	          return;
	        }
	        res.json(contact);
	      });
	    })

	    .put(function(req, res) {
	      var t = new contactModel(req.body.contact);
	      contactModel.findByIdAndUpdate(req.params.contactId,
	        req.body.contact, function(err, contact) {
	        if (err) {
	          console.log(err);
	          res.status(500).json(err);
	          return;
	        }
	        res.json(contact);
	      });
	    })

	    .delete(function(req, res) {
	      var t = new contactModel(req.body.contact);
	      contactModel.findByIdAndRemove(req.params.contactId,
	        function(err, contact) {
	        if (err) {
	          console.log(err);
	          res.status(500).json(err);
	          return;
	        }
	        res.json(contact);
	      });
	    });

	  return contactsRouter;
	}
