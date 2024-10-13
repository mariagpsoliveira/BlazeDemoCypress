import "cypress-xpath"

describe('Comprar Passagem', () => {

  beforeEach(()=>{

    cy.visit('/') //url dentro de config

  }) //termina Before 

  it('Selecionar Destino', () => {
    cy.xpath(`/html/body/div[2]/div/h1`)
        .should(`have.text`,`Welcome to the Simple Travel Agency!`)

    cy.get('select[name="fromPort"]') //seleciona a drop
        .select('Paris') // seleciona Paris 
    
    cy.get('select[name="fromPort"]')
        .should('have.value', 'Paris') //veririfica se escolheu paris 
  
    cy.get('select[name="toPort"]')
        .select('Rome') //seleciona a segunda drop e seleciona roma 
    
    cy.get('select[name="toPort"]')
        .should('have.value', 'Rome') //verifica se selecionou Roma
  
    cy.get('input[value="Find Flights"]')
        .click() //clica no botao find flights //termina página 1
    
    cy.xpath('/html/body/div[2]/h3')
        .should('have.text','Flights from Paris to Rome: ') //verifica se esta na pagina de escolher voo origem-destino

        cy.contains('Virgin America')
        .parent()
        .contains('Choose This Flight')
        .click() //verifica se é a opção virgin america e clica 
        //esse bloco consultei no CHATGPT 
  
    cy.xpath(`/html/body/div[2]/h2`)
        .should(`have.text`,`Your flight from TLV to SFO has been reserved.`)

    cy.get('#inputName')
        .type('Maria')
        
    cy.get('#address')
        .type('Teste')
      
    cy.get('#city')
        .type('Belo Horizonte')

    cy.get('#state')
        .type('Minas Gerais')
      
    cy.get('#zipCode')
        .type('35540-000')

    cy.get('select[name="cardType"]') //seleciona a drop
        .select('amex') // seleciona Amex
    
    cy.get('select[name="cardType"]',{timeout:5000}) //so passou para os proximos campos depois de add timeout
        .should('have.value', 'amex') //veririfica se escolheu amex
    

    cy.get('#creditCardNumber')
        .type('12378954')

    cy.get('#creditCardMonth')
        .type('Agosto')
        
    cy.get('#creditCardYear')
        .type('2029')
    
    cy.get('#nameOnCard')
        .type('Maria Teste')
    
    cy.get('input[value="Purchase Flight"]')
        .click() //clica no botao purchase flights //termina página 3

    cy.xpath(`/html/body/div[2]/div/h1`)
        .should(`have.text`,`Thank you for your purchase today!`)


  }) // termina it 
}) // termina describe 