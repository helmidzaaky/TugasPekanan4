describe('Login dengan kredensial valid', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com'); // Ganti dengan URL halaman login
  });

  it('Login berhasil dengan username dan password yang valid', () => {
    cy.get('input[name="username"]').type('validUsername'); // Ganti dengan selector dan username valid
    cy.get('input[name="password"]').type('validPassword'); // Ganti dengan selector dan password valid
    cy.get('button[type="submit"]').click();
});
});