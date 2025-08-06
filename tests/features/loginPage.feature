Feature: Valid Login Test

@alll
Scenario Outline: Verfiy user is loged in with valid username and password
Given I am in Swag labs login page
When I login with username "<username>" and password "<password>"
Then login shoul be "<asExpected>"

Examples:
    |username               |password     |asExpected   |
    |standard_user          |secret_sauce |Successfull  |
    |locked_out_user        |secret_sauce |Unsuccessfull|
    |problem_user           |secret_sauce |Successfull  |
    |performance_glitch_user|secret_sauce |Successfull  |
    |standard_user          |secret1_sauce|Unsuccessfull|
    |problem_user           |secret1_sauce|Unsuccessfull|
    |performance_glitch_user|secret1_sauce|Unsuccessfull|

@all
Scenario Outline: Verfiy user is able to add products
Given I am in Swag labs login page
When I login with username "standard_user" and password "secret_sauce"
Then login shoul be "Successfull"
When I add the product "Sauce Labs Backpack"
Then I verify cart count should be "1"
When I add the product "Sauce Labs Bike Light"
Then I verify cart count should be "2"
When I remove the product "Sauce Labs Backpack"
Then I verify cart count should be "1"