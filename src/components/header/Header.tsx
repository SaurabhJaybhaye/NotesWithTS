import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
type Props = {}

const Header = (props: Props) => {
  return (
    <>
       <Navbar fixed='top' variant='dark' bg="dark">
        <Container>
          <Navbar.Brand >Notes</Navbar.Brand>
        </Container>
      </Navbar>
      </>
  )
}

export default Header