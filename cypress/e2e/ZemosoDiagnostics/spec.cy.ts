import {
  RobotEyes,
  RobotHands,
  Dependencies,
} from "../../robots/wikipedia/Robot";

context("Search Test", () => {
  const robotEyes = new RobotEyes();
  const robotHands = new RobotHands();
  const dependencies = new Dependencies();

  describe("Search the required information", () => {
    it("navigate to Zemoso Diagnostics page", () => {
      cy.viewport(1920, 1080);
      dependencies.visitDiagnostics();
      robotHands.clickOnDomElement(".css-d7djwc > .MuiButtonBase-root");
      dependencies.login();
      robotEyes.seesPathNameInUrl(Cypress.env("HOME_URL"));
      robotEyes.seesTextWithClass("css-150mi9f > :nth-child(2)", "Covid RTPCR");
      robotHands.clickOnDomElement(".css-150mi9f > :nth-child(2)");
      robotEyes.seesPathNameInUrl(Cypress.env("COVID_URL"));
      robotEyes.seesTextWithClass(
        "css-z3igbn > .MuiButtonBase-root",
        "Add Patient"
      );
      robotHands.clickOnDomElement(".css-z3igbn > .MuiButtonBase-root");

      robotHands.clickOnDomElement(
        ":nth-child(1) > .css-1lcim7e > .MuiButtonBase-root > .MuiChip-label"
      );
      robotHands.clickOnClassIndexAndType("input", 0, "sohail");
      robotHands.clickOnClassIndexAndType("input", 1, "09/10/2022");
      robotHands.clickOnIndex("input", 2);
      robotEyes.assertOnDataTestId("nextButton", "Next");
      robotHands.clickOnDataTestId("nextButton");
      robotEyes.seesPathNameInUrl(Cypress.env("ADD_PATIENTS_URL"));
      robotHands.clickOnDataTestId("checkbox-0");
      robotEyes.assertOnDataTestId("selectLabButton", "Select Lab");
      robotHands.clickOnDataTestId("selectLabButton");

      robotEyes.seesPathNameInUrl(Cypress.env("LABS_URL"));
      robotEyes.seesTextWithClass(
        "css-z3igbn > .MuiButtonBase-root",
        "Select Date & Time"
      );

      robotHands.clickOnDomElement(".css-z3igbn > .MuiButtonBase-root");
      robotEyes.seesPathNameInUrl(Cypress.env("APPOINTMENTS_URL"));
      robotEyes.assertOnDataTestId("footerAddaddresButton", "Add Address");
      robotHands.clickOnDataTestId("footerAddaddresButton");
      robotHands.clickOnClassIndexAndType("input", 0, "12-250");
      robotHands.clickOnClassIndexAndType("input", 1, "kaviraj Nagar");
      robotHands.clickOnClassIndexAndType("input", 2, "507003");
      robotHands.clickOnClassIndexAndType("input", 3, "Telangana");
      robotEyes.assertOnDataTestId("saveAddressButton", "Save Address");
      robotHands.clickOnDataTestId("saveAddressButton");
      robotEyes.seesPathNameInUrl(Cypress.env("ADDRESS_URL"));
      robotHands.clickOnDomElement(
        "[data-testid=selectAddressCardBox1] > .MuiBox-root"
      );
      robotEyes.assertOnDataTestId("comleteOrderButton", "Complete Order");
      robotHands.clickOnDataTestId("comleteOrderButton");
      robotEyes.seesPathNameInUrl(Cypress.env("REVIEW_ORDER_URL"));
      robotEyes.seesTextWithClass(
        "css-z3igbn > .MuiButtonBase-root",
        "Continue"
      );
      robotHands.clickOnDomElement(".css-z3igbn > .MuiButtonBase-root");
      robotEyes.seesPathNameInUrl(Cypress.env("CHECKOUT_URL"));
      robotEyes.seesTextWithClass(
        "css-z3igbn > .MuiButtonBase-root",
        "Pay Now"
      );
      robotHands.clickOnDomElement(".css-z3igbn > .MuiButtonBase-root");
      robotEyes.seesPathNameInUrl(Cypress.env("ORDER_PLACED_URL"));
      robotEyes.seesTextWithClass(
        "css-y0p0nr > .MuiButtonBase-root",
        "Track Your Order"
      );
      robotHands.clickOnDomElement(".css-y0p0nr > .MuiButtonBase-root");
      robotHands.clickOnDataTestId("KeyboardArrowDownIcon");
      robotHands.clickOnDataTestId("KeyboardArrowUpIcon");
      robotHands.clickOnDomElement(
        "[data-testid=footer] > .MuiButtonBase-root"
      );

      robotHands.clickOnDataTestId("userIcon");
      robotHands.clickOnDomElement(
        "[data-testid=profileMenuItem-7] > .MuiBox-root > .MuiGrid-container > :nth-child(1) > [data-testid=profileHeading]"
      );
    });
    it("Navigates to Reports Page", () => {
      cy.viewport(1920, 1080);

      robotHands.clickOnDomElement(".css-d7djwc > .MuiButtonBase-root");
      dependencies.login();

      robotEyes.seesTextWithClass("css-uthtc > :nth-child(2)", "Reports");
      robotHands.clickOnDomElement(".css-uthtc > :nth-child(2)");
      robotEyes.seesPathNameInUrl(Cypress.env("REPORTS_URL"));
      robotHands.clickOnDataTestId("userIcon");
      robotHands.clickOnDomElement(
        "[data-testid=profileMenuItem-7] > .MuiBox-root > .MuiGrid-container > :nth-child(1) > [data-testid=profileHeading]"
      );
    });
    it("Navigates to Appointments Page", () => {
      cy.viewport(1920, 1080);

      robotHands.clickOnDomElement(".css-d7djwc > .MuiButtonBase-root");
      dependencies.login();

      robotEyes.seesTextWithClass(
        "css-uthtc > :nth-child(3)",
        "My Appointment"
      );
      robotHands.clickOnDomElement(".css-uthtc > :nth-child(3)");
      robotEyes.seesPathNameInUrl(Cypress.env("APPOINTMENTS_PAGE_URL"));
      robotHands.clickOnDataTestId("userIcon");
      robotHands.clickOnDomElement(
        "[data-testid=profileMenuItem-7] > .MuiBox-root > .MuiGrid-container > :nth-child(1) > [data-testid=profileHeading]"
      );
    });
  });
});
