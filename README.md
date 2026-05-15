# Ledger Automation Playwright

Automation testing project built using Playwright and JavaScript.

## Technologies Used
- Playwright
- JavaScript
- Node.js

## Test Coverage
- Login validation
- UI testing
- Regression scenarios
- End-to-end workflows

## Features
- Automated browser testing
- Reusable test structure
- Cross-browser support

## Run Tests

Install dependencies:

npm install

Run tests:

npx playwright test

##Test Case 1
Test Case: Add Valid Debit Entry
General Details
Test Case ID: TC_LEDGER_001
Title: Add a new valid Debit entry
Module: Ledger Entry Page
Priority: High
Author: Gabriela Date: 2025-07-19

Objective
Verify that the Ledger page correctly handles:
Adding a valid Credit entry (positive functional test)
Missing description input (negative functional test)
Displaying validation for excessively long descriptions (negative UI test)
Preconditions
User is logged in
Ledger page is accessible
Add Entry form is visible

Test Steps
Step
Action
Expected Result
1 Navigate to the Ledger page
Ledger page loads with entry form visible
2 Select today’s date from the calendar
Date is selected and displayed correctly
3 Enter description: Grocery shopping
Input is accepted
4 Enter amount: 500
Amount is accepted
5 Select the option: Debit
Debit radio/toggle is selected
6 Click on “Add Entry” button
Entry is submitted and appears in the transaction list
7 Check the entry list
Entry shows as “Debit” with amount -500


Expected Result
A new Debit entry with:
Correct date
Description = "Grocery shopping"
Amount = -500 or visually indicated as debit
Type = "Debit"
...should be visible in the transaction list.
