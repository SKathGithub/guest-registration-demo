
import './commands'
require('cypress-xpath')
require('cypress-file-upload')
require ('xlsx')

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    })
