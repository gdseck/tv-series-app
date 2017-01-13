import React from 'react'
import styled from 'styled-components'

import NavBar from './navbar.jsx'

export default class App extends React.Component {
  render () {
    return (
      <StyledApp>
        <NavBar />
        {this.props.children}
      </StyledApp>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.object
}

const StyledApp = styled.div`
  display: flex;
  flex-flow: column nowrap;
  min-height: calc(100vh - 4em);
  top: 4em;
  width: 100%;
  bottom: 0;
  position: relative;
  font-family: Verdana, sans-serif;
  background: beige;
`
