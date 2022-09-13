import { BaseHands, BaseEyes, BaseDependencies } from "../BaseRobot";

export class Dependencies extends BaseDependencies {
  visitDiagnostics() {
    this.accessUrl(Cypress.env("url"));
  }
}

export class RobotEyes extends BaseEyes {
  seesMainPage() {
    this.seesDomVisible("Main page");
  }
  assertOnDataTestId(id: string, text: string) {
    cy.get(`[data-testid=${id}]`).should("contain", text);
  }
}

export class RobotHands extends BaseHands {
  searchtesting() {
    this.typeTextonDom(
      "name",
      "search",
      "Automation Testing"
    ).clickOnDomElement("[class='sprite svg-search-icon']");
  }
  clickOnClassIndexAndType(inputClass: string, number: number, text: string) {
    cy.get(inputClass).eq(number).type(text);
    return this;
  }
  clickOnIndex(inputClass: string, number: number) {
    cy.get(inputClass).eq(number).click();
    return this;
  }
  clickOnDataTestId(id: string) {
    cy.get(`[data-testid=${id}]`).click();
    return this;
  }
}
