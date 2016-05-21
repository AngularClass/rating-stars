require('core-js');
require('zone.js');
require('rx/Rx');

const testing = require('@angular/core/testing');
const browser = require('@angular/platform-browser-dynamic/testing');

testing.setBaseTestProviders(
  browser.TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
  browser.TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS
);

Object.assign(global, testing);

const context = require.context('./src', true, /\.spec\.ts/)

context.keys().forEach(context);
