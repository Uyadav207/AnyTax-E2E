# Cypress E2E Test Suite

This project contains comprehensive end-to-end tests using Cypress, including API mocking tests for a money transfer application and UI flow tests for SauceDemo e-commerce site.

## 🎯 Project Overview

This test suite demonstrates:
- **API Mocking**: Using `cy.intercept()` to mock POST requests
- **Page Object Model (POM)**: Clean, maintainable test structure with reusable page objects
- **E2E UI Testing**: Complete user flow testing on real web applications
- **HTML Test Reports**: Detailed test execution reports using Mochawesome
- **Code Quality**: Clean, readable code with proper synchronization (no hard-coded waits)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 14.x or higher ([Download Node.js](https://nodejs.org/))
- **npm**: Usually comes with Node.js
- **Git**: For cloning the repository

## 🚀 Quick Start - Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/Uyadav207/AnyTax-E2E.git
cd AnyTax-E2E
```

### Step 2: Install Dependencies

```bash
npm install
```

This single command installs all required packages:
- Cypress (v15.8.1) - Testing framework
- http-server (v14.1.1) - Local web server (for Task 1)
- mochawesome - HTML test report generator
- mochawesome-merge - Report merger utility
- mochawesome-report-generator - Report generator utility

### Step 3: Verify Installation

```bash
npx cypress verify
```

You should see: ✅ "Verified Cypress!"

---

## 📝 Task 1: Money Transfer API Tests

### What is Task 1?
Tests for a money transfer application that mock API endpoints and verify both success and failure scenarios.

### Easy Steps to Run Task 1:

**Step 1**: Start the local web server (required for Task 1)
```bash
npm run serve
```
Keep this terminal running! The server will start at `http://localhost:8080`

**Step 2**: In a **new terminal**, run the tests:
```bash
npm run test:transfer
```

**Step 3**: View the test report:
```bash
npm run test:report
open cypress/reports/html/report.html
```

### Task 1 Test Scenarios:
- ✅ **Test A**: Successful money transfer (200 OK)
- ✅ **Test B**: Failed money transfer (400 Bad Request) - verifies error handling

### Task 1 Files:
- Test: `cypress/e2e/transfer.cy.js`
- Page Object: `cypress/support/pages/TransferPage.js`
- UI: `index.html`

---

## 📝 Task 2: SauceDemo E2E UI Flow Test

### What is Task 2?
Complete end-to-end UI flow test for SauceDemo e-commerce site that:
1. Logs in using `standard_user` credentials
2. Adds a product to the cart
3. Verifies the product in the cart
4. Validates price format

### Easy Steps to Run Task 2:

**Step 1**: Run the test (no server needed!)
```bash
npm run test:saucedemo
```

**Step 2**: View the test report:
```bash
npm run test:report:saucedemo
open cypress/reports/html/report.html
```

### Task 2 Test Details:
- **Website**: https://www.saucedemo.com/
- **Username**: `standard_user`
- **Password**: `secret_sauce`
- **Test**: Complete E2E flow from login to cart validation

### Task 2 Files:
- Test: `cypress/e2e/saucedemo.cy.js`
- Page Object: `cypress/support/pages/SauceDemoPage.js`

---

## 🧪 Running All Tests Together

### Quick Command:
```bash
npm run test:all
```

This runs:
- Task 1: Money Transfer API Tests (2 tests)
- Task 2: SauceDemo E2E UI Flow (1 test)
- **Total: 3 tests, all passing** ✅

### Generate Complete Report:
```bash
npm run test:report:all
open cypress/reports/html/report.html
```

---

## 🖥️ Interactive Mode (Visual Testing)

### For Task 1 (Transfer Tests):

**Terminal 1**: Start server
```bash
npm run serve
```

**Terminal 2**: Open Cypress
```bash
npm run cypress:open
```
Then select `transfer.cy.js` from the spec list

### For Task 2 (SauceDemo Tests):

**Single Terminal**: Open Cypress
```bash
npm run cypress:open
```
Then select `saucedemo.cy.js` from the spec list

**Note**: No server needed for Task 2!

---

## 📊 Viewing Test Reports

### Generate and View Report:

**For All Tests:**
```bash
npm run test:report:all
open cypress/reports/html/report.html
```

**For Task 1 Only:**
```bash
npm run test:report
open cypress/reports/html/report.html
```

**For Task 2 Only:**
```bash
npm run test:report:saucedemo
open cypress/reports/html/report.html
```

### Report Location:
```
cypress/reports/html/report.html
```

The HTML report includes:
- ✅ Test execution summary
- 📊 Pass/fail statistics
- ⏱️ Execution time
- 📸 Screenshots of failed tests
- 🔍 Detailed error messages
- 📝 Test step-by-step execution log

### Test Report Screenshot

**To view the test report:**
1. Run `npm run test:report:all` to generate the report
2. Open `cypress/reports/html/report.html` in your browser
3. Take a screenshot showing all tests passing (3 tests total)

**Expected Results:**
- ✅ SauceDemo E2E UI Flow: 1 passing
- ✅ Money Transfer API Tests: 2 passing  
- **Total: 3 tests, 0 failures**

*Note: A screenshot of the passing test report should be included in this README. After generating the report, take a screenshot and save it as `test-report-screenshot.png` in the project root, then update the image reference above.*

---

## 📁 Project Structure

```
AnyTax-E2E/
├── cypress/
│   ├── e2e/
│   │   ├── saucedemo.cy.js          # Task 2: SauceDemo E2E UI Flow test
│   │   └── transfer.cy.js           # Task 1: Money Transfer API tests
│   ├── support/
│   │   ├── e2e.js                   # Support file (global config)
│   │   └── pages/
│   │       ├── SauceDemoPage.js     # Task 2: SauceDemo Page Object Model
│   │       └── TransferPage.js     # Task 1: Transfer Page Object Model
│   ├── reports/                     # Generated test reports
│   │   ├── html/
│   │   │   └── report.html          # HTML test report
│   │   └── *.json                   # JSON report files
│   └── screenshots/                 # Screenshots of failed tests
├── index.html                       # Task 1: Money transfer UI
├── cypress.config.js                # Cypress configuration
├── package.json                     # Dependencies and scripts
└── README.md                        # This file
```

---

## 📝 Available npm Scripts

| Command | Description |
|---------|-------------|
| `npm install` | Install all dependencies (run this first!) |
| `npm run serve` | Start local web server on port 8080 (required for Task 1) |
| `npm run cypress:open` | Open Cypress Test Runner GUI |
| `npm run test:all` | Run all test suites (Task 1 + Task 2) |
| `npm run test:transfer` | Run Task 1: Transfer tests only |
| `npm run test:saucedemo` | Run Task 2: SauceDemo tests only |
| `npm run test:report:all` | Run all tests and generate HTML report |
| `npm run test:report` | Run Task 1 tests and generate HTML report |
| `npm run test:report:saucedemo` | Run Task 2 tests and generate HTML report |
| `npm run merge:reports` | Merge multiple JSON reports |
| `npm run generate:report` | Generate HTML report from merged JSON |

---

## 🧩 Test Scenarios Details

### Task 1: Money Transfer API Tests

**Test A: Successful Money Transfer (200 OK)**
- Mocks a successful API response
- Verifies:
  - ✅ Success message in console
  - ✅ Success alert popup
  - ✅ UI displays success message with transaction ID

**Test B: Failed Money Transfer (400 Bad Request)**
- Mocks a failed API response (insufficient funds)
- Verifies:
  - ✅ Error message in console
  - ✅ Error alert popup
  - ✅ UI displays error message

### Task 2: SauceDemo E2E UI Flow Test

**Test**: `Should complete full E2E flow: login, add product to cart, and validate cart`

This test verifies the complete user journey:
1. ✅ Logs in to `https://www.saucedemo.com/` using `standard_user` credentials
2. ✅ Adds a product to the cart
3. ✅ Navigates to cart page and verifies the selected product is present
4. ✅ Validates the product price is in correct monetary format (e.g., includes a $)

**Credentials:**
- Username: `standard_user`
- Password: `secret_sauce`

---

## 🛠️ Configuration

### Cypress Configuration (`cypress.config.js`)
- Base URL: `http://localhost:8080` (for Task 1)
- Viewport: 1280x720
- Reporter: Mochawesome
- Screenshots: Enabled for failures
- Videos: Disabled

### Page Object Model (POM)

Both test suites use the Page Object Model pattern for maintainability:

**SauceDemoPage** (`cypress/support/pages/SauceDemoPage.js`):
- **Locators**: All SauceDemo page element selectors
- **Actions**: Methods to interact with the page (login, add to cart, etc.)
- **Assertions**: Methods to verify page state

**TransferPage** (`cypress/support/pages/TransferPage.js`):
- **Locators**: All transfer page element selectors
- **Actions**: Methods to interact with the form
- **Assertions**: Methods to verify success/error states

### Code Quality Features

✅ **Clean and Readable Code**: Well-structured tests with clear naming conventions  
✅ **Stable Selectors**: Meaningful, data-test attributes and semantic selectors  
✅ **Page Object Model**: Implemented for both test suites  
✅ **Proper Synchronization**: No hard-coded waits; uses Cypress's built-in retry-ability and assertions

---

## 🐛 Troubleshooting

### Issue: Tests fail with "ECONNREFUSED"
**Solution**: Make sure the web server is running for Task 1:
```bash
npm run serve
```

**Note**: Task 2 (SauceDemo) tests don't require a local server.

### Issue: Cypress GUI shows no specs
**Solution**: 
1. Verify the test files exist at:
   - `cypress/e2e/saucedemo.cy.js` (Task 2)
   - `cypress/e2e/transfer.cy.js` (Task 1)
2. Ensure the files have `.cy.js` extension
3. Restart Cypress: `npm run cypress:open`

### Issue: HTML report not generating
**Solution**: 
1. Check if reports directory exists: `mkdir -p cypress/reports`
2. Verify mochawesome packages are installed: `npm install`
3. Run the full report command: `npm run test:report:all`

### Issue: Port 8080 already in use
**Solution**: 
- Kill the process using port 8080:
  ```bash
  lsof -ti:8080 | xargs kill -9
  ```
- Or use a different port and update `cypress.config.js` baseUrl

### Issue: Task 2 (SauceDemo) test fails with timeout
**Solution**: 
- Check your internet connection (SauceDemo tests require internet access)
- Verify the SauceDemo website is accessible: https://www.saucedemo.com/
- Ensure credentials are correct: `standard_user` / `secret_sauce`

---

## ✅ Test Results Summary

**Latest Test Run Results:**
- ✅ Task 1 - Money Transfer API Tests: **2 passing**
- ✅ Task 2 - SauceDemo E2E UI Flow: **1 passing**
- **Total: 3 tests, all passing** ✨

All tests pass successfully with proper synchronization, clean code structure, and comprehensive reporting.

---

## 📚 Additional Resources

- [Cypress Documentation](https://docs.cypress.io/)
- [Cypress Best Practices](https://docs.cypress.io/guides/references/best-practices)
- [Page Object Model Pattern](https://docs.cypress.io/guides/references/best-practices#Organizing-Tests-Login-Custom-Commands-and-Seeding-State)
- [Mochawesome Documentation](https://github.com/adamgruber/mochawesome)

---

## 👤 Author

Test suite created for comprehensive E2E testing with Cypress, including API mocking and UI flow testing.

## 📄 License

ISC

---

**Happy Testing! 🎉**
