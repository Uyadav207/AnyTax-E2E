describe('Money Transfer API Tests', () => {
  let transferPage;

  beforeEach(() => {
    // Initialize the page object
    transferPage = new TransferPage();
    // Visit the HTML page before each test
    transferPage.visit();
  });

  it('Test A: Should handle successful money transfer (200 OK)', () => {
    const recipient = 'ACC123456';
    const amount = '1000';
    const transactionID = '12345';

    // Mock the POST /api/transfer endpoint with 200 OK response
    cy.intercept('POST', '/api/transfer', {
      statusCode: 200,
      body: {
        status: 'success',
        transactionID: transactionID
      }
    }).as('transferSuccess');

    // Setup stubs for console and alert
    transferPage
      .stubConsoleLog()
      .stubAlert();

    // Fill form and submit using page object
    transferPage.fillFormAndSubmit(recipient, amount);

    // Wait for the intercepted request and verify request payload
    cy.wait('@transferSuccess').then((interception) => {
      expect(interception.request.body).to.have.property('recipient', recipient);
      expect(interception.request.body).to.have.property('amount', parseFloat(amount));
    });

    // Verify console log, alert, and UI using page object
    transferPage
      .verifyConsoleLogSuccess(transactionID)
      .verifyAlertSuccess(transactionID)
      .verifySuccessMessage(transactionID);
  });

  it('Test B: Should handle failed money transfer (400 Bad Request)', () => {
    const recipient = 'ACC789012';
    const amount = '5000';
    const errorMessage = 'insufficient funds';

    // Mock the POST /api/transfer endpoint with 400 Bad Request response
    cy.intercept('POST', '/api/transfer', {
      statusCode: 400,
      body: {
        error: errorMessage
      }
    }).as('transferFailure');

    // Setup stubs for console and alert
    transferPage
      .stubConsoleError()
      .stubAlert();

    // Fill form and submit using page object
    transferPage.fillFormAndSubmit(recipient, amount);

    // Wait for the intercepted request and verify request payload
    cy.wait('@transferFailure').then((interception) => {
      expect(interception.request.body).to.have.property('recipient', recipient);
      expect(interception.request.body).to.have.property('amount', parseFloat(amount));
    });

    // Verify console error, alert, and UI using page object
    transferPage
      .verifyConsoleErrorFailure(errorMessage)
      .verifyAlertFailure(errorMessage)
      .verifyErrorMessage(`Transfer failed: ${errorMessage}`);
  });
});
