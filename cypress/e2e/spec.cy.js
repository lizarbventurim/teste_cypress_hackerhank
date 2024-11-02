describe("Financial Report Test", { execTimeout: 120000 }, () => {
  before(() => {
    cy.visit("http://localhost:8000");
  });

  const container = "#tile-container";
  it("Clicking a transaction should open a modal", () => {
    cy.get(container).children().first().click();
  });

  it("Transaction modal can be closed by clicking the X button", () => {
    cy.get(".close").should("be.visible").click();
  });

  it('Transaction modal should contain the title "Transaction Information"', () => {
    cy.get(container).children().first().click();
    cy.get(".modal-header")
      .should("be.visible")
      .contains("Transaction Information");
  });

  it("The main page should contain up to 10 transactions", () => {
    cy.get("#tile-container").children().should("have.length", 10);
  });
});
