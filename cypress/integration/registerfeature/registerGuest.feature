Feature: Validate registration form for guest
Scenario: Validate registration form for guest
#Write given, when and then  for registartion page of https://demo.wpeverest.com/user-registration/guest-registration-form/

Given User is on registration page
When User enters valid data in all fields
And User clicks on Register button
Then User should be able to register successfully

Scenario: Validate registration form for guest with invalid data

Given User is on registration page
When User enters invalid data in all fields
And User clicks on Register button
Then User should not be able to register successfully