// // eslint-disable-next-line no-unused-vars
// const {
// 	Given,
// 	When,
// 	Then,
// } = require('@badeball/cypress-cucumber-preprocessor');

import { add } from './calculator.ts'

before(function () {
//	cy.visit('/');
});

When('I click add', function () {
  const ret = add(1, 2);
  console.log('ret: ', ret);
});

// Then('The calculator should add', function (n) {
// });

