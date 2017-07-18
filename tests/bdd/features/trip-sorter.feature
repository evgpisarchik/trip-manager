Feature: "TripSorter" console command testing
  In order to sort transitions
  I need to run console command "bin/console TripSorter [filename]
  passing input parameters to it

  Scenario: Sort unordered list of transitions
    When I run "bin/console trip-sorter tests/bdd/features/data/valid-boarding-cards.json"
    Then I should get:
      """
      1. Take the airport bus from A to B. No seat assignment.
      2. Take the airport bus from B to C. No seat assignment.
      3. You have arrived at your final destination.
      """