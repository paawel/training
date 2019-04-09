describe('My First Test', function() {
	beforeEach(() => {
		cy.visit('/')
	});

	it('Shows the login form ', () => {
		cy.get("[data-cy=loginForm]").should('be.visible');
	});

	it('Shows error message for username when input is empty', () => {
		cy.get("[data-cy=loginForm__username-error]").should('be.visible');
	});

	it('Hides error message for username when input is not empty', () => {
		cy.get("[data-cy=loginForm__username]")
			.type('AzaAza')
			.get("[data-cy=loginForm__username-error]")
			.should('not.be.visible');
	});

	it('Hides form when Hide form button was clicked', () => {
		cy.get("[data-cy=loginForm__hideFormBTN]").click()
			.get("[data-cy=loginForm]").should('not.be.visible');
	});

	it('Shows form when Show form button was clicked', () => {
		cy.get("[data-cy=loginForm__showFormBTN]").click()
			.get("[data-cy=loginForm]").should('be.visible');
	});

});
