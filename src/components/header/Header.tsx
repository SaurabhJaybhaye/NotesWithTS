/**
 * Importing necessary components from react-bootstrap library
 */
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

/**
 * Header
 * @returns JSX
 */
const Header = () => {
  return (
    <>
      <Navbar fixed="top" variant="dark" bg="dark">
        <Container>
          <Navbar.Brand>Notes</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
