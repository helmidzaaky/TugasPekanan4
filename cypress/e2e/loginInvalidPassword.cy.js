describe('Login dengan password salah', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com');
  });

  it('Gagal login dengan password yang salah', () => {
    cy.get('input[name="username"]').type('validUsername');
    cy.get('input[name="password"]').type('invalidPassword');
    cy.get('button[type="submit"]').click();

    // Verifikasi pesan error
    cy.get('.error-message').should('contain', 'Incorrect password'); // Ganti dengan selector dan pesan error yang muncul
  });
});