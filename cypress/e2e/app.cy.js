
  describe('Online Shopping App - ChooseTopic', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/choose-topics'); 
  });

  it('debe mostrar el título y subtítulo de Choose Topics', () => {
    cy.contains('h1', 'Choose Topics').should('be.visible');
    cy.contains('p', 'You can choose topics and we will suggest suitable products for you').should('be.visible');
  });

  it('debe mostrar todas las categorías con sus imágenes', () => {
    const topics = ['Fruits', 'Meat', 'Healthy', 'Snack', 'Vegetable', 'Fish', 'Drink', 'Nuts', 'Medicine'];
    
    topics.forEach(topic => {
      cy.contains('span', topic).should('be.visible');
      cy.get(`img[alt="${topic}"]`).should('be.visible');
    });
  });

  it('debe mostrar el botón Done', () => {
    cy.get('button').contains('Done')
      .should('be.visible')
      .and('have.class', 'bg-green-500');
  });

  it('debe permitir hacer clic en las categorías', () => {
    // Selecciona la primera categoría y verifica que sea clickeable
    cy.get('.relative.aspect-square').first()
      .click()
      .find('.bg-white') // Verifica que aparece el ícono de check
      .should('be.visible');
  });
});
  