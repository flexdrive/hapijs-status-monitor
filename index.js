const pkg = require('./package.json');
const register = require('./src/middleware-wrapper');

const name = 'hapi_status'

// export register function, wrapped in a plugin object
module.exports.plugin = { 
  name,
  register,
  pkg
};
