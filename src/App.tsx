import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import { Container } from "react-bootstrap";
import NotesList from "./components/notes/NotesList";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Note } from "./models/note.model";
import React, { useState } from "react";
import CreateNotes from "./components/notes/CreateNotes";

function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: new Date().toString(),
      title: "Meetings",
      text: "Testing",
      color: "#F7F7F8",
      date: new Date().toString(),
    },
  ]);
  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col>
            <NotesList notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateNotes notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
