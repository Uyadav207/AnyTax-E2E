/**
 * Page Object Model for Money Transfer Page
 */
class TransferPage {
  // Locators
  get recipientInput() {
    return cy.get('#recipient');
  }

  get amountInput() {
    return cy.get('#amount');
  }

  get transferButton() {
    return cy.get('#transferBtn');
  }

  get messageDiv() {
    return cy.get('#message');
  }

  // Page Actions
  visit() {
    cy.visit('http://localhost:8080/index.html');
  }

  fillRecipient(recipient) {
    this.recipientInput.clear().type(recipient);
    return this;
  }

  fillAmount(amount) {
    this.amountInput.clear().type(amount);
    return this;
  }

  submitTransfer() {
    this.transferButton.click();
    return this;
  }

  fillFormAndSubmit(recipient, amount) {
    this.fillRecipient(recipient)
      .fillAmount(amount)
      .submitTransfer();
    return this;
  }

  // Assertions
  verifySuccessMessage(transactionID) {
    this.messageDiv.should('be.visible');
    this.messageDiv.should('have.class', 'success');
    this.messageDiv.should('contain.text', `Transfer successful! Transaction ID: ${transactionID}`);
    return this;
  }

  verifyErrorMessage(errorMessage) {
    this.messageDiv.should('be.visible');
    this.messageDiv.should('have.class', 'error');
    this.messageDiv.should('contain.text', errorMessage);
    return this;
  }

  // Window stubs and spies
  stubConsoleLog() {
    cy.window().then((win) => {
      cy.stub(win.console, 'log').as('consoleLog');
    });
    return this;
  }

  stubConsoleError() {
    cy.window().then((win) => {
      cy.stub(win.console, 'error').as('consoleError');
    });
    return this;
  }

  stubAlert() {
    cy.window().then((win) => {
      cy.stub(win, 'alert').as('alert');
    });
    return this;
  }

  // Verify console and alert calls
  verifyConsoleLogSuccess(transactionID) {
    cy.get('@consoleLog').should('have.been.calledWith', 'Transfer successful:', {
      status: 'success',
      transactionID: transactionID
    });
    return this;
  }

  verifyConsoleErrorFailure(errorMessage) {
    cy.get('@consoleError').should('have.been.calledWith', 'Transfer failed:', errorMessage);
    return this;
  }

  verifyAlertSuccess(transactionID) {
    cy.get('@alert').should('have.been.calledWith', `Transfer successful! Transaction ID: ${transactionID}`);
    return this;
  }

  verifyAlertFailure(errorMessage) {
    cy.get('@alert').should('have.been.calledWith', `Transfer failed: ${errorMessage}`);
    return this;
  }
}

module.exports = TransferPage;

