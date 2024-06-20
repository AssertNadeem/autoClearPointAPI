---
# Playwright API Testing Setup Guide
---

This is a Playwright API testing framework designed to demonstrate playwright api testing example

## Features of this framework
* Playwright API Testing for the assessment

## Getting started

### Pre-requisites
* Download and install Node.js
* Download and install any Text Editor like Visual Code/Visual studio
* Docker image provided by Clearpoint should be running.

### Setup Scripts 
* Clone the repository into a folder
* Go to Project root directory and install Dependency: `npm install`
* All the dependencies from package.json would be installed in node_modules folder.

### Install Visual Code Extension (Optional)
* <a href="https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright" target="_blank">Playwright Test for VSCode</a>


## How to Run Test Locally
* Go to the Project root directory and run command: `npx playwright test`

## How to Run Single Spec Locally
* Go to the Project root directory and run command: `npx playwright test tests/01_get_todoList.spec.js`

## How to view default Playwright HTML report
*   Serving HTML report at http://localhost:9323. Press Ctrl+C to quit.