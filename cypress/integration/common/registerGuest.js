//import cypress-cucumber-preprocessor/steps
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

//write given step for User is on registration page
Given('User is on registration page', () => {
    cy.visit('https://demo.wpeverest.com/user-registration/guest-registration-form/')
})

//write when step for User enters the details

When('User enters valid data in all fields', () => {
    cy.get("#first_name").type("firstName");
    cy.get("#last_name").type("lastName");
   var email= "shweta.kath" + Math.random() + "@gmail.com" 
    cy.get("#user_email").type(email);
    cy.get("#user_pass").type("Shweta@12345678901");
    cy.get('#privacy_policy_1665633140').check();
})

//write and step for User clicks on register button
And('User clicks on Register button', () => {
    cy.get('button[type= "submit"]').click();
    cy.wait(3000);
})  

//write then step for User should be registered successfully

Then('User should be able to register successfully', () => {
    cy.get('div[class= "ur-message user-registration-message"]').should("be.visible");
})

//write when step for User enters invalid data in all fields

When('User enters invalid data in all fields', () => {
    cy.get("#first_name").type("firstName");
    cy.get("#last_name").type("lastName");
    cy.get("#user_email").type("shweta.kath@gmail");
    cy.get("#user_pass").type("Shweta@12345678901");
    cy.get('#privacy_policy_1665633140').check();
})

//write then step for User should not be registered successfully
    
    Then('User should not be able to register successfully', () => {
        cy.get('#user_email-error').should("be.visible");
    })


