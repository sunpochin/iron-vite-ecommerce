Feature: The calculator
  The calculator should correctly perform +-*/ .

  Scenario: The calculator addition
    # it should correctly add
    When I click add
    Then The calculator should add

