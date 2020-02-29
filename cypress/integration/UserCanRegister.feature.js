/// <reference types="Cypress" />

describe("User can register", () => {
    beforeEach(() => {
      cy.server();
      cy.visit("/");
    });
  
    it("successfully", () => {
      cy.route({
        method: "POST",
        url: "http://localhost:3000/api/v1/auth/",
        response: "fixture:login.json",
        headers: {
          uid: "user@mail.com"
        }
      });
      cy.get("#register").click();
      cy.get("#register-form").within(() => {
        cy.get("#email").type("user@mail.com");
        cy.get("#password").type("password");
        cy.get('button').contains('Submit').click();
      });
      cy.get("#message").should("contain", "Hi user@mail.com");
    });
  
    // it("with invalid credentials", () => {
    //   cy.route({
    //     method: "POST",
    //     url: "http://localhost:3000/api/v1/auth/",
    //     status: "401",
    //     response: {
    //       errors: ["Invalid login credentials. Please try again."],
    //       success: false
    //     }
    //   });
    //   cy.get("#login").click();
    //   cy.get("#login-form").within(() => {
    //     cy.get("#email").type("user@mail.com");
    //     cy.get("#password").type("wrongpassword");
    //     cy.get('button').contains('Submit').click()
    //   });
    //   cy.get("#message").should("contain", "Invalid login credentials. Please try again.");
    // });
  });