import { defineConfig } from "cypress";

export default defineConfig({
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    chromeWebSecurity: false,
    env: {
      url: "https://bc58.ga/auth",
      USER_NAME: "patricksmith@gmail.com",
      PASSWORD: "patrick@1234",
      COVID_URL: "/covid-test",
      ADD_PATIENTS_URL: "/AddPatientDetailsPage",
      LABS_URL: "/selectLabPage",
      APPOINTMENTS_URL: "/appointementPage",
      ADDRESS_URL: "/selectAddressPage",
      REVIEW_ORDER_URL: "/reviewOrderPage",
      CHECKOUT_URL: "/checkout",
      ORDER_PLACED_URL: "/orderPlacedPage",
      REPORTS_URL: "/reports",
      APPOINTMENTS_PAGE_URL: "/myAppointments",
      HOME_URL: "/",
    },
  },
});
