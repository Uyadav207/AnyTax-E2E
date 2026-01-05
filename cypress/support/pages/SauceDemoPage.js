/**
 * Page Object Model for SauceDemo E2E Tests
 * Handles login, product selection, and cart operations
 */
class SauceDemoPage {
  // Locators - Login Page
  get usernameInput() {
    return cy.get('#user-name');
  }

  get passwordInput() {
    return cy.get('#password');
  }

  get loginButton() {
    return cy.get('#login-button');
  }

  // Locators - Products Page
  get inventoryItems() {
    return cy.get('.inventory_item');
  }

  get addToCartButtons() {
    return cy.get('button[data-test^="add-to-cart"]');
  }

  get shoppingCartBadge() {
    return cy.get('.shopping_cart_badge');
  }

  get shoppingCartLink() {
    return cy.get('.shopping_cart_link');
  }

  // Locators - Cart Page
  get cartItems() {
    return cy.get('.cart_item');
  }

  get cartItemNames() {
    return cy.get('.inventory_item_name');
  }

  get cartItemPrices() {
    return cy.get('.inventory_item_price');
  }

  get checkoutButton() {
    return cy.get('#checkout');
  }

  // Page Actions - Login
  visit() {
    cy.visit('https://www.saucedemo.com/');
    return this;
  }

  login(username, password) {
    this.usernameInput.clear().type(username);
    this.passwordInput.clear().type(password);
    this.loginButton.click();
    return this;
  }

  loginWithStandardUser() {
    return this.login('standard_user', 'secret_sauce');
  }

  // Page Actions - Products
  addFirstProductToCart() {
    // Wait for at least one inventory item to exist
    cy.get('.inventory_item').should('have.length.at.least', 1);
    
    // Get the first product (using eq(0) instead of first() for better reliability)
    cy.get('.inventory_item').eq(0).should('be.visible').within(() => {
      // Get product name and price
      cy.get('.inventory_item_name').invoke('text').as('productName');
      cy.get('.inventory_item_price').invoke('text').as('productPrice');
      // Click the add to cart button
      cy.get('button').should('be.visible').click();
    });
    
    return this;
  }

  addProductToCartByIndex(index = 0) {
    // Wait for at least one inventory item to exist
    cy.get('.inventory_item').should('have.length.at.least', 1);
    
    // Get the product at the specified index
    cy.get('.inventory_item').eq(index).within(() => {
      cy.get('.inventory_item_name').invoke('text').as('productName');
      cy.get('.inventory_item_price').invoke('text').as('productPrice');
      cy.get('button').should('be.visible').click();
    });
    
    return this;
  }

  goToCart() {
    this.shoppingCartLink.click();
    return this;
  }

  // Assertions - Login
  verifyLoginSuccess() {
    cy.url().should('include', '/inventory.html');
    cy.get('.inventory_list').should('be.visible');
    cy.get('.inventory_item').should('have.length.at.least', 1);
    return this;
  }

  // Assertions - Cart
  verifyCartItemPresent(productName) {
    this.cartItemNames.should('contain.text', productName);
    return this;
  }

  verifyCartHasItems(count = 1) {
    this.cartItems.should('have.length', count);
    return this;
  }

  verifyProductPriceFormat(priceText) {
    // Validate price format: should start with $ and contain numbers
    expect(priceText).to.match(/^\$\d+\.\d{2}$/);
    return this;
  }

  verifyCartItemPriceFormat() {
    // Verify all cart item prices are in correct monetary format
    this.cartItemPrices.each(($price) => {
      const priceText = $price.text().trim();
      this.verifyProductPriceFormat(priceText);
    });
    return this;
  }

  verifyCartPageLoaded() {
    cy.url().should('include', '/cart.html');
    cy.get('.cart_list').should('be.visible');
    return this;
  }
}

module.exports = SauceDemoPage;

