import React from 'react'
import Simple from '../../../../src/app/simple/page'

describe('<Simple />', () => {
  it('renders', () => {t
    cy.mount(<Simple />);
  })

  it('should render and display expected content', () => {
    cy.mount(<Simple />)
    cy.get('h1').contains('Simple Page')
    cy.get('a[href="/simple"]').should('be.visible')
  })
})