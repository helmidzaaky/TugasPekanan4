describe('Login dengan username tidak terdaftar', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com');
  });

  it('Gagal login dengan username yang tidak terdaftar', () => {
    cy.get('input[name="username"]').type('nonExistentUser');
    cy.get('input[name="password"]').type('validPassword');
    cy.get('button[type="submit"]').click();

    // Verifikasi pesan error
    cy.get('.error-message').should('contain', 'User not found'); // Ganti dengan selector dan pesan error yang sesuai
  });
});