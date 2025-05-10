const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname)
config.resolver.unstable_enablePackageExports = false;

module.exports = withNativeWind(config, { input: './src/styles/global.css' })