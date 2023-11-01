import React from 'react'
import About from '../../../../src/app/about/page'

describe('<About />', () => {
  it('renders', () => {
    cy.mount(<About />);
  })

  it('should render and display expected content', () => {
    cy.mount(<About />)
    cy.get('h1').contains('About Page')
    cy.get('a[href="/simple"]').should('be.visible')
  })
})