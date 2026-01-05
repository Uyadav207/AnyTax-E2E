// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
// import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Hide fetch/XHR requests from command log
// cy.intercept() calls will still appear
Cypress.config('hideXHRInCommandLog', false);

// Import page objects
const TransferPage = require('./pages/TransferPage');
const SauceDemoPage = require('./pages/SauceDemoPage');

// Make page objects available globally
global.TransferPage = TransferPage;
global.SauceDemoPage = SauceDemoPage;

