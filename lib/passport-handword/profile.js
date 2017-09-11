/**
 * Parse profile.
 *
 * @param {Object|String} json
 * @return {Object}
 * @api private
 */
exports.parse = function(json) {
  if ('string' == typeof json) {
    json = JSON.parse(json);
  }
  var profile = {};
  profile.id = String(json.uid);
  profile.nickname = json.name;
  profile.icon = json.icon;
  profile.phone = json.phone;
  if (json.email) {
    profile.emails = [{
      value: json.email
    }];
  }
  return profile;
};