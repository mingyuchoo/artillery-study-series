//
// my-functions.js
//

function setJSONBody(requestParams, context, ee, next) {
  return next(); // MUST be called for the scenario to continue
}

function logHeaders(requestParams, response, context, ee, next) {
  console.log(`>>> ${response.statusCode}`);
  return next(); // MUST be called for the scenario to continue
}
module.exports = {
  setJSONBody: setJSONBody,
  logHeaders: logHeaders
};
