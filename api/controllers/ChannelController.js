/**
 * ChannelController
 *
 * @description :: Server-side logic for managing channels
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	join: function (req, res) {
    if (! req.isSocket) {
      return res.badRequest();
    }

    let channel = 'channel.' + req.params.id;
    let user = sails.sockets.getId(req);

    sails.sockets.join(req, channel);
    sails.sockets.broadcast(channel, 'channel.join', {user: user}, req);

    return res.ok({
      message: 'Joined channel successfully.'
    });
  },

  leave: function (req, res) {
    if (! req.isSocket) {
      return res.badRequest();
    }

    let channel = 'channel.' + req.params.id;
    let user = sails.sockets.getId(req);

    sails.sockets.leave(req, channel);
    sails.sockets.broadcast(channel, 'channel.leave', {user: user}, req);

    return res.ok({
      message: 'Left channel successfully.'
    });
  }

};

