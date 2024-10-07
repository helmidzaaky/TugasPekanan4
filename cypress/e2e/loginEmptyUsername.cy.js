describe('Login dengan username kosong', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com');
  });

  it('Gagal login dengan username yang kosong', () => {
    cy.get('input[name="password"]').type('validPassword');
    cy.get('button[type="submit"]').click();

    // Verifikasi pesan error
    cy.get('.error-message').should('contain', 'Username is required'); // Ganti dengan pesan yang muncul jika username kosong
  });
});