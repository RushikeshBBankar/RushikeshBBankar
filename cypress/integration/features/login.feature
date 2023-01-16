@regression
# Run all scenario 
Feature: WebdriverUniversity Login Page

    Scenario: Login using valid credentials
        Given WebdriverUniversity
        When username webdriver
        And I enter a password webdriver123
        And I click on the login button
        Then I should be presented with the following message validation succeeded

    Scenario: Login using invalid credentials
        Given WebdriverUniversity
        When username webdriver
        And I enter a password webdriver12
        And I click on the login button
        Then I should be presented with the following message validation failed
    @login 
    # Run the preticular scenario
    Scenario Outline: Login using Portal
        Given WebdriverUniversity
        When username <username>
        And I enter a password <password>
        And I click on the login button
        Then I should be presented with the following message <message>
        Examples:
            | username  | password     | message              |
            | webdriver | webdriver123 | validation succeeded |
            | webdriver | webdriver12  | validation failed    |