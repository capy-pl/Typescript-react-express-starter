const { clientConfig } = require('../webpack.config');

module.exports = ({ config, mode }) => {
  config.module = clientConfig.module;
  config.resolve = clientConfig.resolve;
  return config;
};