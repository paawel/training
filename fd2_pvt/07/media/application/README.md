1. npm init
2. npm install http-server -g
3. npm install cypress --save-dev
4. create folder 'public' with index.html, css and js
5. run http-server and open localhost:8080
6. create file cypress.json and add this:

{
  "baseUrl": "http://localhost:8080"
}

7. npx cypress open
8. put cypress open into package.json as command
9. cypress -> integration  add folder application-form and test inside

describe('My First Test', function() {
	beforeEach(() => {
		cy.visit('/')
	})

	it('Shows the login form ', () => {
		cy.get("[data-cy=loginForm]").should('be.visible');
	})

})

10. npm i node-sass --save-dev
11. npm i minifier
12. to package.json
    "sass": "node-sass ./public/style/app.scss -o ./public/build/styles",
    "min": "minify -o ./public/build/result.min.css ./public/build/styles/app.css"
13. npm run sass, npm run min
14. Add .gitignore with node_modules