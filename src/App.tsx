import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Header from "./components/header/Header";
import CreateNotes from "./components/notes/CreateNotes";
import NotesList from "./components/notes/NotesList";

function App() {
  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col>
            <NotesList />
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateNotes />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
