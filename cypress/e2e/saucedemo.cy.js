/**
 * E2E UI Flow Test for SauceDemo
 * 
 * Test Flow:
 * 1. Login to https://www.saucedemo.com/ using standard_user
 * 2. Add a product to the cart
 * 3. Navigate to cart page and verify the selected product is present
 * 4. Validate the product price is in correct monetary format (e.g., includes a $)
 */
describe('SauceDemo E2E UI Flow', () => {
  let sauceDemoPage;

  beforeEach(() => {
    // Initialize the page object
    sauceDemoPage = new SauceDemoPage();
  });

  it('Should complete full E2E flow: login, add product to cart, and validate cart', () => {
    // Step 1: Login to SauceDemo using standard_user
    sauceDemoPage
      .visit()
      .loginWithStandardUser()
      .verifyLoginSuccess();

    // Step 2: Add a product to the cart
    // Store product name and price for later verification
    sauceDemoPage.addFirstProductToCart();

    // Verify cart badge shows 1 item
    sauceDemoPage.shoppingCartBadge.should('be.visible').and('contain', '1');

    // Step 3: Navigate to cart page and verify the selected product is present
    sauceDemoPage.goToCart().verifyCartPageLoaded();

    // Get the product name that was added
    cy.get('@productName').then((productName) => {
      // Verify the product is present in the cart
      sauceDemoPage.verifyCartItemPresent(productName);
    });

    // Verify cart has exactly 1 item
    sauceDemoPage.verifyCartHasItems(1);

    // Step 4: Validate the product price is in correct monetary format (e.g., includes a $)
    cy.get('@productPrice').then((productPrice) => {
      // Verify the price format matches $XX.XX pattern
      sauceDemoPage.verifyProductPriceFormat(productPrice);
    });

    // Also verify all prices on the cart page are in correct format
    sauceDemoPage.verifyCartItemPriceFormat();
  });
});

