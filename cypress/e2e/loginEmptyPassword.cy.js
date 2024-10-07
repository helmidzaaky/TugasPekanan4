describe('Login dengan password kosong', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com');
  });

  it('Gagal login dengan password yang kosong', () => {
    cy.get('input[name="username"]').type('validUsername');
    cy.get('button[type="submit"]').click();

    // Verifikasi pesan error
    cy.get('.error-message').should('contain', 'Password is required'); // Ganti dengan pesan yang muncul jika password kosong
  });
});