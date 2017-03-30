/**
 * AuthController
 *
 * @description :: Server-side logic for managing Auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	login: function (req, res) {
	  User.findOne(req.body).exec((err, user) => {
	    if (err) {
	      return res.serverError(err);
      }

      if (user) {
        req.session.user = user;
        return res.send(user);
      }

      User.create(req.body).exec((err, user) => {
        req.session.user = user;
        return res.send(user);
      });
    });
  },

  logout: function (req, res) {

  }
};

